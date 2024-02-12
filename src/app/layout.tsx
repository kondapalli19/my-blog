import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Providers from "@/components/Providers";
import NewsletterCard from "@/components/newsletter-card";
import Footer from "@/components/footer";


import { getBlogName } from "@/lib/requests";
import Intro from "@/components/intro";
import ContactMe from "@/components/contact";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
  const data = await getBlogName();

  return {
    title: data.displayTitle || data.title,
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getBlogName();

  return (
    <html lang="en">
      <head className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>

      </head>
      <body className={inter.className}>
        <Providers>
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <link rel="icon" href={data.favicon || "/favicon.ico"} />
          <Navbar />
          <Intro />
          {children}
          <NewsletterCard />
          <ContactMe/>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
