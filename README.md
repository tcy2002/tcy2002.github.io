# Personal Website

A personal website for GitHub Pages, with a warm off-white and deep blue color palette. Responsive on desktop and mobile, with no dependencies or build step required.

The page includes a portrait, an introduction, an about section, education and research interests, internship experience, hobbies, and contact details. Empty text fields and hobbies display English placeholders; empty education, research interests, experience, and profile links are hidden.

## Update your profile

Open [`profile.js`](profile.js) in the repository root and edit the values inside the quotes. For example:

```js
window.PROFILE = {
  name: "Alex Smith",
  chineseName: "", // Optional Chinese name
  email: "hello@example.com",
  photo: "assets/images/avatar.jpg",
  tagline: "Computer science student.\nCurious about technology and life.",
  about: "Hello! I enjoy exploring new ideas.\nShare a little about your studies, work, or everyday life here.",
  location: "Shanghai, China",
  education: [
    { school: "University", degree: "Bachelor’s", major: "Software Engineering", period: "2020–2024" },
  ],
  researchInterests: ["Computer Graphics", "Physics Simulation", "Motion Generation"],
  experience: [
    { company: "Company or studio", role: "Game Engine Development" },
  ],
  interests: [
    { title: "Reading", description: "Discovering new worlds through books." },
    { title: "Coding", description: "Turning ideas into useful little tools." },
    { title: "Photography", description: "Capturing moments worth remembering." },
  ],
  links: [
    { label: "GitHub", url: "https://github.com/tcy2002" },
  ],
};
```

This is an example; use your own details. Keep the quotes, commas, and brackets intact. Use `\n` for line breaks inside text and `\"` for a double quote within a quoted string.

| Field | Purpose | When empty |
| --- | --- | --- |
| `name` | Name, shared across the introduction, about section, footer, and browser title | Your Name |
| `chineseName` | Chinese name displayed below the English name on the homepage | Hidden |
| `email` | Public email address; clicking opens the visitor's email app | Email to be added |
| `photo` | Relative photo path or full image URL | Portrait illustration |
| `tagline` | Short introduction on the homepage | Default welcome message |
| `about` | Longer personal introduction | About section placeholder |
| `location` | City or region | Location to be added |
| `education` | Education cards with `school`, `degree`, `major`, and `period`, displayed in the order listed | Cards are hidden; the section and navigation link are hidden when research interests are also empty |
| `researchInterests` | Research topics displayed as tags in the education section | Tags are hidden |
| `experience` | Internship cards with `company` and `role`, displayed in the order listed | Section and navigation link are hidden |
| `interests` | Interest cards; add or remove entries as needed | Three placeholder cards |
| `links` | Links to your other profiles | Links are hidden |

Your email address is displayed publicly, so use an address you are comfortable sharing.

## Add a photo

1. Place your photo in `assets/images/`, for example as `avatar.jpg`.
2. Set `photo` in `profile.js` to `"assets/images/avatar.jpg"`.
3. Save and commit both the image and the configuration file.

A portrait photo with the subject centered works best, for example 800 × 1000 pixels. Aim for a file size under 1 MB. JPG, PNG, WebP, and other browser-supported image formats work. Photos are cropped to fill the frame; adjust `object-position` on `.portrait-image` in `assets/style.css` to change the crop. If a photo cannot load, the placeholder appears automatically.

File names are case-sensitive, so the configured path must match your uploaded file exactly. On GitHub, open `assets/images/` and choose **Add file → Upload files**, then edit `profile.js` in the repository root.

## Preview locally

Open `index.html` directly in your browser, or run this command from the repository root:

```bash
python3 -m http.server 8000
```

Visit <http://localhost:8000>. Refresh the browser after editing files.

## Publish to GitHub Pages

1. Commit and push the website files to your GitHub repository.
2. Open **Settings → Pages** in the repository.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Select the branch containing the website files (usually `main`), choose **`/ (root)`**, and save.
5. Wait for deployment to finish, then visit <https://tcy2002.github.io/>.

If Pages is already configured, pushing updates triggers a new deployment automatically. Check the repository's **Actions** tab for deployment progress.

## Files and appearance

```text
.
├── index.html             # Website entry point and page structure
├── profile.js             # Your profile: edit this file first
├── assets/
│   ├── style.css          # Colors, styles, and responsive layouts
│   ├── main.js            # Populates the page with your profile
│   ├── favicon.svg        # Browser tab icon
│   └── images/            # Your photos
└── README.md              # Setup and editing instructions
```

To change the colors, edit `--paper` (background), `--ink` (text), and `--blue` (accent) at the top of `assets/style.css`. To rename sections, edit placeholder text, or add and remove page sections, edit `index.html`. All assets are local, and the website uses system fonts without external font or framework dependencies.
