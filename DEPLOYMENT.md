# GitHub Pages Deployment Guide

This guide will help you deploy your Next.js portfolio to GitHub Pages.

## Prerequisites

1. A GitHub repository (create one if you haven't already)
2. GitHub Pages enabled in your repository settings

## Step-by-Step Deployment

### 1. Push Your Code to GitHub

If you haven't already, push your code to GitHub:

```bash
git add .
git commit -m "Configure for GitHub Pages deployment"
git push origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
4. Save the settings

### 3. Automatic Deployment

Once you've pushed the code and enabled GitHub Actions, the workflow will automatically:
- Build your Next.js app as a static site
- Deploy it to GitHub Pages
- Make it available at: `https://<username>.github.io/<repository-name>`

The deployment will trigger automatically on every push to the `main` branch.

### 4. Custom Domain (Optional)

If you want to use a custom domain:
1. Add a `CNAME` file in the `public` folder with your domain name
2. Configure your DNS settings to point to GitHub Pages
3. Update the domain in GitHub repository settings → Pages

## Important Notes

### Contact Form API Route

⚠️ **The contact form API route (`/api/contact`) will NOT work with static export.**

Since GitHub Pages serves static files only, server-side API routes are not supported. You have a few options:

#### Option 1: Use a Third-Party Service (Recommended)
Update the contact form to use services like:
- **Formspree**: `https://formspree.io/`
- **EmailJS**: `https://www.emailjs.com/`
- **Web3Forms**: `https://web3forms.com/`

Example with Formspree:
```typescript
// In components/Contact.tsx, update handleSubmit:
const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(formData),
});
```

#### Option 2: Remove the Form
If you don't need the form functionality, you can remove it or replace it with a simple mailto link.

#### Option 3: Use Vercel (Alternative)
If you need API routes, consider deploying to Vercel instead, which supports Next.js API routes out of the box.

### Base Path Configuration

If your repository name is NOT your username (e.g., `username.github.io`), you may need to set a base path:

1. Open `next.config.js`
2. Uncomment and update the `basePath`:
```javascript
basePath: '/your-repo-name',
trailingSlash: true,
```

For example, if your repo is `portfolio_` and your username is `raphk99`, the site will be at:
- `https://raphk99.github.io/portfolio_/`

In this case, set:
```javascript
basePath: '/portfolio_',
trailingSlash: true,
```

If your repository is named `username.github.io` (where username is your GitHub username), you don't need a base path.

## Troubleshooting

### Build Fails
- Check the Actions tab in your GitHub repository for error logs
- Ensure all dependencies are listed in `package.json`
- Verify Node.js version compatibility (18+)

### Assets Not Loading
- Check if you need to set `basePath` in `next.config.js`
- Ensure all image paths are relative or use Next.js Image component
- Check browser console for 404 errors

### Contact Form Not Working
- This is expected with static export - see "Contact Form API Route" section above

## Manual Deployment (Alternative)

If you prefer to deploy manually:

```bash
# Build the static site
npm run build

# The output will be in the 'out' folder
# Push the 'out' folder contents to the 'gh-pages' branch
```

However, using GitHub Actions (automatic deployment) is recommended.

## Checking Deployment Status

1. Go to your repository on GitHub
2. Click on the **Actions** tab
3. You'll see the deployment workflow running
4. Once complete, your site will be live!

## Need Help?

- Check GitHub Actions logs in the **Actions** tab
- Verify GitHub Pages settings in **Settings** → **Pages**
- Ensure your repository is public (or you have GitHub Pro for private repos)
