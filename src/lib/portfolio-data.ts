import type {
  Certificate,
  Contact,
  Experience,
  Me,
  Nav,
  Project,
  Service,
  Skill,
  Social,
  Testimonial,
} from "@/types";

const BOOK_A_CALL_LINK =
  "mailto:shubham46.56@gmail.com?subject=Book%20a%20call%20with%20Shubham&body=Hi%20Shubham%2C%0A%0AI%20would%20like%20to%20connect%20with%20you%20about%20a%20role%2C%20project%2C%20or%20collaboration.%0A";

export const me: Me = {
  cal: BOOK_A_CALL_LINK,
  name: "Shubham Kumar",
  initials: "SK",
  location: "Gurugram, Haryana, India",
  locationLink: "https://www.google.com/maps/place/Gurugram,+Haryana,+India",
  about: "Cloud Platform Engineer | DevOps, Kubernetes & Automation",
  summary:
    "Cloud Platform Engineer / Site Reliability Engineer with 7+ years in DevOps and cloud infrastructure fundamentals — Kubernetes, infrastructure as code, multi-cloud operations. I'm now increasingly focused on production AI/LLM platform work: AWS Bedrock with Claude models, RAG pipelines, and AI-assisted incident response, alongside FinOps cost optimization and Zero Trust security.",
  summaryLong:
    "I started where most infrastructure careers do: cloud fundamentals. Kubernetes operations, infrastructure as code, CI/CD automation, and multi-cloud reliability work across AWS, Azure, and GCP. That foundation is still how I think about systems — observable, automated, and boring in the best way.\n\nWhat's changed is where I'm pointing that foundation. Over the past year, as a Cloud Platform Engineer, I've been increasingly focused on building and operating production AI tooling on AWS Bedrock with Claude models — including a RAG-based auto-triage agent and an AI-assisted incident RCA tool, both deliberately human-gated rather than fully autonomous. I pair that with FinOps cost governance and Zero Trust identity (Keycloak, OIDC/OAuth2) — the unglamorous platform work that has to be solid before you can trust an AI system to touch production.\n\nThat's the direction I'm building toward: applying DevOps discipline — guardrails, observability, human-in-the-loop review — to systems that increasingly involve LLMs in the operational path.",
  avatarUrl: "https://avatars.githubusercontent.com/u/155751376?v=4",
  personalWebsiteUrl: "https://cv-topaz-psi.vercel.app/",
  cta: {
    message:
      "Open to conversations about AI platform operations, DevOps automation, FinOps, and cloud reliability at scale.",
    btn: BOOK_A_CALL_LINK,
  },
};

export const nav: Nav = {
  cal: BOOK_A_CALL_LINK,
  resume: "https://cv-topaz-psi.vercel.app/",
  footer_note:
    "DevOps-rooted, increasingly focused on AI platform operations.",
};

export const socials: Social[] = [
  {
    name: "GitHub",
    href: "https://github.com/Shubham-Master",
    icon: "mdi:github",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/contactshubham-kr/",
    icon: "mdi:linkedin",
  },
  {
    name: "X",
    href: "https://x.com/gypsies_kumar",
    icon: "ri:twitter-x-fill",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/its_shubham09",
    icon: "mdi:instagram",
  },
];

export const contacts: Contact[] = [
  {
    title: "Email",
    text: "shubham46.56@gmail.com",
    href: "mailto:shubham46.56@gmail.com",
    icon: "ion:mail-outline",
  },
  {
    title: "Phone",
    text: "+91 ••••• ••155",
    href: "tel:+918073314155",
    icon: "ion:call-outline",
  },
  {
    title: "Location",
    text: "Gurugram, Haryana, India",
    href: "https://www.google.com/maps/place/Gurugram,+Haryana,+India",
    icon: "ion:location-outline",
  },
  {
    title: "Detailed CV",
    text: "View full career profile",
    href: "https://cv-topaz-psi.vercel.app/",
    icon: "ion:document-text-outline",
  },
];

