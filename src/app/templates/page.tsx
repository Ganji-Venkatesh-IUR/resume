// Template gallery page - browse and select resume templates
'use client'

import TemplateCard from '@/components/TemplateCard'
import { templateMetadata } from '@/templates/metadata'

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Resume Templates</h1>
        <p className="text-gray-600 mb-12">Choose from our collection of ATS-optimized resume templates</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templateMetadata.map((template) => (
            <TemplateCard
              key={template.id}
              name={template.name}
              suitableFor={template.suitableFor}
              atsScore={template.atsScore}
              description={template.description}
              onUseTemplate={() => window.location.href = `/builder?template=${template.id}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
