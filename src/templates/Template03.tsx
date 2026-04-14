// Template 03 - Finance/corporate template, traditional and formal
'use client'

import { ResumeData } from '@/types/resume'

interface Template03Props {
  data: ResumeData
}

export default function Template03({ data }: Template03Props) {
  return (
    <div className="bg-white p-12 max-w-4xl mx-auto space-y-5" style={{ fontFamily: 'Georgia, serif' }}>
      {/* Header */}
      <div className="text-center border-b-4 border-black pb-4">
        <h1 className="text-4xl font-bold">{data.contactInfo.fullName}</h1>
        <p className="text-sm mt-2 letter-spacing: 2px">
          {[data.contactInfo.email, data.contactInfo.phone, data.contactInfo.location]
            .filter(Boolean)
            .join(' • ')}
        </p>
      </div>

      {/* Professional Summary */}
      <div>
        <h2 className="text-sm font-bold uppercase tracking-wider border-l-4 border-black pl-3 mb-3">
          Professional Profile
        </h2>
        <p className="text-justify text-sm">
          Accomplished finance professional with proven expertise in financial analysis, risk management, and strategic planning.
        </p>
      </div>

      {/* Experience */}
      {data.experiences.length > 0 && (
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider border-l-4 border-black pl-3 mb-3">
            Professional Experience
          </h2>
          {data.experiences.map((exp, idx) => (
            <div key={idx} className="mb-4">
              <div className="flex justify-between items-baseline">
                <span className="font-bold">{exp.jobTitle}</span>
                <span className="text-xs">{exp.startDate} – {exp.isCurrentJob ? 'Present' : exp.endDate}</span>
              </div>
              <div className="text-sm font-semibold text-gray-700">{exp.companyName}</div>
              {exp.responsibilities && (
                <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                  {exp.responsibilities.map((resp, respIdx) => (
                    resp && <li key={respIdx}>{resp}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {data.educations.length > 0 && (
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider border-l-4 border-black pl-3 mb-3">
            Education
          </h2>
          {data.educations.map((edu, idx) => (
            <div key={idx} className="mb-3">
              <div className="font-bold">{edu.degree} in {edu.branch}</div>
              <div className="text-sm text-gray-700">{edu.collegeName}, {edu.university}</div>
              <div className="text-xs text-gray-600">{edu.startYear} – {edu.endYear} | CGPA: {edu.cgpaPercentage}</div>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {(data.skills.technical.length > 0 || data.skills.programmingLanguages.length > 0) && (
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider border-l-4 border-black pl-3 mb-3">
            Core Competencies
          </h2>
          <div className="text-sm text-gray-800">
            {[...data.skills.technical, ...data.skills.programmingLanguages, ...data.skills.tools]
              .filter(Boolean)
              .join(' • ')}
          </div>
        </div>
      )}
    </div>
  )
}
