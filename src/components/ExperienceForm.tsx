// Experience form component - job details and responsibilities
'use client'

import { Experience } from '@/types/resume'

interface ExperienceFormProps {
  experiences: Experience[]
  onChange: (index: number, field: keyof Experience, value: string | boolean | string[]) => void
  onAdd: () => void
}

export default function ExperienceForm({ experiences, onChange, onAdd }: ExperienceFormProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Experience</h3>

      {experiences.map((exp, index) => (
        <div key={index} className="border border-gray-200 rounded-lg p-4 space-y-3">
          <div>
            <label className="form-label">Company Name</label>
            <input
              type="text"
              value={exp.companyName}
              onChange={(e) => onChange(index, 'companyName', e.target.value)}
              className="form-input"
              placeholder="Tech Company Inc."
            />
          </div>

          <div>
            <label className="form-label">Job Title</label>
            <input
              type="text"
              value={exp.jobTitle}
              onChange={(e) => onChange(index, 'jobTitle', e.target.value)}
              className="form-input"
              placeholder="Software Engineer"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="form-label">Start Date</label>
              <input
                type="date"
                value={exp.startDate}
                onChange={(e) => onChange(index, 'startDate', e.target.value)}
                className="form-input"
              />
            </div>
            <div>
              <label className="form-label">End Date</label>
              <input
                type="date"
                value={exp.endDate}
                onChange={(e) => onChange(index, 'endDate', e.target.value)}
                className="form-input"
              />
            </div>
          </div>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={exp.isCurrentJob}
              onChange={(e) => onChange(index, 'isCurrentJob', e.target.checked)}
              className="w-4 h-4 cursor-pointer"
            />
            <span className="text-sm font-medium text-gray-700">Is Current Job</span>
          </label>

          <div>
            <label className="form-label">Responsibilities</label>
            {(exp.responsibilities || []).map((resp, respIdx) => (
              <input
                key={respIdx}
                type="text"
                value={resp}
                onChange={(e) => {
                  const newResp = [...(exp.responsibilities || [])]
                  newResp[respIdx] = e.target.value
                  onChange(index, 'responsibilities', newResp)
                }}
                className="form-input mb-2"
                placeholder={`Responsibility ${respIdx + 1}`}
              />
            ))}
          </div>
        </div>
      ))}

      <button onClick={onAdd} className="btn-secondary w-full">
        + Add Experience
      </button>
    </div>
  )
}
