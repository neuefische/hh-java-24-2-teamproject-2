# hh-java-24-2-teamproject-2

## Introduction
RestaurantApp is an application for managing and organizing restaurant details. Users can save their favorite restaurants information.

## Prerequisites

The following technologies should be installed on the system:

- Java SDK version 22
- Node.js
- NPM (Node Package Manager)
- optional: IntelliJ IDEA Ultimate Edition

## Dependencies

### Backend
- spring-boot-starter-data-mongodb
- spring-boot-starter-parent Version 3.3.0
- spring-boot-starter-web
- spring-boot-starter-validation
- logback-logtail Version 0.3.4 from com.logtail
- de.flapdoodle.embed.mongo.spring3x Version 4.13.0 from  de.flapdoodle.embed (only Test-Scope)
- spring-boot-starter-test (only Test-Scope)
- spring-boot-starter-actuator

### Frontend

- TypeScript
- React
- Jest
- Babel
- Axios
- Test-Library/React
- Styled-Components
- ESLint

## Getting Started

Follow these steps to get the project up and running on your local machine:

1. Clone the repository:  
   `git clone https://github.com/neuefische/hh-java-24-2-teamproject-2.git`

2. Navigate to the project's root directory:  
   `cd hh-java-24-2-teamproject-2/`

3. Setup all environment variables
   1. Backend: Copy application-development-properties.sample to application-development-properties and replace with your secrets:  
      `cp backend/src/main/resources/application-development.properties.sample backend/src/main/resources/application-development.properties`
   2. Frontend: Copy .env.local.sample to .env.local and replace with your secrets:  
      `cp frontend/.env.local.sample frontend/.env.local          `

4. Navigate to the frontend's root directory:  
   `cd frontend/`

5. Install the NPM dependencies:  
   `npm install`

6. Start the project:  
   For IntelliJ IDEA the configuration for all runs should be automatically loaded using the files in `.run/` folder.
    - For the backend, you might want to execute the main Spring Boot Application class.
    - For the frontend, typically you would use `npm dev`.

## Running Tests
   For IntelliJ IDEA the configuration for all test runs should be automatically loaded using the files in `.run/` folder.  
   - For the backend, you might want to execute the test folder.
   - For the frontend, typically you would use `npm test`.

## Authors / Acknowledgments
- [Samuel Gesang](https://github.com/gcode-de)
- [Jonas Honecker](https://github.com/jonashonecker)
- [Daniel Pohl](https://github.com/daniel-pohl)
- [Aljoscha Zöller](https://github.com/josch87)

[See all git contributors](https://github.com/neuefische/hh-java-24-2-teamproject-2/graphs/contributors)