export const experiences: Experience[] = [
  {
    company: "SingleStore",
    link: "https://www.singlestore.com/",
    badges: ["Remote", "AI Platform"],
    title: "Cloud Platform Engineer",
    location: "Remote",
    logo: "/company-logos/singlestore.png",
    start: "Feb 2026",
    end: null,
    description: [
      "Designed and built ATLAS, an internal operational-intelligence platform (Airflow, SingleStore, Next.js) used daily by Support, Engineering, and Leadership to track SLA risk and recurring issues.",
      "Built production AI tooling on AWS Bedrock (Claude 3/3.5) — an AI-assisted incident RCA tool on Grafana MCP and a guardrailed RAG auto-triage agent, both human-gated by design.",
      "Implemented GPU-backed autoscaling on EKS using Karpenter, cutting ML infrastructure cost by 35%+ (utilization ~25% to 65%), measured via Kubecost against real AWS billing.",
      "Own the production Keycloak identity platform (Zero Trust, OIDC/OAuth2) serving ~150 daily internal users.",
      "Contribute Go backend code to an internal multi-cloud cost-governance (FinOps) platform.",
    ],
  },
  {
    company: "AirFi Aviation Solutions",
    link: "https://airfi.aero/",
    badges: ["Bengaluru", "Promotion"],
    title: "Senior DevOps Engineer",
    location: "Bengaluru, Karnataka, India",
    logo: "/company-logos/airfi.png",
    start: "Aug 2025",
    end: "Feb 2026",
    description: [
      "Led an uptime initiative that raised platform availability from 97.8% to 99.95%.",
      "Cut incident resolution time by 45%+ through centralized observability and standardized runbooks.",
      "Mentored junior engineers and set incident-response and IaC standards adopted across every team on the shared platform.",
    ],
  },
  {
    company: "AirFi Aviation Solutions",
    link: "https://airfi.aero/",
    badges: ["Bengaluru", "Kubernetes", "Embedded Systems"],
    title: "DevOps Engineer",
    location: "Bengaluru, Karnataka, India",
    logo: "/company-logos/airfi.png",
    start: "Oct 2023",
    end: "Jul 2025",
    description: [
      "Developed and deployed automation across a fleet of 8,000+ embedded IFE (in-flight entertainment) devices — including firmware rollout pipelines that cut release time by 40%, and telemetry-based PMIC monitoring with secure LTE-based diagnostics that reduced MTTR by 35%.",
      "Built DISCO, an internal Python-based tool for processing onboard infotainment box log data at scale — pulling and parsing logs from AWS S3 for fleet-wide diagnostics.",
      "Operated and optimized AWS and Azure Kubernetes environments for production workloads; automated infrastructure changes with Terraform and CI-driven workflows.",
      "Implemented monitoring and alerting improvements that reduced production outages by 40%.",
    ],
  },
  {
    company: "Innoitus",
    link: "",
    badges: ["Bengaluru", "Monitoring"],
    title: "Site Reliability Engineer",
    location: "Bengaluru, Karnataka, India",
    logo: "/company-logos/innoitus.png",
    start: "Jun 2023",
    end: "Sep 2023",
    description: [
      "Improved observability and alert quality through custom tooling and hands-on monitoring improvements.",
      "Reduced critical incident frequency by 35% through proactive monitoring and reliability practices.",
      "Improved incident response times by 30% with better alerting and on-call workflows.",
    ],
  },
  {
    company: "Amazon",
    link: "https://www.amazon.in/",
    badges: ["Bengaluru", "AWS"],
    title: "Quality Analyst",
    location: "Bengaluru, Karnataka, India",
    logo: "/company-logos/amazon.png",
    start: "Oct 2021",
    end: "Jun 2023",
    description: [
      "Built Jenkins pipelines integrating Prometheus and Grafana dashboards for better pipeline and environment visibility.",
      "Managed AWS-based environments with a focus on scalability, uptime, and dependable delivery workflows.",
      "Administered Kubernetes workloads with resource optimization across QA and production-adjacent systems.",
    ],
  },
  {
    company: "Extreme Soft Management",
    link: "",
    badges: ["Ranchi", "GCP"],
    title: "Site Reliability Engineer",
    location: "Ranchi, Jharkhand, India",
    logo: "/company-logos/extreme-soft.svg",
    start: "Apr 2019",
    end: "Aug 2021",
    description: [
      "Operated and maintained production infrastructure on Google Cloud Platform (GCP), introducing automation for repetitive operational tasks.",
      "Led a year-long GCP-to-AWS migration, modernizing the deployment stack end-to-end.",
      "Automated workflows that saved 80+ engineering hours per month across recurring processes.",
    ],
  },
];

