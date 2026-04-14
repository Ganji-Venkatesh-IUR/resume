// Skills form component - technical skills, tools, programming languages
'use client'

import { useState } from 'react'
import { Skills } from '@/types/resume'

interface SkillsFormProps {
  skills: Skills
  onChange: (field: keyof Skills, value: string[]) => void
}

export default function SkillsForm({ skills, onChange }: SkillsFormProps) {
  const handleAddSkill = (field: keyof Skills, value: string) => {
    if (value.trim()) {
      onChange(field, [...skills[field], value.trim()])
    }
  }

  const handleRemoveSkill = (field: keyof Skills, index: number) => {
    onChange(field, skills[field].filter((_, i) => i !== index))
  }

  const renderSkillsSection = (title: string, field: keyof Skills) => {
    const [input, setInput] = useState('')

    return (
      <div>
        <label className="form-label">{title}</label>
        <div className="flex gap-2 mb-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="form-input"
            placeholder={`Add ${title.toLowerCase()} (comma separated)`}
          />
          <button
            onClick={() => {
              handleAddSkill(field, input)
              setInput('')
            }}
            className="btn-primary px-4"
          >
            Add
          </button>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {skills[field].map((skill, idx) => (
            <div key={idx} className="bg-blue-100 text-naukrai-primary px-3 py-1 rounded-full text-sm flex items-center gap-2">
              {skill}
              <button
                onClick={() => handleRemoveSkill(field, idx)}
                className="font-bold hover:text-blue-900"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Skills</h3>
      {renderSkillsSection('Technical Skills', 'technical')}
      {renderSkillsSection('Tools and Software', 'tools')}
      {renderSkillsSection('Programming Languages', 'programmingLanguages')}
    </div>
  )
}
