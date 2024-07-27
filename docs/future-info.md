# Future Enhancements and Considerations

1. **Create a Swagger Documentation for the API**
   This could be incorporated into the API by using the example request and response objects. As validation, it could also serve as documentation.

2. **Add a Layer of Security to the API**
   - Implement API keys for users.
   - Apply regex validation on inputs.

3. **Testing**
   - Use Jest for functional testing.
   - Use Postman for contract and load testing.

4. **More Descriptive Error Messaging**
   Improve error messages depending on the usage of the API.

5. **Enforce a Linting Standard**
   Maintain a high level of consistency as more functionality is added.

6. **Create a Run Book**
   Provide instructions for using the API and troubleshooting issues.

7. **Add Roles to the Database**
   - Admin = read/write/delete (currently, it's a free-for-all).

8. **Make the Database Connection Agnostic**
   - Add additional configuration to change the database depending on requirements.
   - Genericize schema to be used with different databases.
