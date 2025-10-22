import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/S4k-6fqjuV5AuVZe/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-zinc-950/95" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-zinc-900/60 px-4 py-2 ring-1 ring-white/10 backdrop-blur">
          <Rocket className="h-4 w-4 text-orange-400" />
          <span className="text-sm text-zinc-200">App for Lazy Programmers</span>
        </div>
        <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-6xl">
          Ship more by doing less
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-lg text-zinc-300">
          Automate the boring parts. Generate boilerplate, docs, and scripts in seconds so you can focus on the fun bits.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#generate"
            className="rounded-lg bg-orange-500 px-6 py-3 text-sm font-medium text-black transition hover:bg-orange-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50"
          >
            Get Lazy Now
          </a>
          <a
            href="#features"
            className="rounded-lg bg-zinc-900/70 px-6 py-3 text-sm font-medium text-zinc-200 ring-1 ring-white/10 backdrop-blur transition hover:bg-zinc-900/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
          >
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
}
