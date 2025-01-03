"use client";

export default function ContactForm() {
  return (
    <div className="w-full mx-auto mt-4 px-0 md:px-6 lg:px-24 py-8 ">
      <main className="relative px-4 md:px-12 pt-4 pb-20">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <h1 className="mt-8 bg-gradient-to-b from-white to-white/80 bg-clip-text text-5xl font-bold tracking-tight text-transparent">
            Still Have Questions? Contact Us
            <span className="block text-3xl mt-4 bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              Let&apos;s Address Your Enquiry Below
            </span>
          </h1>
        </div>

        {/* Contact Form */}
        <form className="space-y-4 px-8 py-20 mt-20 rounded-2xl bg-zinc-800/50">
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-2">
              Name
            </label>
            <input
              type="text"
              className="w-full rounded-xl bg-zinc-900/50 border border-zinc-800 px-4 py-3.5
                   text-white transition-colors duration-200
                   focus:outline-none focus:ring-2 focus:ring-sky-500/40"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full rounded-xl bg-zinc-900/50 border border-zinc-800 px-4 py-3.5
                   text-white transition-colors duration-200
                   focus:outline-none focus:ring-2 focus:ring-sky-500/40"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-2">
              Subject
            </label>
            <input
              type="text"
              className="w-full rounded-xl bg-zinc-900/50 border border-zinc-800 px-4 py-3.5
                   text-white transition-colors duration-200
                   focus:outline-none focus:ring-2 focus:ring-sky-500/40"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-2">
              Message
            </label>
            <textarea
              rows={4}
              className="w-full rounded-xl bg-zinc-900/50 border border-zinc-800 px-4 py-3.5
                   text-white transition-colors duration-200
                   focus:outline-none focus:ring-2 focus:ring-sky-500/40"
              required
            />
          </div>
          <button
            className="w-full relative flex justify-center gap-2 items-center group overflow-hidden rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 
                 px-4 py-3.5 text-sm font-medium text-white shadow-lg
                 transition-all duration-200 hover:from-sky-400 hover:to-blue-500
                 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>Submit</span>
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </form>
      </main>
    </div>
  );
}
