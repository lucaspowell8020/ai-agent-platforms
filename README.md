# ai-agent-platforms

A structured, opinionated dataset of AI agent platforms. Hand-tested by builders. Free to use.

If you're building a comparison tool, a directory, an internal "what should we use" doc, or a research project on the AI agent space, this is the dataset behind [agentshortlist.com](https://agentshortlist.com), exported as a single JSON file you can fetch from anywhere.

## What's in here

- **`platforms.json`** — every platform we've reviewed, with category, tech level, pricing, ratings, verdict, best-for / not-for, pros, cons, and use cases.
- **`platforms.schema.json`** — JSON Schema for validation.
- **`METHODOLOGY.md`** — how platforms get on the list, how they get rated, what gets cut.
- **`examples/`** — JavaScript and Python examples showing how to load and filter the data.

The file is regenerated and committed when reviews change. No API key, no rate limits.

## What this dataset is good for

- Building a "best AI agent for X" comparison page
- Filtering by category, technical level, or open-source status programmatically
- Pulling structured "pros / cons / verdict" data into a research tool
- Anyone who needs an opinionated cut of the agent space, not a feature checklist

What it's *not*: a directory of every AI tool that exists. There are 22 platforms here because there are 22 we'd actually recommend (or actively warn against). Coverage is intentional.

## Use it

### Direct fetch

```bash
curl -O https://raw.githubusercontent.com/lucaspowell8020/ai-agent-platforms/main/platforms.json
```

### JavaScript

```js
const data = await fetch(
  "https://raw.githubusercontent.com/lucaspowell8020/ai-agent-platforms/main/platforms.json"
).then((r) => r.json());

// All open-source coding harnesses, sorted by rating
const codingOSS = data.platforms
  .filter((p) => p.category === "coding" && p.openSource)
  .sort((a, b) => b.rating - a.rating);

console.log(codingOSS.map((p) => `${p.name} (${p.rating})`));
```

### Python

```python
import json, urllib.request

url = "https://raw.githubusercontent.com/lucaspowell8020/ai-agent-platforms/main/platforms.json"
data = json.loads(urllib.request.urlopen(url).read())

no_code = [p for p in data["platforms"] if p["techLevel"] == "no-code"]
for p in sorted(no_code, key=lambda p: -p["rating"]):
    print(f"{p['name']:<20} {p['rating']}  {p['bestFor']}")
```

See [`examples/`](./examples) for slightly fuller scripts.

## Schema

Every entry in `platforms` has the same shape:

| Field | Type | Notes |
|---|---|---|
| `slug` | string | Stable identifier. Won't change once published. |
| `name` | string | Display name. |
| `tagline` | string | One-line positioning. |
| `category` | enum | `harness`, `no-code`, `workflow`, `coding`, `voice`, `enterprise`. |
| `categoryLabel` | string | Human-readable category label. |
| `url` | string | Vendor URL. |
| `githubUrl` | string? | If open-source. |
| `githubStars` | string? | Approximate, formatted (e.g. `"365k"`). |
| `license` | string? | Open-source license if applicable. |
| `openSource` | boolean | |
| `techLevel` | enum | `no-code`, `low-code`, `developer`. |
| `pricing` | string | Free-form pricing summary. |
| `rating` | number | 1.0–5.0 in 0.5 steps. |
| `verdict` | string | One-paragraph editorial verdict. |
| `bestFor` | string | Who should pick this. |
| `notFor` | string | Who shouldn't. |
| `description` | string | Long-form review. |
| `pros` | string[] | Bullet points. |
| `cons` | string[] | Bullet points. |
| `useCases` | object[]? | Optional `{title, body}` examples. |

Top-level fields: `verifiedDate`, `verificationCadence`, `verificationMethod`, `source`, `sourceRepo`, `license`.

## Categories

- **harness** — Open-source agent harnesses you self-host (OpenClaw, Hermes, Paperclip, Aider).
- **no-code** — Visual builders for non-developers (Lindy, Relevance AI, Stack AI, Manus AI).
- **workflow** — Workflow automation tools with AI nodes (n8n, Make, Zapier).
- **coding** — Coding-specific agents (Claude Code, Cursor, Copilot, Codex, Augment Code).
- **voice** — Voice AI platforms (Vapi, Retell, Bland, Synthflow).
- **enterprise** — Enterprise-grade agent platforms (Salesforce Agentforce).

## How fresh is it?

Reviews are revisited monthly, sooner when a platform ships a meaningful update or a major incident happens. The exact `verifiedDate` is in the JSON. Ratings can move up or down between revisions — they reflect the current state, not the launch state.

## License

CC-BY-4.0. Use it in commercial products, comparison tools, research, blog posts. Attribution to [agentshortlist.com](https://agentshortlist.com) is appreciated but not required by the license.

## Why this exists

We built [agentshortlist.com](https://agentshortlist.com) — opinionated reviews of AI agent platforms for builders. The reviews live in our codebase as structured data so we can power calculators, comparison pages, and pickers from one source. Publishing that source dataset costs us nothing and saves anyone else who's solving the same problem from rebuilding it.

## Related

- [agentshortlist.com](https://agentshortlist.com) — the publication
- [The 2026 Shortlist](https://agentshortlist.com/shortlist) — narrative review of the top picks
- [Agent Picker](https://agentshortlist.com/picker) — five-question quiz that uses this dataset
- [ai-agent-pricing](https://github.com/lucaspowell8020/ai-agent-pricing) — sister repo with frontier model pricing

## Contributing

Disagree with a verdict? Found a platform we should add? [Open an issue](https://github.com/lucaspowell8020/ai-agent-platforms/issues) with specifics — what we got wrong, what changed, what you've shipped on the platform yourself.

PRs against `platforms.json` will be closed. The data lives in the source repo (`agentshortlist`) and is regenerated from there. Issues here are the right channel.
