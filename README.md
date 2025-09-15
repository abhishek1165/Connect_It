# Connect

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Features

- 🔐 Authentication with [Clerk](https://clerk.dev)
- 🎥 Video features via [Stream Video React SDK](https://getstream.io/video/)
- 🌗 Theme switching (light/dark mode)
- 📝 Custom dashboard and user roles
- 🗄️ Database integration with [Convex](https://convex.dev)
- ⚡️ Real-time updates and notifications
- 🖋️ Modern UI with [Tailwind CSS](https://tailwindcss.com) and [Radix UI](https://www.radix-ui.com/)

## Folder Structure

```
src/
  app/              # Next.js app directory (pages, layouts)
  components/       # Reusable UI components (Navbar, ModeToggle, etc.)
  convex/           # Convex backend functions (mutations, queries)
  fonts/            # Custom font files
  styles/           # Global and component styles
public/             # Static assets
```

## Tech Stack

- [Next.js 14](https://nextjs.org/)
- [React 18](https://react.dev/)
- [Clerk](https://clerk.dev) for authentication
- [Convex](https://convex.dev) for backend/database
- [Stream Video React SDK](https://getstream.io/video/)
- [Tailwind CSS](https://tailwindcss.com) for styling
- [Radix UI](https://www.radix-ui.com/) for accessible UI primitives
- [Lucide Icons](https://lucide.dev/) for icons

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Environment Variables

Create a `.env.local` file in the root and add the following (replace with your actual keys):

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
CONVEX_DEPLOYMENT_URL=your_convex_url
STREAM_API_KEY=your_stream_api_key
```

## Scripts

- `dev` – Start the development server
- `build` – Build for production
- `start` – Start the production server
- `lint` – Run ESLint

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contributing

1. Fork this repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

---

Feel free to open issues or suggest features!
