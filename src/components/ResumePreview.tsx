// Resume preview component - displays live resume preview
'use client'

import { ResumeData } from '@/types/resume'

interface ResumePreviewProps {
  resumeData: ResumeData
}

export default function ResumePreview({ resumeData }: ResumePreviewProps) {
  return (
    <div className="bg-white p-8 space-y-6 text-sm leading-relaxed">
      {/* Contact Info */}
      {resumeData.contactInfo.fullName && (
        <div>
          <h1 className="text-3xl font-bold">{resumeData.contactInfo.fullName}</h1>
          <div className="text-gray-600 text-xs mt-2">
            {resumeData.contactInfo.email && <span>{resumeData.contactInfo.email} | </span>}
            {resumeData.contactInfo.phone && <span>{resumeData.contactInfo.phone} | </span>}
            {resumeData.contactInfo.location && <span>{resumeData.contactInfo.location}</span>}
          </div>
          {resumeData.contactInfo.linkedinUrl && (
            <div className="text-xs text-blue-600">
              LinkedIn: <a href={resumeData.contactInfo.linkedinUrl}>{resumeData.contactInfo.linkedinUrl}</a>
            </div>
          )}
        </div>
      )}

      {/* Education */}
      {resumeData.educations.length > 0 && (
        <div>
          <h2 className="text-lg font-bold border-b border-gray-300 pb-2">EDUCATION</h2>
          {resumeData.educations.map((edu, idx) => (
            <div key={idx} className="mt-3">
              <div className="flex justify-between">
                <span className="font-semibold">{edu.degree} in {edu.branch}</span>
                <span className="text-gray-600">{edu.startYear} - {edu.endYear}</span>
              </div>
              <div>{edu.collegeName}, {edu.university}</div>
              {edu.cgpaPercentage && <div className="text-gray-600">CGPA: {edu.cgpaPercentage}</div>}
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {(resumeData.skills.technical.length > 0 ||
        resumeData.skills.tools.length > 0 ||
        resumeData.skills.programmingLanguages.length > 0) && (
        <div>
          <h2 className="text-lg font-bold border-b border-gray-300 pb-2">SKILLS</h2>
          {resumeData.skills.technical.length > 0 && (
            <div className="mt-2">
              <span className="font-semibold">Technical Skills: </span>
              <span>{resumeData.skills.technical.join(', ')}</span>
            </div>
          )}
          {resumeData.skills.programmingLanguages.length > 0 && (
            <div>
              <span className="font-semibold">Languages: </span>
              <span>{resumeData.skills.programmingLanguages.join(', ')}</span>
            </div>
          )}
          {resumeData.skills.tools.length > 0 && (
            <div>
              <span className="font-semibold">Tools: </span>
              <span>{resumeData.skills.tools.join(', ')}</span>
            </div>
          )}
        </div>
      )}

      {/* Experience */}
      {resumeData.experiences.length > 0 && (
        <div>
          <h2 className="text-lg font-bold border-b border-gray-300 pb-2">EXPERIENCE</h2>
          {resumeData.experiences.map((exp, idx) => (
            <div key={idx} className="mt-3">
              <div className="flex justify-between">
                <span className="font-semibold">{exp.jobTitle}</span>
                <span className="text-gray-600">{exp.startDate} - {exp.isCurrentJob ? 'Present' : exp.endDate}</span>
              </div>
              <div className="text-gray-700">{exp.companyName}</div>
              {exp.responsibilities && (
                <ul className="list-disc list-inside mt-1 text-gray-700">
                  {exp.responsibilities.map((resp, respIdx) => (
                    <li key={respIdx}>{resp}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Projects */}
      {resumeData.projects.length > 0 && (
        <div>
          <h2 className="text-lg font-bold border-b border-gray-300 pb-2">PROJECTS</h2>
          {resumeData.projects.map((proj, idx) => (
            <div key={idx} className="mt-3">
              <div className="font-semibold">{proj.projectName}</div>
              {proj.technologiesUsed && <div className="text-gray-600 text-xs">Tech: {proj.technologiesUsed}</div>}
              {proj.description && (
                <ul className="list-disc list-inside mt-1 text-gray-700">
                  {proj.description.map((desc, descIdx) => (
                    <li key={descIdx}>{desc}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
