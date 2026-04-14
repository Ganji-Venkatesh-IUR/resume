// Template 01 - Clean single column ATS-safe resume template
'use client'

import { ResumeData } from '@/types/resume'

interface Template01Props {
  data: ResumeData
}

export default function Template01({ data }: Template01Props) {
  return (
    <div className="bg-white p-12 max-w-4xl mx-auto space-y-4 text-black" style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}
      {data.contactInfo.fullName && (
        <div className="text-center pb-4 border-b-2 border-black">
          <h1 className="text-3xl font-bold">{data.contactInfo.fullName}</h1>
          <div className="text-sm mt-2">
            {[data.contactInfo.email, data.contactInfo.phone, data.contactInfo.location]
              .filter(Boolean)
              .join(' | ')}
          </div>
        </div>
      )}

      {/* Education */}
      {data.educations.length > 0 && (
        <div>
          <h2 className="text-lg font-bold uppercase">EDUCATION</h2>
          {data.educations.map((edu, idx) => (
            <div key={idx} className="mt-2">
              <div className="font-bold">
                {edu.degree} in {edu.branch}
              </div>
              <div>{edu.collegeName}, {edu.university}</div>
              <div className="text-sm">
                {edu.startYear} - {edu.endYear} | CGPA: {edu.cgpaPercentage}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {(data.skills.technical.length > 0 || data.skills.programmingLanguages.length > 0) && (
        <div>
          <h2 className="text-lg font-bold uppercase">SKILLS</h2>
          {data.skills.technical.length > 0 && (
            <div className="mt-1">
              <span className="font-bold">Technical:</span> {data.skills.technical.join(', ')}
            </div>
          )}
          {data.skills.programmingLanguages.length > 0 && (
            <div>
              <span className="font-bold">Languages:</span> {data.skills.programmingLanguages.join(', ')}
            </div>
          )}
        </div>
      )}

      {/* Experience */}
      {data.experiences.length > 0 && (
        <div>
          <h2 className="text-lg font-bold uppercase">EXPERIENCE</h2>
          {data.experiences.map((exp, idx) => (
            <div key={idx} className="mt-2">
              <div className="font-bold">{exp.jobTitle} - {exp.companyName}</div>
              <div className="text-sm">
                {exp.startDate} to {exp.isCurrentJob ? 'Present' : exp.endDate}
              </div>
              {exp.responsibilities && (
                <ul className="list-disc list-inside mt-1 text-sm">
                  {exp.responsibilities.map((resp, respIdx) => (
                    resp && <li key={respIdx}>{resp}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Projects */}
      {data.projects.length > 0 && (
        <div>
          <h2 className="text-lg font-bold uppercase">PROJECTS</h2>
          {data.projects.map((proj, idx) => (
            <div key={idx} className="mt-2">
              <div className="font-bold">{proj.projectName}</div>
              {proj.technologiesUsed && <div className="text-sm">{proj.technologiesUsed}</div>}
              {proj.description && (
                <ul className="list-disc list-inside text-sm">
                  {proj.description.map((desc, descIdx) => (
                    desc && <li key={descIdx}>{desc}</li>
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
