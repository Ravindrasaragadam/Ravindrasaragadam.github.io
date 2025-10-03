# Deployment Guide

This portfolio website is configured for easy deployment to GitHub Pages.

## Prerequisites

1. GitHub account
2. Supabase account (for database and authentication)

## Setup Instructions

### 1. Create a GitHub Repository

1. Create a new repository on GitHub (e.g., `ravindrasaragadam.github.io`)
2. Push your code to the repository:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### 2. Configure GitHub Pages

1. Go to your repository settings
2. Navigate to **Pages** section
3. Under "Build and deployment":
   - Source: Select **GitHub Actions**

### 3. Add Supabase Secrets

Add your Supabase credentials as GitHub secrets:

1. Go to repository **Settings** > **Secrets and variables** > **Actions**
2. Add the following secrets:
   - `VITE_SUPABASE_URL`: Your Supabase project URL
   - `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous key

You can find these values in your Supabase project settings under **API**.

### 4. Deploy

The site will automatically deploy when you push to the `main` branch. You can also manually trigger deployment:

1. Go to **Actions** tab
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow"

### 5. Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public/` folder with your domain name
2. Configure DNS settings with your domain provider
3. Update the domain in GitHub Pages settings

## Admin Panel Access

To access the admin panel for managing blog posts and projects:

1. Navigate to `https://your-domain.com/admin`
2. Use Supabase authentication credentials
3. Create an admin user in Supabase:

```sql
-- In Supabase SQL editor
INSERT INTO auth.users (email, encrypted_password, email_confirmed_at)
VALUES ('your-email@example.com', crypt('your-password', gen_salt('bf')), now());
```

## Updating Content

### Via Admin Panel (Recommended)

1. Login to `/admin`
2. Add/edit projects and blog posts through the UI
3. Changes are stored in Supabase and appear immediately

### Via Code

1. Edit files in `src/data/profile.ts` for static content
2. Commit and push changes
3. GitHub Actions will rebuild and deploy automatically

## Troubleshooting

### Build Fails

- Check that all environment variables are set correctly in GitHub secrets
- Ensure Supabase credentials are valid
- Review build logs in Actions tab

### Admin Panel Not Working

- Verify Supabase URL and keys are correct in `.env` and GitHub secrets
- Check that RLS policies are properly configured in Supabase
- Ensure authentication is enabled in Supabase project

### Contact Form Not Working

- Verify Supabase connection
- Check browser console for errors
- Ensure `contact_submissions` table has correct RLS policies

## Local Development

```bash
npm install
npm run dev
```

Create a `.env` file with:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Support

For issues or questions:
- Check Supabase documentation: https://supabase.com/docs
- Review Vite documentation: https://vitejs.dev/
- GitHub Pages documentation: https://docs.github.com/pages
