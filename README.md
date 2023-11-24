# Creatingly draw board app 
​
## The Creatingly APP
This exercise includes tests for UI that provides a platform to draw a board for different devcies and drag and drop different options for board.Click on the following URL to open the site to run the app:
*https://dev.platform.creatingly.com/webstudio*
​
​
### Project Structure
The project consist of the following:
- tests folder: This folder contains the test files:
  - DraBoard.spec.ts: This file is for checking UI elements and to ensure that app is drawing a board. It also checks that we cna add an container and add chart in container successfully and apply different configrations for that chart and container.
  - Login.spec.ts: This file is for checking login functionality of the app while we provide correct email and password for the credentials.
- test.results folder: This folder contains the  reuslts of testing files.
- .github folder: This folder contains the configrations for github pipline.

​
### Setup
Following are the steps to setup and run the project:
  1. Unzip the file provided.
  2. Open project directory and run the command `npm i` to install all the dependencies.
    if the playwrigt is not found run this command `init playwright@latest` and select the following to get started:
    Choose between TypeScript or JavaScript (TypeScript)
    Name of your Tests folder (default is tests or e2e if you already have a tests folder in your project)
    Add a GitHub Actions workflow to easily run tests on CI
    Install Playwright browsers (default is true)
  3. To run tests in browser mode use the command `npx playwright test --ui`, then select the test file you want to run. To run them in headless mode (on terminal) run the command `npx playwright test`.
​
### Testing
The test cases cover various scenarios to ensure both sites function properly.
​
#### Test Cases for the creatingly app
Test cases for checker game reside in *DrawBoard.spec.ts* file.
- The first ensures that the site is up and running and open the Creatingly web studio.
- Login on the app using emaill and passowrd.
- DraeBoard test ensures that artboard is visiable and clicable.
- Container and chat's drag and drop functionality is working and different configrations are being applied on chart an dcontainer.
​
​
### Dependencies
The project only relies on the following dependencies:
* Node.JS: A javascript runtime to enable server-side execution of javascript. You must have node installed on your system. Can be installed from the website *https://nodejs.org/*.
* Playwright: An end-to-end testing framework for web applications. Will be installed automatically after running *npm i*.
​
### Conclusion
The tests cases perform certain checks to ensure both sites are up and both the app draw a board functionality progress without any errors.