# Methodology

How a platform gets onto this list, how it gets rated, what gets cut.

## Inclusion

A platform is included only if at least one of these is true:

1. **We've used it in a real builder workflow.** Not a vendor demo. Not a marketing page reading. We've put real work through it and seen what breaks.
2. **It's a well-known platform our readers ask about.** Even if our verdict is "skip this one," it's worth telling people why.
3. **It's an open-source project with material adoption** that builders are likely to encounter.

Things that don't qualify on their own: large funding rounds, podcast appearances, founder Twitter following, enterprise logo lists, "trending on Product Hunt."

## Categories

Six categories, drawn from how builders actually shop for these tools, not how vendors classify themselves:

- **harness** — Open-source software you self-host that connects an AI model to your tools and lets it take actions.
- **no-code** — Visual builders aimed at non-developers, typically with usage-based or seat-based SaaS pricing.
- **workflow** — General-purpose workflow automation tools (with or without AI nodes) where AI agents are one capability among many.
- **coding** — Agents specifically for software development.
- **voice** — Voice AI platforms (inbound/outbound calling, IVR, real-time conversation).
- **enterprise** — Platforms designed primarily for >100-seat deployments with admin, audit, and compliance features as the core value.

A platform sits in exactly one category, in the one its primary use case fits. Many platforms span categories — the categorization picks the dominant one.

## Ratings

Ratings are 1.0 to 5.0 in 0.5 increments. They reflect:

- How well the platform delivers on its core promise
- Build quality and reliability in production
- Pricing realism for the audience the tool targets
- Documentation, community, and support quality
- Velocity of meaningful improvement

A 5.0 means: this is the best-in-class option for its category, we'd recommend it without hesitation to the right user. A 4.5 means: this is our top recommendation for most builders in its category. A 4.0 means: solid, recommended, with caveats. A 3.5 means: serviceable, has fit, but better options exist for most. Below 3.5 means: we have specific concerns.

Ratings are not stack-rankable across categories. A 4.5 in `voice` doesn't beat a 4.5 in `coding` — they're answering different questions.

## "Best for" / "Not for"

These are the most opinionated fields and the ones builders should read first.

- **bestFor** is who should pick this. If you don't recognize yourself in this description, the platform probably isn't for you, even if its rating is high.
- **notFor** is who should pick something else. We don't include this on every review unless there's a real audience the tool is wrong for. When it's there, take it seriously.

We aim for both fields to feel uncomfortable — vague "great for everyone" descriptions help nobody. If we can't write a sharp `notFor`, the platform probably isn't worth reviewing.

## Pros and cons

Pros are real strengths, ranked roughly in order of importance. Cons are honest limitations a builder should know before committing.

What we don't do: pad the cons with weak filler ("could have more integrations") to seem balanced. If a platform has only two real cons, the list has two items.

## What we won't do

- **No vendor influence.** Vendors don't review their own listings before publication. They get to flag factual errors after, like anyone else.
- **No paid placement.** Nothing in this dataset is sponsored. Affiliate relationships, where they exist, are disclosed on the website but never affect ranking, inclusion, or rating.
- **No removal on request.** A vendor can't pay us to take down a low rating. Errors get corrected; opinions don't.
- **No silent breaking changes.** `slug` values are stable. If a platform is renamed, the old slug stays as an alias.

## Revisions

Reviews are revisited at least monthly. A revision can move a rating up or down, rewrite the verdict, change category, or remove the platform from the list entirely (if the platform shuts down or pivots out of the agent space).

If a platform ships a meaningful update or has a notable incident between scheduled revisions, we revisit it sooner.

## Errors and disputes

Found something we got wrong? [Open an issue](https://github.com/lucaspowell8020/ai-agent-platforms/issues) with the slug, what we said, and what's actually true (with a link to evidence where possible). We'll investigate and either correct or explain.

Disagree with a rating or verdict? Same process — but understand that ratings are editorial. If the disagreement is about facts, we'll fix it. If it's about judgment, we'll consider it but the call is ours.