export const skills: Skill[] = [
  {
    href: "https://www.python.org/",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg",
    skill: "Python",
    category: "programming language",
  },
  {
    href: "https://go.dev/",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/go-colored.svg",
    skill: "Go",
    category: "programming language",
  },
  {
    href: "https://www.typescriptlang.org/",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg",
    skill: "TypeScript",
    category: "programming language",
  },
  {
    href: "https://www.gnu.org/software/bash/",
    icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/bash-unix-shell-icon.png",
    skill: "Bash",
    category: "programming language",
  },
  {
    href: "https://www.php.net/",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
    skill: "PHP",
    category: "programming language",
  },
  {
    href: "https://kubernetes.io/",
    icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/kubernetes-icon.png",
    skill: "Kubernetes",
    category: "framework and runtime",
  },
  {
    href: "https://docker.com/",
    icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/docker-icon.png",
    skill: "Docker",
    category: "framework and runtime",
  },
  {
    href: "https://aws.amazon.com/lambda/",
    icon: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Amazon_Lambda_architecture_logo.svg",
    skill: "AWS Lambda",
    category: "framework and runtime",
  },
  {
    href: "https://nodejs.org/",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg",
    skill: "Node.js",
    category: "framework and runtime",
  },
  {
    href: "https://www.mongodb.com/",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg",
    skill: "MongoDB",
    category: "databases",
  },
  {
    href: "https://www.postgresql.org/",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg",
    skill: "PostgreSQL",
    category: "databases",
  },
  {
    href: "https://www.elastic.co/elasticsearch/",
    icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/elasticsearch-icon.png",
    skill: "Elasticsearch",
    category: "databases",
  },
  {
    href: "/",
    icon: "",
    skill: "AWS Bedrock / LLM Ops",
    category: "Specializations",
  },
  {
    href: "/",
    icon: "",
    skill: "FinOps / Cost Optimization",
    category: "Specializations",
  },
  {
    href: "/",
    icon: "",
    skill: "Keycloak / Zero Trust IAM",
    category: "Specializations",
  },
  {
    href: "/",
    icon: "",
    skill: "Platform Reliability",
    category: "Specializations",
  },
  {
    href: "/",
    icon: "",
    skill: "CI/CD Automation",
    category: "Specializations",
  },
  {
    href: "/",
    icon: "",
    skill: "Observability",
    category: "Specializations",
  },
  {
    href: "/",
    icon: "",
    skill: "Embedded Linux Systems",
    category: "Specializations",
  },
  {
    href: "/",
    icon: "",
    skill: "Multi-Cloud Infrastructure",
    category: "Specializations",
  },
  {
    href: "https://aws.amazon.com/",
    icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/aws-icon.png",
    skill: "AWS",
    category: "tools",
  },
  {
    href: "https://azure.microsoft.com/",
    icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/azure-icon.png",
    skill: "Azure",
    category: "tools",
  },
  {
    href: "https://cloud.google.com/",
    icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-cloud-icon.png",
    skill: "Google Cloud",
    category: "tools",
  },
  {
    href: "https://terraform.io/",
    icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/terraform-software-icon.png",
    skill: "Terraform",
    category: "tools",
  },
  {
    href: "https://jenkins.io/",
    icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/jenkins-icon.png",
    skill: "Jenkins",
    category: "tools",
  },
  {
    href: "https://ansible.com/",
    icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/ansible-software-icon.png",
    skill: "Ansible",
    category: "tools",
  },
  {
    href: "https://argoproj.github.io/argo-cd/",
    icon: "https://layer5.io/static/23bd800be4880360f484c8e4a73f06d5/argo-cd-color.svg",
    skill: "Argo CD",
    category: "tools",
  },
  {
    href: "https://github.com/features/actions",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/githubactions/githubactions-original.svg",
    skill: "GitHub Actions",
    category: "tools",
  },
  {
    href: "https://kafka.apache.org/",
    icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/apache-kafka-icon.png",
    skill: "Kafka",
    category: "tools",
  },
  {
    href: "https://www.linux.org/",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/linux-colored.svg",
    skill: "Linux",
    category: "tools",
  },
];

export const services: Service[] = [
  {
    title: "Platform Engineering & Multi-Cloud Architecture",
    icon: "ion:layers-outline",
    description:
      "Designing secure, scalable cloud platforms across AWS, Azure, and GCP — Kubernetes, infrastructure as code, and CI/CD, with a strong focus on maintainability.",
  },
  {
    title: "AI Platform Operations & FinOps",
    icon: "ion:hardware-chip-outline",
    description:
      "Operating production AI/LLM tooling on AWS Bedrock (Claude models) — RAG pipelines and AI-assisted incident response, human-gated by design — alongside cost governance and FinOps.",
  },
  {
    title: "Reliability, Zero Trust & Incident Response",
    icon: "ion:pulse-outline",
    description:
      "Improving uptime and operational readiness through centralized observability and runbooks, backed by Zero Trust identity (Keycloak, OIDC/OAuth2).",
  },
];

