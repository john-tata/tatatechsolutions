# TataTech Solutions — Website

Premium agency website for TataTech Solutions.  
Built with HTML, CSS (custom), and vanilla JavaScript. No build step required.

---

## Project Structure

```
tatatechsolutions/
│
├── index.html          # Main homepage
├── portfolio.html      # Full portfolio page
├── case-studies.html   # Detailed case studies
├── contact.html        # Standalone contact page
│
├── css/
│   └── styles.css      # All styles — design system + components
│
├── js/
│   └── main.js         # Scroll reveal, animations, form, counter
│
├── assets/
│   ├── logo/
│   │   └── ttslogo.png
│   ├── images/
│   └── icons/
│
└── README.md
```

---

## Local Development

No build tools needed. Just open `index.html` in your browser or use Live Server:

```bash
# With VS Code Live Server extension:
# Right-click index.html → Open with Live Server

# Or with Python:
python -m http.server 3000

# Or with Node.js:
npx serve .
```

---

## Deployment

### ▲ Vercel (Recommended)

1. Push your project to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repository
4. Framework Preset: **Other**
5. Click **Deploy**

That's it. Vercel will auto-detect the static site.

**Custom domain:**
- Go to Project → Settings → Domains
- Add `tatatechsolutions.com`
- Update DNS records at your registrar

---

### Netlify

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com) → Add new site → Import from Git
3. Build command: *(leave empty)*
4. Publish directory: `.` (root)
5. Click **Deploy site**

**Or drag & drop:**
- Go to [app.netlify.com/drop](https://app.netlify.com/drop)
- Drag the entire `tatatechsolutions/` folder

---

### GitHub Pages

1. Push to GitHub repository
2. Go to repo → **Settings** → **Pages**
3. Source: **Deploy from a branch**
4. Branch: `main` / `root`
5. Save — site will be live at `https://yourusername.github.io/tatatechsolutions`

**For custom domain:**
1. Add a `CNAME` file in the root with your domain:
   ```
   tatatechsolutions.com
   ```
2. Update DNS A records to GitHub Pages IPs

---

## Customization

### Update contact form
The form in `index.html` and `contact.html` currently shows a success message on submit.  
To connect to a real email backend, replace the `contactForm` submit handler in `main.js` with:

- **Formspree**: `https://formspree.io` — free, just change the form `action`
- **Web3Forms**: `https://web3forms.com` — free, no backend needed
- **EmailJS**: `https://emailjs.com` — send from client-side JS

Example with Formspree:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Update logo
Replace `assets/logo/ttslogo.png` with your logo file.

### Update colors
All design tokens are in `css/styles.css` under `:root {}`.  
Primary blue: `--blue: #2563EB`

### Update content
- Hero text: `index.html` → hero section
- Services: `index.html` → services section
- Projects: `index.html` → projects section + `portfolio.html`
- Testimonials: `index.html` → testimonials section
- Pricing: `index.html` → pricing section
- Contact email: search for `hello@tatatechsolutions.com` across all files

---

## SEO Checklist

- [ ] Update `<meta name="description">` in each page
- [ ] Add real `og:image` for social sharing
- [ ] Add `<link rel="canonical">` tags
- [ ] Add Google Analytics or Plausible script
- [ ] Submit sitemap to Google Search Console
- [ ] Add `robots.txt`

---

## Performance Tips

- Images: compress with [squoosh.app](https://squoosh.app) before adding to `assets/images/`
- Fonts: Geist is loaded from Google Fonts — self-host for faster loads
- Consider adding a `<link rel="preload">` for the logo image

---

## Tech Stack

| Layer      | Technology        |
|------------|-------------------|
| Markup     | HTML5 (semantic)  |
| Styles     | Custom CSS + CSS Variables |
| Scripts    | Vanilla JavaScript (ES6+) |
| Fonts      | Geist (Google Fonts) |
| Icons      | Unicode / Emoji   |
| Deployment | Vercel / Netlify / GitHub Pages |

---

Built with precision by TataTech Solutions · hello@tatatechsolutions.com
