enum EventType {
 'link',
 'navigate',
 'recommend',
}

type TrackEvent = (
 event_value: string,
 even_type?: { [key: string]: string | number } & {
  type: keyof typeof EventType;
 },
 url?: string | undefined,
 website_id?: string | undefined
) => void

export const TrackEvent: TrackEvent = (...args) => {
 if (window.umami && typeof window.umami.trackEvent === 'function') {
  window.umami.trackEvent(...args);
 }
}