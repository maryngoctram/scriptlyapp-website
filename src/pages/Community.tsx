import { useState, useEffect, FormEvent } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Instagram, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { trackJoinCommunity } from "@/utils/analytics";
import TikTokIcon from "@/components/icons/TikTokIcon";
import DiscordIcon from "@/components/icons/DiscordIcon";
import DiscordLink from "@/components/DiscordLink";
import DownloadCTA, { DownloadTagline } from "@/components/DownloadCTA";

// Google Apps Script web app that appends each signup to the Scriptly-owned Google Sheet.
// Setup steps: docs/community-waitlist-apps-script.gs. Paste the deployed Web app URL here.
const COMMUNITY_FORM_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbxXtGQavl0qDeofuAR75YfWEYXSA4ntVA97-N5XpoOWDY1vgg1PXLBOz5YVOiCnRjrJWA/exec";

const ROLES = [
  "Professional actor",
  "Aspiring actor / student",
  "Acting coach or teacher",
  "Casting or industry professional",
  "Writer / director",
  "Other",
];

const SCRIPTLY_USE = ["Yes, I use it regularly", "I've tried it", "Not yet"];

const HEARD_FROM = [
  "Instagram",
  "TikTok",
  "App Store search",
  "Google search",
  "ChatGPT or another AI assistant",
  "Friend or classmate",
  "Acting coach or school",
  "Other",
];

// Shown as a preview of the future Discord server's channels
const PERKS = [
  { channel: "audition-prep", text: "Swap self-tape tips and get feedback before you submit." },
  { channel: "shape-scriptly", text: "Try new features first and tell us what to build next." },
];

const fieldClass =
  "bg-background/50 border-purple-400/30 focus:border-purple-400 text-foreground placeholder:text-muted-foreground";
const selectClass =
  "flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring " +
  fieldClass;

