# My Microfrontend Portfolio

This repository contains the source code for the **Shell** of my personal portfolio, which is built using a microfrontend architecture.

**Live Preview:** [todo]()

## Architectural Overview

As the central **React Shell**, this application is responsible for the main layout, navigation, and orchestration. It loads individual portfolio projects as independent **Remotes**, each of which is maintained in its own separate repository.

## Main Technology Stack

- **Core Architecture**: Webpack 5 & Module Federation
- **Shell & Remotes**: React, Next.js
- **Build Tooling**: Craco (for Create React App configuration override)

## Live Remotes & Preview URLs

Each remote application is developed and deployed independently.

| Remote Projects       | Repo                                                                             | Preview                                                 |
| --------------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------- |
| Post Login Dashboard  | https://github.com/devi-r/React-Post-Login-Dashboard                             | https://react-post-login-dashboard.onrender.com/        |
| Ecommerce Catalogue   | https://github.com/devi-r/React-Ecommerce-Catalogue-Page                         | https://react-ecommerce-catalogue-page.onrender.com     |
| Syntax Highlighter    | https://github.com/devi-r/React-Syntax-Highlighter                               | https://react-syntax-highlighter.onrender.com/          |
| AI FE System Designer | https://github.com/devi-r/Nextjs-Fullstack-AI-FE-System-Design-Article-Generator | https://nextjs-fullstack-ai-fe-system-desig.vercel.app/ |
| WebGl Paint Splatter  | https://github.com/devi-r/React-WebGL-Paint-Splatter                             | https://react-webgl-paint-splatter.onrender.com/        |

## Mock Backend Server

Several remotes rely on dynamic data to function. To simulate a real-world environment without the overhead of a full backend, this project includes an (express-mock-server)[https://express-mock-server-rose.vercel.app] (Repo)[https://github.com/devi-r/Express-Mock-Server]. This server provides a simple, hardcoded API that the remotes can fetch data from, allowing them to be developed and demonstrated as if they were connected to live services.

## Getting Started: Local Development

To run the entire ecosystem on your local machine, follow these steps.

### Prerequisites

- Node.js (v18 or higher)
- `npm` or `yarn`

### Installation & Running

1.  **Clone all the repositories:**

    ```bash
    git clone <repo-url>
    cd project-name
    ```

2.  **Install dependencies for all apps:**

    ```bash
    npm install
    ```

3.  **Run the applications:**
    It's important to start the remote applications **first**, as the shell will fetch their `remoteEntry.js` files on startup. Open a new terminal for each application.

    ```

    ```

4.  **Open the application:**
    Navigate to `http://localhost:3000` in your browser to see the shell application with the remotes integrated.

## Author

- **[Devi R](https://www.linkedin.com/in/devi-r-06bb94a7)**
