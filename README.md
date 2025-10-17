# 🍳 Smart Recipe Generator

> **Your personal AI-powered cooking assistant — enter the ingredients you have, and get the best recipes instantly!**

---

## 🧠 Overview

**Smart Recipe Generator** is a web app that helps you discover the *best recipes* based on the ingredients you already have.  
Powered by **AI**, it intelligently matches your available ingredients with curated recipes to reduce food waste and inspire creativity in your kitchen.

Simply input your ingredients (e.g., “tomato, potato, onion”) as text or images — and the app will suggest top recipes you can cook right now.

---

## 🚀 Features

- 🧾 **AI-powered recipe suggestions** — get the top 3 recipes suited to your ingredients  
- 🍅 **Ingredient Image Recognition** — Upload images or type in the ingredients
- 🧂 **Smart filtering** — filters recipes by dietary preference, cooking time, difficulty and serving size.  
- 🎨 **Modern UI** — built with shadcn/ui and Tailwind CSS for a clean, elegant experience  
- 📱 **Responsive design** — optimized for both mobile and desktop  

---

## 🧩 Tech Stack

| Technology | Purpose |
|-------------|----------|
| **Vite** | Lightning-fast build tool and development server |
| **TypeScript** | Type-safe, scalable frontend logic |
| **React** | UI framework for dynamic components |
| **Tailwind CSS** | Utility-first styling |
| **shadcn/ui** | Beautiful prebuilt React components |
| **Flask** | For the backend API |
| **PyTorch** | Image recognition for ingredient photos |

---

## 💡 How It Works

1. User enters a list of available ingredients or uploads images.
2. The app detects the ingredients from the image using the ResNet model.
4. The AI compares ingredients with a recipe database.
5. The top 3 matching recipes are displayed with:
   - Recipe name  
   - Ingredient match score  
   - Short description  

---

## 🛠️ Installation & Setup

1. Clone the repository
```bash
git clone https://github.com/your-username/smart-recipe-generator.git
cd smart-recipe-generator
```
2. Install dependencies
```bash
npm install
```
3. Start the development server
```bash
npm run dev
```
4. Build for production
```bash
npm run build
```

---

### 🖼️ UI Preview

<img width="1897" height="905" alt="Screenshot 2025-10-17 095925" src="https://github.com/user-attachments/assets/1599f93d-987e-45e1-ba6a-3da3397dd9d0" />


---

### 🧑‍🍳 Contributing
Contributions are welcome!
If you'd like to improve the app, feel free to:

1. Fork the repo
2. Create a new branch (feature/your-feature-name)
3. Commit your changes
4. Open a pull request

### 📜 License
This project is licensed under the MIT License — feel free to use and modify it.

### 💬 Acknowledgements
- shadcn/ui for elegant React components
- Tailwind CSS for styling
- Vite for super-fast development

Made with ❤️ by <a href="https://www.github.com/tashad19"> Tashadur Rahman </a>
#### “Waste less, cook more, and let AI inspire your next meal!”
