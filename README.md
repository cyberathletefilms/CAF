# Cyber Athlete Films website

Static website prepared for GitHub + Cloudflare Pages.

## Publish to GitHub
1. Download and unzip this package.
2. In the `cyber-athlete-films` GitHub repository, choose **Add file → Upload files**.
3. Drag the *contents* of this folder into GitHub, including `index.html` and the `assets` folder.
4. Commit directly to `main`.

## Connect Cloudflare Pages
1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Select `cyberathletefilms/cyber-athlete-films`.
3. Framework preset: **None**.
4. Build command: leave blank.
5. Build output directory: `/`.
6. Deploy.

## Before launch
- Confirm `hello@cyberathletefilms.com` is the correct contact email. Change it in `index.html` if needed.
- The project videos are compressed for web delivery and remain below Cloudflare Pages' per-file size limit.
- After the `.pages.dev` preview looks right, add the custom domain inside Cloudflare Pages.


## Lightweight first deployment
This package intentionally omits locally hosted MP4 files so it can be uploaded through GitHub’s browser interface. Project videos should be embedded from YouTube/Vimeo or hosted separately after the first deployment.
