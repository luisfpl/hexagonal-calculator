# Hexagonal Calculator API

![Node.js](https://img.shields.io/badge/Node.js-v18.x-green)
![TypeScript](https://img.shields.io/badge/TypeScript-v4.x-blue)
![Jest](https://img.shields.io/badge/Jest-Testing-red)
![Docker](https://img.shields.io/badge/Docker-Containerization-blue)

## Description

Hexagonal Calculator API is a backend service built with Node.js and TypeScript following clean architecture principles (Hexagonal Architecture). This API provides basic mathematical operations (addition, subtraction, multiplication, and division) through a simple HTTP endpoint.

## Why Hexagonal Architecture?

This calculator API follows the principles of Hexagonal Architecture, also known as Ports and Adapters. This architecture pattern organizes the code into well-defined layers, separating the business logic from external interfaces (like databases, APIs, user interfaces, etc.). Here’s how it’s applied in this project:

### Core Application (Business Logic)

- **`domain/entities/operation.ts`**: This file defines the `Operation` entity, representing a mathematical operation. It’s a core concept in your application domain and is completely independent of how this entity is used externally.
  
- **`domain/services/calculator.service.ts`**: This service contains the logic to perform mathematical operations. It doesn’t depend on how input is received or how output is delivered; it just focuses on performing the operation.

### Ports

- **`controllers/calculator.controller.ts`**: This controller acts as a port that allows the business logic to interact with the outside world through an HTTP API. The controller receives HTTP requests, translates them into domain objects (`Operation`), invokes the business logic, and returns the result.

### Adapters

- **HTTP API (Express)**: Users interact with your calculator through HTTP requests sent to the API. The adapter here is the Express framework, which translates HTTP requests into calls to the controller.

- **Validation (`utils/validate-params.ts`) and Error Handling (`utils/custom-error.ts`)**: These modules act as adapters ensuring that the inputs to the system are valid and handling errors in a centralized manner.

### Benefits of Hexagonal Architecture

- **Decoupling**: The business logic is completely decoupled from technical details (like the HTTP API). This means you can change the presentation technology (e.g., a graphical user interface instead of an API) without affecting the core application.
  
- **Ease of Testing**: You can test the business logic in isolation without needing to set up the full application environment (like the HTTP server).
  
- **Evolution and Maintenance**: Hexagonal Architecture makes it easier to evolve the system because changes in one layer (e.g., changing the database) don’t directly affect other layers.
  
- **Component Replacement**: It’s easy to replace external components, like a database service, without touching the business logic. You just need to create a new adapter that implements the corresponding port.

## Features

- **Clean Architecture:** Organized following Clean Architecture principles to improve maintainability and scalability.
- **RESTful API:** Exposes a single endpoint to perform mathematical operations.
- **TypeScript:** Strong typing for enhanced code safety and consistency.
- **Unit Testing:** Covered with Jest to ensure functionality is correct and reliable.
- **Docker:** Configured for easy deployment in any environment using Docker.

## Requirements

- Node.js v18.x or later
- npm v6.x or later
- Docker (optional, for containerized deployment)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/hexagonal-calculator.git
   cd hexagonal-calculator
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

## Running the Application

### Local Execution

To run the API locally, use the following command:

```bash
npm start
```

This will start the API on `http://localhost:3000`.

### Running with Docker

If you prefer to run the API in a Docker container, follow these steps:

1. Build the Docker image:

   ```bash
   docker build -t hexagonal-calculator .
   ```

2. Run the container:

   ```bash
   docker run -p 3000:3000 hexagonal-calculator
   ```

The API will be available at `http://localhost:3000`.

## Usage

### Endpoint

- **POST /api/calculate**

  Perform a mathematical operation.

#### Request Body

```json
{
  "operand1": 10,
  "operand2": 5,
  "operator": "+"
}
```

#### Response Body

```json
{
  "result": 15
}
```

### Usage Examples

#### Addition

```bash
curl -X POST http://localhost:3000/api/calculate \
-H "Content-Type: application/json" \
-d '{"operand1": 10, "operand2": 5, "operator": "+"}'
```

#### Subtraction

```bash
curl -X POST http://localhost:3000/api/calculate \
-H "Content-Type: application/json" \
-d '{"operand1": 10, "operand2": 5, "operator": "-"}'
```

#### Multiplication

```bash
curl -X POST http://localhost:3000/api/calculate \
-H "Content-Type: application/json" \
-d '{"operand1": 10, "operand2": 5, "operator": "*"}'
```

#### Division

```bash
curl -X POST http://localhost:3000/api/calculate \
-H "Content-Type: application/json" \
-d '{"operand1": 10, "operand2": 5, "operator": "/"}'
```

#### Division by Zero (Error Handling)

```bash
curl -X POST http://localhost:3000/api/calculate \
-H "Content-Type: application/json" \
-d '{"operand1": 10, "operand2": 0, "operator": "/"}'
```

## Testing

The tests are written using Jest. To run the tests, use the following command:

```bash
npm test
```

This will execute all unit tests and generate a report of the results.

## Project Structure

```bash
.
├── README.md
├── ci-cd
│   └── install-dependencies.sh
├── docker
│   ├── Dockerfile
│   └── run.sh
├── jest.config.js
├── package-lock.json
├── package.json
├── prettier.config.js
├── src
│   ├── app.ts
│   ├── bin
│   │   └── www.ts
│   ├── config.ts
│   ├── controllers
│   │   └── calculator.controller.ts
│   ├── domain
│   │   ├── entities
│   │   │   └── operation.ts
│   │   └── services
│   │       └── calculator.service.ts
│   ├── routes
│   │   └── calculator.route.ts
│   └── utils
│       ├── custom-error.ts
│       └── validate-params.ts
├── test
│   ├── controllers
│   │   └── calculator.controller.spec.ts
│   └── domain
│       └── services
│           └── calculator.service.spec.ts
├── tsconfig.json
└── .eslintrc.json
```

## Contribution

1. Fork the project.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
