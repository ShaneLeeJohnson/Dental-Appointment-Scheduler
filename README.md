# Dental-Appointment-Scheduler

## Overview

An application for dental offices to schedule appointments.

## Table of Contents
1. [Overview](#overview)
2. [User Story](#user-story)
3. [Acceptance Criteria](#acceptance-criteria)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Features](#features)
7. [Technologies Used](#technologies-used)
8. [Screenshot](#screenshot)
9. [Deployed Application](#deployed-application)
10. [License](#license)
11. [Collaborators](#collaborators)
12. [Code Attribution](#code-attribution)
13. [External Resources](#external-resources)
14. [Credits](#credits)


## User Story
```
AS a dental clinic administrator,
I WANT to be able to schedule, view, update, and cancel appointments,
SO THAT the clinic can manage patient appointments efficiently.
```

## Acceptance Criteria


## Installation

N/A

## Usage

To see this application in action click this link: 

To use this application the user must first login using the username and password that we have provided. The username is: (user1) and the password is (password123). Once the user is logged in, they will be redirected to the appointments page which will show a calendar with existing appointments. When the user clicks on one of the existing appointments they will be redirected to an existing appointment page which will show the details of the appointment and allow the user to either make changes and save them by clicking the update button, or delete the appointment by clicking the remove button. There is also a navbar that the user can use to navigate between the different pages. Clicking on appointments will direct them back to the main page, clicking new appointment will take them to the register page where they can enter information for a new patient to create a new appointment, and clicking logout will log them out and direct them back to the login page.


## Features


## Technologies Used

- Node.js
- Express.js
- MySQL
- Sequelize
- Handlebars.js
- HTML/CSS
- Bootstrap
- JavaScript
- Heroku for deployment

## Screenshot

![DENTAL-APPOINTMENT-SCHEDULER Screenshot](path/to/screenshot.png)

## Deployed Application

[Live Application](URL_TO_DEPLOYED_APPLICATION)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Collaborators

- [Shane Johnson](https://github.com/ShaneLeeJohnson) 
- [Kyle Huff](https://github.com/Kykesh) 
- [Matthew Garza](https://github.com/mgarza0802) 
- [Danny Sanchez](https://github.com/DannySanchez03) 


## Code Attribution

The code provided in this repository is original, authored by the collaborators listed above.

## External Resources

The guidance provided is based on the following documentation and resources:

1. **Node.js Documentation**: For general Node.js syntax and runtime behavior.
   [Node.js Docs](https://nodejs.org/en/docs/)

2. **Express.js Documentation**: For understanding the Express framework and middleware usage.
   [Express.js Docs](https://expressjs.com/)

3. **Sequelize Documentation**: For Sequelize ORM usage, model definition, and database interactions.
   [Sequelize Docs](https://sequelize.org/)

4. **Handlebars.js Documentation**: For template engine integration and view rendering.
   [Handlebars.js Docs](https://handlebarsjs.com/)

5. **MySQL Documentation**: For SQL syntax and database management.
   [MySQL Docs](https://dev.mysql.com/doc/)

6. **dotenv npm package**: For environment variable management within Node.js applications.
   [dotenv Docs](https://www.npmjs.com/package/dotenv)

7. **express-session npm package**: For session management in Express applications.
   [express-session Docs](https://www.npmjs.com/package/express-session)

9. **MDN Web Docs:** : For general web development, JavaScript, CSS, and HTML reference.
    [https://developer.mozilla.org](https://developer.mozilla.org)

10. **Heroku Dev Center**: For deploying Node.js apps to Heroku and configuring the deployment environment.
   [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)


## Credits
Special thanks to those who contributed to the project, including:

Shane Johnson: Repository host and project leader. Created the connection.js, server.js, models, seeds, main and login.handlebars, and the login and index controllers files and added all the necessary code in each of those files to make sure that the server and connection files were working properly and that a user could login. Updated README file as well to follow professional guidelines.

Kyle Huff: I created files and code for register, appointments and appointmentDetails handlebars as well as the appointmentRoutes.js controller file for these webpages. I did the styling for register, appointments and appointmentDetails. I Created the public folder and the JS and CSS files contained within them to maintain file structure. I also connected  the handlebar pages with their respective JS and CSS files. I created two helper codes to have our data correctly displayed on our website.  I updated code in server.js, controllers/index.js to insure the connectivity with the webpages. Assisted with the updating the README.

Danny Sanchez: I created the dynamic layout for the appoinments handlebars, I was responsible for loading all the appointments up to 2 months in the future. I worked on styling for the page, and I also worked on the appointment.js file.

Matthew Garza: I created the navigation bar and helped with some of the styling for it. I also helped with some of the styling for the login page as well. 
