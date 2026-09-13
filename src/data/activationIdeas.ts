export type ActivationIdea = {
  id: number;
  name: string;
  type: string;
  objective: string;
  scenario: string;
  bullets: string[];
};

// Replace this array with real content later — the layout component reads from this data.
export const activationIdeas: ActivationIdea[] = [
  {
    id: 1,
    name: 'Hit the TargeT',
    type: 'web experience',
    objective:
      'Make Venetoclax’s BCL-2 mechanism simple, memorable, and interactive',
    scenario:
      'The HCP enters a 60-second game where cancer cells appear protected by BCL-2 shields. The HCP uses Venetoclax to target and block these shields. Once BCL-2 is blocked, the protection disappears and the cancer cell undergoes programmed cell death. Each successful target earns a point, turning the MOA into a simple “block → unprotect → kill” experience.',
    bullets: [
      'Interactive MOA learning: Turn BCL-2 inhibition into a simple, hands-on game.',
      'Easy to remember: Reinforce the core message — Block → Unprotect → Kill.',
      'Engagement: Challenge HCPs to block as many BCL-2 shields as possible within 60 seconds.',
    ],
  },
  {
    id: 2,
    name: 'Build the Connection',
    type: 'AR Mechanism Experience',
    objective:
      'Visualize Epkinly’s bispecific mechanism by showing how it connects the T-cell to the cancer B-cell and activates the immune response.',
    scenario:
      'The HCP or patient scans a QR code and a 3D cancer B-cell appears through their phone. For the HCP, the experience zooms in to show Epkinly binding simultaneously to CD20 on the cancer cell and CD3 on the T-cell, creating a bridge that activates the T-cell to destroy the target. For the patient, the same mechanism is simplified into a clear visual story: Epkinly acts as a “bridge” that brings the body’s immune cells directly to the abnormal cells.',
    bullets: [
      'Visual MOA learning: Bring Epkinly’s T-cell/B-cell mechanism to life through an interactive AR experience.',
      'Simple & memorable: Communicate Epkinly as a “bridge” connecting immune cells to cancer cells.',
      'Flexible engagement: Adapt the same experience for both HCP education and patient understanding.',
    ],
  },
  {
    id: 3,
    name: 'Ask the Mechanism',
    type: 'AI Virtual Hematologist',
    objective:
      'Create an interactive AI-powered holographic hematologist that provides HCPs with quick, conversational access to key Epkinly information. ',
    scenario:
      'At the event, a holographic hematologist welcomes the HCP and answers pre-selected or spoken questions such as “How does Epkinly work?”, “What are the key clinical data?”, “What are the main safety considerations?”, or “Which patients may benefit from Epkinly?” The avatar provides concise, referenced answers based on approved Epkinly information, creating a natural and engaging clinical conversation. ',
    bullets: [
      'AI-powered access: Give HCPs instant, conversational access to key Epkinly information.',
      'Trusted clinical support: Provide concise, referenced answers across MOA, evidence, safety, and patient considerations.',
      'Interactive engagement: Turn scientific Q&A into a more natural and engaging HCP experience.',
    ],
  },
  {
    id: 4,
    name: 'The Invisible Battle',
    type: 'Hologram Experience',
    objective:
      'Reveal the invisible battle happening between the immune system and cancer through an immersive holographic visualization of Epkinly’s MOA.',
    scenario:
      'The hologram takes the HCP inside the tumor environment, where cancer B-cells move freely while T-cells remain separated from their targets. Epkinly enters the scene and acts as a bridge between them, bringing the T-cell directly to the cancer cell. The T-cell becomes activated and attacks the target, turning an invisible biological process into a visible battle.',
    bullets: [
      'Immersive MOA learning: Take HCPs inside the tumor to visualize Epkinly’s mechanism in action.',
      'Simple & memorable: Show the core story — Bridge → Activate → Attack.',
      'Make the invisible visible: Turn the interaction between T-cells and cancer B-cells into an engaging holographic experience.',
    ],
  },
  {
    id: 5,
    name: 'AI Clinical Companion',
    type: 'AI Chatbot',
    objective:
      'Provide HCPs with a fast, conversational AI companion for exploring approved Venetoclax information, mechanism, clinical evidence, and safety.',
    scenario:
      'HCPs access an AI-powered Venetoclax companion and choose from focused modules:\n 1- Venetoclax in 60 Seconds: Indications, treatment setting, dosing, and key patient profile.\n2- MOA Explorer: Interactive walkthrough of BCL-2 inhibition, restoration of apoptosis, and cancer cell death.\n 3- Evidence at a Glance: Key efficacy data and clinical outcomes across relevant indications.\n 4- Safety & Monitoring: Quick access to tumor lysis syndrome, neutropenia, infections, and key monitoring considerations.\n5- Ask Venetoclax: HCPs ask clinical questions and receive concise, referenced answers based on approved information.\n6- Challenge Me: Short clinical cases and MCQs that reinforce Venetoclax’s MOA, treatment considerations, and key safety messages.',
    bullets: [
      'AI-powered access: Give HCPs fast, conversational access to Venetoclax information anytime.',
      'All-in-one companion: Bring MOA, evidence, safety, Q&A, and clinical challenges into one experience.',
      'Continuous HCP engagement: Make complex scientific information easy to explore, understand, and revisit.',
    ],
  },
  {
    id: 6,
    name: 'Omnichannel Content Suite',
    type: 'Content Creation',
    objective:
      'Extend the impact of the event by transforming the core scientific stories of both brands into content that stays with HCPs across their digital journey.',
    scenario:
      'The key event experiences are transformed into a connected content ecosystem that continues the conversation after the event. Short MOA videos bring the science back to the HCP’s inbox or WhatsApp, visual one-page summaries provide an easy reference during or after rep visits, and a post-event email journey keeps the story moving from MOA → Evidence → Clinical Case → AI Experience.\n\nOne core content story, adapted across multiple touchpoints — keeping both brands relevant long after the event ends.',
    bullets: [
      'One story, every channel: Transform core scientific content into videos, GIFs, social posts, emails, WhatsApp, web, and rep materials.',
      'Extend HCP engagement: Keep the conversation going beyond the event with a connected digital content journey.',
      'Maximum content value: Repurpose each core asset across multiple touchpoints for consistent, long-term brand visibility.',
    ],
  },/*
  {
    id: 7,
    name: 'Gesture-Driven Storyboard',
    type: 'Congress Booth Experience',
    objective:
      'Let HCPs navigate a visual story using hand gestures, creating a sense of agency and playfulness.',
    scenario:
      'An HCP stands before a large screen equipped with motion sensors. Waving their hand scrolls through a storyboard of themed visuals. The novelty of gesture control creates an immediate sense of engagement.',
    bullets: [
      'Novel interaction model — memorable and shareable',
      'No device needed — purely spatial interaction',
      'Content modules can be swapped per therapeutic area',
    ],
  },
  {
    id: 8,
    name: 'Virtual Walkthrough Station',
    type: 'Hybrid Engagement',
    objective:
      'Offer a VR-based walkthrough of a themed environment that HCPs can explore at their own pace.',
    scenario:
      'An HCP puts on a headset and is guided through a virtual environment themed around the therapeutic area. The experience lasts 3–4 minutes and ends with a summary screen. Staff follow up with a brief conversation.',
    bullets: [
      'Full immersion — deep engagement in a short window',
      'Self-guided — HCPs explore at their comfort level',
      'Portable setup — can be deployed across multiple congresses',
    ],
  },
  {
    id: 9,
    name: 'Lightbox Photo Moment',
    type: 'Event Activation',
    objective:
      'Create a branded photo opportunity that HCPs can take with them, extending brand recall beyond the event.',
    scenario:
      'A professionally lit photo backdrop with a branded frame invites HCPs to take a photo. They receive a printed or digital copy with a subtle brand overlay. The moment is quick, fun, and creates a positive association.',
    bullets: [
      'Tangible takeaway — extends recall after the event',
      'Quick and low-friction — works even in short booth visits',
      'Social sharing amplifies reach beyond the congress floor',
    ],
  },
  {
    id: 10,
    name: 'Interactive Floor Projection',
    type: 'Congress Booth Experience',
    objective:
      'Use a projected floor display to create an eye-catching, interactive element that draws foot traffic.',
    scenario:
      'A projected display on the booth floor reacts to footsteps — visuals ripple, shift, or reveal content as HCPs walk across. The playful interaction draws curious attendees into the booth space naturally.',
    bullets: [
      'Strong footfall magnet — visible from a distance',
      'No device required — engagement is immediate',
      'Content themes can be swapped per event',
    ],
  },
  {
    id: 11,
    name: 'Themed Quiz Kiosk',
    type: 'Hybrid Engagement',
    objective:
      'Engage HCPs with a short, gamified quiz that delivers a personalized takeaway and sparks conversation.',
    scenario:
      'An HCP sits at a sleek kiosk and answers 5 quick questions on a themed topic. They receive a summary card with their results and a conversation prompt. The gamified format makes the interaction feel distinct from standard booth visits.',
    bullets: [
      'Gamification — higher engagement than passive content',
      'Personalized output — HCPs feel the interaction was tailored',
      'Natural lead-in for field team follow-up',
    ],
  },
  {
    id: 12,
    name: 'Ambient Sound Sculpture',
    type: 'Event Activation',
    objective:
      'Use spatial audio and sculptural form to create a calm, curiosity-driven engagement zone within a busy congress.',
    scenario:
      'A semi-enclosed sculptural installation uses directional audio to deliver a themed soundscape. HCPs who step inside experience a brief, immersive audio moment that contrasts with the noise of the congress floor, creating a memorable pause.',
    bullets: [
      'Sensory contrast — stands out in a noisy congress environment',
      'Brief and restorative — respects HCPs\' time and energy',
      'Distinctive format — differentiates from standard booth setups',
    ],
  }, */
];
