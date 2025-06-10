# Víctor Xesús Barreiro Domínguez - Academic Website

This is my personal academic website, built with Next.js and deployed on GitHub Pages. The website showcases my research, projects, and thoughts on AI and Earth Observation.

## Features

- Modern, responsive design
- Clean and professional layout
- Blog and notes section
- Research and projects showcase
- Engineering insights
- CV and contact information
- Optimized for SEO
- Easy to maintain and update

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons

## Development

1. Clone the repository:
   ```bash
   git clone https://github.com/victorxbd/victorpage.git
   cd victorpage
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to GitHub Pages

1. Update the `next.config.js` file with your repository name:
   ```js
   basePath: process.env.NODE_ENV === 'production' ? '/victorpage' : '',
   ```

2. Build and export the site:
   ```bash
   npm run deploy
   ```

3. Push the contents of the `out` directory to the `gh-pages` branch:
   ```bash
   git add out
   git commit -m "Deploy to GitHub Pages"
   git subtree push --prefix out origin gh-pages
   ```

4. Enable GitHub Pages in your repository settings:
   - Go to Settings > Pages
   - Select the `gh-pages` branch as the source
   - Save the changes

## Customization

1. Update personal information:
   - Edit the content in `src/app/page.tsx` for the home page
   - Modify `src/app/research/page.tsx` for research information
   - Update `src/app/projects/page.tsx` for projects
   - Edit `src/app/engineering/page.tsx` for engineering articles
   - Update `src/app/cv/page.tsx` for CV and contact information

2. Update metadata:
   - Edit `src/app/layout.tsx` to update site metadata
   - Modify social links in `src/components/Footer.tsx`

3. Customize styling:
   - Edit `tailwind.config.js` for theme customization
   - Modify `src/app/globals.css` for global styles

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For any questions or suggestions, please feel free to reach out through the contact form on the website or via email. 