export const content = {
  meta: {
    title: "QuestLab — Where Every Kid is a Scientist",
    description:
      "An experiment-first science learning platform for kids ages 6-12. Join the waitlist.",
  },

  nav: {
    links: [
      { label: "How It Works", href: "#how-it-works" },
      { label: "Features", href: "#features" },
      { label: "FAQ", href: "#faq" },
    ],
    cta: "Join Waitlist",
  },

  hero: {
    logoText: "QuestLab",
    tagline:
      "Every kid is born a scientist, so QuestLab puts the Quest back in their Question.",
    cta: "Join the Waitlist",
  },

  howItWorks: {
    heading: "Accessible learning through virtual sandbox experimentation",
    steps: [
      {
        number: 1,
        label: "Explore",
        description:
          "Play with variables freely. Get a feel for how things work.",
      },
      {
        number: 2,
        label: "Predict",
        description:
          "Make a guess. What do you think will happen and why?",
      },
      {
        number: 3,
        label: "Experiment",
        description:
          "Run trials. Change one thing at a time. Collect data.",
      },
      {
        number: 4,
        label: "Analyze",
        description:
          "Look at your results. What patterns do you see?",
      },
      {
        number: 5,
        label: "Explain",
        description:
          "Understand the science behind what you found.",
      },
    ],
  },

  features: {
    items: [
      {
        key: "experiment" as const,
        headline: "Kids design their own solutions to experiments",
        description:
          "Kids design rockets, test variables, and collect their own data. Every quest follows the scientific method from hypothesis to conclusion.",
      },
      {
        key: "ai" as const,
        headline: "A lab partner that asks the right questions",
        description:
          "An in-game AI companion helps kids notice patterns and think through their results without giving away the answers.",
      },
      {
        key: "world" as const,
        headline: "A universe of science to explore",
        description:
          "Each planet is a new experiment. Kids earn XP, customize their rocket, and build a collection of completed quests.",
      },
    ],
  },

  audiences: {
    parents: {
      heading: "For Parents",
      subheading: "Science your kid actually wants to do after school",
      bullets: [
        "Experiment-based, not video-based",
        "Aligned to real science standards (NGSS)",
        "Progress updates sent to your inbox weekly",
        "No ads, no paywalls mid-experiment",
      ],
    },
    teachers: {
      heading: "For Teachers",
      subheading: "A virtual lab that runs itself",
      bullets: [
        "Plug-and-play: standards-aligned experiments ready to assign",
        "Replaces prep-heavy physical labs on tight schedules",
        "Built-in data collection and student progress tracking",
        "Works on school devices (web-based, no install)",
      ],
    },
  },

  team: {
    vision:
      "We believe every child deserves to learn science the way scientists actually do it — by experimenting.",
    members: [
      { name: "Alex Zhang", role: "CEO", initials: "AZ" },
      { name: "Vivian Ren", role: "COO", initials: "VR" },
    ],
  },

  supporters: {
    heading: "Built with input from educators and researchers at",
    institutions: [
      "Cornell University",
      "Princeton Institute for Advanced Study",
    ],
    people: [],
  },

  faq: {
    heading: "Frequently Asked Questions",
    items: [
      {
        question: "What ages is QuestLab for?",
        answer:
          "QuestLab is designed for kids roughly ages 6 to 12 (K through 6th grade).",
      },
      {
        question: "Is QuestLab free?",
        answer:
          "We're building toward launch. Join the waitlist for early access — pricing details will come later.",
      },
      {
        question: "Does QuestLab align with school science standards?",
        answer:
          "Yes. All experiments are aligned to Next Generation Science Standards (NGSS).",
      },
      {
        question: "What devices does it work on?",
        answer:
          "QuestLab runs in any modern web browser on desktop, laptop, or tablet. No download or install needed.",
      },
      {
        question: "Is it safe for kids?",
        answer:
          "Absolutely. There are no ads, and the AI assistant is guardrailed to stay on-topic and age-appropriate. Upgrades are always a parent decision, never a kid prompt.",
      },
      {
        question: "Can teachers use it in the classroom?",
        answer:
          "Yes. We're working with elementary schools in New York City and Ithaca to pilot QuestLab in classrooms. The platform is designed to work as a standalone virtual lab session that fits into existing class time. Teacher tools and class management features are in development.",
      },
      {
        question: "How can I get involved or stay updated?",
        answer:
          "Join our waitlist below. We'll send updates as we approach launch.",
      },
    ],
  },

  waitlistForm: {
    heading: "Be the first to explore",
    subtext:
      "Join the QuestLab waitlist and we'll let you know when we're ready for launch.",
    fields: {
      name: { label: "Name", placeholder: "Your first name" },
      email: { label: "Email", placeholder: "you@example.com" },
      role: {
        label: "I am a...",
        placeholder: "Select your role",
        options: [
          { value: "parent", label: "Parent" },
          { value: "teacher", label: "Teacher" },
          { value: "school_admin", label: "School Admin" },
          { value: "other", label: "Other" },
        ],
      },
      organization: {
        label: "School / Organization",
        placeholder: "Optional",
      },
      phone: {
        label: "Phone (optional)",
        placeholder: "Phone number",
      },
    },
    submit: "Join the Waitlist",
    success: {
      heading: "You're on the list!",
      message: "We'll be in touch.",
    },
    alreadySignedUp: {
      heading: "Already signed up?",
      message: "We'll be in touch soon.",
    },
    errors: {
      nameRequired: "Name is required.",
      emailRequired: "Email is required.",
      emailInvalid: "Please enter a valid email address.",
      roleRequired: "Please select a role.",
      duplicate: "This email is already on the waitlist.",
      generic: "Something went wrong. Please try again.",
    },
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} QuestLab`,
    email: "questlab.edu@gmail.com",
  },
} as const;
