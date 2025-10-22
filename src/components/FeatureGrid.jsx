import { Zap, Wand2, Timer, Settings } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Instant Boilerplate',
    desc: 'Spin up routes, components, hooks, and tests in one click across popular stacks.',
  },
  {
    icon: Wand2,
    title: 'One-Click Docs',
    desc: 'Generate README, API docs, and usage examples from your code and comments.',
  },
  {
    icon: Timer,
    title: 'Task Automations',
    desc: 'Create scripts for linting, formatting, releases, and changelogs without setup.',
  },
  {
    icon: Settings,
    title: 'Smart Scaffolds',
    desc: 'Opinionated templates that follow best practices yet stay easy to tweak.',
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Work smarter, not harder</h2>
          <p className="mt-2 max-w-2xl text-zinc-400">
            A toolkit that helps you skip the repetitive steps and jump straight to solving real problems.
          </p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="group relative rounded-xl border border-white/10 bg-zinc-900/50 p-5 transition hover:border-orange-500/30 hover:bg-zinc-900/70"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/15 text-orange-400 ring-1 ring-orange-500/20">
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-medium text-white">{f.title}</h3>
            <p className="mt-1 text-sm text-zinc-400">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
