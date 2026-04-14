// Template 02 - Two column template for tech/developer roles
'use client'

import { ResumeData } from '@/types/resume'

interface Template02Props {
  data: ResumeData
}

export default function Template02({ data }: Template02Props) {
  return (
    <div className="bg-white p-8 max-w-5xl mx-auto grid grid-cols-3 gap-8">
      {/* Left Column */}
      <div className="col-span-1 bg-blue-50 p-6 rounded space-y-6">
        {/* Contact */}
        <div>
          <h3 className="text-sm font-bold text-naukrai-primary uppercase mb-2">Contact</h3>
          {data.contactInfo.email && <div className="text-xs">{data.contactInfo.email}</div>}
          {data.contactInfo.phone && <div className="text-xs">{data.contactInfo.phone}</div>}
          {data.contactInfo.location && <div className="text-xs">{data.contactInfo.location}</div>}
          {data.contactInfo.linkedinUrl && (
            <div className="text-xs text-blue-600 break-all">{data.contactInfo.linkedinUrl}</div>
          )}
        </div>

        {/* Skills */}
        {data.skills.technical.length > 0 && (
          <div>
            <h3 className="text-sm font-bold text-naukrai-primary uppercase mb-2">Technical Skills</h3>
            <div className="text-xs space-y-1">
              {data.skills.technical.map((skill, idx) => (
                <div key={idx} className="break-words">{skill}</div>
              ))}
            </div>
          </div>
        )}

        {/* Languages */}
        {data.skills.programmingLanguages.length > 0 && (
          <div>
            <h3 className="text-sm font-bold text-naukrai-primary uppercase mb-2">Languages</h3>
            <div className="text-xs space-y-1">
              {data.skills.programmingLanguages.map((lang, idx) => (
                <div key={idx}>{lang}</div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {data.educations.length > 0 && (
          <div>
            <h3 className="text-sm font-bold text-naukrai-primary uppercase mb-2">Education</h3>
            {data.educations.map((edu, idx) => (
              <div key={idx} className="text-xs mb-3">
                <div className="font-bold">{edu.degree}</div>
                <div>{edu.collegeName}</div>
                <div className="text-gray-600">{edu.startYear} - {edu.endYear}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Right Column */}
      <div className="col-span-2 space-y-6">
        {/* Header */}
        <div className="border-b-2 border-naukrai-primary pb-3">
          <h1 className="text-3xl font-bold">{data.contactInfo.fullName}</h1>
          <p className="text-gray-600">Software Developer</p>
        </div>

        {/* Experience */}
        {data.experiences.length > 0 && (
          <div>
            <h2 className="text-lg font-bold text-naukrai-primary uppercase mb-3">Experience</h2>
            {data.experiences.map((exp, idx) => (
              <div key={idx} className="mb-4">
                <div className="flex justify-between">
                  <span className="font-bold">{exp.jobTitle}</span>
                  <span className="text-sm text-gray-600">{exp.startDate} - {exp.isCurrentJob ? 'Present' : exp.endDate}</span>
                </div>
                <div className="text-gray-700">{exp.companyName}</div>
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
            <h2 className="text-lg font-bold text-naukrai-primary uppercase mb-3">Projects</h2>
            {data.projects.map((proj, idx) => (
              <div key={idx} className="mb-4">
                <div className="font-bold">{proj.projectName}</div>
                {proj.technologiesUsed && <div className="text-sm text-gray-600">{proj.technologiesUsed}</div>}
                {proj.description && (
                  <ul className="list-disc list-inside text-sm mt-1">
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
    </div>
  )
}
