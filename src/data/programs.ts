export type CtaType = "discovery" | "whatsapp";

export interface Program {
  id: string;
  name: string;
  duration: string;
  category: "Flagship" | "Signature";
  tagline?: string;
  description: string;
  ctaType: CtaType;
  whatsappEnabled: boolean;
  image?: string;
}

export const flagshipProgram: Program = {
  id: "shiv-shakti-balance",
  name: "Shiv Shakti Balance",
  duration: "90 Days",
  category: "Flagship",
  tagline: "From Burnout to Balance.",
  description:
    "A transformational journey for working women who are ready to move beyond exhaustion and create a life rooted in peace, personal growth, meaningful success, work-life balance, joy, and deep fulfilment.",
  ctaType: "discovery",
  whatsappEnabled: false,
};

export const journeyPhases = [
  {
    phase: "Phase 1",
    name: "Shiv",
    subtitle: "Ground. Understand. Awaken.",
    description:
      "First, we create awareness. You begin to understand the patterns that have been keeping you stuck. We gently explore emotional wounds, beliefs, conditioning, stress responses, and the ways you have learned to survive and cope. You start becoming more conscious of your inner world and how it influences your outer life.",
    from: "“Why am I like this?”",
    to: "“Now I understand myself.”",
  },
  {
    phase: "Phase 2",
    name: "Shakti",
    subtitle: "Heal. Receive. Reconnect.",
    description:
      "This is the deeper feminine reconnection. You reconnect with your emotions, intuition, inner wisdom and authentic self. You learn to honour your needs. You begin releasing the pressure to always be strong. You learn that receiving is not weakness. You rediscover softness without losing your power.",
    from: "“I have to handle everything.”",
    to: "“I am allowed to receive support.”",
  },
  {
    phase: "Phase 3",
    name: "Balance",
    subtitle: "Integrate. Embody. Rise.",
    description:
      "Now the inner work becomes your way of living. You bring strength and softness together. Action and rest. Giving and receiving. Career and personal life. Independence and connection. Ambition and peace. You create practical boundaries and routines that support the woman you are becoming.",
    from: "“I am surviving my life.”",
    to: "“I am consciously creating my life.”",
  },
];

export const learningAreas = [
  {
    title: "Emotional Healing",
    description: "Understanding and releasing emotional patterns that keep repeating.",
  },
  {
    title: "Self-Worth",
    description: "Building a deeper sense of worth that does not depend on achievement, approval or validation.",
  },
  {
    title: "Feminine Energy",
    description: "Reconnecting with intuition, receptivity, creativity, softness and inner wisdom.",
  },
  {
    title: "Inner Strength",
    description: "Developing grounded action, confidence, clarity and conscious decision-making.",
  },
  {
    title: "Boundaries",
    description: "Learning to say yes and no without constantly carrying guilt.",
  },
  {
    title: "Receiving",
    description: "Letting yourself accept care, support, appreciation, opportunities and abundance.",
  },
  {
    title: "Relationships",
    description: "Creating healthier patterns of communication, connection and self-respect.",
  },
  {
    title: "Work-Life Harmony",
    description: "Creating success without sacrificing your emotional well-being.",
  },
  {
    title: "Spiritual Connection",
    description: "Using spiritual and energetic practices to deepen awareness and inner alignment.",
  },
];

export const tools = [
  "Self-Worth Coaching",
  "Reiki & Energy Healing",
  "EFT",
  "Inner Child Healing",
  "Ho'oponopono",
  "Chakra Work",
  "Meditation",
  "Journaling",
  "Emotional Release Practices",
  "Feminine Energy Practices",
  "Shiv–Shakti Wisdom",
];

export const wholeWomanFacets = ["Mind", "Emotions", "Energy", "Identity", "Relationships", "Spirit"];

export const audienceFor = [
  "You are a working woman carrying too many responsibilities.",
  "You feel emotionally exhausted even when your life appears “fine.”",
  "You want to stop constantly putting yourself last.",
  "You want more peace without giving up your ambition.",
  "You want to feel more confident and grounded.",
  "You want to stop overgiving and start receiving.",
  "You want healthier boundaries.",
  "You want to reconnect with your feminine side.",
  "You want success that feels good — not success that leaves you empty.",
  "You want to feel connected to yourself again.",
];

