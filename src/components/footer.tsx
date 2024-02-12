import { getBlogName } from "@/lib/requests";

export default async function Footer() {
  const title = await getBlogName();

  return (
    <footer className="bg-gray-200 dark:bg-gray-900 mb-0 px-4 text-center">
      <p className="text-gray-900 dark:text-gray-400">
        {title.displayTitle || title.title}
      </p>
      <small className="mb-2 block text-xs">
        &copy; 2024 KOYAL. All rights reserved.
      </small>
      <p className="text-xs mb-1">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, Headless Hashnode API, Vercel hosting.
      </p>
    </footer>
  );
}