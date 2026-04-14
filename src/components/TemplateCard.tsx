// Template card component - shows template preview and info
'use client'

interface TemplateCardProps {
  name: string
  suitableFor: string[]
  atsScore: number
  description: string
  onUseTemplate: () => void
}

export default function TemplateCard({
  name,
  suitableFor,
  atsScore,
  description,
  onUseTemplate,
}: TemplateCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden">
      {/* Thumbnail Placeholder */}
      <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center border-b border-gray-200">
        <div className="text-center">
          <div className="text-6xl mb-2">📃</div>
          <p className="text-gray-600 text-sm">Template Preview</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {suitableFor.map((tag, idx) => (
            <span key={idx} className="bg-blue-100 text-naukrai-primary px-2 py-1 rounded text-xs font-semibold">
              {tag}
            </span>
          ))}
        </div>

        {/* ATS Score */}
        <div className="flex items-center justify-between bg-gray-50 p-3 rounded">
          <span className="text-sm font-semibold text-gray-700">ATS Score:</span>
          <div className="flex items-center gap-2">
            <div className="w-16 bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: `${atsScore}%` }}></div>
            </div>
            <span className="font-bold text-green-600">{atsScore}%</span>
          </div>
        </div>

        {/* Button */}
        <button onClick={onUseTemplate} className="btn-primary w-full">
          Use Template
        </button>
      </div>
    </div>
  )
}
