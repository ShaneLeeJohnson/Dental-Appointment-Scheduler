// Require necessary dependencies
const path = require('path'); // File path manipulation
const express = require('express'); // Web framework
const session = require('express-session'); // Session management
const exphbs = require('express-handlebars'); // Templating engine
const routes = require('./controllers'); // Import controllers for routes
const helpers = require('./utils/helpers'); // Import custom helper functions

// Require Sequelize and session store using Sequelize
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Create an Express application instance
const app = express();
// Define port to listen on (environment variable or default)
const PORT = process.env.PORT || 3001;

// Configure Handlebars templating engine with custom helpers
const hbs = exphbs.create({
    helpers: helpers
});

// Middleware for session management with Sequelize store
const sess = {
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: 3600000 },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware to parse JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Mount route handlers (controllers)
app.use(routes);
app.use(express.static('public'));

// Synchronize database schema
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});