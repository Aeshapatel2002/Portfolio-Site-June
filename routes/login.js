app.post('/signup', (req, res) => {
  const { username, password, email } = req.body;

  // Connect to the database
  client.connect((err) => {
    if (err) {
      console.error('Failed to connect to the database:', err);
      res.sendStatus(500);
      return;
    }

    // Access the user collection
    const collection = client.db('your-db-name').collection('users');

    // Encrypt the password
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Create a user object
    const user = {
      username,
      password: hashedPassword,
      email,
    };

    // Insert the user into the collection
    collection.insertOne(user, (err) => {
      if (err) {
        console.error('Error inserting user:', err);
        res.sendStatus(500);
        return;
      }

      res.redirect('/login'); // Redirect to the Login View
    });
  });
});
