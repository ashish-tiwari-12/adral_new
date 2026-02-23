# Adral Waitlist Backend (Node.js/Express)

This is a complete, professional MVC-based backend for the Adral Waitlist, using Node.js, Express, and MySQL. It is structured exactly how modern, large-scale projects are built.

## Structure
- `server.js`: The main entry point that configures and starts the Express server.
- `config/db.js`: Handles creating a MySQL connection pool using environment variables.
- `models/waitlistModel.js`: Contains all the SQL queries for the waitlist table.
- `controllers/waitlistController.js`: Handles the business logic, validation, and sending HTTP responses.
- `routes/waitlistRoutes.js`: Maps HTTP endpoints (e.g., `/join`) to their controller functions.

## 1. Connecting to Hostinger MySQL Database

Hostinger allows you to connect to your database from this Node.js App, but you MUST whitelist your IP address first.

### Step 1: Create the Database on Hostinger
1. Go to **Websites** -> Manage -> **Databases** -> **MySQL Databases**.
2. Create: Database Name (`adral_waitlist`), Username (`adral_user`), Password (`YourStrongPass123!`).

### Step 2: Whitelist your IP (IMPORTANT)
By default, Hostinger blocks outside connections to the database.
1. Go to **Databases** -> **Remote MySQL**.
2. Set **IP Configuration** to **Any Host** (or just your server's specific IP if deploying).
3. Select your `adral_waitlist` database and click **Create**.

### Step 3: Create the Table
1. Open **phpMyAdmin** in Hostinger.
2. Go to the SQL tab and run:
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
Update the `backend/.env` file with the details from Hostinger. The `DB_HOST` is usually NOT localhost anymore if you are running this app elsewhere—it will be a specific IP or Hostinger URL provided in the Remote MySQL page (e.g., `89.116.xxx.xxx` or `srv123.hostinger.com`).

```env
PORT=5000
DB_HOST=your_hostinger_remote_mysql_ip
DB_USER=your_hostinger_db_username
DB_PASSWORD=your_hostinger_db_password
DB_NAME=your_hostinger_db_name
```

## 3. Running the Server
Make sure you are in the `backend` folder in your terminal:
```bash
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
