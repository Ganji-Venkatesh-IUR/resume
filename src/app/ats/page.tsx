// ATS score analyzer - paste job description and get resume score
'use client'

import { useState } from 'react'
import ATSScore from '@/components/ATSScore'

export default function ATSPage() {
  const [jobDescription, setJobDescription] = useState('')
  const [score, setScore] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)
  const [missingKeywords, setMissingKeywords] = useState<string[]>([])
  const [suggestions, setSuggestions] = useState<string[]>([])

  const handleAnalyze = async () => {
    if (!jobDescription.trim()) {
      alert('Please paste a job description')
      return
    }

    setLoading(true)
    try {
      // Placeholder API call
      setScore(75)
      setMissingKeywords(['Python', 'React', 'Node.js', 'MongoDB'])
      setSuggestions(['Add more specific technical skills', 'Include metrics and numbers in achievements'])
    } catch (error) {
      console.error('Error analyzing job description:', error)
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">ATS Score Analyzer</h1>
        <p className="text-gray-600 mb-8">Paste a job description and we'll analyze how well your resume matches it.</p>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <label className="form-label">Job Description</label>
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Paste the job description here..."
            className="form-input h-64 resize-none"
          />
          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="btn-primary mt-4"
          >
            {loading ? 'Analyzing...' : 'Analyze Resume'}
          </button>
        </div>

        {score !== null && (
          <div className="bg-white rounded-lg shadow-md p-8">
            <ATSScore
              score={score}
              missingKeywords={missingKeywords}
              suggestions={suggestions}
            />
          </div>
        )}
      </div>
    </div>
  )
}
