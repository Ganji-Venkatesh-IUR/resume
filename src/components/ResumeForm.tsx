// Main resume form component - combines all form sections with tabs
'use client'

import { useState } from 'react'
import { ResumeData } from '@/types/resume'
import ContactForm from './ContactForm'
import EducationForm from './EducationForm'
import SkillsForm from './SkillsForm'
import ExperienceForm from './ExperienceForm'
import ProjectsForm from './ProjectsForm'

interface ResumeFormProps {
  resumeData: ResumeData
  setResumeData: (data: ResumeData) => void
}

export default function ResumeForm({ resumeData, setResumeData }: ResumeFormProps) {
  const [activeTab, setActiveTab] = useState<'contact' | 'education' | 'skills' | 'experience' | 'projects'>('contact')

  const handleContactChange = (field: keyof typeof resumeData.contactInfo, value: string) => {
    setResumeData({
      ...resumeData,
      contactInfo: { ...resumeData.contactInfo, [field]: value },
    })
  }

  const handleEducationChange = (index: number, field: string, value: string | number) => {
    const newEducations = [...resumeData.educations]
    const edu = newEducations[index]
    if (edu) {
      (edu as unknown as Record<string, string | number>)[field] = value
    }
    setResumeData({ ...resumeData, educations: newEducations })
  }

  const handleAddEducation = () => {
    setResumeData({
      ...resumeData,
      educations: [
        ...resumeData.educations,
        { degree: '', branch: '', collegeName: '', university: '', startYear: 0, endYear: 0, cgpaPercentage: '' },
      ],
    })
  }

  const handleSkillsChange = (field: keyof typeof resumeData.skills, value: string[]) => {
    setResumeData({
      ...resumeData,
      skills: { ...resumeData.skills, [field]: value },
    })
  }

  const handleExperienceChange = (index: number, field: string, value: string | boolean | string[]) => {
    const newExperiences = [...resumeData.experiences]
    const exp = newExperiences[index]
    if (exp) {
      (exp as unknown as Record<string, string | boolean | string[]>)[field] = value
    }
    setResumeData({ ...resumeData, experiences: newExperiences })
  }

  const handleAddExperience = () => {
    setResumeData({
      ...resumeData,
      experiences: [
        ...resumeData.experiences,
        { companyName: '', jobTitle: '', startDate: '', endDate: '', isCurrentJob: false, responsibilities: [] },
      ],
    })
  }

  const handleProjectsChange = (index: number, field: string, value: string | string[]) => {
    const newProjects = [...resumeData.projects]
    const proj = newProjects[index]
    if (proj) {
      (proj as unknown as Record<string, string | string[]>)[field] = value
    }
    setResumeData({ ...resumeData, projects: newProjects })
  }

  const handleAddProject = () => {
    setResumeData({
      ...resumeData,
      projects: [
        ...resumeData.projects,
        { projectName: '', technologiesUsed: '', projectUrl: '', githubUrl: '', description: [] },
      ],
    })
  }

  return (
    <div>
      {/* Tab Navigation */}
      <div className="flex gap-2 mb-6 border-b border-gray-200">
        {['contact', 'education', 'skills', 'experience', 'projects'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`px-4 py-2 font-semibold transition ${
              activeTab === tab
                ? 'text-naukrai-primary border-b-2 border-naukrai-primary'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="space-y-6">
        {activeTab === 'contact' && (
          <ContactForm contactInfo={resumeData.contactInfo} onChange={handleContactChange} />
        )}

        {activeTab === 'education' && (
          <EducationForm
            education={resumeData.educations}
            onChange={handleEducationChange}
            onAdd={handleAddEducation}
          />
        )}

        {activeTab === 'skills' && <SkillsForm skills={resumeData.skills} onChange={handleSkillsChange} />}

        {activeTab === 'experience' && (
          <ExperienceForm
            experiences={resumeData.experiences}
            onChange={handleExperienceChange}
            onAdd={handleAddExperience}
          />
        )}

        {activeTab === 'projects' && (
          <ProjectsForm projects={resumeData.projects} onChange={handleProjectsChange} onAdd={handleAddProject} />
        )}
      </div>
    </div>
  )
}
