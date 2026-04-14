// Contact information form component - basic contact details
'use client'

import { ContactInfo } from '@/types/resume'

interface ContactFormProps {
  contactInfo: ContactInfo
  onChange: (field: keyof ContactInfo, value: string) => void
}

export default function ContactForm({ contactInfo, onChange }: ContactFormProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
      
      <div>
        <label className="form-label">Full Name</label>
        <input
          type="text"
          value={contactInfo.fullName}
          onChange={(e) => onChange('fullName', e.target.value)}
          className="form-input"
          placeholder="John Doe"
        />
      </div>

      <div>
        <label className="form-label">Email</label>
        <input
          type="email"
          value={contactInfo.email}
          onChange={(e) => onChange('email', e.target.value)}
          className="form-input"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label className="form-label">Phone</label>
        <input
          type="tel"
          value={contactInfo.phone}
          onChange={(e) => onChange('phone', e.target.value)}
          className="form-input"
          placeholder="+91-XXXXXXXXXX"
        />
      </div>

      <div>
        <label className="form-label">LinkedIn URL</label>
        <input
          type="url"
          value={contactInfo.linkedinUrl}
          onChange={(e) => onChange('linkedinUrl', e.target.value)}
          className="form-input"
          placeholder="https://linkedin.com/in/johndoe"
        />
      </div>

      <div>
        <label className="form-label">Location (City)</label>
        <input
          type="text"
          value={contactInfo.location}
          onChange={(e) => onChange('location', e.target.value)}
          className="form-input"
          placeholder="Bangalore, India"
        />
      </div>

      <div>
        <label className="form-label">Portfolio URL</label>
        <input
          type="url"
          value={contactInfo.portfolioUrl}
          onChange={(e) => onChange('portfolioUrl', e.target.value)}
          className="form-input"
          placeholder="https://johndoe.com"
        />
      </div>
    </div>
  )
}
