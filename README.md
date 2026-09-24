# Xingchen He — Personal Academic Homepage

This repository hosts my personal academic website at:

**https://chuan1937.github.io/**

The site serves as a central entry point for my research interests, open-source software, publications, and technical documentation in geophysics and scientific computing.

## Current structure

- `index.html` — homepage content
- `styles.css` — responsive visual design
- `journal/index.html` — travel writing archive
- `journal/YYYY-MM-DD-slug/index.html` — individual photo essays
- `journal/journal.css` — archive and article layout
- `journal/journal-stats.js` — page-view counter (Vercount) for articles
- `assets/images/travel/` — optimized WebP images, grouped by article
- `.nojekyll` — static GitHub Pages configuration

## Development

The website uses plain HTML and CSS, with no build step or external framework required. Changes pushed to the publishing branch can be deployed directly through GitHub Pages.

## Adding a journal entry

Create a dated directory under `journal/` and place its `index.html` there. Store optimized images under the matching directory in `assets/images/travel/`. Add the entry to `journal/index.html` and update the featured entry in the homepage’s “行走与随笔” section. Keep the article’s original paragraph and image order; provide image dimensions and lazy loading.

To show a page-view count, add the placeholder in the article header and load the shared script before `</body>`:

```html
<p class="journal-views" data-views hidden>本文阅读 <span id="vercount_value_page_pv" data-views-count>…</span> 次</p>
...
<script src="../journal-stats.js" defer></script>
```
