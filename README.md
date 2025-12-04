# 🚀 Next.js 14 High-Performance Blog Application

A modern, full-stack blog platform built with Next.js 14 (App Router), focusing on top-tier performance, SEO, and robust data management via GraphQL (Hygraph). This project serves as a comprehensive demonstration of advanced Next.js features, including Server Components, Server Actions, and efficient data caching.

## ✨ Key Features & Technology Stack

This project showcases expertise in building highly performant and maintainable web applications using the latest web standards.

### 🛠️ Technology Stack

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | **Next.js 14 (App Router)** | Server Components, Streaming, Routing, and Caching. |
| **Styling/UI** | **Tailwind CSS, Shadcn/ui** | Utility-first styling and accessible, reusable components. |
| **Data Source** | **Hygraph (GraphQL)** | Headless CMS for structured content management. |
| **Data Fetching** | **`graphql-request`** | Lightweight client for fast GraphQL querying. |
| **Form Management** | **React Hook Form, Zod** | Robust and type-safe form validation and management. |
| **Deployment** | **Vercel** | Edge network deployment for maximum speed and reliability. |
| **Type Safety** | **TypeScript** | Ensures codebase reliability and maintainability. |

### 🎯 Demonstrated Next.js 14 Proficiency

This application is engineered to highlight deep understanding of the App Router's core concepts:

* **Server Components (SC):** Utilizing `async` Server Components for zero-bundle-size data fetching (`getTags()`, `getCategories()`) and faster initial load times.
* **Efficient Caching Strategy:** Implementing **Time-based Revalidation (`revalidate`)** and **On-demand Revalidation (`revalidatePath`, `revalidateTag`)** to ensure data freshness while maintaining high performance.
* **Server/Client Component Separation:** Strategically dividing components (e.g., `GlobalSearch` SC and `GlobalSearchClient` CC) to handle static data fetching on the server and interactivity on the client, adhering to Next.js best practices.
* **Server Actions:** Demonstrating the use of **Server Actions** for secure, type-safe mutation/data submission (e.g., handling form submissions like comments or simple interactions).
* **Advanced SEO:** Comprehensive implementation of **Next.js Metadata API** for dynamic titles, descriptions, canonical URLs, and full support for Open Graph and Twitter Card tags.

## 📦 Project Structure Overview

The project follows a modular structure common in modern Next.js applications:

* `app/`: Main routing logic and Server Components (pages, layouts).
* `components/`: Reusable UI components (including Server and Client boundaries).
* `services/`: Centralized data fetching logic using `graphql-request`.
* `lib/`: Utility functions (e.g., reading time calculation, date formatting).

## 💻 Getting Started

### Prerequisites

* Node.js (v18+)
* A Hygraph API endpoint and credentials

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/OnlineAzamat/blog-app.git
    cd blog-app
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```
3.  Configure Environment Variables:
    Create a `.env.local` file in the root directory and add your GraphQL endpoint:
    ```
    NEXT_PUBLIC_HYGRAPH_ENDPOINT=YOUR_HYGRAPH_API_ENDPOINT
    ```

4.  Run the development server:
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---
**Author:** Azamat Yakubbaev
