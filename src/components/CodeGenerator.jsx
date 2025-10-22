import { useMemo, useState } from 'react';
import { Copy, Check, Rocket } from 'lucide-react';

const LANGS = ['JavaScript', 'TypeScript', 'Python', 'Shell'];

function buildSnippet(lang, prompt) {
  const safePrompt = (prompt || 'greet the world').trim();
  switch (lang) {
    case 'TypeScript':
      return `// Auto-generated helper\nexport function ${safePrompt.replace(/\W+/g, '_') || 'greet'}(name: string = 'World'): string {\n  return \`Hello, \${name}!\`;\n}\n\nif (import.meta.vitest === undefined) {\n  console.log(${safePrompt.replace(/\W+/g, '_') || 'greet'}());\n}`;
    case 'Python':
      return `# Auto-generated helper\ndef ${safePrompt.replace(/\W+/g, '_') || 'greet'}(name: str = 'World') -> str:\n    return f"Hello, {name}!"\n\nif __name__ == '__main__':\n    print(${safePrompt.replace(/\W+/g, '_') || 'greet'}())`;
    case 'Shell':
      return `#!/usr/bin/env bash\n# Auto-generated helper\nfunction ${safePrompt.replace(/\W+/g, '_') || 'greet'}() {\n  local name=\"${'World'}\"\n  echo \"Hello, $name!\"\n}\n${safePrompt.replace(/\W+/g, '_') || 'greet'}`;
    default:
      return `// Auto-generated helper\nexport function ${safePrompt.replace(/\W+/g, '_') || 'greet'}(name = 'World') {\n  return \`Hello, \${name}!\`;\n}\n\nconsole.log(${safePrompt.replace(/\W+/g, '_') || 'greet'}());`;
  }
}

export default function CodeGenerator() {
  const [lang, setLang] = useState('JavaScript');
  const [prompt, setPrompt] = useState('greet the world');
  const [copied, setCopied] = useState(false);

  const snippet = useMemo(() => buildSnippet(lang, prompt), [lang, prompt]);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(snippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section id="generate" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2 className="flex items-center gap-2 text-3xl font-semibold text-white sm:text-4xl">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/15 text-orange-400 ring-1 ring-orange-500/20">
              <Rocket className="h-5 w-5" />
            </span>
            Lazy Code Generator
          </h2>
          <p className="mt-2 max-w-2xl text-zinc-400">
            Describe what you want and get a ready-to-run helper in your favorite language.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-5">
          <label className="mb-2 block text-sm font-medium text-zinc-200">What should it do?</label>
          <input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g. greet the world, format a date, slugify text"
            className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none transition focus:border-orange-500/40 focus:ring-2 focus:ring-orange-500/20"
          />

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <label className="text-sm text-zinc-300">Language</label>
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-zinc-100 outline-none focus:border-orange-500/40 focus:ring-2 focus:ring-orange-500/20"
            >
              {LANGS.map((l) => (
                <option key={l} value={l} className="bg-zinc-900">
                  {l}
                </option>
              ))}
            </select>
          </div>

          <p className="mt-3 text-xs text-zinc-500">
            Pro tip: keep prompts short and action-oriented. You can tweak the output below.
          </p>
        </div>

        <div className="relative rounded-xl border border-white/10 bg-zinc-900/60">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <span className="text-sm text-zinc-300">Preview</span>
            <button
              onClick={onCopy}
              className="inline-flex items-center gap-2 rounded-md bg-zinc-800 px-3 py-1.5 text-xs font-medium text-zinc-200 ring-1 ring-white/10 transition hover:bg-zinc-700"
            >
              {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
          <pre className="max-h-[380px] overflow-auto p-4 text-sm leading-relaxed">
            <code className="block whitespace-pre text-zinc-100">{snippet}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}
