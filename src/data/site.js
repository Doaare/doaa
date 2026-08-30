import catsPc from '../assets/cats-pc.webp'
import cognitiveEngagement from '../assets/cognitive-engagement.webp'
import aiCdss from '../assets/ai-cdss.webp'
import surrogateDecisionMaking from '../assets/surrogate-decision-making.webp'
import dataLabLogo from '../assets/data-lab-logo.webp'
import courseMateLogo from '../assets/coursemate-logo.webp'

export const links = {
  scholar: 'https://scholar.google.com/citations?user=T8GVxMYAAAAJ&hl=en',
  researchGate: 'https://www.researchgate.net/profile/Doaa-Alrefaei',
  linkedin: 'https://www.linkedin.com/in/doaa-alrefaei-phd-880171a9',
  uxdm: 'https://uxdm.wpi.edu/',
  uxsym: 'https://uxsym.org/',
  kauEmail: 'dmalrefaei@kau.edu.sa',
  wpiEmail: 'Dalrefaei@wpi.edu',
}

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'research', label: 'Research' },
  { id: 'patent', label: 'Patent' },
  { id: 'publications', label: 'Publications' },
  { id: 'innovation', label: 'Projects' },
  { id: 'teaching', label: 'Teaching' },
  { id: 'recognition', label: 'Recognition' },
  { id: 'tools', label: 'Tools' },
  { id: 'contact', label: 'Contact' },
]

export const hero = {
  eyebrow: 'Human–Computer Interaction · NeuroIS · AI',
  name: 'Doaa Alrefaei',
  suffix: ', PhD',
  tagline: 'Human-Centered AI and Innovation Researcher',
  affiliations: [
    {
      role: 'Assistant Professor of Management Information Systems',
      org: 'King Abdulaziz University, Faculty of Economics and Administration',
    },
    {
      role: 'Research Associate',
      org: 'User Experience and Decision-Making (UXDM) Lab, Worcester Polytechnic Institute',
    },
    {
      role: 'R&D Consultant',
      org: 'Center of Research Excellence in Artificial Intelligence and Data Science, King Abdulaziz University',
    },
  ],
}

// Hero scanpath geometry. Fixation radius encodes dwell duration.
export const scanpath = {
  saccades: 'M180,470 L318,214 L505,352 L742,140 L640,436 L905,268 L1052,392 L820,520',
  fixations: [
    { cx: 180, cy: 470, r: 17, stroke: 'rgba(224,162,39,.42)' },
    { cx: 318, cy: 214, r: 30, stroke: 'rgba(224,162,39,.36)' },
    { cx: 505, cy: 352, r: 22, stroke: 'rgba(210,89,63,.42)' },
    { cx: 742, cy: 140, r: 41, stroke: 'rgba(224,162,39,.30)' },
    { cx: 640, cy: 436, r: 14, stroke: 'rgba(224,162,39,.42)' },
    { cx: 905, cy: 268, r: 34, stroke: 'rgba(210,89,63,.34)' },
    { cx: 1052, cy: 392, r: 20, stroke: 'rgba(224,162,39,.38)' },
    { cx: 820, cy: 520, r: 26, stroke: 'rgba(224,162,39,.32)' },
  ],
}

export const bio = [
  'Doaa Alrefaei is an Assistant Professor of Management Information Systems at King Abdulaziz University, an R&D Consultant at the Center of Research Excellence in Artificial Intelligence and Data Science at King Abdulaziz University, and a Research Associate at the User Experience and Decision-Making (UXDM) Lab at Worcester Polytechnic Institute. Her research lies at the intersection of human-computer interaction, eye tracking, NeuroIS, and artificial intelligence, with a focus on human-centered innovation in healthcare.',
  'She investigates how eye-movement and behavioral data can reveal cognitive, affective, and health-related experiences and inform the design of AI-enabled clinical decision support systems. Her work bridges behavioral insights, user experience, and AI to advance adaptive, trustworthy, and human-centered healthcare technologies. Her research has received multiple Best Paper Awards and contributed to a patent on AI-enabled systems for detecting health experiences through eye movements.',
  'In the classroom, she emphasizes ethical innovation and human-centered design across all of her teaching. Her courses include artificial intelligence in business, data analytics, and user experience design, with a consistent focus on helping students understand how emerging technologies can be developed and applied responsibly, thoughtfully, and with people at the center of design decisions.',
]

export const education = [
  {
    year: '2025',
    name: 'Ph.D., Business Administration & Information Technology',
    meta: ['Worcester Polytechnic Institute'],
    dissertation:
      'AI-Enabled Bioresponsive Clinical Decision Support Systems for Chronic Pain: A User-Centered Approach',
  },
  { year: '2020', name: 'M.S., Innovation in User Experience', meta: ['Worcester Polytechnic Institute'] },
  {
    year: '2014',
    name: 'M.S., Management Information Systems',
    meta: ['Information Security Management', 'Bowie State University'],
  },
  { year: '2010', name: 'B.B.A., Management Information Systems', meta: ['King Abdulaziz University'] },
]

