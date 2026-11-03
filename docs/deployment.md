# Deploying to Netlify

The site uses Next.js App Router with server rendering, language cookies and a
route handler at `/api/site`. Deploy it with Netlify's Next.js Runtime.

## Automatic deploys from GitHub

Push source code and deployment configuration to the branch connected to Netlify.
Netlify checks out that commit, installs dependencies, runs `npm run build`
(`next build`), and creates a production `.next` directory on its own build
machine. The Next.js adapter then prepares the static assets and server functions
for deployment.

Both `next dev` and `next build` use the directory name `.next`, with different
contents for development and production. Keep `.next` in `.gitignore`; it does
not need to exist in GitHub for automatic deploys.

## Build settings

`netlify.toml` is the source of truth for build settings and overrides matching
settings in the Netlify dashboard:

- Base directory: repository root (leave empty or `/`).
- Build command: `npm run build`.
- Publish directory: `.next`.
- Runtime: `@netlify/plugin-nextjs`, declared in `netlify.toml` and installed as a
  development dependency.

Commit and push `netlify.toml`, `package.json` and `package-lock.json` together.
Trigger a deploy of that commit. When migrating the existing site from Vite,
use **Clear cache and deploy site** for the first deploy and confirm that the
log loads `@netlify/plugin-nextjs` and resolves the publish directory to `.next`.

`next build` creates `.next`, while the previous Vite build created `dist`.
A successful build followed by `Deploy directory 'dist' does not exist` means
Netlify is still using the old publish directory. Rebuilding the same old commit
does not apply the configuration change.

After deployment, open `/people`, `/news`, and a news detail URL directly. Switch
between Vietnamese and English, then reload to confirm the saved language.
Check `/api/site` as well.

References: [Next.js Runtime](https://github.com/opennextjs/opennextjs-netlify),
[file-based configuration](https://docs.netlify.com/build/configure-builds/file-based-configuration/).
