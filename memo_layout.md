# Memo Page Layout Instructions
# For Claude Code — implement after the base site is built

## What this document covers

The memo layout is the most important reading surface on the site. Memo 001
("What Is Computational Autonoetics?") is the founding document of the field.
It needs to look like it was designed for serious long-form reading, not like
a blog post. These instructions define the visual and structural behavior of
the `_layouts/memo.html` layout and the CSS that supports it.

---

## Core reading experience

The memo page should feel like an endless, uninterrupted scroll. There should
be no sidebar, no related-posts section, no pagination controls, and no
table-of-contents widget anywhere on the page. The only elements outside the
prose body are the memo header (title, metadata, category) at the top and the
site footer at the very bottom. Everything in between is reading space.

Typography settings for the memo body are non-negotiable:
- Font: Inter, weight 300 for body text, weight 400 for slightly emphasized
  prose (do not use bold for general emphasis inside paragraphs)
- Font size: 18px on desktop, 16px on mobile
- Line height: 1.85
- Max width of the prose column: 68ch (approximately 68 characters wide)
- The prose column should be centered on the page with generous left and right
  margin on desktop. On mobile it collapses to full width with 1.25rem padding
  on each side.
- Paragraph spacing: 1.6em between paragraphs. This is slightly more generous
  than a typical blog because the memo is long-form and the reader needs visual
  rest between thoughts.
- Section dividers (the `---` horizontal rules in the markdown): render these
  as a thin gold line, `1px solid var(--gold-border)`, with 3rem of vertical
  space above and below. They should feel like a quiet pause, not a loud break.

---

## Memo header

The header sits above the prose body and contains four elements in this order:

First, the category chip. This is a small pill-shaped label in DM Mono,
uppercase, about 11px, gold text on a gold-tinted background using
`var(--gold-dim)` and `var(--gold-border)` for the border. It should feel
like an editorial tag, not a button.

Second, the title. This is the most important typographic element on the page.
Use Cormorant Garamond at a large size, somewhere between 2.8rem and 3.6rem
depending on title length, font weight 400 (the regular weight of Cormorant
already reads as elegant and substantial). The title should have tight
letter-spacing, around -0.02em. It must not be cramped against the category
chip above it or the metadata below it. Give it at least 1rem of space on each
side.

Third, the metadata line. This sits below the title in a single line: the
publication date on the left and the estimated reading time on the right.
Both in JetBrains Mono at 12px, color `var(--text-3)`. The reading time
should be calculated from word count in the Jekyll layout using this formula:
divide the total word count of the page content by 200 (a conservative reading
pace for dense material) and round up. Display it as "N min read."

Fourth, a thin gold divider line below the metadata before the prose begins.

No author byline is needed. The site itself is the author's site and the
about page establishes this.

---

## Definition boxes

This is the most important visual element in the memo. Two definitions in
Memo 001 need to be pulled out of the prose flow and displayed in a styled
container:

1. The definition of Computational Autonoetics:
   "Computational Autonoetics is the study of how artificial agents develop,
   maintain, revise, and govern self-referential continuity across time."

2. The definition of Persistent AI Identity:
   "Persistent AI Identity: the condition in which an artificial agent remains
   coherently itself across the full span of its operation."

The visual treatment should evoke a definition box from a mathematics or
philosophy textbook: clearly set apart from the prose, with a deliberate
feeling of "this is formal." Here is the exact specification:

The box has a left border of 3px solid `var(--gold)`. The background is
`var(--gold-dim)` (the very faint gold tint, barely visible). There is 1.5rem
of padding on all sides. The border-radius is 4px, just enough to soften the
corners slightly without making it feel like a UI card. The box has 2.5rem of
vertical margin above and below so it breathes within the prose.

Inside the box, a small label sits above the definition text. The label reads
"Definition" in JetBrains Mono, uppercase, 10px, `var(--gold)` color, with
0.14em letter-spacing. This mirrors the convention in mathematical texts where
a definition block is explicitly labeled.

The definition text itself is in Cormorant Garamond, italic, at 1.1rem.
The italic Cormorant reads as authoritative and slightly formal without being
stiff. The text color is `var(--text)`, full contrast, not muted.

To implement this without requiring custom HTML inside the markdown file,
use Jekyll's markdown rendering pipeline. The cleanest approach is to define
a custom include called `_includes/definition.html` that accepts a `text`
parameter, and call it from the memo markdown using Jekyll's include syntax:

    {% include definition.html text="Computational Autonoetics is the study of..." %}

This keeps the markdown file clean and the styling entirely in the layout layer.

---

## Section headings inside the memo

The markdown uses `##` headings for the major sections (The Problem, The Name,
A Definition, etc.). Style these as follows: Cormorant Garamond, weight 400,
1.35rem, color `var(--text)`, with 2.5rem of space above the heading and
0.75rem below. The heading should feel like a natural pause and reorientation
in a long piece of prose, not a navigation landmark. Do not add any gold
accent, underline, or decorative element to the headings. Let the typography
carry the weight.

---

## Blockquotes

The memo does not currently use markdown blockquotes, but the layout should
handle them gracefully in case future memos do. Style blockquotes with a
left border of 2px solid `var(--gold-border)`, `var(--text-2)` color for the
text, italic, and 1rem of left padding. No background color.

---

## Code-style inline text

The memo uses inline code formatting occasionally for technical terms. Style
`code` elements in JetBrains Mono at 0.9em, `var(--accent)` color (gold),
with a very faint `var(--gold-dim)` background and 2px horizontal padding.
No border needed.

---

## The Aether ghost element

The Aether ghost word (the large faint typographic element described in the
main CLAUDE.md) should appear on the homepage only, not on memo pages.
Memo pages are pure reading surfaces. Do not add the Aether element here.

---

## Navigation behavior on memo pages

The site navigation (Home, Memos, Field Notes, Research Map, About) should
remain visible at the top of the page. On memo pages specifically, the nav
should have a slightly stronger background blur than on other pages because
the reader will be scrolling through dense text and the nav needs to remain
legible when prose scrolls behind it. Use `backdrop-filter: blur(24px)` and
increase the nav background opacity slightly compared to the default.

There should be no "back to memos" link, no breadcrumb, and no previous/next
post navigation at the bottom of the memo. The footer appears after the last
paragraph and that is the end of the page. A reader who finishes the memo and
wants to explore further will use the main navigation.

---

## Mobile behavior

On screens narrower than 640px the following adjustments apply. The font size
drops from 18px to 16px. The prose column uses the full viewport width with
1.25rem padding on each side. The memo title drops from its desktop size to
approximately 2rem. The definition boxes retain their left border and label
but their padding reduces to 1rem. The category chip and metadata line stack
vertically if they do not fit on one line, with the category chip on top.

---

## Definition of done for this layout

The memo layout is complete when all of the following are true. A reader
opening Memo 001 on desktop sees the category chip, the large Cormorant title,
the metadata line, and then enters the prose with no visual interruption. The
two definition boxes appear as clearly distinct elements within the prose flow,
labeled "Definition," with the gold left border and faint gold background. All
section headings are typographically distinct from body text but do not feel
like navigation elements. Horizontal rules between sections render as thin gold
lines with generous vertical space. The page scrolls continuously from title
to footer with no sidebar, widget, or pagination element interrupting the
reading experience. The layout renders correctly on both desktop and mobile.
Running `bundle exec jekyll serve` produces no errors.
