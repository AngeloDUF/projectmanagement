Project logo

Project Managed
Node.js Python Go ASP.NET Core GraphQL MongoDB MySQL Google Cloud Pub/Sub JWT

📝 Table of Contents
Microservices Overview
User Login
Projects Microservice
User Microservice
Comments Microservice
Suggestions Microservice
Audit Microservice
Technologies Used
Setup Instructions
Usage
Contributing
License
Introduction
Project Managed is a microservices-based application designed to efficiently handle project management, user management, comments, suggestions, and audit logging. Each microservice is implemented independently, allowing for scalability, maintainability, and ease of deployment. This modular architecture ensures that each component can be developed, deployed, and scaled independently, optimizing resource utilization and system performance.

🏁 Getting Started
Prerequisites
You must have the Docker desktop downloaded on the computer, due to the docker-compose in addition to having Postman installed, y la version de npm instalada

npm
npm install npm@latest -g
Windows Version Docker Desktop Docker
Installing
Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

Clone the repo
git clone https://github.com/antichrist667/sales.git
Install NPM packages
npm install
3.Install dependencies If you use pip and have a requirements.txt file: ```sh pip install -r requirements.txt

4. Install dependencies If you use modules (go.mod):
```sh
go mod tidy
Install Restore dependencies c#:
dotnet restore
🧐 Microservices Overview
User Login
Actor: User
Preconditions: The user must be registered in the system.
Main Flow:
The user enters their email and password in the login interface.
The system verifies that the email is registered.
The system validates the password.
If credentials are correct, a JWT token is generated.
The login attempt is logged in the Audit Microservice.
The user receives the JWT token.
Alternative Flow:
If the email is not registered, the system returns an error.
If the password is incorrect, the system returns an error.
Postconditions: The user has successfully logged in and has a valid JWT token.
Projects Microservice
Actor: User
Preconditions: The user must be authenticated.
Main Flow:
The user creates a new project by entering the necessary data.
The system saves the project in the database.
The user can view the list of all projects.
The user selects a project to view in detail.
The user updates the project information.
The user deletes a project.
Alternative Flow:
If the project does not exist when trying to view or update it, the system returns an error.
Postconditions: The project is created, updated, viewed, or deleted as applicable.
User Microservice
Actor: Administrator
Preconditions: The administrator must be authenticated.
Main Flow:
The administrator creates a new user.
The system saves the user in the database.
The administrator views the list of all users.
The administrator selects a user to view details.
The administrator updates the user information.
The administrator deletes a user.
Alternative Flow:
If the user does not exist when trying to view or update it, the system returns an error.
Postconditions: The user is created, updated, viewed, or deleted as applicable.
Comments Microservice
Actor: User
Preconditions: The user must be authenticated.
Main Flow:
The user creates a new comment on a project.
The system saves the comment in the database.
The user views the list of all comments on a project.
The user updates a comment.
The user deletes a comment.
Alternative Flow:
If the comment does not exist when trying to view or update it, the system returns an error.
Postconditions: The comment is created, updated, viewed, or deleted as applicable.
Suggestions Microservice
Actor: User
Preconditions: The user must be authenticated.
Main Flow:
The user creates a new suggestion.
The system saves the suggestion in the database.
The user views the list of all suggestions.
The user updates a suggestion.
The user deletes a suggestion.
Alternative Flow:
If the suggestion does not exist when trying to view or update it, the system returns an error.
Postconditions: The suggestion is created, updated, viewed, or deleted as applicable.
Audit Microservice
Actor: System (Automatic)
Preconditions: A login attempt event must be received by the system.
Main Flow:
The system receives a message with login attempt data.
The data is stored in the audit database.
Alternative Flow:
If there is an error processing the message, an error notification is generated.
Postconditions: The login attempt is recorded in the audit database.
🛠 Technologies Used
Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine.
Python: A high-level programming language used for backend services.
Go: A statically typed, compiled programming language designed for simplicity and efficiency.
ASP.NET Core: A cross-platform, high-performance framework for building modern, cloud-based, internet-connected applications.
GraphQL: A data query language and runtime for executing queries by using a type system you define for your data.
MongoDB: A NoSQL database used for storing JSON-like documents with optional schemas.
MySQL: A relational database management system based on SQL – Structured Query Language.
Google Cloud Pub/Sub: A messaging service for event-driven systems and analytics.
JWT (JSON Web Token): A compact, URL-safe means of representing claims to be transferred between two parties.
🏁 Setup Instructions
Clone the repository:
git clone https://github.com/antichrist667/projectmanagement.git
🎈 Usage
Instructions on how to use the microservices will be added here.

🤝 Contributing
Contributions, issues, and feature requests are welcome!

📜 License
This project is licensed under the MIT License.
