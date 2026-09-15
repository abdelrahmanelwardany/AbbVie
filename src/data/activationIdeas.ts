export type ActivationIdea = {
  id: number;
  name: string;
  type: string;
  objective: string;
  scenario: string;
  bullets: string[];
};

// Replace this array with real content later. The layout component reads from this data.
export const activationIdeas: ActivationIdea[] = [
  {
    id: 9,
    name: 'AbbVie Newsroom – Hematology Treatment Update',
    type: ' Digital Video Experience / AI Presenter / Internal Communication / HCP Email Content',
    objective:
      'Create a recognizable AbbVie news format that delivers important therapy-line, treatment, clinical, and scientific updates in a fast, engaging way for both AbbVie teams and HCPs.',
    scenario:
      'A branded AbbVie newsroom opens with a headline such as “Hematology Treatment Update.” A real AbbVie team member, medical expert, or AI presenter delivers the update in a short TV-news format. Supporting screens visualize the relevant therapy, study, indication, mechanism, or new data. Each episode focuses on one key update, ending with a concise takeaway and a link/QR to explore the full scientific information.',
    bullets: [
      'Makes updates easy to consume instead of relying on long emails or presentations.',
      'Creates a repeatable content platform for VENCLYXTO®, TEPKINLY®, and other hematology updates.',
      'Flexible for different audiences: internal team education, HCP emails, event screens, or digital follow-up.',
    ],
  },
  {
    id: 5,
    name: 'AI Clinical Companion - AI Chatbot',
    type: 'AI Chatbot(Whatsapp)',
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
    id: 3,
    name: 'Ask the Mechanism - AI Hologram',
    type: 'AI Virtual Hematologist',
    objective:
      'Create an interactive AI-powered holographic hematologist that provides HCPs with quick, conversational access to key TEPKINLY information. ',
    scenario:
      'At the event, a holographic hematologist welcomes the HCP and answers pre-selected or spoken questions such as “How does TEPKINLY work?”, “What are the key clinical data?”, “What are the main safety considerations?”, or “Which patients may benefit from TEPKINLY?” The avatar provides concise, referenced answers based on approved TEPKINLY information, creating a natural and engaging clinical conversation. ',
    bullets: [
      'AI-powered access: Give HCPs instant, conversational access to key TEPKINLY information.',
      'Trusted clinical support: Provide concise, referenced answers across MOA, evidence, safety, and patient considerations.',
      'Interactive engagement: Turn scientific Q&A into a more natural and engaging HCP experience.',
    ],
  },
  {
    id: 4,
    name: 'The Invisible Battle - Hologram',
    type: 'Hologram Experience',
    objective:
      'Reveal the invisible battle happening between the immune system and cancer through an immersive holographic visualization of TEPKINLY’s MOA.',
    scenario:
      'The hologram takes the HCP inside the tumor environment, where cancer B-cells move freely while T-cells remain separated from their targets. TEPKINLY enters the scene and acts as a bridge between them, bringing the T-cell directly to the cancer cell. The T-cell becomes activated and attacks the target, turning an invisible biological process into a visible battle.',
    bullets: [
      'Immersive MOA learning: Take HCPs inside the tumor to visualize TEPKINLY’s mechanism in action.',
      'Simple & memorable: Show the core story, Bridge → Activate → Attack.',
      'Make the invisible visible: Turn the interaction between T-cells and cancer B-cells into an engaging holographic experience.',
    ],
  },
   {
    id: 6,
    name: 'Omnichannel Content Suite',
    type: 'Content Creation',
    objective:
      'Extend the impact of the event by transforming the core scientific stories of both brands into content that stays with HCPs across their digital journey.',
    scenario:
      'The key event experiences are transformed into a connected content ecosystem that continues the conversation after the event. Short MOA videos bring the science back to the HCP’s inbox or WhatsApp, visual one-page summaries provide an easy reference during or after rep visits, and a post-event email journey keeps the story moving from MOA → Evidence → Clinical Case → AI Experience.\n\nOne core content story, adapted across multiple touchpoints, keeping both brands relevant long after the event ends.',
    bullets: [
      'One story, every channel: Transform core scientific content into videos, GIFs, social posts, emails, WhatsApp, web, and rep materials.',
      'Extend HCP engagement: Keep the conversation going beyond the event with a connected digital content journey.',
      'Maximum content value: Repurpose each core asset across multiple touchpoints for consistent, long-term brand visibility.',
    ],
  },
  
  {
    id: 1,
    name: 'Shooting game: Hit the Target',
    type: 'Interactive Web Experience',
    objective:
      'Make Venetoclax’s BCL-2 mechanism simple, memorable, and interactive',
    scenario:
      'The HCP enters a 60-second game where cancer cells appear protected by BCL-2 shields. The HCP uses Venetoclax to target and block these shields. Once BCL-2 is blocked, the protection disappears and the cancer cell undergoes programmed cell death. Each successful target earns a point, turning the MOA into a simple “block → unprotect → kill” experience.',
    bullets: [
      'Interactive MOA learning: Turn BCL-2 inhibition into a simple, hands-on game.',
      'Easy to remember: Reinforce the core message, Block → Unprotect → Kill.',
      'Engagement: Challenge HCPs to block as many BCL-2 shields as possible within 60 seconds.',
    ],
  },
  {
    id: 2,
    name: 'Build the Connection - AR',
    type: 'AR Mechanism Experience',
    objective:
      'Visualize TEPKINLY’s bispecific mechanism by showing how it connects the T-cell to the cancer B-cell and activates the immune response.',
    scenario:
      'The HCP or patient scans a QR code and a 3D cancer B-cell appears through their phone. For the HCP, the experience zooms in to show TEPKINLY binding simultaneously to CD20 on the cancer cell and CD3 on the T-cell, creating a bridge that activates the T-cell to destroy the target. For the patient, the same mechanism is simplified into a clear visual story: TEPKINLY acts as a “bridge” that brings the body’s immune cells directly to the abnormal cells.',
    bullets: [
      'Visual MOA learning: Bring TEPKINLY’s T-cell/B-cell mechanism to life through an interactive AR experience.',
      'Simple & memorable: Communicate TEPKINLY as a “bridge” connecting immune cells to cancer cells.',
      'Flexible engagement: Adapt the same experience for both HCP education and patient understanding.',
    ],
  },
  
  
 
  {
    id: 7,
    name: 'INSIDE THE BCL-2 POCKET - AR',
    type: 'AR Experience',
    objective:
      'Allow HCPs to explore the VENCLYXTO® mechanism at the molecular level through an interactive AR visualization.',
    scenario:
      'HCPs scan a VENCLYXTO® marker, triggering a 3D BCL-2 molecular structure to appear directly on the desk through AR. They can rotate and zoom into the structure to explore the BCL-2 binding pocket, where venetoclax is visualized occupying its target site. The experience then expands from the molecular interaction to the biological impact: release of apoptotic signaling. ',
    bullets: [
      'Makes complex molecular science tangible through interactive 3D exploration.',
      'Creates a memorable scientific experience around the VENCLYXTO® MOA.',
    ],
  },
  {
    id: 8,
    name: 'Email-to-Experience Journey',
    type: 'Interactive CRM Journey / Personalized HCP Digital Experience / Email + Landing Page Experience',
    objective:
      'Turn the email campaign from a standard communication sequence into a series of short digital experiences, making AbbVie’s hematology communication feel more interactive, and memorable.',
    scenario:
      'Each email is only the entry point. Instead of opening to a long medical message, the HCP receives one strong question, visual, or scientific hook related to either VENCLYXTO® or TEPKINLY®.\n The CTA opens a lightweight branded micro-experience or a landing page where the HCP can interact with the science, for example:\n rotate a BCL-2 structure, reveal the apoptosis pathway, connect CD3 to CD20, explore the immune synapse, move through the step-up/ramp-up journey, or unlock clinical evidence.\n ',
    bullets: [
      'Beyond a normal email: every message becomes a gateway to an interactive scientific experience.',
      'Creates a richer HCP experience: combines email, interactive science, motion and digital touchpoints into one connected journey. ',
      'Responsive to the HCP.',
    ],
  },
  {
    id: 10,
    name: 'Premium: AbbVie Hematology Immersive Room Experience',
    type: 'On-Ground Experience',
    objective:
      'Create an immersive scientific journey that brings the mechanisms of VENCLYXTO® and TEPKINLY® to life through a fully surrounding visual experience.',
    scenario:
      'Enter a fully immersive environment where the room becomes the biological world of the therapy.\n For VENCLYXTO®, the journey moves inside the malignant cell to visualize the role of BCL-2 in preventing apoptosis, followed by the effect of VENCLYXTO restoring the apoptotic pathway.\n For TEPKINLY®, the environment transforms into the lymphoma microenvironment, showing CD3+ T cells and CD20+ malignant B cells coming together through epcoritamab to form the immune synapse',
    bullets: [
      'Makes complex mechanisms easier to understand by transforming molecular biology into an immersive visual journey.',
      'Creates a memorable experience beyond traditional presentations or static content.',
      'Offers a flexible premium platform that can communicate different therapy stories and scientific updates.',
    ],
  },
  {
    id: 11,
    name: 'Premium: AbbVie Hematology Scientific Projection Mapping',
    type: 'Projection Mapping Experience / Premium On-Ground Experience',
    objective:
      'Create a high-impact scientific storytelling experience that transforms the mechanism of action and treatment journey of VENCLYXTO® and TEPKINLY® into a memorable visual experience for HCPs.',
    scenario:
      'Using high-powered projectors and custom 3D content to transform real-world surfaces into dynamic visual environments, allowing scientific stories, animations, and data to come to life. \n VENCLYXTO® storyline:\n The projection takes HCPs inside the malignant cell, revealing how BCL-2 supports cancer-cell survival. The visual journey shows VENCLYXTO targeting BCL-2, restoring the apoptotic pathway, and leading toward programmed cell death.\n TEPKINLY® storyline:\n The projection visualizes the interaction between CD3+ T cells and CD20+ malignant B cells. The two systems appear separated before epcoritamab creates the connection, forming the immune synapse and enabling T-cell-mediated targeting.\n The experience ends with both therapies presented under the AbbVie hematology portfolio.',
    bullets: [
      'Turns complex biological mechanisms into intuitive visual stories that are easier for HCPs to understand and remember.',
      'Creates a premium scientific moment suitable for congresses, launches, and high-value medical events.',
      'Provides a flexible platform where multiple therapies, updates, or scientific milestones can be communicated through different chapters.',
    ],
  },
  {
    id: 12,
    name: 'Premium: AbbVie Hematology 360° Scientific Tunnel Experience',
    type: '360° Projection Tunnel / Immersive On-Ground Experience',
    objective:
      'Transform complex mechanisms of VENCLYXTO® and TEPKINLY® into an engaging, step-by-step visual journey.',
    scenario:
      'HCPs move through different scientific chapters:\n 1- VENCLYXTO®: Inside the malignant cell → BCL-2 inhibition and release of the apoptotic pathway → restoration of programmed cell death (apoptosis).\n 2- TEPKINLY®: Inside the lymphoma microenvironment → CD3 × CD20 engagement through epcoritamab → formation of the immune synapse and T-cell–mediated killing.',
    bullets: [
      'Makes complex science easier to understand through immersive storytelling.',
      'Creates an engaging experience through movement and discovery.',
      'Provides a premium platform for congresses and medical events.',
    ],
  }, 
];
