/* Portfolio facts retained from the supplied project. */
window.portfolio = {
  "name": "Aigaras Vaitkus",
  "github": "https://github.com/AigarasVait",
  "linkedin": "https://www.linkedin.com/in/aigaras-vaitkus",
  "email": "aigarasvaitkus@gmail.com",
  "projects": [
    {
      "title": "Task Tracker",
      "category": "DevOps & CI/CD",
      "kind": "devops",
      "status": "October 2026",
      "description": "A single-user Flask task tracker with automated tests, Docker image publishing, persistent storage, and manual deployment to an Ubuntu Server VM.",
      "tags": [
        "Python",
        "Flask",
        "Docker",
        "GitHub Actions"
      ],
      "context": "Personal project · Containerisation and CI pipeline",
      "highlights": [
        "Built task creation, editing, completion, reopening, and deletion, with descriptions and due dates stored in SQLite.",
        "Added input validation, CSRF protection, HTML escaping, and Python unittest tests for task operations, persistence, and security-related behaviour.",
        "Packaged the app with Docker and Gunicorn, using a named Docker Compose volume to preserve the database and application secret key.",
        "Configured GitHub Actions to test pull requests and pushes, then publish images to GHCR after successful pushes to main, with latest and commit SHA tags.",
        "Deployed and updated the application manually on an Ubuntu Server VM using KVM/QEMU. The CI workflow publishes images; remote deployment is a separate step.",
        "Practised troubleshooting container startup, image naming, persistent storage, port mappings, firewall rules, and virtual networking."
      ],
      "repo": "https://github.com/AigarasVait/Task-Tracker-DevOps-Project",
      "demo": ""
    },
    {
      "title": "Fintech Risk Assessment",
      "category": "Full-stack & ML engineering",
      "kind": "fullstack",
      "status": "April 2026",
      "description": "A collaborative financial risk assessment platform with a FastAPI microservice that extracts data from Lithuanian reports using rule-based parsing and Llama 3.2 via Ollama.",
      "tags": [
        "React",
        "TypeScript",
        "Java",
        "MariaDB",
        "Python",
        "FastAPI",
        "Llama 3.2",
        "Ollama",
        "Docker"
      ],
      "context": "Collaborative project · Financial risk assessment & ML engineering",
      "highlights": [
        "Collaboratively developed a platform for financial risk assessment.",
        "Integrated Llama 3.2 via Ollama to extract financial data from Lithuanian reports.",
        "Combined rule-based parsing, LLM fallback, and output validation in a FastAPI microservice.",
        "Researched local regulatory and legal requirements for high-security financial systems.",
        "Built the application using React, TypeScript, and Java, with MariaDB for data management.",
        "Used Docker for containerisation and deployment, and hosted the completed application."
      ],
      "repo": "https://github.com/googed2much/finrizika-backend",
      "demo": ""
    },
    {
      "title": "Group Manager",
      "category": "Full-stack development",
      "kind": "fullstack",
      "status": "May 2025",
      "description": "A collaborative expense tracking app with group, member, and transaction management, plus real-time balances.",
      "tags": [
        "React",
        "TypeScript",
        "ASP.NET Core",
        "Entity Framework"
      ],
      "context": "Personal project · Collaborative expense tracking",
      "highlights": [
        "Developed a full-stack application for tracking shared expenses.",
        "Created a React and TypeScript frontend with modular components and authentication.",
        "Built an ASP.NET Core backend with Entity Framework and AutoMapper.",
        "Implemented group, member, and transaction management with real-time balances."
      ],
      "repo": "https://github.com/AigarasVait/Group-Manager",
      "demo": ""
    },
    {
      "title": "E-commerce Comparator",
      "category": "Full-stack development",
      "kind": "fullstack",
      "status": "April 2025",
      "description": "A price comparison app for comparing products across stores, tracking deals, and saving favourites.",
      "tags": [
        "React",
        "TypeScript",
        "C#",
        "SQL"
      ],
      "context": "Semester project · E-commerce price comparison",
      "highlights": [
        "Developed an e-commerce price comparison application collaboratively.",
        "Built a React and TypeScript frontend with favourites tracking.",
        "Created a C# backend with a SQL database for data management and price comparisons.",
        "Implemented cross-store price comparison and deal tracking."
      ],
      "repo": "",
      "demo": ""
    }
  ],
  "repositories": [
    {
      "name": "Eneba-like",
      "url": "https://github.com/AigarasVait/Eneba-like",
      "description": "Go backend with a Node.js-based frontend development workflow."
    },
    {
      "name": "grandytojai_frontend",
      "url": "https://github.com/AigarasVait/grandytojai_frontend",
      "description": "A React and Vite frontend repository."
    }
  ]
};
