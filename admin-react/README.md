# Admin React App

This is a standalone React admin panel in the root folder:

- `admin-react/`

It is outside `src/` and does not use Next.js routing.

## Architecture

- `admin-react` is the UI only.
- It calls your main website API at `http://localhost:3000/api/blogs`.
- MongoDB connection is handled by the main website (Next.js API routes).
- There is no separate admin server.

## Setup

1. Start the main website first from the `doctor` root.
2. Make sure `.env.local` includes `MONGODB_URI`, `MONGODB_DB`, `ADMIN_BLOG_KEY`, and `ADMIN_APP_ORIGIN`.
3. Go to `admin-react`.
4. Run `npm install`.
5. Copy `.env.example` to `.env` if needed.
6. Set `VITE_MAIN_WEBSITE_URL` if your main site is not on `http://localhost:3000`.
7. Run `npm run dev`.

Admin UI runs on:
- `http://localhost:5174`

## Features

- Create blog posts
- Delete blog posts
- List all blog posts
- Uses the same MongoDB-backed data as the main website
- Admin key protection via `x-admin-key`
