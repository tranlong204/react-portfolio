export interface BlogPost {
  id: string;
  title: string;
  date: string;
  summary: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'first-post',
    title: 'Getting Started with My Portfolio',
    date: '2025-08-01',
    summary: 'An overview of how I built and launched this portfolio site.',
    content: `
## Hello from Markdown

This blog is written using **Markdown** syntax!

- React
- Tailwind
- Router
- TypeScript

\`\`\`tsx
function greet() {
  console.log("Hello Markdown!");
}
\`\`\`
    `
  },
  {
    id: 'second-post',
    title: 'Projects I’m Proud Of',
    date: '2025-08-02',
    summary: 'Highlighting a few key software projects and what I learned.',
    content: `
### A Few Notable Projects

- 🚀 Portfolio with Markdown Support
- ☁️ AWS Deployment Guide
- 🛠️ CI/CD Integration Tips
    `
  }
];
