import type {
  Me,
  Social,
  Contact,
  Nav,
  Experience,
  Skill,
  Service,
  Project,
  Testimonial,
  Certificate,
} from "@/types";
import {
  certificates,
  contacts,
  experiences,
  me,
  nav,
  projects,
  services,
  skills,
  socials,
  testimonials,
} from "./portfolio-data";

export async function getMe(): Promise<Me> {
  return me;
}

export async function getSocials(): Promise<Social[]> {
  return socials;
}

export async function getContacts(): Promise<Contact[]> {
  return contacts;
}

export async function getNav(): Promise<Nav> {
  return nav;
}

export async function getExperience(): Promise<Experience[]> {
  return experiences;
}

export async function getSkills(): Promise<Skill[]> {
  return skills;
}

export async function getServices(): Promise<Service[]> {
  return services;
}

export async function getProjects(): Promise<Project[]> {
  return projects;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return testimonials;
}

export async function getCertificates(): Promise<Certificate[]> {
  return certificates;
}