export const notAbout = [
  "Becoming passive.",
  "Giving up your ambition.",
  "Becoming “perfect.”",
  "Ignoring real-life responsibilities.",
  "Running away from your problems.",
  "Pretending everything is positive.",
];

export const outcomes = [
  "A calmer relationship with yourself.",
  "Greater emotional awareness.",
  "Stronger self-worth.",
  "Healthier boundaries.",
  "More confidence.",
  "Greater inner clarity.",
  "A deeper connection to your feminine energy.",
  "More balance between action and rest.",
  "More awareness of your needs.",
  "Greater ability to receive.",
  "More harmony between work and personal life.",
  "A stronger connection to your authentic self.",
];

export const futurePacingLines = [
  "Imagine waking up without immediately feeling overwhelmed.",
  "Imagine being able to say no without spending the entire day feeling guilty.",
  "Imagine working hard without carrying work stress into every corner of your life.",
  "Imagine receiving love without questioning whether you deserve it.",
  "Imagine making decisions from clarity instead of exhaustion.",
  "Imagine feeling connected to your own body, emotions and intuition.",
];

export const otherPrograms: Program[] = [
  {
    id: "7-day-reclaim-reset",
    name: "7-Day Reclaim & Reset",
    duration: "7 Days",
    category: "Signature",
    description: "A gentle first step for women who need space to pause, reset and reconnect.",
    ctaType: "whatsapp",
    whatsappEnabled: true,
  },
  {
    id: "14-day-inner-rebirth-method",
    name: "14-Day Inner Rebirth Method",
    duration: "14 Days",
    category: "Signature",
    description: "A deeper emotional reset for women ready to begin changing old patterns.",
    ctaType: "whatsapp",
    whatsappEnabled: true,
  },
  {
    id: "21-day-rooted-in-self",
    name: "21-Day Rooted in Self",
    duration: "21 Days",
    category: "Signature",
    description: "A focused journey into self-worth, self-connection and inner strength.",
    ctaType: "whatsapp",
    whatsappEnabled: true,
  },
  {
    id: "chakra-healing-manifestation-journey",
    name: "Chakra Healing and Manifestation Journey",
    duration: "",
    category: "Signature",
    tagline: "Align Your Energy. Heal Within. Manifest Your Highest Life.",
    description: "Align your energy. Heal within. Manifest your highest life.",
    ctaType: "whatsapp",
    whatsappEnabled: true,
    image: "/images/programs/chakra-healing.jpg",
  },
  {
    id: "heal-your-inner-child",
    name: "Heal Your Inner Child",
    duration: "3 Weeks",
    category: "Signature",
    description:
      "A 3-week journey back to [PLACEHOLDER — confirm exact wording before final publishing]. Until you heal your past, it keeps showing in the present.",
    ctaType: "whatsapp",
    whatsappEnabled: true,
    image: "/images/programs/heal-inner-child.jpg",
  },
  {
    id: "boundary-queen",
    name: "Boundary Queen",
    duration: "",
    category: "Signature",
    tagline: "Honour yourself. Protect your peace. Live empowered.",
    description: "A transformative experience for women. Honour yourself. Protect your peace. Live empowered.",
    ctaType: "whatsapp",
    whatsappEnabled: true,
    image: "/images/programs/boundary-queen.jpg",
  },
  {
    id: "workshops-and-challenges",
    name: "Workshops & Challenges",
    duration: "",
    category: "Signature",
    description: "Short, practical experiences designed to introduce you to the work.",
    ctaType: "whatsapp",
    whatsappEnabled: true,
  },
];

export const recognitionSymptoms = [
  "You are exhausted, but you still keep going.",
  "You feel guilty when you take time for yourself.",
  "You are always available for everyone else.",
  "You struggle to say no.",
  "You give love and care, but often wonder who will care for you.",
  "You overthink conversations, decisions and relationships.",
  "You want to slow down, but you don't know how.",
  "You miss the woman you used to be.",
];

