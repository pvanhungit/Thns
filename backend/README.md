1. Connect database PostgreSql Server.

2. Setup database config on [backend/src/main/resources/dbConfig.properties]
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

5. run [backend/src/main/java/com/thns/Application.java].
6. Test API controller UserController.java on file [backend/src/main/java/com/thns/controller/testAPI/generated-requests.http].

7. setup Oauth2 for Guest on [resources/oauth2.properties]
   GitHub: https://github.com/settings/applications/new
   Google: https://console.cloud.google.com/apis/credentials
   after setup on 2 link GitHub and Google, edit [CLIENT_ID] and [CLIENT_SECRET].

   Now, you can only access APT /guest** in your browser after authenticating with GitHub or Google
   -http://localhost:8080/guest/home
   -http://localhost:8080/guest/secured
