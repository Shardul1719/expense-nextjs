# 💸 Expense Next.js

A **full-stack Expense Tracker web application** built with **Next.js** to help users track daily expenses and income in a simple, intuitive user interface. The project includes both frontend and backend logic to handle data storage, API routes, and UI rendering.

🔗 **Live Demo:** [https://expense-nextjs-one.vercel.app/](https://expense-nextjs-one.vercel.app/) 

---

## 🚀 Features

* Add, view, and delete expenses
* Track total income vs. expenses
* Persistent data via backend API
* Clean and responsive interface
* Built with modern full-stack JavaScript

---

## 🧠 What I Learned

I built this project to understand and practice:

* **Next.js (App Router / Frontend + Backend)**
* Folder structure with separate `frontend` and `backend`
* Handling API Routes & CRUD operations
* Working with persistent storage (DB or JSON, as implemented)
* Environment variables
* Deployment workflow (Frontend on Vercel)

---

## 🛠️ Tech Stack

* **Frontend:** Next.js (React)
* **Backend:** Node/Next.js API Routes
* **Styling:** Tailwind CSS / CSS Modules *(modify according to your repo)*
* **Data Storage:** *(e.g., MongoDB / SQLite / JSON — adjust as needed)*
* **Deployment:** Vercel (frontend), any backend host *(if separate)*

---

## 📁 Repository Structure

```
/
├── backend/        # Backend API code
├── frontend/       # Next.js frontend
├── .gitignore
├── README.md
```

---

## 📦 Getting Started

### 1. **Clone the repository**

```bash
git clone https://github.com/Shardul1719/expense-nextjs.git
cd expense-nextjs
```

### 2. **Install dependencies**

```bash
npm install
```

or

```bash
yarn
```

### 3. **Add Environment Variables**

Create a `.env.local` file in both `frontend` and `backend` (if needed) similar to:

```
# Example
NEXT_PUBLIC_API_URL=https://your-api-endpoint
DATABASE_URL=your_database_connection_string
JWT_SECRET=your_jwt_secret
```

*(Adjust based on your actual config.)*

---

## 🚀 Run Locally

### Frontend

```bash
cd frontend
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

### Backend

```bash
cd backend
npm start
```

*(Or `npm run dev` if using nodemon / Next API routes.)*

---

## 🧪 Testing

Test API endpoints with tools like **Postman** or **Insomnia** to ensure routes work before front-end integration.

---

## 🖼️ Screenshots

*(Add project UI screenshots here for better README experience.)*

---

## 🔜 Future Improvements

* Improved UI/UX design
* Add charts/visual analytics for expenses
* User authentication
* Monthly/Yearly reports
* Export expense data (CSV/PDF)

---

## 📌 Credits & Acknowledgements

🙏 Built by **Shardul1719**, with inspiration from other Expense Tracker apps and full-stack development tutorials. 

---

## 📝 License

This project is licensed under the **MIT License** — see the `LICENSE` file for details.

---
