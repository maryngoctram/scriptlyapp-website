/**
 * Scriptly Community Waitlist → Google Sheet
 *
 * Setup (signed in as scriptlyactingapp@gmail.com):
 *  1. Create a Google Sheet named "Scriptly Community Waitlist".
 *  2. Extensions → Apps Script. Replace everything with this file. Save.
 *  3. Deploy → New deployment → type "Web app".
 *       Execute as: Me (scriptlyactingapp@gmail.com)
 *       Who has access: Anyone
 *     Click Deploy, approve the permission prompt, copy the Web app URL.
 *  4. Paste that URL into COMMUNITY_FORM_ENDPOINT in src/pages/Community.tsx.
 *
 * The website sends one POST per signup; each becomes a row in the "Signups" tab.
 */

const SHEET_NAME = "Signups";
const NOTIFY_EMAIL = ""; // e.g. "scriptlyactingapp@gmail.com" to get an email per signup; leave "" to turn off

const COLUMNS = [
  ["submitted_at", "Submitted at"],
  ["name", "Name"],
  ["email", "Email"],
  ["discord_username", "Discord username"],
  ["role", "I'm a…"],
  ["uses_scriptly", "Uses Scriptly"],
  ["interested_in", "Interested in"],
  ["heard_about_scriptly", "Heard about Scriptly from"],
  ["city_or_time_zone", "City / time zone"],
  ["anything_else", "Anything else"],
  ["page", "Signed up from"],
];

function doPost(e) {
  const p = (e && e.parameter) || {};
  if (p.website) return ok_(); // honeypot: bots fill hidden fields, people don't

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sheet = getSheet_();
    const row = COLUMNS.map(([key]) =>
      key === "submitted_at" ? new Date() : clean_(p[key])
    );
    sheet.appendRow(row);
  } finally {
    lock.releaseLock();
  }

  if (NOTIFY_EMAIL) {
    MailApp.sendEmail(
      NOTIFY_EMAIL,
      "New Scriptly community signup: " + clean_(p.name),
      COLUMNS.slice(1).map(([key, label]) => label + ": " + clean_(p[key])).join("\n")
    );
  }
  return ok_();
}

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(COLUMNS.map(([, label]) => label));
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, COLUMNS.length).setFontWeight("bold");
  }
  return sheet;
}

// Trim, cap length, and stop values starting with = + - @ from running as spreadsheet formulas.
function clean_(value) {
  const s = String(value == null ? "" : value).trim().slice(0, 2000);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function ok_() {
  return ContentService.createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
