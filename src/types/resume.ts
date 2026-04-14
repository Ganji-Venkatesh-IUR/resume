// Resume data types - TypeScript interfaces for all resume sections
export interface ContactInfo {
  fullName: string
  email: string
  phone: string
  linkedinUrl: string
  location: string
  portfolioUrl: string
}

export interface Education {
  degree: string
  branch: string
  collegeName: string
  university: string
  startYear: number
  endYear: number
  cgpaPercentage: string
}

export interface Experience {
  companyName: string
  jobTitle: string
  startDate: string
  endDate: string
  isCurrentJob: boolean
  responsibilities: string[]
}

export interface Project {
  projectName: string
  technologiesUsed: string
  projectUrl: string
  githubUrl: string
  description: string[]
}

export interface Skills {
  technical: string[]
  tools: string[]
  programmingLanguages: string[]
}

export interface GovernmentBiodata {
  fathersName: string
  mothersName: string
  category: 'General' | 'OBC' | 'SC' | 'ST'
  dateOfBirth: string
  permanentAddress: string
  languagesKnown: string[]
}

export interface ResumeData {
  contactInfo: ContactInfo
  educations: Education[]
  skills: Skills
  experiences: Experience[]
  projects: Project[]
}
