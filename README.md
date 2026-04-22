# Chen Wang — Personal Website (Jekyll)

## Folder structure

```
wangc29.github.io/
│
├── _config.yml          ← Site settings: your name, email, social links
├── _layouts/
│   ├── default.html     ← Shared template: nav + footer (used by all pages)
│   └── post.html        ← Blog post template
│
├── _posts/              ← YOUR BLOG POSTS LIVE HERE
│   ├── 2026-04-15-iptw-tutorial.md
│   ├── 2026-02-10-bayesian-enrollment.md
│   └── ...
│
├── assets/
│   ├── css/style.css    ← All styles (change --teal to restyle accent color)
│   ├── js/main.js       ← Blog filter logic (don't touch)
│   └── images/          ← Add your photo and project images here
│
├── index.md             ← About page
├── projects.md          ← Projects page
├── publications.md      ← Publications page
├── blog.md              ← Blog listing (auto-populates from _posts/)
├── cv.md                ← CV page
└── cv.pdf               ← Your CV — ADD THIS FILE YOURSELF
```

---

## How to deploy on GitHub Pages

1. Create a GitHub repo named exactly: `wangc29.github.io`
2. Push all these files to the `main` branch
3. Go to repo **Settings → Pages → Source → main branch / root**
4. GitHub builds and deploys automatically — live at `https://wangc29.github.io`

> GitHub Pages has built-in Jekyll support. No extra setup needed.

---

## How to preview locally (optional)

If you want to preview changes before pushing:

1. Install Ruby: https://www.ruby-lang.org/en/downloads/
2. In your project folder, run:
   ```
   bundle install
   bundle exec jekyll serve
   ```
3. Open http://localhost:4000 in your browser

---

## Common tasks

### Update your name, email, or social links
Open `_config.yml` — everything is in one place.

---

### Add a new blog post ← MOST COMMON TASK
1. Create a new file in `_posts/` named:
   ```
   YYYY-MM-DD-your-post-title.md
   ```
   Example: `2026-05-10-new-gwas-method.md`

2. Start the file with this front matter block:
   ```
   ---
   layout: post
   title: "Your Post Title"
   date: 2026-05-10
   category: tutorial
   ---
   ```
   Category options: `tutorial` / `methods` / `career`

3. Write your post below the `---` in plain Markdown.
   That's it — the post appears on the blog page automatically.

**Markdown basics:**
```
## Section heading
**bold text**
*italic text*
[link text](https://url.com)
- bullet item
`inline code`
```python
your code here
```
```

---

### Add your profile photo
1. Save your photo as `assets/images/photo.jpg`
2. Open `index.md` and find the comment `<!-- PHOTO: Replace... -->`
3. Replace `<div class="about-photo">CW</div>` with:
   ```html
   <img class="about-photo" src="/assets/images/photo.jpg" alt="Chen Wang">
   ```

---

### Update your CV
1. Export your latest CV as a PDF
2. Name it exactly `cv.pdf`
3. Replace the `cv.pdf` file in the root folder
4. Update the "Last updated" date in `cv.md`

---

### Add a new project
1. Open `projects.md`
2. Copy the template block at the bottom of the file
3. Paste it at the TOP of the project list
4. Fill in your title, collaborators, presentations, and link URLs

### Add a graphical summary to a project
1. Save your image to `assets/images/` (e.g. `assets/images/rates.png`)
2. In `projects.md`, find the matching project and replace:
   ```html
   <div class="project-image">
     <div class="placeholder-text">Graphical summary<br>coming soon</div>
   </div>
   ```
   with:
   ```html
   <div class="project-image">
     <img src="/assets/images/rates.png" alt="RATES graphical summary">
   </div>
   ```

---

### Add a new publication
1. Open `publications.md`
2. Copy the template block at the bottom
3. Paste it at the TOP (newest first)
4. Fill in title, authors, venue, and DOI link

---

### Fill in placeholder URLs
Search for `YOUR_` across all `.md` files to find all placeholder URLs.
Replace each one with the real link when you have it.

---

### Change the accent color
Open `assets/css/style.css` and change the `--teal` variable at the top:
```css
:root {
  --teal: #0e9f7e;  /* change to any color */
}
```

---

### Set up the visitor map
1. Go to https://clustrmaps.com and sign up (free)
2. Enter your URL: `https://wangc29.github.io`
3. Copy the `<script>` embed code
4. Open `index.md`, find the `<!-- REPLACE THIS -->` comment
5. Replace the placeholder div with the ClustrMaps script tag
