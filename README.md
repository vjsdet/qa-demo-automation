### Instructions
* Clone the repo using below command.

  **git clone REPO_URL**
* Install Node.js from below URL.

  **https://nodejs.org/en/download/**
* Open the command prompt in the the root directory of the project.

* Run the below commands to install the dependencies.

  **npm install**

  **npx playwright install**

### Execution
* Open the command prompt in the root directory.
* Run the **npx playwright test** command to execute the test cases.
* By default Playwright test runs in headless mode, to run in headed mode use -– headed flag.
* Run the **npx playwright test --headed** command to execute the test cases.

### Report & Logs
* After execution, report file **index.html** is created under **playwright-report** directory.
* Screenshot and video will be attached for failed scenarios.
