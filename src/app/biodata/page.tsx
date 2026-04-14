// Government biodata form for SSC/UPSC/Railway formats
'use client'

import { useState } from 'react'
import { GovernmentBiodata } from '@/types/resume'

const initialBiodata: GovernmentBiodata = {
  fathersName: '',
  mothersName: '',
  category: 'General',
  dateOfBirth: '',
  permanentAddress: '',
  languagesKnown: [],
}

export default function BiodataPage() {
  const [biodata, setBiodata] = useState<GovernmentBiodata>(initialBiodata)
  const [languages, setLanguages] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setBiodata((prev) => ({ ...prev, [name]: value }))
  }

  const handleAddLanguage = () => {
    if (languages.trim()) {
      setBiodata((prev) => ({
        ...prev,
        languagesKnown: [...prev.languagesKnown, languages.trim()],
      }))
      setLanguages('')
    }
  }

  const handleDownload = () => {
    alert('Biodata download feature coming soon!')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Government Biodata</h1>
        <p className="text-gray-600 mb-8">Fill in your details for SSC, UPSC, or Railway examination biodata format</p>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="space-y-6">
            <div>
              <label className="form-label">Father's Name</label>
              <input
                type="text"
                name="fathersName"
                value={biodata.fathersName}
                onChange={handleChange}
                className="form-input"
                placeholder="Enter father's name"
              />
            </div>

            <div>
              <label className="form-label">Mother's Name</label>
              <input
                type="text"
                name="mothersName"
                value={biodata.mothersName}
                onChange={handleChange}
                className="form-input"
                placeholder="Enter mother's name"
              />
            </div>

            <div>
              <label className="form-label">Category</label>
              <select name="category" value={biodata.category} onChange={handleChange} className="form-input">
                <option value="General">General</option>
                <option value="OBC">OBC</option>
                <option value="SC">SC</option>
                <option value="ST">ST</option>
              </select>
            </div>

            <div>
              <label className="form-label">Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                value={biodata.dateOfBirth}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div>
              <label className="form-label">Permanent Address</label>
              <textarea
                name="permanentAddress"
                value={biodata.permanentAddress}
                onChange={handleChange}
                className="form-input h-24 resize-none"
                placeholder="Enter your permanent address"
              />
            </div>

            <div>
              <label className="form-label">Languages Known</label>
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  value={languages}
                  onChange={(e) => setLanguages(e.target.value)}
                  className="form-input"
                  placeholder="Enter a language and click add"
                />
                <button onClick={handleAddLanguage} className="btn-primary px-4">Add</button>
              </div>
              <div className="flex flex-wrap gap-2">
                {biodata.languagesKnown.map((lang, idx) => (
                  <span key={idx} className="bg-blue-100 text-naukrai-primary px-3 py-1 rounded-full text-sm">
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <button onClick={handleDownload} className="btn-primary w-full">
              Download Biodata
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
