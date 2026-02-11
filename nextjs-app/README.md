# Adam Blackwell — Copywriter Portfolio

A luxury copywriting studio portfolio built with **Next.js 16**, **Tailwind CSS 4**, and **Keystatic CMS** for local-first content editing.

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

The site is available at [http://localhost:3000](http://localhost:3000).

### Access the Keystatic Admin

Navigate to [http://localhost:3000/keystatic](http://localhost:3000/keystatic) to open the content editor.

From here you can:

- Edit **Homepage**, **About**, **Contact**, and **Site Settings** singletons
- Add, edit, or remove **Projects** (case studies)
- Manage **Testimonials**

All content is stored as YAML files in the `/content` directory and committed to the repo.

## Adding / Editing Projects

1. Go to `/keystatic` in your browser
2. Click **Projects** in the sidebar
3. Click **Create** to add a new project, or click an existing one to edit
4. Fill in the fields (title, category, summary, images, stats, etc.)
5. Click **Save** — the changes are written to `/content/projects/<slug>/index.yaml`

### Project Fields

| Field | Description |
|-------|-------------|
| Title | Project name (generates the URL slug) |
| Number | Display number (e.g. "01") |
| Client | Client name |
| Category | Category label for listings |
| Featured | Show on homepage |
| Featured Size | Grid size on homepage (large/small) |
| Summary | Short description for listing pages |
| Scope | Scope of work |
| Sample Work | Array of writing samples with images |
| Stats | Key metrics (number + label) |
| Testimonial | Client quote, author, role |
| Sort Order | Controls display order |

## Project Structure

```
├── content/              # Keystatic content (YAML files)
│   ├── homepage.yaml
│   ├── about.yaml
│   ├── contact.yaml
│   ├── site-settings.yaml
│   └── projects/         # One folder per project
├── public/images/        # Uploaded images
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── (site)/       # Main site pages
│   │   ├── keystatic/    # Keystatic admin UI
│   │   └── api/          # API routes
│   ├── components/       # Shared components
│   └── lib/              # Utilities (Keystatic reader)
└── keystatic.config.ts   # Keystatic schema definitions
```

## Build & Deploy

```bash
npm run build
```

Deploy to **Vercel** by connecting the repo. No environment variables are needed for local mode.

For cloud-based editing (GitHub mode), see the [Keystatic docs](https://keystatic.com/docs/github-mode).
