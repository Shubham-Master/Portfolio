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
    "Cloud and DevOps engineer with 7+ years of experience building scalable, automated, and reliable infrastructure across AWS, Azure, and GCP. Focused on Kubernetes, CI/CD automation, infrastructure as code, observability, and platform reliability for distributed systems.",
  summaryLong:
    "I'm a Cloud and DevOps Engineer with hands-on experience in building scalable, automated, and reliable infrastructure across AWS, Azure, and GCP. I specialize in containerization, Kubernetes operations, CI/CD automation, and infrastructure as code, helping teams ship faster while improving reliability.\n\nMy focus is on designing secure, observable, and sustainable systems that perform consistently in production. I bring a mix of cloud architecture, automation, and reliability engineering to every environment I work on.\n\nHaving worked across multi-cloud and embedded-cloud integrations, I thrive in collaborative setups that balance innovation, performance, and long-term maintainability.",
  avatarUrl: "https://avatars.githubusercontent.com/u/155751376?v=4",
  personalWebsiteUrl: "https://cv-topaz-psi.vercel.app/",
  cta: {
    message:
      "Open to conversations about platform engineering, DevOps automation, cloud reliability, and distributed systems.",
    btn: BOOK_A_CALL_LINK,
  },
};

export const nav: Nav = {
  cal: BOOK_A_CALL_LINK,
  resume: "https://cv-topaz-psi.vercel.app/",
  footer_note:
    "Building reliable cloud platforms, automation workflows, and production systems that scale.",
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
    href: undefined,
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
    badges: ["Remote", "Platform Engineering"],
    title: "Cloud Platform Engineer",
    location: "Remote",
    logo: "/company-logos/singlestore.png",
    start: "Feb 2026",
    end: null,
    description: [
      "Building cloud platform capabilities focused on infrastructure automation, Kubernetes operations, and developer productivity.",
      "Contributing to reliable delivery workflows, platform tooling, and operational standards for distributed engineering teams.",
      "Working across cloud infrastructure, observability, and secure systems operations in a remote-first setup.",
    ],
  },
  {
    company: "AirFi Aviation Solutions",
    link: "https://airfi.aero/",
    badges: ["Bengaluru", "Promotion"],
    title: "Senior Software Engineer",
    location: "Bengaluru, Karnataka, India",
    logo: "/company-logos/airfi.png",
    start: "Aug 2025",
    end: "Mar 2026",
    description: [
      "Promoted to Senior Software Engineer to lead platform reliability, infrastructure automation, and release enablement initiatives.",
      "Drove improvements across CI/CD, observability, and production workflows to strengthen release reliability and incident response.",
      "Collaborated closely with QA, backend, and device teams to improve deployment confidence across production-critical systems.",
    ],
  },
  {
    company: "AirFi Aviation Solutions",
    link: "https://airfi.aero/",
    badges: ["Bengaluru", "Embedded Fleet"],
    title: "DevOps Engineer",
    location: "Bengaluru, Karnataka, India",
    logo: "/company-logos/airfi.png",
    start: "Oct 2023",
    end: "Jul 2025",
    description: [
      "Developed and deployed automation solutions across a fleet of 8,000+ embedded devices.",
      "Automated firmware rollout pipelines, cutting release time by 40% across production environments.",
      "Built telemetry-based PMIC monitoring and secure LTE-based diagnostics, improving fault detection and reducing MTTR by 35%.",
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
      "Improved reliability practices through custom tooling and hands-on monitoring improvements.",
      "Developed internal monitoring tools to enhance observability across day-to-day operations.",
      "Streamlined ServiceNow incident workflows to reduce escalation rates and improve support efficiency.",
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
    end: "May 2023",
    description: [
      "Built Jenkins pipelines integrating Prometheus and Grafana dashboards for better pipeline and environment visibility.",
      "Managed AWS-based environments with a focus on scalability, uptime, and dependable delivery workflows.",
      "Administered Kubernetes workloads with resource optimization across QA and production-adjacent systems.",
    ],
  },
  {
    company: "Extreme Soft Management",
    link: "",
    badges: ["Ranchi", "Automation"],
    title: "Software Engineer",
    location: "Ranchi, Jharkhand, India",
    logo: "/company-logos/extreme-soft.svg",
    start: "Apr 2019",
    end: "Sep 2021",
    description: [
      "Maintained production systems and introduced automation for repetitive infrastructure and operational tasks.",
      "Automated workflows that saved 80+ engineering hours per month across recurring processes.",
      "Improved uptime through system hardening, deployment standardization, and Linux-based operational support.",
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
    href: "https://en.wikipedia.org/wiki/C_(programming_language)",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
    skill: "Embedded C",
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
    title: "Platform Engineering & Cloud Architecture",
    icon: "ion:layers-outline",
    description:
      "Designing secure, scalable cloud platforms across AWS, Azure, and GCP with a strong focus on maintainability and developer enablement.",
  },
  {
    title: "CI/CD & Release Automation",
    icon: "ion:git-compare-outline",
    description:
      "Building automation pipelines that improve release confidence, reduce cycle time, and standardize deployments across teams and environments.",
  },
  {
    title: "Reliability, Monitoring & Incident Response",
    icon: "ion:pulse-outline",
    description:
      "Improving uptime, observability, and operational readiness through monitoring, alerting, diagnostics, and long-term reliability fixes.",
  },
];

export const projects: Project[] = [
  {
    title: "Kubernetes Platform Engineering",
    link: "https://github.com/Shubham-Master",
    description:
      "Designed and operated a production Kubernetes platform on AWS, including automated cluster provisioning with Terraform, GitOps-based deployments via Argo CD, and Helm-managed application lifecycles.",
    stack: ["Kubernetes", "Terraform", "AWS", "Helm", "Argo CD"],
  },
  {
    title: "Serverless Log Processing Pipeline",
    link: "https://github.com/Shubham-Master",
    description:
      "Built a high-throughput serverless log ingestion pipeline using AWS Lambda and SQS to process telemetry from thousands of embedded devices, improving observability and reducing manual debugging effort.",
    stack: ["AWS Lambda", "SQS", "S3", "Go", "MongoDB"],
  },
  {
    title: "Multi-Cloud Infrastructure Framework",
    link: "https://github.com/Shubham-Master",
    description:
      "Created a reusable Infrastructure-as-Code framework enabling consistent provisioning across AWS, Azure, and GCP with standardized networking, IAM, compute, and monitoring modules.",
    stack: ["Terraform", "AWS", "Azure", "GCP", "Ansible"],
  },
  {
    title: "CI/CD Automation & Release Engineering",
    link: "https://github.com/Shubham-Master",
    description:
      "Implemented end-to-end CI/CD pipelines for firmware and backend services with automated testing, artifact management, staged rollouts, and stronger rollback strategies.",
    stack: ["Jenkins", "GitHub Actions", "Docker", "Bash", "Python"],
  },
  {
    title: "Embedded Fleet Monitoring & Diagnostics",
    link: "https://github.com/Shubham-Master",
    description:
      "Developed monitoring and diagnostics workflows for 8,000+ embedded Linux devices, integrating Kafka-based event streaming and Elasticsearch-backed analytics for proactive fault detection.",
    stack: ["Linux", "AWS", "Kafka", "Python", "Elasticsearch"],
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

export const certificates: Certificate[] = [];

export const siteMetadata = {
  title: "Shubham Kumar | Cloud Platform Engineer",
  description:
    "Cloud Platform Engineer focused on DevOps, Kubernetes, automation, and reliable cloud infrastructure across distributed systems.",
  keywords: [
    "Shubham Kumar",
    "Cloud Platform Engineer",
    "DevOps Engineer",
    "Kubernetes",
    "Platform Engineering",
    "AWS",
    "CI/CD",
    "Site Reliability Engineering",
  ],
};
