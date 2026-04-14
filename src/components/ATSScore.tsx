// ATS score display component - circular progress indicator
'use client'

interface ATSScoreProps {
  score: number
  missingKeywords: string[]
  suggestions: string[]
}

export default function ATSScore({ score, missingKeywords, suggestions }: ATSScoreProps) {
  const getColor = () => {
    if (score < 50) return '#EF4444' // red
    if (score < 75) return '#FBBF24' // yellow
    return '#10B981' // green
  }

  const circumference = 2 * Math.PI * 45

  return (
    <div className="space-y-8">
      {/* Circular Score */}
      <div className="flex justify-center">
        <div className="relative w-40 h-40">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="4"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke={getColor()}
              strokeWidth="4"
              strokeDasharray={circumference}
              strokeDashoffset={circumference * (1 - score / 100)}
              strokeLinecap="round"
              style={{ transition: 'stroke-dashoffset 0.5s ease' }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-bold" style={{ color: getColor() }}>
              {score}
            </span>
            <span className="text-sm text-gray-600">/100</span>
          </div>
        </div>
      </div>

      {/* Score Interpretation */}
      <div className="text-center text-lg font-semibold" style={{ color: getColor() }}>
        {score < 50 && 'Needs Improvement'}
        {score >= 50 && score < 75 && 'Good Progress'}
        {score >= 75 && 'Excellent'}
      </div>

      {/* Missing Keywords */}
      {missingKeywords.length > 0 && (
        <div>
          <h3 className="font-bold text-gray-900 mb-3">Missing Keywords</h3>
          <div className="flex flex-wrap gap-2">
            {missingKeywords.map((keyword, idx) => (
              <span key={idx} className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                {keyword}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Suggestions */}
      {suggestions.length > 0 && (
        <div>
          <h3 className="font-bold text-gray-900 mb-3">Suggestions</h3>
          <ul className="space-y-2">
            {suggestions.map((suggestion, idx) => (
              <li key={idx} className="flex gap-2 text-gray-700">
                <span className="text-naukrai-primary font-bold">•</span>
                <span>{suggestion}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
