export const content = {
  meta: {
    title: "QuestLab — 让每个孩子成为科学家",
    description:
      "专为6-12岁孩子打造的实验驱动型科学学习平台。立即加入候补名单。",
  },

  nav: {
    links: [
      { label: "学习流程", href: "#how-it-works" },
      { label: "核心功能", href: "#features" },
      { label: "常见问题", href: "#faq" },
    ],
    cta: "加入候补",
  },

  hero: {
    logoText: "QuestLab",
    tagline:
      "每个孩子天生都是科学家——QuestLab 让他们在探索中找到属于自己的答案。",
    cta: "加入候补名单",
  },

  howItWorks: {
    heading: "在虚拟实验沙盒中，让科学触手可及",
    steps: [
      {
        number: 1,
        label: "探索",
        description:
          "自由调整变量，直观感受事物运作的方式。",
      },
      {
        number: 2,
        label: "预测",
        description:
          "大胆猜一猜——你觉得会发生什么？为什么？",
      },
      {
        number: 3,
        label: "实验",
        description:
          "动手做实验。每次只改变一个条件，收集你的数据。",
      },
      {
        number: 4,
        label: "分析",
        description:
          "观察实验结果，发现其中的规律。",
      },
      {
        number: 5,
        label: "解释",
        description:
          "理解你所发现的现象背后的科学原理。",
      },
    ],
  },

  features: {
    items: [
      {
        key: "experiment" as const,
        headline: "孩子亲手设计自己的实验方案",
        description:
          "孩子们可以设计火箭、调试变量、收集实验数据。每一次探索都完整遵循科学方法——从提出假设到得出结论。",
      },
      {
        key: "ai" as const,
        headline: "一个会提问的 AI 实验伙伴",
        description:
          "AI 助手会引导孩子发现规律、深入思考实验结果——但绝不会直接给出答案。",
      },
      {
        key: "world" as const,
        headline: "一整个科学宇宙等你探索",
        description:
          "每颗星球都是一个新实验。孩子们积累经验值、改装自己的火箭、解锁更多科学任务。",
      },
    ],
  },

  audiences: {
    parents: {
      heading: "写给家长",
      subheading: "孩子放学后真正想做的科学探索",
      bullets: [
        "以实验为核心，而非看视频",
        "对标美国《新一代科学教育标准》(NGSS)",
        "每周收到孩子的学习进度报告",
        "没有广告，实验过程中没有付费墙",
      ],
    },
    teachers: {
      heading: "写给老师",
      subheading: "一间自动运转的虚拟实验室",
      bullets: [
        "即开即用：课标对齐的实验，随时可分配",
        "替代准备繁重的实体实验，适合紧凑的课程安排",
        "内置数据采集和学生进度追踪",
        "浏览器直接运行，无需安装任何软件",
      ],
    },
  },

  team: {
    vision:
      "我们相信，每个孩子都值得像真正的科学家那样学习科学——通过亲手实验。",
    members: [
      { name: "Alex Zhang", role: "CEO", initials: "AZ" },
      { name: "Vivian Ren", role: "COO", initials: "VR" },
    ],
  },

  supporters: {
    heading: "与以下机构的教育者和研究者共同打造",
    institutions: [
      "康奈尔大学",
      "普林斯顿高等研究院",
    ],
    people: [],
  },

  faq: {
    heading: "常见问题",
    items: [
      {
        question: "QuestLab 适合多大的孩子？",
        answer:
          "QuestLab 面向6至12岁的孩子（大致对应小学一年级到六年级）。",
      },
      {
        question: "QuestLab 收费吗？",
        answer:
          "我们正在全力筹备上线。现在加入候补名单可以获得优先体验资格，具体定价会在后续公布。",
      },
      {
        question: "QuestLab 的内容符合学校科学课标吗？",
        answer:
          "是的，所有实验均对标《新一代科学教育标准》(NGSS)。",
      },
      {
        question: "支持哪些设备？",
        answer:
          "QuestLab 可以在任何现代浏览器中运行，支持电脑、笔记本和平板。无需下载安装。",
      },
      {
        question: "对孩子来说安全吗？",
        answer:
          "当然。平台没有任何广告，AI 助手经过严格限制，只围绕学习内容进行互动，确保内容适合儿童。付费升级完全由家长决定，绝不会向孩子推送。",
      },
      {
        question: "老师可以在课堂上使用吗？",
        answer:
          "可以。我们正在与纽约市和伊萨卡的小学合作试点 QuestLab 课堂方案。平台设计为独立的虚拟实验环节，可以灵活嵌入已有课时。班级管理和教师工具正在开发中。",
      },
      {
        question: "怎样了解最新动态？",
        answer:
          "在下方加入候补名单，我们会在上线前及时通知你。",
      },
    ],
  },

  waitlistForm: {
    heading: "抢先探索",
    subtext:
      "加入 QuestLab 候补名单，我们会在产品上线时第一时间通知你。",
    fields: {
      name: { label: "姓名", placeholder: "请输入你的名字" },
      email: { label: "邮箱", placeholder: "you@example.com" },
      role: {
        label: "我的身份是…",
        placeholder: "请选择身份",
        options: [
          { value: "parent", label: "家长" },
          { value: "teacher", label: "老师" },
          { value: "school_admin", label: "学校管理人员" },
          { value: "other", label: "其他" },
        ],
      },
      organization: {
        label: "学校 / 机构",
        placeholder: "选填",
      },
      phone: {
        label: "手机号（选填）",
        placeholder: "手机号码",
      },
    },
    submit: "加入候补名单",
    success: {
      heading: "已成功加入！",
      message: "我们会尽快与你联系。",
    },
    alreadySignedUp: {
      heading: "你已经在名单中了",
      message: "我们会尽快与你联系。",
    },
    errors: {
      nameRequired: "请输入姓名。",
      emailRequired: "请输入邮箱地址。",
      emailInvalid: "请输入有效的邮箱地址。",
      roleRequired: "请选择你的身份。",
      duplicate: "该邮箱已在候补名单中。",
      generic: "提交遇到问题，请稍后重试。",
    },
  },

  footer: {
    copyright: `\u00A9 ${new Date().getFullYear()} QuestLab`,
    email: "questlab.edu@gmail.com",
  },
} as const;
