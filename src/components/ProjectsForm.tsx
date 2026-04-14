// Projects form component - project details and descriptions
'use client'

import { Project } from '@/types/resume'

interface ProjectsFormProps {
  projects: Project[]
  onChange: (index: number, field: keyof Project, value: string | string[]) => void
  onAdd: () => void
}

export default function ProjectsForm({ projects, onChange, onAdd }: ProjectsFormProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Projects</h3>

      {projects.map((project, index) => (
        <div key={index} className="border border-gray-200 rounded-lg p-4 space-y-3">
          <div>
            <label className="form-label">Project Name</label>
            <input
              type="text"
              value={project.projectName}
              onChange={(e) => onChange(index, 'projectName', e.target.value)}
              className="form-input"
              placeholder="Resume Builder App"
            />
          </div>

          <div>
            <label className="form-label">Technologies Used</label>
            <input
              type="text"
              value={project.technologiesUsed}
              onChange={(e) => onChange(index, 'technologiesUsed', e.target.value)}
              className="form-input"
              placeholder="React, Node.js, MongoDB"
            />
          </div>

          <div>
            <label className="form-label">Project URL</label>
            <input
              type="url"
              value={project.projectUrl}
              onChange={(e) => onChange(index, 'projectUrl', e.target.value)}
              className="form-input"
              placeholder="https://project.com"
            />
          </div>

          <div>
            <label className="form-label">GitHub URL</label>
            <input
              type="url"
              value={project.githubUrl}
              onChange={(e) => onChange(index, 'githubUrl', e.target.value)}
              className="form-input"
              placeholder="https://github.com/user/project"
            />
          </div>

          <div>
            <label className="form-label">Description (Bullet Points)</label>
            {(project.description || []).map((desc, descIdx) => (
              <textarea
                key={descIdx}
                value={desc}
                onChange={(e) => {
                  const newDesc = [...(project.description || [])]
                  newDesc[descIdx] = e.target.value
                  onChange(index, 'description', newDesc)
                }}
                className="form-input h-12 mb-2 resize-none"
                placeholder={`Description point ${descIdx + 1}`}
              />
            ))}
          </div>
        </div>
      ))}

      <button onClick={onAdd} className="btn-secondary w-full">
        + Add Project
      </button>
    </div>
  )
}
