# Unit-Tests-With-Jest-Framework

This is a simple project created with the aim of practicing and deepening knowledge in using the [Jest framework](https://jestjs.io/), focused on implementing unit tests in JavaScript. Furthermore, an HTML web interface was developed to facilitate visualization of the application execution.

## Index

1. [Steps for installing Jest](#steps-for-installing-jest)
2. [Executing Unit Tests with Jest](#executing-unit-tests-with-jest)
3. [Contribution](#contribution)

### 1. Steps for installing Jest

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

### 2. Executing Unit Tests with Jest

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

### 3. Contribution

If you want to contribute to this project, with your knowledge or experience, feel free to follow the steps below.

1. Fork the project.

2. Create a branch for your feature (`git checkout -b feature/nova-feature`).

3. Commit your changes (`git commit -m 'Add new feature'`).

4. Push to the branch (`git push origin feature/nova-feature`).

5. Open a Pull Request.
