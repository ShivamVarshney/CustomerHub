# CustomerHub — Customer Management System

CustomerHub is a full-stack Customer Relationship Management (CRM) application built using the MERN stack. It helps users manage customer records, track lead stages, analyze customer activity, and organize data using workspaces.

## Features

- **User Authentication:** Secure user registration and login.
- **Customer Management:** Create, view, update, and delete customer records.
- **Dashboard:** View total, active, pending, and inactive customers, along with recent customer activity.
- **Analytics:** Analyze customer data using date ranges and monthly summaries.
- **Search and Filters:** Search by customer name, company, email, or phone number and filter by account status or lead stage.
- **Lead Management:** Track lead stages separately from customer account status.
- **Workspace Management:** Create and switch between workspaces with workspace-specific customer data.
- **International Phone Input:** Select international country calling codes when entering phone numbers.
- **Data Export:** Export customer data to CSV, Excel, and PDF, with options for selected records and columns.
- **Theme Customization:** Choose light, dark, or system appearance and customize the accent color.
- **Responsive UI:** Designed for desktop and mobile screen sizes.

## Tech Stack

### Frontend
- React
- Vite
- JavaScript
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)

### Tools and Libraries
- Git and GitHub
- npm
- REST APIs

## Project Structure

```text
CustomerHub/
├── Backend/
│   ├── Controllers/
│   ├── Middleware/
│   ├── Models/
│   ├── Routes/
│   ├── Services/
│   ├── test/
│   ├── package.json
│   └── server.js
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   └── pages/
│   ├── package.json
│   └── vite.config.js
└── README.md
```

*Note: The structure above highlights the main project folders. Your repository may contain additional files and directories.*

## Getting Started

### Prerequisites

- Node.js and npm
- MongoDB database
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/ShivamVarshney/CustomerHub.git
cd CustomerHub
```

### 2. Configure Environment Variables

Create the required `.env` files using the provided `.env.example` templates.

Configure the values required by your application, such as:

- MongoDB connection string
- JWT secret
- Backend port
- Frontend API URL
- Allowed frontend origins for CORS

Use the variable names specified in the respective `.env.example` files and application code.

**Security:** Never commit actual `.env` files, database credentials, JWT secrets, or other sensitive information to GitHub.

### 3. Install and Run the Backend

Open a terminal:

```bash
cd Backend
npm install
```

Configure the backend environment variables, then run the start command defined in `Backend/package.json`.

### 4. Install and Run the Frontend

Open a separate terminal from the project root:

```bash
cd Frontend
npm install
npm run dev
```

Open the local URL displayed by Vite in your terminal.

## API Overview

The backend provides REST API functionality for:

- Authentication
- Customer management
- Dashboard summaries
- Analytics
- Workspace management

Refer to the backend route files for the exact endpoints, request formats, and supported HTTP methods.

## Security and Data Isolation

- Protected routes require authentication.
- Customer records are scoped to the authorized user and workspace.
- Sensitive configuration is managed through environment variables.
- Backend validation and authorization help prevent unauthorized access to customer records.

## Future Improvements

- Expanded automated integration and end-to-end testing.
- Additional analytics and reporting.
- Email notifications through an email service.
- Further improvements to deployment automation and CI/CD.

## Author

**Shivam Varshney**

GitHub: [ShivamVarshney](https://github.com/ShivamVarshney)

## Project Purpose

CustomerHub demonstrates full-stack web development skills, REST API integration, authentication, database management, responsive UI design, customer analytics, and workspace-based data organization.