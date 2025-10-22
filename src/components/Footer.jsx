import { Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-zinc-400">© {new Date().getFullYear()} Lazy Dev Labs. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-zinc-900 px-3 py-1.5 text-xs text-zinc-300 ring-1 ring-white/10 transition hover:bg-zinc-800"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href="mailto:hello@lazy.dev"
            className="inline-flex items-center gap-2 rounded-md bg-zinc-900 px-3 py-1.5 text-xs text-zinc-300 ring-1 ring-white/10 transition hover:bg-zinc-800"
          >
            <Mail className="h-4 w-4" />
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
