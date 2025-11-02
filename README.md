# 👑 Royal Restaurant Client Application 🍽️

<img align="center" height="550" src="https://cdn.discordapp.com/attachments/1373962207515377704/1433762793873739777/website-mockuo-restrunt.jpg?ex=6907d968&is=690687e8&hm=8c67ad2396a085577503e194646bd1817b9ed52762f544f2b387d32656d659aa" />

## Short Description of Project

This repository hosts the client application (frontend) for the **Royal Restaurant** website. Built using **React, TypeScript, and Vite**, the application provides a fast, fully responsive, and interactive user experience. It allows customers to browse the full menu, place orders, read insightful blog posts, and securely access an **Admin Panel**.

The client application is hosted on **Vercel** and is designed to be highly performant and visually engaging through the use of modern styling and animation libraries.

---

## ✨ Key Features

This application delivers a rich user experience with the following core functionalities:

* **Fully Responsive Design:** Crafted with **Tailwind CSS** and **Raw CSS** to ensure a beautiful and functional layout across all devices (mobile, tablet, and desktop).
* **Interactive Menu Browsing:** Users can easily **view and filter all menu food items** and details, facilitating easy order selection.
* **Secure Order Placement:** Allows users to select menu items and proceed to the backend server for payment processing.
* **Admin Panel (Secured):** A dedicated, secure interface for administrators to manage content, authenticate via the backend, and access CRUD functionalities.
* **Dynamic Blog System:** A dedicated page where users can **read blog posts** and participate in discussions with **real-time commenting**.
* **User Communication:** Integrated form for users to **send emails/inquiries** directly from the website.
* **Smooth Animations:** Utilizes **GSAP (GreenSock Animation Platform)** to create fluid, engaging, and professional UI animations, enhancing interactivity.

---

## 💻 Technology Stack

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | **React** | The core library for building the user interface with a component-based architecture. |
| **Language** | **TypeScript** | Adds static typing for improved code quality, reliability, and maintenance. |
| **Build Tool** | **Vite** | Next-generation frontend tooling for a blazing-fast development experience. |
| **Styling** | **Tailwind CSS & Raw CSS** | Utility-first CSS framework combined with custom CSS for maximum styling flexibility. |
| **Animation** | **GSAP** | Industry-standard JavaScript library for high-performance, complex animations. |
| **Hosting** | **Vercel** | Platform used for fast, reliable, and continuous deployment of the frontend. |

---

## 🗺️ Live Application

You can view the live, production version of the Royal Restaurant website here:

👉 **URL:** `royal-restaurant-my.vercel.app`

---

## 🚀 How To Run Locally

Follow these steps to set up and run the Royal Restaurant client application on your local machine:

### 1. Prerequisites

Make sure you have the following installed:
* Node.js (LTS recommended)
* npm or Yarn

### 2. Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/AshrafulPatHan/Royal_restaurant.git]
    cd Royal_restaurant
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    # yarn install
    ```

### 3. Environment Variables

Create a file named `.env` in the root directory. You will need to specify the URL of your backend server:

```env
# Backend API URL
VITE_API_URL=http://localhost:3000
VITE_ADMIN_URL=http://localhost:3000/admin

# Imagebb api key
VITE_IMAGEBB_API=your-api-key

```
