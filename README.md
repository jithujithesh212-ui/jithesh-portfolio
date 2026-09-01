# Jithesh Portfolio

Next.js portfolio for Jithesh — Visual Designer & Motion Graphics Artist.

## Project structure

- `app/` — Next.js App Router entry files
- `components/portfolio/` — portfolio sections
- `lib/portfolio-data.ts` — editable portfolio content
- `public/images/` — portfolio images

## Run locally

1. Install Node.js 20+.
2. Install pnpm (`npm install -g pnpm`).
3. Run `pnpm install`.
4. Run `pnpm dev`.
5. Open `http://localhost:3000`.
6. Before deploying, run `pnpm build` and make sure it finishes successfully.

## Deploy to Vercel

This ZIP is intentionally packaged with the Next.js project files at the ZIP root. Do not create an extra `jithesh_site` folder in the GitHub repository.

Recommended flow:
1. Create a new GitHub repository.
2. Extract this ZIP.
3. Upload the contents inside this folder directly to the repository root.
4. Import that repository into Vercel.
5. Framework preset: Next.js.
6. Root Directory: `./` (leave it at repository root).
7. Build command: `pnpm build`.
8. Install command: `pnpm install`.
9. Deploy.

If Vercel ever says it cannot find an `app` or `pages` directory, check the repository root first. `app/page.tsx` must be directly inside the repository root, not inside another nested folder.
