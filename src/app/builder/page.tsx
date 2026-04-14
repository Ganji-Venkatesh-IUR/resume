// Resume builder page - two column layout with form and live preview
'use client'

import { useState } from 'react'
import ResumeForm from '@/components/ResumeForm'
import ResumePreview from '@/components/ResumePreview'
import { ResumeData } from '@/types/resume'

const initialResumeData: ResumeData = {
  contactInfo: {
    fullName: '',
    email: '',
    phone: '',
    linkedinUrl: '',
    location: '',
    portfolioUrl: '',
  },
  educations: [],
  skills: {
    technical: [],
    tools: [],
    programmingLanguages: [],
  },
  experiences: [],
  projects: [],
}

export default function BuilderPage() {
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData)

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 max-w-7xl mx-auto">
        {/* Left Side - Form */}
        <div className="bg-white rounded-lg shadow-lg p-6 overflow-y-auto max-h-screen">
          <h2 className="text-2xl font-bold text-naukrai-primary mb-6">Build Your Resume</h2>
          <ResumeForm resumeData={resumeData} setResumeData={setResumeData} />
        </div>

        {/* Right Side - Preview */}
        <div className="bg-white rounded-lg shadow-lg p-6 overflow-y-auto max-h-screen hidden lg:block">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Live Preview</h2>
          <ResumePreview resumeData={resumeData} />
        </div>

        {/* Mobile Preview */}
        <div className="lg:hidden bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Preview</h2>
          <ResumePreview resumeData={resumeData} />
        </div>
      </div>
    </div>
  )
}
