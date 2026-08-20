export const siteConfig = {
  whatsappNumber: "918149918274",
  discoveryCallUrl: "https://calendly.com/ujwalpatkar/45min",
  instagramUrl: "https://www.instagram.com/ujwal.sacredshift/",
  facebookUrl: "https://www.facebook.com/share/1DaSzQXxWE/",
  threadsUrl: "https://www.threads.com/@ujwal.sacredshift",
  youtubeUrl: "",
  amazonBookUrl: "https://amzn.in/d/07Kg66tw",
} as const;

export function openWhatsApp(programName: string) {
  const message = `Hi Coach Ujwal, I'm interested in the ${programName}. I'd love to know more about the journey and how I can join.`;
  const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}
