import { Icon } from "@iconify/react";
import type { Project } from "@/types";
import SectionHeader from "./SectionHeader";

interface ProjectsProps {
  projects: Project[];
}

const STACK_ICONS: Record<string, string> = {
  Kubernetes: "devicon:kubernetes",
  Terraform: "devicon:terraform",
  AWS: "skill-icons:aws-dark",
  Helm: "devicon:helm",
  "Argo CD": "devicon:argocd",
  "AWS Lambda": "skill-icons:aws-dark",
  SQS: "skill-icons:aws-dark",
  S3: "skill-icons:aws-dark",
  Go: "devicon:go",
  MongoDB: "devicon:mongodb",
  Azure: "devicon:azure",
  GCP: "devicon:googlecloud",
  Ansible: "devicon:ansible",
  Jenkins: "devicon:jenkins",
  "GitHub Actions": "devicon:githubactions",
  Docker: "devicon:docker",
  Bash: "devicon:bash",
  Python: "devicon:python",
  Linux: "devicon:linux",
  Kafka: "devicon:apachekafka",
  Elasticsearch: "devicon:elasticsearch",
};

export default function Projects({ projects }: ProjectsProps) {
  const isSingle = projects.length === 1;

  return (
    <section id="projects" className="section-base">
      <SectionHeader
        label="Selected Work"
        title="A few things I've built and improved"
        description="These projects reflect the kind of work I enjoy most: strengthening platforms, simplifying operations, and building reliable workflows around real systems."
      />

      <div className={`grid grid-cols-1 gap-6 ${!isSingle ? "lg:grid-cols-2" : ""}`}>
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="surface-card group block"
          >
            <div className={isSingle ? "p-8 sm:p-10" : "p-7 h-full"}>
              <div className="flex items-start justify-between gap-4 mb-4">
                <p className="font-label text-[11px] uppercase tracking-wider text-on-surface-variant">
                  {isSingle ? "Featured Project" : "Selected Project"}
                </p>
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded border border-outline text-on-surface-variant transition-colors duration-150 group-hover:border-primary/60 group-hover:text-primary">
                  <Icon icon="mdi:github" width={18} />
                </div>
              </div>

              <h3
                className={`font-headline font-bold tracking-tight text-on-surface group-hover:text-primary transition-colors mb-3 ${
                  isSingle ? "text-2xl sm:text-3xl" : "text-xl"
                }`}
              >
                {project.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-on-surface-variant">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {project.stack.map((item) => {
                  const icon = STACK_ICONS[item];
                  return (
                    <span
                      key={item}
                      className="badge flex items-center gap-1.5 normal-case"
                    >
                      {icon && <Icon icon={icon} width={13} className="flex-shrink-0" />}
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
