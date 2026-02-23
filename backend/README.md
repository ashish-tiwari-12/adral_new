# Adral Waitlist Backend (Node.js/Express)

This is a complete, professional MVC-based backend for the Adral Waitlist, using Node.js, Express, and MySQL. It is structured exactly how modern, large-scale projects are built.

## Structure
- `server.js`: The main entry point that configures and starts the Express server.
- `config/db.js`: Handles creating a MySQL connection pool using environment variables.
- `models/waitlistModel.js`: Contains all the SQL queries for the waitlist table.
- `controllers/waitlistController.js`: Handles the business logic, validation, and sending HTTP responses.
- `routes/waitlistRoutes.js`: Maps HTTP endpoints (e.g., `/join`) to their controller functions.

## 1. Local Setup
Before running the backend, you need a local MySQL database. If you use tools like XAMPP or MySQL Workbench:
1. Create a database called `adral_waitlist`.
2. Run this SQL command to create the table:
   ```sql
   CREATE TABLE waitlist (
     id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(255) NOT NULL,
     email VARCHAR(255) NOT NULL UNIQUE,
     mobile VARCHAR(50) NOT NULL,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

## 2. Environment Variables
Update the `.env` file in this directory with your actual local database credentials (usually user `root` and an empty password in local environments).

## 3. Running the Server
Make sure you are in the `backend` folder in your terminal:
```bash
cd backend
npm install
npm run dev
```
The server will start on `http://localhost:5000`.

## 4. Deploying to Hostinger (VPS/Node environment)
If your Hostinger plan supports Node.js (like VPS or specific Node.js hosting):
1. Zip this entire `backend` folder (excluding `node_modules`).
2. Upload it to your server.
3. Update the `.env` file with your Hostinger production MySQL credentials.
4. Run `npm install`, then start the server using a process manager like PM2: `pm2 start server.js`.
*(Note: If you are on a basic Shared Hosting plan on Hostinger that only supports PHP, you must use the PHP file provided in the `HOSTINGER_DB_SETUP.md` guide instead of this Node.js setup).*
