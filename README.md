# Udacity Project Two aka Would You Rather Project

## Project Details
The Would You Rather application allows user to select questions from a list of answered questions or unanswered questions. If thhe user already answered the question, then they can view the number of people who chose each answer. When the question has not been answered then they can pick an answer. The user can also add new questions with a set of two possible answers. The user can also view a leader board display who asked and answered the most questions.

## How to setup the project

* the Project can be cloned from https://github.com/wcwcaseman/would-you-rather.git
* You can clone this project by opening the [GitHub desktop application](https://desktop.github.com/).
Go to File->Clone Repository, then navigate to the 
URL tab and past in the above URL
* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── README.md - This file.
├── package.json # npm package manager file. 
├── public
    |__images
        ├── JohnD.png # image for John Doe
        ├── SarahE.png # image for Sarah Edo
        ├── TylerM.png # image for Tyler McGinnis
│   ├── favicon.ico # React Icon
│   └── index.html
└── src
    |__ actions
        ├── authedUser.js
        ├── questions.js
        ├── shared.js
        ├── users.js
    |__components
        ├── App.js
        ├── error404Page.js
        ├── LeaderBoard.js
        ├── NavigationBar.js
        ├── NewQuestion.js
        ├── Question.js
        ├── QuestionCardSkin.js
        ├── QuestionResultCard.js
        ├── QuestionScoreCard.js
        ├── QuestionList.js
        ├── QuestionSubmitCard.js
        ├── QuestionViewPollCard.js
        ├── ResultBar.js
        ├── Signin.js
    |__middleware
        ├── index.js
    |__reducers
        ├── authedUser.js
        ├── index.js
        ├── questions.js
        ├── users.js
    |__ utils
        ├── _DATA.js
        ├── api.js
    ├── App.css
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── registerServiceWorker.js
```


## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

