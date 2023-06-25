const express = require('express');
const app = express();
const ejs = require('ejs')
const port = 3001;
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const viewPath = path.join(__dirname, './views')
const { MongoClient } = require('mongodb');
const uri = 'mongodb://127.0.0.1:27017/'; 
const client = new MongoClient(uri, { useUnifiedTopology: true });
const bodyParser = require('body-parser');

    //view engine to EJS


// Serve static files from the 'public' folder
app.use(express.static('public'));
// app.use('/css', express.static(__dirname, './public/stylesheets/style'))

app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set("views", viewPath);
//  routes

app.get('', function(req, res) {
    const title = 'My Website'; // Define the title variable
    res.render('index', { title: title }); // Pass the title variable to the template
});



app.get('/about', function(req, res) {
    const title = 'About Me'; // Define the title variable
    res.render('about', { title: title }); // Pass the title variable to the template
});



app.get('/services', function(req, res) {
    const title = 'Services'; // Define the title variable
    res.render('services', { title: title }); // Pass the title variable to the template
});



app.get('/projects', function(req, res) {
    const title = 'Projects'; // Define the title variable
    res.render('projects', { title: title }); // Pass the title variable to the template
});



app.get('/contact', function(req, res) {
    const title = 'Contact'; // Define the title variable
    res.render('contact', { title: title }); // Pass the title variable to the template
});
app.get('/login', function(req, res) {
    const title = 'Login'; // Define the title variable
    const errorMessage = 'Invalid username or password'; // Define the error message variable
    res.render('login', { title: title, errorMessage: errorMessage }); // Pass the title and error message variables to the template
  });
  app.post('/login', function(req, res) {
    const { username, password } = req.body;
  
    // Perform user authentication logic
    if (username === 'admin' && password === 'password') {
      // Authentication successful
      res.redirect('/dashboard'); // Redirect to the dashboard or authorized area
    } else {
      // Authentication failed
      res.render('login', { errorMessage: 'Invalid username or password' });
    }
  });
  app.post('/login', function(req, res) {
    // Handle the login logic here
    // ...
  });
  
  
  app.get('/sign-up', function(req, res) {
    res.render('sign-up'); // Render the signup view
  });

  app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
  
// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

