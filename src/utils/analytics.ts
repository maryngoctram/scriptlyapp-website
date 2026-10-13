const GA_MEASUREMENT_ID = 'G-K95BKSX6HE';

function track(eventName: string, params?: Record<string, string>) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
}

export function trackPageview(path: string) {
  if (typeof window.gtag === 'function') {
    window.gtag('config', GA_MEASUREMENT_ID, { page_path: path });
  }
}

export function trackDownloadApp(location: string) {
  track('download_app', {
    event_category: 'CTA',
    event_label: location,
  });
}

export function trackWatchDemo() {
  track('watch_demo', {
    event_category: 'engagement',
  });
}

export function trackSendFeedback() {
  track('send_feedback', {
    event_category: 'engagement',
  });
}
export function trackJoinCommunity(heardFrom: string) {
  track('join_community_waitlist', {
    event_category: 'engagement',
    heard_from: heardFrom,
  });
}
