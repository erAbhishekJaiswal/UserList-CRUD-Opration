# Frontend Project

```markdown

## Project Overview

This is the frontend for the backend project. It allows users to log in, register, view a list of users, and perform user operations such as updating and deleting users.

The application is built using React and leverages Vite for fast development and build times. It communicates with the backend to authenticate users and manage user data.

## Features

- **User Login**: Allows users to log in using credentials.
- **User Registration**: Allows users to create new accounts.
- **User List**: Displays a list of all users.
- **User Update**: Allows users to update their profile information.
- **User Deletion**: Allows users to delete their account.

## Tech Stack

- React
- React Router
- Axios for HTTP requests
- Vite for build and development
- ESLint for linting

## Installation

Follow these steps to set up the frontend locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/frontend.git
   ```

2. Navigate into the project folder:
   ```bash
   cd frontend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Project

To start the project in development mode:

```bash
npm run dev
```

This will start the development server and you can access the application at `http://localhost:3000`.

### Production Build

To create a production build of the frontend:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## API Integration

The frontend communicates with the backend API to perform the following actions:

- **Login**: The `/api/login` endpoint is used to authenticate users and retrieve a JWT token.
- **Register**: The `/api/register` endpoint is used to register a new user.
- **Get Users**: The `/api/users` endpoint fetches the list of users.
- **Get User profile**: The `/api/users/:id` endpoint fetches the profile of loggedIn user.
- **Update User**: The `/api/users/:id` endpoint allows the user to update their profile.
- **Delete User**: The `/api/users/:id` endpoint allows the user to delete their account.

All API requests are handled using `axios` and interact with the backend API endpoints.

## Routing

The application uses `react-router-dom` for navigation:

- `/login`: Login page
- `/register`: Registration page
- `/userlist`: Page displaying the list of users
- `/myprofile`: Page displaying the Profile of LoggedIn user
- `/update/:id`: Page for updating user details

## Linting

To ensure consistent code quality, the project uses ESLint. To run linting, use the following command:

```bash
npm run lint
```

## Dependencies

### Runtime Dependencies

- **axios**: Promise-based HTTP client for making API requests.
- **react**: JavaScript library for building user interfaces.
- **react-dom**: Provides DOM-specific methods for React.
- **react-icons**: Library of popular icons for React components.
- **react-router-dom**: A library for handling routing in React applications.

### Development Dependencies

- **vite**: Next-generation, fast build tool for web applications.
- **@vitejs/plugin-react**: Vite plugin for React.
- **eslint**: A static code analysis tool for identifying problematic patterns in JavaScript code.
- **eslint-plugin-react-hooks**: Linting rules for React Hooks.
- **eslint-plugin-react-refresh**: ESLint plugin for React Fast Refresh.

## License

This project is licensed under the ISC License.

## Author

Abhishek Jaiswal
```

### Key sections:
1. **Project Overview**: Describes the purpose of the frontend application.
2. **Features**: Lists the core functionalities (login, registration, user management).
3. **Tech Stack**: Lists the technologies used in the project.
4. **Installation**: Provides instructions on how to clone and install the project.
5. **Running the Project**: Describes how to start the development server and build the production version.
6. **API Integration**: Describes the backend endpoints that the frontend interacts with.
7. **Routing**: Explains the routes used in the application.
8. **Linting**: Details about linting setup and usage.
9. **Dependencies**: Lists runtime and development dependencies used in the project.
10. **License**: License information for the project.
11. **Author**: Information about the project's author.
