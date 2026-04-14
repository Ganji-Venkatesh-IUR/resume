// ATS score calculation engine - analyzes resume against job description
import { ResumeData } from '@/types/resume'

interface ATSScoreResult {
  totalScore: number
  breakdown: {
    contactInfo: number
    skills: number
    experience: number
    education: number
    keywords: number
    achievements: number
    personalInfo: number
  }
  missingKeywords: string[]
  suggestions: string[]
}

export function calculateATSScore(resumeData: ResumeData, jobDescription: string): ATSScoreResult {
  let totalScore = 0
  const breakdown = {
    contactInfo: 0,
    skills: 0,
    experience: 0,
    education: 0,
    keywords: 0,
    achievements: 0,
    personalInfo: 0,
  }
  const suggestions: string[] = []
  const missingKeywords: string[] = []

  // 1. Check for email and phone (10 points)
  if (resumeData.contactInfo.email && resumeData.contactInfo.phone) {
    breakdown.contactInfo = 10
    totalScore += 10
  } else {
    suggestions.push('Add both email and phone number to contact section')
  }

  // 2. Check for 3+ skills (10 points)
  const totalSkills =
    resumeData.skills.technical.length +
    resumeData.skills.tools.length +
    resumeData.skills.programmingLanguages.length
  if (totalSkills >= 3) {
    breakdown.skills = 10
    totalScore += 10
  } else {
    suggestions.push('Add more technical skills to increase relevance')
  }

  // 3. Check for experience or projects (20 points)
  if (resumeData.experiences.length >= 2 || resumeData.projects.length >= 2) {
    breakdown.experience = 20
    totalScore += 20
  } else {
    suggestions.push('Add more project or work experience details')
  }

  // 4. Check for education with CGPA (10 points)
  if (resumeData.educations.length > 0 && resumeData.educations[0].cgpaPercentage) {
    breakdown.education = 10
    totalScore += 10
  } else {
    suggestions.push('Include education section with CGPA or percentage')
  }

  // 5. Job description keyword matching (up to 30 points)
  const resumeText = (
    resumeData.contactInfo.fullName +
    ' ' +
    resumeData.experiences.map((e) => e.jobTitle + ' ' + e.companyName).join(' ') +
    ' ' +
    resumeData.skills.technical.join(' ')
  ).toLowerCase()

  const jdKeywords = jobDescription.toLowerCase().split(/\s+/).slice(0, 50)
  let keywordMatches = 0
  jdKeywords.forEach((keyword) => {
    if (keyword.length > 3 && resumeText.includes(keyword)) {
      keywordMatches++
    }
  })

  breakdown.keywords = Math.min(30, keywordMatches * 3)
  totalScore += breakdown.keywords

  // 6. Check for measurable achievements (10 points)
  const hasNumbers = resumeData.experiences.some(
    (exp) =>
      exp.responsibilities?.some((r) => /\d+/.test(r)) ||
      resumeData.projects.some((p) => p.description?.some((d) => /\d+/.test(d)))
  )
  if (hasNumbers) {
    breakdown.achievements = 10
    totalScore += 10
  } else {
    suggestions.push('Add quantifiable metrics and numbers to your achievements')
  }

  // 7. Check for no personal info (10 points)
  const hasPersonalInfo =
    resumeData.contactInfo.phone?.includes('DOB') ||
    resumeText.includes('photo') ||
    resumeText.includes('gender') ||
    resumeText.includes('religion')
  if (!hasPersonalInfo) {
    breakdown.personalInfo = 10
    totalScore += 10
  } else {
    suggestions.push('Remove personal information like DOB, gender, religion, and photo')
  }

  return {
    totalScore: Math.min(100, totalScore),
    breakdown,
    missingKeywords,
    suggestions,
  }
}
