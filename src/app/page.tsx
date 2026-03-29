import {
  getMe,
  getSocials,
  getContacts,
  getNav,
  getExperience,
  getSkills,
  getServices,
  getProjects,
  getTestimonials,
} from "@/lib/api";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ScrollProgress from "@/components/ScrollProgress";
import TechMarquee from "@/components/TechMarquee";
import About from "@/components/About";
import ExperienceSection from "@/components/Experience";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

export default async function Home() {
  const [me, socials, contacts, nav, experience, skills, services, projects, testimonials] =
    await Promise.all([
      getMe(),
      getSocials(),
      getContacts(),
      getNav(),
      getExperience(),
      getSkills(),
      getServices(),
      getProjects(),
      getTestimonials(),
    ]);

  return (
    <>
      <Navigation me={me} nav={nav} />
      <ScrollProgress />

      <main>
        <Hero me={me} socials={socials} nav={nav} experience={experience} />
        <TechMarquee
          items={[
            "Kubernetes",
            "AWS",
            "Terraform",
            "CI/CD",
            "Observability",
            "Linux",
            "DevOps",
            "Platform Engineering",
            "Automation",
            "Incident Response",
          ]}
        />
        <SectionDivider />

        <About me={me} contacts={contacts} experience={experience} />
        <SectionDivider />

        <ExperienceSection experiences={experience} />
        <SectionDivider />

        <Skills skills={skills} />
        <SectionDivider />

        <Services services={services} />
        <SectionDivider />

        <Projects projects={projects} />
        <SectionDivider />

        <Testimonials testimonials={testimonials} />
        <SectionDivider />

        <Contact contacts={contacts} me={me} socials={socials} />
      </main>

      <Footer socials={socials} nav={nav} me={me} />
    </>
  );
}
