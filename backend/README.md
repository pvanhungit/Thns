1. Connect database PostgreSql Server.

2. Setup database config on [backend/src/main/resources/application.properties]
   with [spring.datasource.username] and [spring.datasource.password] is your local server setup.

3. Default database name is [thns], if you create another DB name -> change [spring.datasource.url] is
   jdbc:postgresql://localhost:5432/[{YOUR_DB_NAME}]?autoReconnect=true&useSSL=false.

4. migrate database with liquibase on [backend/src/main/resources/migration/dbChangelog.yaml].

    ```bash
    ./gradlew update
    ```
    OR
    ```bash
    gradlew update
    ```

5. Test API controller UserController.java on file [backend/src/main/java/com/example/backend/controller/testAPI/generated-requests.http].
