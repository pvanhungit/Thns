# **Project Setup Guide**

This guide will help you set up and configure the project to run smoothly on your local environment.

1. Connect to PostgreSQL Database Server
   Ensure you have access to a PostgreSQL Database Server.

2. Database Configuration
   Update the database configuration in [backend/src/main/resources/application.properties] with your local server setup:

   Set [spring.datasource.username] and [spring.datasource.password] to your PostgreSQL server credentials.
   The default database name is [thns]. If you use a different database name, update the [spring.datasource.url] to:

   jdbc:postgresql://localhost:5432/[YOUR_DB_NAME]?autoReconnect=true&useSSL=false

3. Database Migration
   Migrate the database schema using Liquibase. Run the following command in your terminal:

   ```bash
   ./gradlew update
   ```
   OR
   ```bash
   gradlew update
   ```
4. Run the Application
   Execute the main class [backend/src/main/java/com/thns/Application.java] to start the application.

5. API Testing
   Test the API endpoints provided by the UserController.java. You can find sample requests in [backend/src/main/java/com/thns/controller/testAPI/generated-requests.http].

6. OAuth2 Configuration
   Configure OAuth2 for guest access by updating settings in [resources/oauth2.properties]:

   For GitHub setup, visit GitHub OAuth Apps and create an application. Update [CLIENT_ID] and [CLIENT_SECRET] accordingly.
   For Google setup, visit Google Cloud Console and create OAuth credentials. Update [CLIENT_ID] and [CLIENT_SECRET] accordingly.
   After setup, you can access the API endpoints under /guest** by authenticating with GitHub or Google:

   http://localhost:8080/guest/home
   http://localhost:8080/guest/secured

7. JWT Authentication Setup
   Configure JWT Authentication by updating the secret key in [backend/src/main/resources/oauth2.properties]. Generate a new secret key using Node.js:

   ```bash
   node -e "console.log(require('crypto').randomBytes(256).toString('base64'));"
   ```
   Test JWT authentication using the provided requests in [controller/testAPI/oauth2-request.http]:

   Step 1: Register with email, password, and role at http://localhost:8080/v1/auth/register
   Step 2: Use the access_token obtained in step 1 to access the following endpoints:
           http://localhost:8080/v1/admin/get
           http://localhost:8080/v1/admin/update

   List of API Endpoints by Role

###    Admin Role
   /v1/admin/get
   /v1/admin/add
   /v1/admin/update
   /v1/admin/delete
   /user/getAll
   /user/findById/{userId}
   /user/add
   /user/update
   /user/delete/{userId}
   /user/changePassword

###    Management Role
   /v1/admin/get
   /user/getAll
   /user/findById/{userId}
   /user/add
   /user/update
   /user/delete/{userId}
   /user/changePassword

   Ensure proper authorization when accessing these endpoints based on user roles.