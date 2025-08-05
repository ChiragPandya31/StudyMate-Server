StudyMate - Server

This is the backend for the StudyMate web app. It handles PDF uploads, AI-powered analysis, cloud storage, and serves study material data via a REST API.

--

## ⚙️ Tech Stack
- Node.js
- Express.js
- MongoDB
- Multer (for file uploads)
- Cloudinary (file storage)
- Groq API (for AI analysis)

--

## 🧠 Features
- Upload PDFs and extract patterns using AI
- Store files in Cloudinary
- CRUD APIs for study materials
- Supports Quiz Battle functionality with Groq AI

--

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/ChiragPandya31/StudyMate-server
cd studymate-server
```
### 2. Install dependencies
```bash
npm install
```
### 3. Create a .env file
```bash
MONGO_URL= // mongodb-url //
GROQ_API= // GROQ API KEY //
PORT = 5000
```
### 4. Run the development server
```bash
npm run dev
```