export const pillars = [
  {
    title: 'Eye movements as clinical signal',
    body: 'Identifying the fixation and saccade metrics that distinguish experiences such as chronic pain and anxiety, and establishing the stimuli-task paradigms that make those metrics measurable.',
  },
  {
    title: 'Bioresponsive decision support',
    body: "Translating attention data into clinical decision support systems that adapt to the clinician's state, rather than presenting the same interface to every user in every context.",
  },
  {
    title: 'Human-centered AI',
    body: 'Designing and evaluating AI-enabled tools through UX methods and NeuroIS evidence, so that model behavior stays legible and accountable to the people it serves.',
  },
]

export const keywords = [
  'Eye tracking',
  'NeuroIS',
  'User experience',
  'Clinical decision support',
  'AI-enabled decision making',
  'Human-centered innovation',
]

export const patent = {
  title: 'Detecting health experiences from eye movements',
  lede: 'An AI system that derives indicators of health experience from eye-movement data captured during structured visual tasks.',
  meta: [
    { label: 'Publication number', value: 'US 2024/0324922 A1', mono: true },
    { label: 'Assignee', value: 'Worcester Polytechnic Institute' },
    { label: 'Jurisdiction', value: 'United States' },
  ],
}

// `authors` marks the site owner with **bold** so the renderer can emphasise it
// without every entry repeating markup.
export const publications = [
  {
    year: '2026',
    title:
      'Clinicians’ Visual Attention During Suicide Screening Encounters: An Exploratory Eye-Tracking Study',
    authors: '**Alrefaei, D.**, Huang, K., Sukumar, A., Djamasbi, S., Tulu, B., & Davis-Martin, R.',
    venue:
      'Augmenting Cognition in the AI-Accelerated Era, HCI International 2026 · Lecture Notes in Computer Science, vol. 16709 · Springer',
  },
  {
    year: '2024',
    title: 'Detecting Anxiety via Eye Movements: A User Experience Approach to Research and Development',
    authors: '**Alrefaei, D.**, Sankar, G., Djamasbi, S., Norouzi Nia, J., & Strong, D.',
    venue:
      'Proceedings of the Twenty-Third Annual Pre-ICIS Workshop on HCI Research in MIS (SIGHCI 2024), Bangkok, Thailand · AIS Electronic Library',
  },
  {
    year: '2024',
    title: 'The Impact of Anxiety on Reading Behavior: An Exploratory Eye-Tracking Study',
    authors: '**Alrefaei, D.**, Djamasbi, S., Strong, D., Norouzi Nia, J., & Sukumar, A.',
    venue: 'Proceedings of the Northeast AIS Conference (NEAIS 2024) · AIS Electronic Library',
    tag: 'Best Paper Award',
  },
  {
    year: '2024',
    title: 'UX Approach to Designing a Clinical Decision Support System for Pain',
    authors: '**Alrefaei, D.**, Djamasbi, S., & Strong, D.',
    venue: 'Proceedings of the Northeast AIS Conference (NEAIS 2024) · AIS Electronic Library',
  },
  {
    year: '2023',
    title:
      'Chronic Pain and Eye Movements: A NeuroIS Approach to Designing Smart Clinical Decision Support Systems',
    authors: '**Alrefaei, D.**, Djamasbi, S., & Strong, D.',
    venue: 'AIS Transactions on Human-Computer Interaction, vol. 15, no. 3, pp. 268–291',
    tag: 'Best Paper Award, THCI 2024',
  },
  {
    year: '2023',
    title: 'Using Eye Tracking to Measure User Engagement with a Decision Aid',
    authors:
      '**Alrefaei, D.**, Zhang, L., Sankar, G., Djamasbi, S., Tulu, B., Flanagan, C., Kalayjian, A., Ge, C., Franco, C., Meraj, S., & Muehlschlegel, S.',
    venue:
      'Augmented Cognition, HCI International 2023 · Lecture Notes in Computer Science, vol. 14019, pp. 57–70 · Springer',
  },
  {
    year: '2023',
    title: 'Examining User Engagement with a Decision Aid',
    authors:
      'Zhang, L., **Alrefaei, D.**, Djamasbi, S., Tulu, B., Sankar, G., Ge, C., Meraj, S., & Muehlschlegel, S.',
    venue: 'Proceedings of the Northeast AIS Conference (NEAIS 2023) · AIS Electronic Library',
    tag: 'Best Paper Award',
  },
]

