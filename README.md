# 📊 Inscript React Assignment

This is a front-end assignment for the **React Developer Internship** at **Inscript Private Limited**. The goal was to replicate a spreadsheet-style UI based on a provided Figma design using React, TypeScript, Tailwind CSS, and `@tanstack/react-table`.

---

## 🚀 Tech Stack

- ⚛️ **React** + **TypeScript** (Vite)
- 🎨 **Tailwind CSS**
- 📊 **@tanstack/react-table**
- ☁️ **Vercel** (for deployment)

---

## 🔧 Local Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/codeminer29/inscript-react-assignment.git
   cd inscript-react-assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. Open `http://localhost:5173` in your browser to view the application.

---

## 🌐 Live Demo

🔗 [View Deployed App](https://inscript-react-assignment.vercel.app)

---

## ✅ Features Implemented

- 📐 Spreadsheet-style layout with grouped column headers
- 📱 Fully responsive grid using Tailwind CSS
- 🔄 Dynamic row rendering from mock data
- 🏷️ Column headers with icons
- 📊 Conditional formatting for status and priority
- ✏️ Editable cell support (in progress)

---

## ⚖️ Trade-offs & Decisions

- **Tailwind CSS** was chosen for rapid styling and pixel-perfect UI alignment per the Figma.
- **@tanstack/react-table** was selected for its flexibility in handling complex table structures, but required custom styling to achieve a spreadsheet-like feel.
- **Scrollbars were hidden** to improve visual clarity. However, they can be re-enabled for better accessibility if needed.
- **Functionality like sorting and filtering** was intentionally excluded to focus purely on design fidelity and layout accuracy.

---

## 📁 Project Structure

```
src/
├── components/
│   └── Spreadsheet.tsx      # Main spreadsheet component
├── data/
│   └── mockData.ts          # Mock data for rows
├── App.tsx                  # Entry component
├── main.tsx                 # Vite setup
├── index.css                # Tailwind base styles
```

---

## 👨‍💻 Author

**Soham Bamane**  
GitHub: [@codeminer29](https://github.com/codeminer29)  
React Developer Intern Applicant at **Inscript Pvt. Ltd.**

---
