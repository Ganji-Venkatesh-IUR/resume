# NaukrAI - India's First AI Resume Builder

A modern, free resume builder for Indian professionals with AI-powered ATS (Applicant Tracking System) scoring.

## Features

- **Resume Builder**: Create professional resumes with live preview
- **ATS Score**: Get instant feedback on how well your resume matches job descriptions
- **Multiple Templates**: Choose from 3 professionally designed templates
- **Government Biodata**: Special format for SSC, UPSC, and Railway exams
- **Mobile Friendly**: Fully responsive design for all devices
- **No Subscription**: Completely free to use

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Caching**: Redis (optional)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- PostgreSQL database
- .env file with DATABASE_URL

### Installation

```bash
# Install dependencies
npm install

# Set up Prisma
npx prisma migrate dev

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/              # Next.js pages and API routes
├── components/       # Reusable React components
├── templates/        # Resume templates
├── lib/             # Utility functions and services
└── types/           # TypeScript type definitions
```

## API Endpoints

- `POST /api/ats` - Analyze resume ATS score
- `POST /api/pdf` - Generate PDF from resume
- `POST /api/ai` - AI-powered content generation
- `POST /api/payment` - Handle payments (Razorpay)

## Building for Production

```bash
npm run build
npm start
```

## License

Open source - feel free to use and modify

## Contributing

Contributions welcome! Please feel free to submit issues and pull requests.
