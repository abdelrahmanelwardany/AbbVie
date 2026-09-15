export type ActivationIdea = {
  id: number;
  name: string;
  type: string;
  scenario: string;
};

// Replace this array with real content later. The layout component reads from this data.
export const activationIdeas: ActivationIdea[] = [
  {
    id: 9,
    name: 'AbbVie Newsroom – Hematology Treatment Update',
    type: ' Digital Video Experience / AI Presenter / Internal Communication / HCP Email Content',
    scenario:
      'A branded AbbVie newsroom opens with a headline such as “Hematology Treatment Update.” A real AbbVie team member, medical expert, or AI presenter delivers the update in a short TV-news format. Supporting screens visualize the relevant therapy, study, indication, mechanism, or new data. Each episode focuses on one key update, ending with a concise takeaway and a link/QR to explore the full scientific information.',
  },
  {
    id: 5,
    name: 'AI Clinical Companion - AI Chatbot',
    type: 'AI Chatbot(Whatsapp)',
    scenario:
      'HCPs access an AI-powered Venetoclax companion and choose from focused modules:\n 1- Venetoclax in 60 Seconds: Indications, treatment setting, dosing, and key patient profile.\n2- MOA Explorer: Interactive walkthrough of BCL-2 inhibition, restoration of apoptosis, and cancer cell death.\n 3- Evidence at a Glance: Key efficacy data and clinical outcomes across relevant indications.\n 4- Safety & Monitoring: Quick access to tumor lysis syndrome, neutropenia, infections, and key monitoring considerations.\n5- Ask Venetoclax: HCPs ask clinical questions and receive concise, referenced answers based on approved information.\n6- Challenge Me: Short clinical cases and MCQs that reinforce Venetoclax’s MOA, treatment considerations, and key safety messages.',
  },
  {
    id: 3,
    name: 'Ask the Mechanism - AI Hologram',
    type: 'AI Virtual Hematologist',
    scenario:
      'At the event, a holographic hematologist welcomes the HCP and answers pre-selected or spoken questions such as “How does TEPKINLY work?”, “What are the key clinical data?”, “What are the main safety considerations?”, or “Which patients may benefit from TEPKINLY?” The avatar provides concise, referenced answers based on approved TEPKINLY information, creating a natural and engaging clinical conversation. ',
  },
  {
    id: 4,
    name: 'The Invisible Battle - Hologram',
    type: 'Hologram Experience',
    scenario:
      'The hologram takes the HCP inside the tumor environment, where cancer B-cells move freely while T-cells remain separated from their targets. TEPKINLY enters the scene and acts as a bridge between them, bringing the T-cell directly to the cancer cell. The T-cell becomes activated and attacks the target, turning an invisible biological process into a visible battle.',
  },
   {
    id: 6,
    name: 'Omnichannel Content Suite',
    type: 'Content Creation',
    scenario:
      'The key event experiences are transformed into a connected content ecosystem that continues the conversation after the event. Short MOA videos bring the science back to the HCP’s inbox or WhatsApp, visual one-page summaries provide an easy reference during or after rep visits, and a post-event email journey keeps the story moving from MOA → Evidence → Clinical Case → AI Experience.\n\nOne core content story, adapted across multiple touchpoints, keeping both brands relevant long after the event ends.',
  },
  
  {
    id: 1,
    name: 'Shooting game: Hit the Target',
    type: 'Interactive Web Experience',
    scenario:
      'The HCP enters a 60-second game where cancer cells appear protected by BCL-2 shields. The HCP uses Venetoclax to target and block these shields. Once BCL-2 is blocked, the protection disappears and the cancer cell undergoes programmed cell death. Each successful target earns a point, turning the MOA into a simple “block → unprotect → kill” experience.',
  },
  {
    id: 2,
    name: 'Build the Connection - AR',
    type: 'AR Mechanism Experience',
    scenario:
      'The HCP or patient scans a QR code and a 3D cancer B-cell appears through their phone. For the HCP, the experience zooms in to show TEPKINLY binding simultaneously to CD20 on the cancer cell and CD3 on the T-cell, creating a bridge that activates the T-cell to destroy the target. For the patient, the same mechanism is simplified into a clear visual story: TEPKINLY acts as a “bridge” that brings the body’s immune cells directly to the abnormal cells.',
  },
  
  
 
  {
    id: 7,
    name: 'INSIDE THE BCL-2 POCKET - AR',
    type: 'AR Experience',
    scenario:
      'HCPs scan a VENCLYXTO® marker, triggering a 3D BCL-2 molecular structure to appear directly on the desk through AR. They can rotate and zoom into the structure to explore the BCL-2 binding pocket, where venetoclax is visualized occupying its target site. The experience then expands from the molecular interaction to the biological impact: release of apoptotic signaling. ',
  },
  {
    id: 8,
    name: 'Email-to-Experience Journey',
    type: 'Interactive CRM Journey / Personalized HCP Digital Experience / Email + Landing Page Experience',
    scenario:
      'Each email is only the entry point. Instead of opening to a long medical message, the HCP receives one strong question, visual, or scientific hook related to either VENCLYXTO® or TEPKINLY®.\n The CTA opens a lightweight branded micro-experience or a landing page where the HCP can interact with the science, for example:\n rotate a BCL-2 structure, reveal the apoptosis pathway, connect CD3 to CD20, explore the immune synapse, move through the step-up/ramp-up journey, or unlock clinical evidence.\n ',
  },
  {
    id: 10,
    name: 'Premium: AbbVie Hematology Immersive Room Experience',
    type: 'On-Ground Experience',
    scenario:
      'Enter a fully immersive environment where the room becomes the biological world of the therapy.\n For VENCLYXTO®, the journey moves inside the malignant cell to visualize the role of BCL-2 in preventing apoptosis, followed by the effect of VENCLYXTO restoring the apoptotic pathway.\n For TEPKINLY®, the environment transforms into the lymphoma microenvironment, showing CD3+ T cells and CD20+ malignant B cells coming together through epcoritamab to form the immune synapse',
  },
  {
    id: 11,
    name: 'Premium: AbbVie Hematology Scientific Projection Mapping',
    type: 'Projection Mapping Experience / Premium On-Ground Experience',
    scenario:
      'Using high-powered projectors and custom 3D content to transform real-world surfaces into dynamic visual environments, allowing scientific stories, animations, and data to come to life. \n VENCLYXTO® storyline:\n The projection takes HCPs inside the malignant cell, revealing how BCL-2 supports cancer-cell survival. The visual journey shows VENCLYXTO targeting BCL-2, restoring the apoptotic pathway, and leading toward programmed cell death.\n TEPKINLY® storyline:\n The projection visualizes the interaction between CD3+ T cells and CD20+ malignant B cells. The two systems appear separated before epcoritamab creates the connection, forming the immune synapse and enabling T-cell-mediated targeting.\n The experience ends with both therapies presented under the AbbVie hematology portfolio.',
  },
  {
    id: 12,
    name: 'Premium: AbbVie Hematology 360° Scientific Tunnel Experience',
    type: '360° Projection Tunnel / Immersive On-Ground Experience',
    scenario:
      'HCPs move through different scientific chapters:\n 1- VENCLYXTO®: Inside the malignant cell → BCL-2 inhibition and release of the apoptotic pathway → restoration of programmed cell death (apoptosis).\n 2- TEPKINLY®: Inside the lymphoma microenvironment → CD3 × CD20 engagement through epcoritamab → formation of the immune synapse and T-cell–mediated killing.',
  }, 
];
