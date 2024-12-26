# Turing's Dream - AI Residency Program

Welcome to the **Turing's Dream** website!

## Table of Contents

- [Getting Started](#getting-started)
- [Managing Images](#managing-images)
- [Managing Tweets](#managing-tweets)

## Getting Started

First, install the dependencies and run the development server:

```bash
npm install
npm run dev
# or
yarn install
yarn dev
# or
pnpm install
pnpm dev
# or
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.


## Managing Images

They are managed through the `public/images.json` file and [https://imgbb.com/](imgbb) - create an album, upload all files, get Embed codes (viewer links) & save in public/images.json.

## Managing Tweets

Tweets are displayed on the Archive page and are managed through the `public/tweets.json` file.   
Keep latest tweet at top.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