export const projects: Project[] = [
  {
    title: "k8s-gitops-platform",
    link: "https://github.com/Shubham-Master/k8s-gitops-platform",
    description:
      "Production Kubernetes platform on AWS with automated cluster provisioning (Terraform) and GitOps deployments (Argo CD). Full observability stack — Prometheus, Grafana, Loki, and Tempo — for metrics, logs, and traces.",
    stack: ["Kubernetes", "Terraform", "AWS", "Argo CD", "Prometheus", "Grafana", "Loki", "Tempo"],
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Yash Anand",
    destination: "Director of Technology · AirFi",
    avatar:
      "/testimonials/yash-anand.jpg",
    date: "2026-03-02",
    link: "https://www.linkedin.com/in/yashanand/",
    text:
      "I have had the opportunity to work with Shubham and closely observe his technical depth, execution ownership, and problem-solving mindset.\n\nShubham brings a rare combination of strong Linux fundamentals, cloud-native expertise, and operational maturity. He approaches DevOps not just as tooling, but as an engineering discipline focused on reliability, scalability, and long-term maintainability.\n\nDuring our collaboration, I found him to be proactive, detail-oriented, and calm under pressure. He takes complete ownership of complex infrastructure challenges and drives them to closure without noise.\n\nHis ability to bridge embedded systems, cloud platforms, and automation pipelines makes him particularly valuable in IoT and distributed environments.\n\nBeyond technical skills, Shubham is dependable, collaborative, and always willing to go the extra mile for the team. I strongly recommend him for any role that demands both technical excellence and execution discipline.",
  },
  {
    name: "Shubham Kumar",
    destination: "Associate Lead Engineer · AirFi",
    avatar:
      "/testimonials/shubham-airfi.jpg",
    date: "2026-01-13",
    link: "https://www.linkedin.com/in/shubham399/",
    text:
      "I work with Shubham at AirFi, and he has been a key pillar of our DevOps and platform reliability efforts.\n\nShubham consistently demonstrates strong ownership of infrastructure, CI/CD pipelines, and production systems. He is extremely reliable during incidents, approaches root-cause analysis in a structured and methodical way, and always prioritizes long-term, scalable solutions over quick fixes. His work has had a direct impact on improving system stability, observability, and release reliability.\n\nHe has a strong hands-on understanding of DevOps and SRE practices, including AWS, Kubernetes, automation, monitoring, and incident response. Beyond technical skills, Shubham is calm under pressure, collaborative across teams, and always approachable when it comes to resolving complex platform or deployment challenges.\n\nShubham is a dependable and highly skilled engineer, and I'm confident he would be a valuable asset to any engineering organization.",
  },
  {
    name: "Utkarsh Saxena",
    destination: "Lead Engineer Reliability · AirFi",
    avatar:
      "/testimonials/utkarsh-saxena.jpg",
    date: "2026-01-08",
    link: "https://www.linkedin.com/in/utkarsh-saxena1512/",
    text:
      "Shubham has consistently demonstrated strong ownership of the infrastructure and deployment systems. He is very reliable during production incidents, methodical in root-cause analysis, and focused on implementing long-term, scalable fixes rather than quick patches.\n\nTheir work has significantly improved the stability, observability, and overall reliability of our systems.\n\nHe has a solid grasp of DevOps fundamentals including automation, CI/CD, AWS concepts, monitoring, and system reliability.\n\nShubham is responsible, skilled, and trustworthy and I'm confident they would be a valuable asset to any engineering organization.",
  },
  {
    name: "Priyadarshan Roy",
    destination: "Site Reliability Engineer · AirFi",
    avatar:
      "/testimonials/priyadarshan-roy.jpg",
    date: "2026-01-08",
    link: "https://www.linkedin.com/in/priyadarshan-roy-800098189/",
    text:
      "I had the opportunity to work closely with Shubham as a colleague, and I can confidently say that his depth of knowledge in DevOps methodologies, Kubernetes, Docker, AWS, and Linux truly sets him apart. He has a strong ability to design, implement, and optimize scalable, secure, and highly available systems, while consistently following best DevOps and cloud-native practices.\n\nHis technical expertise, combined with a problem-solving mindset and willingness to share insights, makes him a go-to person for complex infrastructure and automation challenges. He would be a valuable asset to any organization looking for a highly skilled and dependable DevOps professional.",
  },
  {
    name: "Appam Shivasai",
    destination: "Senior Data Analyst · Amazon",
    avatar:
      "/testimonials/appam-shivasai.jpg",
    date: "2026-01-08",
    link: "https://www.linkedin.com/in/appam-shivasai-574429166/",
    text:
      "I worked with Shubham at Amazon and was impressed by his work on AWS-based DevOps practices supporting large-scale production systems.\n\nHe brings a strong understanding of cloud infrastructure, CI/CD automation, system reliability, monitoring, and incident response. Shubham takes clear ownership, works calmly under pressure, and consistently focuses on building stable, maintainable platforms.\n\nHe is a dependable and collaborative engineer, well suited for distributed teams and high-availability environments.",
  },
  {
    name: "Jatin Kumar",
    destination: "Senior Automation Engineer · AirFi",
    avatar:
      "/testimonials/jatin-kumar.jpg",
    date: "2026-01-06",
    link: "https://www.linkedin.com/in/jatin-kumar97/",
    text:
      "I had the opportunity to work closely with Shubham at AirFi, where I was part of the QA Automation team and he was leading DevOps and platform reliability efforts. From a QA perspective, Shubham was someone we could always rely on to bring clarity, stability, and structure to complex systems.\n\nHe played a key role in improving CI/CD pipelines, deployment reliability, and observability, which made a huge difference in how smoothly testing, releases, and production validations ran. He was proactive in identifying bottlenecks, quick to troubleshoot issues, and always approachable when it came to resolving environment or pipeline-related challenges.\n\nWhat really stood out was his ownership mindset and ability to collaborate across teams. He consistently worked with QA and development teams to ensure automation, monitoring, and infrastructure changes aligned well with real-world testing and production needs.\n\nShubham is a strong DevOps engineer with a solid understanding of reliability, automation, and scalable systems, and I'm confident he would be a great asset to any engineering team.",
  },
  {
    name: "Ashvini Panwar",
    destination: "Senior Software Engineer · AirFi",
    avatar:
      "/testimonials/ashvini-panwar.jpg",
    date: "2026-01-06",
    link: "https://www.linkedin.com/in/ashvinipanwar/",
    text:
      "One of the most reliable Cloud and DevOps engineers I've worked with. Great hands-on skills across AWS, Azure, and GCP, and really strong with Kubernetes, CI/CD, and automation. Always calm, collaborative, and focused on building systems that actually work in production.",
  },
  {
    name: "Aatif Shaikh",
    destination: "Staff Engineer · AirFi",
    avatar:
      "/testimonials/aatif-shaikh.jpg",
    date: "2026-01-03",
    link: "https://www.linkedin.com/in/aatif24/",
    text:
      "I've had the pleasure of working closely with Shubham Kumar at AirFi, and I can confidently say he is an exceptional Site Reliability Engineer.\n\nShubham brings a rare mix of deep technical expertise and a strong ownership mindset. He is highly dependable when it comes to ensuring system stability, performance, and uptime, especially in high-stakes, production-critical environments. Whether it's incident response, improving observability, automating reliability workflows, or proactively identifying risks, Shubham approaches every challenge with clarity and calm.\n\nAny team would be lucky to have Shubham.",
  },
];

export const certificates: Certificate[] = [
  {
    title: "Certified Kubernetes Administrator (CKA)",
    issuer: "Linux Foundation / CNCF",
    issuerIcon:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg",
    issuedAt: "Expected Dec 2026",
    link: "https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/",
  },
];

export const siteMetadata = {
  title: "Shubham Kumar | Cloud Platform Engineer",
  description:
    "Cloud Platform Engineer and Site Reliability Engineer with a DevOps foundation, now increasingly focused on AI Platform Operations, FinOps, Kubernetes, and Multi-Cloud infrastructure.",
  keywords: [
    "Shubham Kumar",
    "Cloud Platform Engineer",
    "Site Reliability Engineer",
    "DevOps Engineer",
    "AI-Ops",
    "AI Platform Operations",
    "FinOps",
    "Kubernetes",
    "Multi-Cloud",
    "AWS Bedrock",
  ],
};
