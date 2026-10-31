# My Profile (React)

A profile page built with React + Vite, with switchable templates.

## Run it

```
npm install
npm run dev
```

## Make it yours

Edit `src/data/resume.js` — name, summary, skills, experience, projects, contact.
Every template reads from this one file.

## Templates

Each template lives in `src/templates/<name>/`. To add one, create a component
that takes `{ data }` and register it in `src/templates/index.js`.

- `modern` — animated student-friendly page (dark/light toggle, typing effect)
- `sidebar` — classic resume layout

## Deploy

`netlify.toml` (repo root) builds `my-profile/` with `npm run build` and publishes `dist`.