export const projects = [
  {
    image: catsPc,
    alt: 'Workflow diagram: a patient takes a computerized adaptive test, results are delivered, and next steps follow from the results',
    role: 'Eye-tracking testing · user engagement',
    title:
      'Implementing Computerized Adaptive Tests for Mental Health Screening in Primary Care (CATS-PC)',
    desc: 'A tool to detect and monitor suicide risk for scalable use in primary care, improving access and clinical utility.',
    affil: [{ text: 'Collaboration with UMass Memorial Medical Center — CAPES, MA, United States' }],
  },
  {
    image: cognitiveEngagement,
    alt: 'A user looking toward a screen displaying a chart, representing measured cognitive engagement',
    role: 'Co-researcher',
    title: 'Measuring Cognitive Engagement',
    desc: "A smart system that uses eye-tracking data to visualize and measure users' cognitive engagement.",
    affil: [
      { text: 'Associated with the ' },
      { text: 'UXDM Lab', href: links.uxdm },
      { text: ' at WPI, MA, United States' },
    ],
  },
  {
    image: aiCdss,
    alt: 'Eye-tracking data from a patient feeding an AI clinical decision support system used by healthcare professionals',
    role: 'Main researcher',
    title: 'AI-Enabled Clinical Decision Support System for Health Experiences Detection',
    desc: 'An AI system that uses eye-tracking data to objectively detect mental health and chronic pain conditions, assisting clinical decision-making.',
    affil: [
      { text: 'Associated with the ' },
      { text: 'UXDM Lab', href: links.uxdm },
      { text: ' at WPI, MA, United States' },
    ],
  },
  {
    image: surrogateDecisionMaking,
    alt: "A clinician reviewing documents with two family members making a decision on a patient's behalf",
    role: 'Eye-tracking testing · surrogate engagement',
    title: 'Decision Support System for Surrogate Decision-Making',
    desc: 'A tool designed to help surrogate decision-makers reach informed decisions in critical care situations.',
    affil: [
      {
        text: 'Collaboration with UMass Memorial Medical Center — University Campus, UMass Memorial Hospital, MA, United States',
      },
    ],
  },
]

export const courses = [
  {
    title: 'Artificial intelligence in business',
    desc: 'How AI systems are selected, evaluated, and governed inside organizations.',
  },
  {
    title: 'Systems analysis and design',
    desc: 'Moving from requirements to specification: modeling processes, data, and interfaces before a line of code is written.',
  },
  {
    title: 'Human-computer interaction',
    desc: 'How people read, interpret, and act on interfaces, and the research methods used to evaluate that.',
  },
]

export const awards = [
  {
    year: '2024',
    name: 'Best Paper Award, NEAIS',
    desc: 'The Impact of Anxiety on Reading Behavior: An Exploratory Eye-Tracking Study · Northeast AIS Conference',
  },
  {
    year: '2024',
    name: 'Best Paper Award, AIS Transactions on Human-Computer Interaction',
    desc: 'Chronic Pain and Eye Movements: A NeuroIS Approach to Designing Smart Clinical Decision Support Systems',
  },
  {
    year: '2024',
    name: 'Nominated, Best IS Publication of the Year',
    desc: 'Chronic Pain and Eye Movements · selected for outstanding contribution to Information Systems research',
  },
  {
    year: '2023',
    name: 'Best Paper Award, NEAIS',
    desc: 'Examining User Engagement with a Decision Aid · Northeast AIS Conference',
  },
]

export const tools = [
  {
    logo: dataLabLogo,
    name: 'Data Lab',
    desc: 'A browser-based statistical workbench for research and data analysis.',
    tags: ['Statistics', 'Browser-based', 'Privacy-preserving', 'Free'],
    affil: { prefix: 'Part of the ', label: 'UXDM Lab', href: links.uxdm },
  },
  {
    logo: courseMateLogo,
    name: 'CourseMate',
    desc: 'A smart assistant for course content, projects, and student questions.',
    tags: ['AI assistant', 'Course support'],
  },
]

export const contact = {
  lede: 'For speaking engagements, guest lectures, doctoral supervision, or research collaboration.',
  emails: [
    { address: links.kauEmail, label: `${links.kauEmail} — King Abdulaziz University` },
    { address: links.wpiEmail, label: `${links.wpiEmail} — Worcester Polytechnic Institute` },
  ],
  elsewhere: [
    { href: links.scholar, label: 'Google Scholar' },
    { href: links.researchGate, label: 'ResearchGate' },
    { href: links.linkedin, label: 'LinkedIn' },
    { href: links.uxdm, label: 'UXDM Lab, WPI' },
    { href: links.uxsym, label: 'UXSYM' },
  ],
}

export const footer = {
  copyright: '© 2026 Doaa Alrefaei, Ph.D.',
  meta: 'KAU & WPI · HCI · AI · Innovation · IS',
}
