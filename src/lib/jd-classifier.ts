// Job description classifier - analyzes job title and description
interface JDClassificationResult {
  industry: 'tech' | 'finance' | 'marketing' | 'healthcare' | 'government'
  seniority: 'fresher' | 'junior' | 'mid' | 'senior'
  roleType: 'engineering' | 'management' | 'design' | 'sales' | 'operations'
  extractedKeywords: string[]
}

export function classifyJobDescription(jobDescription: string): JDClassificationResult {
  const lowerJD = jobDescription.toLowerCase()

  // Detect industry
  let industry: JDClassificationResult['industry'] = 'tech'
  if (lowerJD.includes('finance') || lowerJD.includes('banking') || lowerJD.includes('accounting')) {
    industry = 'finance'
  } else if (lowerJD.includes('marketing') || lowerJD.includes('content') || lowerJD.includes('brand')) {
    industry = 'marketing'
  } else if (lowerJD.includes('healthcare') || lowerJD.includes('medical') || lowerJD.includes('nurse')) {
    industry = 'healthcare'
  } else if (lowerJD.includes('government') || lowerJD.includes('civil service') || lowerJD.includes('ssc')) {
    industry = 'government'
  }

  // Detect seniority
  let seniority: JDClassificationResult['seniority'] = 'mid'
  if (
    lowerJD.includes('fresher') ||
    lowerJD.includes('entry level') ||
    lowerJD.includes('graduate') ||
    lowerJD.includes('intern')
  ) {
    seniority = 'fresher'
  } else if (
    lowerJD.includes('junior') ||
    lowerJD.includes('0-2 years') ||
    lowerJD.includes('0-3 years')
  ) {
    seniority = 'junior'
  } else if (
    lowerJD.includes('senior') ||
    lowerJD.includes('lead') ||
    lowerJD.includes('principal') ||
    lowerJD.includes('10+ years')
  ) {
    seniority = 'senior'
  }

  // Detect role type
  let roleType: JDClassificationResult['roleType'] = 'engineering'
  if (lowerJD.includes('manager') || lowerJD.includes('director') || lowerJD.includes('leadership')) {
    roleType = 'management'
  } else if (lowerJD.includes('design') || lowerJD.includes('ui') || lowerJD.includes('ux')) {
    roleType = 'design'
  } else if (lowerJD.includes('sales') || lowerJD.includes('business development')) {
    roleType = 'sales'
  } else if (lowerJD.includes('operations') || lowerJD.includes('admin') || lowerJD.includes('hr')) {
    roleType = 'operations'
  }

  // Extract keywords
  const keywordCandidates = jobDescription
    .toLowerCase()
    .split(/\s+/)
    .filter((word) => word.length > 4 && !/[^\w]/.test(word))
  const extractedKeywords = [...new Set(keywordCandidates)].slice(0, 15)

  return {
    industry,
    seniority,
    roleType,
    extractedKeywords,
  }
}
