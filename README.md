# Bean and Hops

A coffee shop website for Bean and Hops.

## Table of Contents
- [Overview](#overview)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Overview

Bean and Hops is a web application designed to showcase the offerings of a coffee shop, including menu, location, and other interactive features. The project is organized with both backend and frontend codebases, providing a full-stack solution.

## Project Structure

The repository includes the following main directories and files:

```
bean-and-hops/
├── backend/          # Backend Python code (API, server logic)
├── frontend/         # Frontend assets (HTML, CSS, JavaScript)
├── node_modules/     # Node.js dependencies
├── venv/             # Python virtual environment
├── package.json      # Node.js project metadata and dependencies
├── package-lock.json # Node.js dependency lock file
```

- **backend/**: Contains Python code for the backend server (API endpoints, business logic).
- **frontend/**: Contains the website’s static files (HTML, CSS, JS).
- **node_modules/**: Installed Node.js packages for the frontend.
- **venv/**: Python virtual environment for backend dependencies.
- **package.json** and **package-lock.json**: Metadata and dependency management for Node.js.

## Technologies Used

- **Python** (backend)
- **JavaScript** (frontend)
- **HTML/CSS** (frontend layout and styles)
- **Node.js & npm** (frontend tooling)
- **Batchfile, PowerShell** (build scripts, if present)

## Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/JegPDG/bean-and-hops.git
   cd bean-and-hops
   ```

2. **Backend Setup:**
   - Create and activate a Python virtual environment:
     ```sh
     python -m venv venv
     source venv/bin/activate  # On Windows: venv\Scripts\activate
     ```
   - Install dependencies (see requirements.txt in `backend/` if available).

3. **Frontend Setup:**
   - Install Node.js dependencies:
     ```sh
     npm install
     ```
   - Start the development server (if available):
     ```sh
     npm start
     ```

4. **Run Backend:**
   - Start the Python server (see backend documentation for details).

## Development

- **Backend:** Modify code in the `backend/` directory for API, server logic, and database integration.
- **Frontend:** Modify code in the `frontend/` directory for UI/UX improvements and new features.
- **Node.js Scripts:** Use npm scripts (defined in `package.json`) for building and running the frontend.
- **Python Environment:** Use virtual environments to manage dependencies.

## Contributing

Pull requests are welcome! Please open issues for bug reports, feature requests, or questions.

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a pull request
