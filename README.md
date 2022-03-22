Vetter Tailor application
============================


## Application Features

- Ability to view user profile
- Ability to view details of the user.
- View List to of banks.
- Resolve Account Info.
- A screen to show a successful transaction


## Api Integration
- The application integrates with [FetchBanks](  https://fitted-staging-api.herokuapp.com/api/v1/bank.banks) to get list banks and [ResolveAccount]( https://fitted-staging-api.herokuapp.com/api/v1/bank/resolveAccount)

## Setup Locally

### Install the Dependencies

In the project directory on a terminal, you can run:



### `npm install`
This would install the dependencies needed for the application to run.

## Run the App

In the project directory on a terminal, you can run:

### `npm start`

This command Runs the app in the development mode.<br>
Open [http://localhost:3020](http://localhost:3044) to view it in the browser.

The page will reload if you make edits.<br>
You might also see any lint errors in the console.


## Run the Tests
### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## Build the Application

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Technology Used
### Built With
---

- [React](https://reactjs.org/) - The front-end library used.
- [Typesript](https://www.typescriptlang.org/) - A strongly typed programming language. superset of Javascript.
- [Styled Components](https://styled-components.com/) - The UI  library used.
- [create-react-app-typescript](https://create-react-app.dev/docs/adding-typescript/) - The command line utility tool for setting up React project.


Folder Structure 
============================
### A top-level directory layout
    ├── node_modules            # Contains all dependencies
    ├── build                   # Compiled files (alternatively `dist`)
    ├── public                  # index.html and other assets
    ├── src                     # Source files majorly in Typescript
    │   ├── assets              # Other important assets.     
            ├── svg             # Svg assets
    │   ├── components          # all components.
            ├── containers      # HOC (Higher Order Components) 
            ├── shared          # Components that are shared.
            ├── ui              # UI Resuable components that are shared.
    │   ├── constants           # appConstants.tsx
    │   ├── hooks               # Application Hooks.
    │   ├── pages               # Pages.
    │   ├── services            # Api Services, (Axios and other api service adapters)
    │   ├── styles              # Contains styles for pages and shared components
    │   ├── theme               # Contains default app theme.
    │   ├── types               # Contains all types and interface declarations
    │   ├── utils               # Utility and helper functions,
    │   └── ...                 # etc.
    └── README.md
    └── ...
