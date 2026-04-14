// Homepage for NaukrAI - hero section with CTA buttons
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            NaukrAI
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 mb-8">
            India's first AI resume builder. Free ATS score. No subscription.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="/builder"
              className="btn-primary text-lg"
            >
              Build From Scratch
            </a>
            <a
              href="/builder"
              className="btn-secondary text-lg"
            >
              Upload My Resume
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-xl font-bold mb-2">ATS Optimized</h3>
              <p className="text-gray-600">Pass applicant tracking systems with our AI analysis</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-2">Multiple Templates</h3>
              <p className="text-gray-600">Choose from professional resume templates</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Build in Minutes</h3>
              <p className="text-gray-600">Create your resume quickly and easily</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
