# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run dev`

##me 

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/)
.


## PROJECT STRUCTURE FOR SRC FOLDER

src/  
┣ components/  
┃ ┣ layouts/  
┃ ┣ pages/  
┃ ┗ shared/  
┣ hooks/  
┣ pages/  
┣ state/  
┣ utils/  
┣ App.css  
┣ App.test.tsx  
┣ App.tsx  
┣ index.css  
┣ index.tsx  
┣ logo.svg  
┣ react-app-env.d.ts  
┣ reportWebVitals.ts  
┗ setupTests.ts


## PAGE STRUCTURE EXPLANATION

### 1. /src/components:
This contains all the frontend visual components used in the application and should only contain .tsx, .jsx., or .css files. This folder contains the following:

#### a. /src/components/layouts:
This should contain layout components for any page that repeats its structure. For instance the dashboard has specific layout that will be repeated for the patient info page and doctor info page. Thus it can be kept here.

#### b. /src/components/pages:
This should contain extra folders specifying the name of the page. Each folder should have unique components that is not shared by any other page.

#### c. /src/components/shared
This should contain components that are shared between more than one page e.g buttons, textfields, dropdowns etc

### 2. /src/hooks/
This should contain custom react hooks

### 3. /src/pages/
This should contain all pages the user will be able to navigate to depending on his/her role

### 4. /src/state/
This should contain everything that has to do with global state management

### 5. /src/utils/
This should contain any other helpers like api requests, calculations, validation etc

### 6. /src/assets/
This folder can contain pictures for the app

## Cypress Testing Documentation

For more info see the cypress documentation ([Click Here](https://docs.cypress.io/guides/component-testing/react/quickstart))

### Component Testing:
The component tests (*.cy.jsx) will be contained in the `component_specs` folder.
##### Sample Tests:
There is a sample react component in `src/components/` called `sample.jsx` and its respective component tests can be found in the `component_specs/sample.cy.jsx` file.

##### Steps to run tests:
1. In the terminal run `npx cypress open`.
2. A Cypress window should open showing, select the component testing option (this should be configured)
3. Next select a browser (pick a browser you have already installed) and click the "start component testing in ..." button.
4. Now in your selected browser you can select the component spec you would like to view.
5. At this point you should be able to see the component tests.

### End-2-End Testing:
To be added later