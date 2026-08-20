# React Personal Portfolio

A sleek, modern, and responsive personal portfolio built with React and Vite. This project satisfies the requirements of Assignment 1.

## 🚀 Features
- **6+ Components**: Header, Navbar, AboutMe, Education, Skills, Contact, and Footer.
- **Responsive Design**: Looks great on both desktop and mobile devices.
- **External CSS**: Styled using `index.css` and `App.css` with a premium dark mode aesthetic.
- **JSX**: Built entirely using React functional components and JSX.

---

## 🛠️ Local Setup Instructions

To run this project locally on your machine, follow these steps:

1. **Prerequisites**: Make sure you have [Node.js](https://nodejs.org/) installed.
2. **Install Dependencies**:
   Open your terminal in the project directory and run:
   ```bash
   npm install
   ```
3. **Start the Development Server**:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to the local URL provided in the terminal (usually `http://localhost:5173`).

---

## 🌐 Deployment Plans

You can easily deploy this React application for free using either Vercel or Netlify.

### Option A: Deploy to Vercel (Recommended)
1. **Push to GitHub**: Commit your code and push the repository to GitHub.
2. **Log in to Vercel**: Go to [vercel.com](https://vercel.com/) and sign in with your GitHub account.
3. **Add New Project**: Click "Add New" -> "Project" and import your GitHub repository.
4. **Configure Build Settings**:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. **Deploy**: Click the "Deploy" button. Vercel will automatically build and host your site.

### Option B: Deploy to Netlify
1. **Push to GitHub**: Ensure your code is pushed to a GitHub repository.
2. **Log in to Netlify**: Go to [netlify.com](https://www.netlify.com/) and sign in with GitHub.
3. **Add New Site**: Click "Add new site" -> "Import an existing project".
4. **Connect to GitHub**: Authorize Netlify and select your repository.
5. **Configure Build Settings**:
   - Base directory: `/` (leave blank or as default)
   - Build command: `npm run build`
   - Publish directory: `dist`
6. **Deploy**: Click "Deploy site".

---

## 🖨️ Hardcopy / PDF Submission Guide

If you are required to submit a hardcopy or PDF of your code and website for the assignment, follow these steps:

### What to Include in the PDF:
1. **Screenshots of the Website**:
   - Take a full-page screenshot of the website on a Desktop view.
   - Take a screenshot of the website in Mobile view (use browser developer tools device toolbar).
2. **Directory Structure**:
   - A screenshot of your VS Code explorer showing the `src/components` folder to prove you have 6+ components.
3. **Key Source Code Files**:
   - `src/App.jsx` (Shows how components are imported and rendered).
   - `src/components/Header.jsx` (or any other component to show JSX usage).
   - `package.json` (Proves the use of React and Vite).

### How to Generate the PDF:
- **For Code**: Open the required files (`App.jsx`, `Header.jsx`, etc.) in VS Code. You can use an extension like **"PrintCode"** or simply copy-paste the code into a Word Document / Google Doc and format it with a monospace font (like Courier New).
- **For Screenshots**: Paste your website and folder screenshots into the same Word Document / Google Doc.
- **Export**: Go to `File > Download > PDF Document` (in Google Docs) or `File > Save As > PDF` (in Microsoft Word).
