# Bentolio (Next.js)

Bentolio is a clean, customizable **one-page portfolio template** built with [Next.js](https://nextjs.org/), designed using the popular Bento Grids layout.

This template is based on my popular [Figma design](https://www.figma.com/community/file/1408441048826723944/bentolio) that inspired its development.

![bentolio-thumbnail](https://github.com/user-attachments/assets/2a171803-d475-4053-893e-7d51e9953d16)

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/rauftech/bentolio.git
cd bentolio
npm install
# or
yarn install
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Next.js 14+ with App Router: Leverage the latest features of Next.js.
- Tailwind CSS: Easily customizable utility-first styling.
- Responsive Design: Optimized for all screen sizes.
- Font Optimization: Automatic Google Fonts loading and optimization using [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts).
- Image Optimization: Built-in image handling for fast performance using [next/image](https://nextjs.org/docs/app/building-your-application/optimizing/images).
- GSAP Animations: Smooth, high-performance animations with [@gsap/react](https://gsap.com/resources/React).

## Project Structure

Here’s a quick overview of the key files and folders in this template:

- `/src/data.json`: Contains the content for different sections of the website, such as navigation, intro, about, and projects. Modify this file to update the site's content.
- `/src/config.json`: Controls global variables such as whether to disable loading animations and the placeholder image for lazy-loaded content.
- `/tailwind.config.js`: Manages Tailwind CSS settings like breakpoints, colors, and fonts. You can modify the global design variables here to customize the template’s appearance.
- `/src/hooks/useAnimation.js`: Contains hooks for handling animations throughout the template, including loading animations and page transitions.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Support

If you need help or have any questions about Bentolio, feel free to:

- [Join the community on Discord](https://discord.gg/xD7U3nxPgW) to connect with other users (FASTER).
- Reach out directly at <abdul@rauftech.com>.
