// Education details form component - degree, college, CGPA
'use client'

import { Education } from '@/types/resume'

interface EducationFormProps {
  education: Education[]
  onChange: (index: number, field: keyof Education, value: string | number) => void
  onAdd: () => void
}

export default function EducationForm({ education, onChange, onAdd }: EducationFormProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Education</h3>

      {education.map((edu, index) => (
        <div key={index} className="border border-gray-200 rounded-lg p-4 space-y-3">
          <div>
            <label className="form-label">Degree</label>
            <input
              type="text"
              value={edu.degree}
              onChange={(e) => onChange(index, 'degree', e.target.value)}
              className="form-input"
              placeholder="B.Tech"
            />
          </div>

          <div>
            <label className="form-label">Branch/Major</label>
            <input
              type="text"
              value={edu.branch}
              onChange={(e) => onChange(index, 'branch', e.target.value)}
              className="form-input"
              placeholder="Computer Science"
            />
          </div>

          <div>
            <label className="form-label">College Name</label>
            <input
              type="text"
              value={edu.collegeName}
              onChange={(e) => onChange(index, 'collegeName', e.target.value)}
              className="form-input"
              placeholder="IIT Bangalore"
            />
          </div>

          <div>
            <label className="form-label">University</label>
            <input
              type="text"
              value={edu.university}
              onChange={(e) => onChange(index, 'university', e.target.value)}
              className="form-input"
              placeholder="Visvesvaraya Technological University"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="form-label">Start Year</label>
              <input
                type="number"
                value={edu.startYear}
                onChange={(e) => onChange(index, 'startYear', Number(e.target.value))}
                className="form-input"
                placeholder="2020"
              />
            </div>
            <div>
              <label className="form-label">End Year</label>
              <input
                type="number"
                value={edu.endYear}
                onChange={(e) => onChange(index, 'endYear', Number(e.target.value))}
                className="form-input"
                placeholder="2024"
              />
            </div>
          </div>

          <div>
            <label className="form-label">CGPA/Percentage</label>
            <input
              type="text"
              value={edu.cgpaPercentage}
              onChange={(e) => onChange(index, 'cgpaPercentage', e.target.value)}
              className="form-input"
              placeholder="8.5"
            />
          </div>
        </div>
      ))}

      <button onClick={onAdd} className="btn-secondary w-full">
        + Add Education
      </button>
    </div>
  )
}
