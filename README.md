# BytePath — Coding Learning Platform

BytePath is an interactive coding learning platform designed to help learners build programming skills through structured courses, hands-on coding practice, and coding challenges.

## Features

- **Interactive learning paths** for JavaScript, Python, HTML/CSS, SQL, React, and other programming topics.
- **Browser-based coding terminal** for practicing supported languages.
- **LeetCode-style challenges** to strengthen problem-solving skills.
- **AI learning coach** for learning support and code-related guidance.
- **Progress tracking** to help learners monitor their learning activity.
- **Google sign-in** and cloud-based progress saving with Supabase.
- **Paid PDF notes** with Razorpay payment verification.
- **Responsive interface** for a convenient learning experience across screen sizes.

## Tech Stack

- **Framework:** Next.js
- **Frontend:** React, TypeScript
- **Backend and Authentication:** Supabase
- **AI Integration:** OpenRouter API
- **Code Editor:** Monaco Editor
- **Payments:** Razorpay
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 20.9 or later
- npm
- A Supabase project for authentication and cloud saving
- An OpenRouter API key for AI coach responses

### Installation

1. Clone the repository:

   ```bash
   git clone <your-repository-url>
   ```

2. Move into the project directory:

   ```bash
   cd bytepath-learning-platform
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env.local` file based on `.env.example` and configure the required environment variables.

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open https://bytepath-learning-platform.vercel.app/ in your browser.

## Environment Configuration

Configure the environment variables required by the features you use. These may include:

- Supabase project URL and publishable key
- OpenRouter API key (server-side only)
- Razorpay key ID and secret (server-side only)
- Supabase service-role key (server-side only, where required)
- Web3Forms access key for the contact form

Use `.env.example` as the reference for variable names. **Never commit `.env.local` or expose secret keys in client-side code.**

## Notes

- The landing page and core coding practice can run in demo mode without Supabase configuration.
- Google sign-in and cloud progress saving require Supabase and Google OAuth setup.
- AI coach responses require an authenticated session and a valid server-side OpenRouter API key.
- Paid note downloads require the relevant Supabase migrations and Razorpay configuration.
- Browser-based code execution uses isolated workers or sandboxed previews.

## Security

Keep API credentials and service-role keys private. If a key has been exposed publicly, revoke it and replace it. Review the project README and configuration files for the full setup and migration instructions.

## License

Add a license file if you intend to distribute this project as open source.
