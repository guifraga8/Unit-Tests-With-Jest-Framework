# Unit-Tests-With-Jest-Framework

This is a simple project created with the aim of practicing and deepening knowledge in using the [Jest Framework](https://jestjs.io/), focused on implementing unit tests in JavaScript. Furthermore, an HTML web interface was developed to facilitate visualization of the application execution.

### Application description

The application was created with the aim of providing a web interface that allows the user to enter data into an input field and view the results in an output field (1 input and 1 output, specifically). The input must be entered in the format “pesoKG nome do item” and supports multiple lines, without differentiation between upper and lower case letters. After entering the data, the system distributes the weight between four different vehicles, optimizing efficiency and distribution. Additionally, extra information is displayed in the output field.

## Index

1. [Steps for installing Jest on a new project](#1-steps-for-installing-jest-on-a-new-project)
2. [Install this project dependencies to execute Unit Tests with Jest](#2-install-this-project-dependencies-to-execute-unit-tests-with-jest)
3. [Executing Unit Tests with Jest](#2-executing-unit-tests-with-jest)
4. [Contribution](#3-contribution)

### 1. Steps for installing Jest on a new project

#### macOS

1. Make sure you have Node.js installed. To check if you already have Node.js installed, open the terminal and type:

`node -v`

If the command does not return the Node.js version, download and install [Node.js](https://nodejs.org/en) from the official website.

2. Open the terminal and navigate to the project directory:

`cd /path/to/your/project`

3. Install Jest as a development dependency:

`npm install --save-dev jest`

#### Windows

1. Make sure you have Node.js installed: To check if Node.js is installed, open the command prompt (or PowerShell) and type:

`node -v`

If you don't have Node.js installed, please download and install [Node.js](https://nodejs.org/en) from the official website.

2. Open Command Prompt (or PowerShell) and navigate to your project directory:

`cd C:\path\to\your\project`

3. Install Jest as a development dependency:

`npm install --save-dev jest`

### 2. Install this project dependencies to execute Unit Tests with Jest

### macOS

1. Open the terminal and navigate to your project directory:

`cd /path/to/your/project`

2. Install the project dependencies listed in the `package.json` file:

`npm install` or `npm i`

### Windows

1. Open the command prompt (or PowerShell) and navigate to your project directory:

`cd C:\path\to\your\project`

2. Install the project dependencies listed in the `package.json` file:

`npm install` or `npm i`

### 3. Executing Unit Tests with Jest

#### macOS and Windows

1. Navigate to your project directory (if it isn't already there):

`cd /path/to/your/project`

2. In the terminal (macOS) or command prompt (Windows), run the following command to run the tests:

`npm test`

This command will run Jest and start all unit tests configured in the project.

3. If you want to run the tests whenever you save any changes to the files, use Jest's "watch" mode:

`npm test -- --watch`

4. To check your project's test coverage, you can use the following command:

`npm test -- --coverage`

This command runs the tests and generates a coverage report, showing which parts of your code are being tested and which are not. The report will be displayed in the terminal and an HTML file will be generated in the coverage folder, allowing you to view coverage in a browser.

### 4. Contribution

If you want to contribute to this project, with your knowledge or experience, feel free to follow the steps below.

1. Fork the project.

2. Create a branch for your feature (`git checkout -b feature/nova-feature`).

3. Commit your changes (`git commit -m 'Add new feature'`).

4. Push to the branch (`git push origin feature/nova-feature`).

5. Open a Pull Request.
