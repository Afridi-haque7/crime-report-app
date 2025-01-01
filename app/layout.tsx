import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css'
import Navbar from '@/components/Navbar';
import { Providers } from "./providers"
// import providers

const inter = Inter({subsets:['latin']});

export const metadata: Metadata = {
  title: 'SafeReport - Anonymous Crime Reporting App',
  description: 'Securely and anonymously report crimes in your area to law enforcements',
}

export default function RootLayout({children}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative min-h-screen text-white bg-black selection:bg-sky-500/20">
          {/* gradient-background */}
          <div className="fixed inset-0 -z-10 min-h-screen ">
            <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center_rgba(56,189,248,0.03), transparent_50%)]" />
            <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center_rgba(14,165,233,0.05), transparent_70%)]" />
          </div>
          {/* navbar */}
          <Navbar />
          <main className="pt-16">
            <Providers>{children}</Providers>
          </main>
        </div>
      </body>
    </html>
  );
}