const Community = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [discord, setDiscord] = useState("");
  const [role, setRole] = useState("");
  const [usesScriptly, setUsesScriptly] = useState("");
  const [heardFrom, setHeardFrom] = useState("");
  const [heardFromOther, setHeardFromOther] = useState("");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");
  const [website, setWebsite] = useState(""); // honeypot, hidden from people
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    import("../utils/scrollAnimations").then(({ startScrollAnimations }) => {
      startScrollAnimations();
    });
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!COMMUNITY_FORM_ENDPOINT) {
      toast.error("The waitlist isn't connected yet.", {
        description: "Please check back soon.",
      });
      return;
    }
    setIsSubmitting(true);
    const heard = heardFrom === "Other" && heardFromOther ? `Other: ${heardFromOther}` : heardFrom;

    try {
      // Apps Script web apps don't send CORS headers, so the response can't be read;
      // a completed request means the row was written.
      await fetch(COMMUNITY_FORM_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        body: new URLSearchParams({
          name,
          email,
          discord_username: discord,
          role,
          uses_scriptly: usesScriptly,
          heard_about_scriptly: heard,
          city_or_time_zone: location,
          anything_else: notes,
          page: window.location.href,
          website,
        }),
      });
      trackJoinCommunity(heardFrom || "Not answered");
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      toast.error("Couldn't send your signup.", {
        description: "Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="section-padding gradient-hero">
        <div className="container-responsive text-center">
          <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-purple-400/30 bg-purple-600/10 text-purple-100 text-sm font-medium">
            <DiscordIcon className="w-4 h-4" />
            Discord community coming soon
          </div>
          <h1 className="animate-on-scroll text-responsive-xl font-bold mb-4 sm:mb-6 text-foreground">
            Join the Scriptly
            <span className="block text-scriptly-animated">Community</span>
          </h1>
          <p className="animate-on-scroll text-responsive-sm text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            We're building a Discord for actors to connect, rehearse, and grow together.
            Join the waitlist and we'll send you an invite as soon as it opens.
          </p>
        </div>
      </section>

      {/* What to expect: a preview of the Discord server's channels */}
      <section className="section-padding bg-background">
        <div className="container-responsive max-w-md mx-auto">
          <div className="animate-on-scroll rounded-xl border border-purple-400/20 bg-[#0d1020]/80 backdrop-blur-xl shadow-lg shadow-purple-500/10 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-purple-400/20">
              <span className="flex items-center gap-2 text-xs font-bold tracking-widest text-purple-200">
                <DiscordIcon className="w-4 h-4 text-purple-300" />
                SCRIPTLY COMMUNITY
              </span>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Preview</span>
            </div>
            <ul className="p-2">
              {PERKS.map((perk) => (
                <li key={perk.channel} className="group flex gap-3 px-3 py-3 rounded-lg hover:bg-purple-500/10 transition-colors">
                  <span className="text-xl leading-6 text-muted-foreground group-hover:text-purple-300">#</span>
                  <div>
                    <p className="font-semibold text-purple-100 group-hover:text-white">{perk.channel}</p>
                    <p className="text-sm text-purple-200 leading-snug">{perk.text}</p>
                  </div>
                </li>
              ))}
              <li className="px-3 pt-1 pb-3 text-xs italic text-muted-foreground"># more channels opening soon…</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Waitlist form */}
      <section className="section-padding bg-background pt-0 sm:pt-0">
        <div className="container-responsive max-w-2xl mx-auto">
          <Card className="animate-on-scroll p-6 sm:p-10 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-xl border border-purple-400/20 rounded-xl shadow-lg shadow-purple-500/10">
            {submitted ? (
              <div className="text-center py-6" role="status">
                <CheckCircle2 className="w-12 h-12 text-purple-300 mx-auto mb-4" />
                <h2 className="text-xl sm:text-2xl font-bold text-purple-100 mb-2">You're on the list!</h2>
                <p className="text-sm sm:text-base text-purple-200 mb-6">
                  Thanks{name ? `, ${name.split(" ")[0]}` : ""}. We'll email your Discord invite as soon
                  as the community opens.
                </p>
                <p className="text-sm text-purple-200">
                  In the meantime, follow along on{" "}
                  <a href="https://instagram.com/scriptlyapp" target="_blank" rel="noopener noreferrer" className="underline text-purple-100">Instagram</a>{" "}
                  and{" "}
                  <a href="https://www.tiktok.com/@scriptlyactingapp" target="_blank" rel="noopener noreferrer" className="underline text-purple-100">TikTok</a>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center mb-2">
                  <h2 className="text-xl sm:text-2xl font-bold text-purple-100">Join the Waitlist</h2>
                  <p className="text-sm text-purple-200 mt-1">Takes about a minute. Fields marked * are required.</p>
                </div>

                {/* Honeypot: hidden from people, filled in by spam bots */}
                <input type="text" name="website" tabIndex={-1} autoComplete="off" value={website}
                  onChange={(e) => setWebsite(e.target.value)} className="hidden" aria-hidden="true" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-purple-100">Name *</Label>
                    <Input id="name" autoComplete="name" placeholder="Your name" value={name}
                      onChange={(e) => setName(e.target.value)} required className={fieldClass} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-purple-100">Email *</Label>
                    <Input id="email" type="email" autoComplete="email" placeholder="you@example.com" value={email}
                      onChange={(e) => setEmail(e.target.value)} required className={fieldClass} />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="discord" className="text-purple-100">Discord username *</Label>
                  <Input id="discord" placeholder="e.g. actorname" value={discord}
                    onChange={(e) => setDiscord(e.target.value)} required className={fieldClass} />
                  <p className="text-xs text-muted-foreground">Don't have one yet? Create a free account at <a href="https://discord.com/register" target="_blank" rel="noopener noreferrer" className="underline">discord.com</a>.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="role" className="text-purple-100">I'm a…</Label>
                    <select id="role" value={role} onChange={(e) => setRole(e.target.value)} className={selectClass}>
                      <option value="" disabled>Select one</option>
                      {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="uses" className="text-purple-100">Do you use Scriptly?</Label>
                    <select id="uses" value={usesScriptly} onChange={(e) => setUsesScriptly(e.target.value)} className={selectClass}>
                      <option value="" disabled>Select one</option>
                      {SCRIPTLY_USE.map((u) => <option key={u} value={u}>{u}</option>)}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="heard" className="text-purple-100">How did you hear about Scriptly?</Label>
                  <select id="heard" value={heardFrom} onChange={(e) => setHeardFrom(e.target.value)} className={selectClass}>
                    <option value="" disabled>Select one</option>
                    {HEARD_FROM.map((h) => <option key={h} value={h}>{h}</option>)}
                  </select>
                  {heardFrom === "Other" && (
                    <Input aria-label="Where did you hear about Scriptly?" placeholder="Tell us where" value={heardFromOther}
                      onChange={(e) => setHeardFromOther(e.target.value)} className={fieldClass} />
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location" className="text-purple-100">City or time zone</Label>
                  <Input id="location" placeholder="e.g. Los Angeles, PST" value={location}
                    onChange={(e) => setLocation(e.target.value)} className={fieldClass} />
                  <p className="text-xs text-muted-foreground">Helps us schedule live events at times that work for you.</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes" className="text-purple-100">Anything else you'd like to see?</Label>
                  <Textarea id="notes" rows={3} placeholder="Ideas, events, or topics you'd love the community to cover"
                    value={notes} onChange={(e) => setNotes(e.target.value)} className={`${fieldClass} resize-none`} />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full cta-bounce bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium px-8 py-4 text-sm sm:text-base rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-purple-500/40 border border-purple-400/30 h-auto"
                >
                  <DiscordIcon className="w-4 h-4 mr-2" />
                  {isSubmitting ? "Joining..." : "Join the Waitlist"}
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  We'll only use your info to invite you and improve the community. See our{" "}
                  <Link to="/privacy-policy" className="underline">Privacy Policy</Link>.
                </p>
              </form>
            )}
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="animate-on-scroll text-responsive-lg font-bold mb-4 sm:mb-6 text-foreground">
            Start Rehearsing
            <span className="block text-scriptly-animated">Today</span>
          </h2>
          <p className="animate-on-scroll text-responsive-sm text-muted-foreground mb-8 max-w-2xl mx-auto">
            You don't have to wait for Discord to start working on your craft.
          </p>
          <div className="animate-scale">
            <DownloadCTA location="community" />
          </div>
          <DownloadTagline />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-xl border-t border-purple-400/20 text-purple-100 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
            <div className="text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-purple-100">Scriptly</h3>
              <p className="text-sm sm:text-base text-purple-200">Master your craft. Anytime, anywhere.</p>
            </div>
            <div className="flex gap-3 sm:gap-4">
              <a href="https://instagram.com/scriptlyapp" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram">
                <Button variant="ghost" size="icon" className="touch-target text-purple-200 hover:text-purple-100 hover:bg-purple-500/20 border border-purple-400/30">
                  <Instagram className="w-5 h-5" />
                </Button>
              </a>
              <a href="https://www.tiktok.com/@scriptlyactingapp" target="_blank" rel="noopener noreferrer" aria-label="Follow us on TikTok">
                <Button variant="ghost" size="icon" className="touch-target text-purple-200 hover:text-purple-100 hover:bg-purple-500/20 border border-purple-400/30">
                  <TikTokIcon className="w-5 h-5" />
                </Button>
              </a>
              <DiscordLink variant="footer" />
            </div>
          </div>
          <div className="text-center sm:text-left text-purple-200 text-xs sm:text-sm">
            <div className="mb-2">© 2025 Scriptly. All rights reserved. Available in the iOS App Store.</div>
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
              <Link to="/" className="text-purple-300 hover:text-purple-100 underline transition-colors">Home</Link>
              <Link to="/privacy-policy" className="text-purple-300 hover:text-purple-100 underline transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-purple-300 hover:text-purple-100 underline transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Community;
