# Tapsi Food Product Shop

A Vue 3 + TypeScript application that allows you to add and remove products connected to a mock server. It demonstrates best practices, including clean code organization, composables, a service layer, lazy loading for images, automatic component imports, environment-based configuration, and containerization via Docker.

# Features
*	Vue 3 & TypeScript: Ensures robust type checking and modern component architecture.
*	Composables: Centralized logic for state management and data fetching (useProducts).
*	Service Layer: productService handles all API communication, separating business logic from components.
*	Mock Server: Uses json-server to provide a quick and easy local REST API.
*	Lazy Loading for Images: Improves performance by only loading images as they come into the viewport.
*	Axios Instance: Centralized axios configuration for consistent API requests.
*	Auto-Import Components: Reduces boilerplate code by automatically importing used components.
*	Aliases: Custom aliases (@, @composables) simplify import paths.
*	Dockerized: Easily containerize and run the application in a production-like environment.

# Getting Started

Prerequisites
	•	Node.js (version 16+ recommended)
	•	pnpm installed globally (npm install -g pnpm or corepack enable if using Corepack)
	•	json-server for the mock backend

Installation

## Install dependencies using pnpm
```bash
pnpm install
```

Running the Mock Server
To run the mock server at http://localhost:3000/products:
```bash
npx json-server --watch db.json --port 3000
```

Keep this running in a separate terminal window/tab while you develop.
Development Server

Start the Vue development server:
```bash
pnpm run dev
```
This launches the application on http://localhost:5173 (the default Vite port). Products are fetched from the mock server at http://localhost:3000/products.

## Build for Production
```bash
pnpm run build
```

This creates an optimized production build in the dist directory.
Preview the Production Build

```bash
pnpm run preview
```

## Dockerization

The included Dockerfile uses a multi-stage build process with pnpm:
	1.	Build Stage: Compiles the app using pnpm.
	2.	Nginx Stage: Serves the compiled dist files.

To build and run the Docker image:

```bash
docker build -t tapsi-food-app .
docker run -p 8080:80 tapsi-food-app
```

## Key Files and Responsibilities
*	src/composables/useProducts.ts: Handles product fetching, adding, deleting, loading state, and error handling.
*	src/services/productService.ts: Encapsulates all network requests related to products.
*	src/plugins/axios.ts: Central axios configuration.
*	src/types/Product.ts: Defines the Product interface.
*	App.vue: Integrates Header, product list, and Footer.
*	Header.vue & Footer.vue: Provide UI and emit events for deleting selected products or adding new ones.
*	Product.vue: Shows individual products with lazy-loaded images and a selection checkbox.

## Troubleshooting
*	Environment Variables Not Loading: Confirm they start with VITE_ and restart your dev server.
*	GPG Signing Issues: Restart gpg-agent or adjust pinentry configuration if commits fail to sign.
*	Mock Server Issues: Ensure json-server is running and the API URL matches the configuration in code.

## Contributing
- Fork the repository.
- Create a new branch (git checkout -b feature-name).
- Commit your changes in small, focused increments.
- Push to your fork and open a Pull Request.
