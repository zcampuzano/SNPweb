const User = require('../serverSide/models/user'); // Import User Model Schema

module.exports = (router) => {
  /* ==============
     Register Route
  ============== */
  router.post('/register', (req, res) => {
    // Check if email was provided

    if (!req.body.firstname) {
      res.json({ success: false, message: 'You must provide an first name' }); // Return error
    } else {
      // Check if username was provided
      if (!req.body.lastname) {
        res.json({ success: false, message: 'You must provide a last name' }); // Return error
      } else {
        // Check if password was provided
        if (!req.body.email) {
          res.json({ success: false, message: 'You must provide a e-mail' }); // Return error
        } else {
          if (!req.body.username) {
            res.json({ success: false, message: 'You must provide a username' }); // Return error
          } else {
            if (!req.body.password) {
              res.json({ password: false, message: 'You must provide a password' }); // Return error
            }
          }
          // Create new user object and apply user input
          let user = new User({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email.toLowerCase(),
            username: req.body.username,
            password: req.body.password
          });
          // Save user to database
          user.save((err) => {
            // Check if error occured
            if (err) {
              // Check if error is an error indicating duplicate account
              if (err.code === 11000) {
                res.json({ success: false, message: 'Username or e-mail already exists' }); // Return error
              } else {
                // Check if error is a validation rror
                if (err.errors) {
                  // Check if validation error is in the email field
                  if (err.errors.email) {
                    res.json({ success: false, message: err.errors.email.message }); // Return error
                  } else {
                    // Check if validation error is in the username field
                    if (err.errors.username) {
                      res.json({ success: false, message: err.errors.username.message }); // Return error
                    } else {
                      // Check if validation error is in the password field
                      if (err.errors.password) {
                        res.json({ success: false, message: err.errors.password.message }); // Return error
                      } else {
                        if (err.errors.firstName) {
                          res.json({ success: false, message: err.errors.password.message }); // Return error
                        } else {
                          if (err.errors.lastName) {
                            res.json({ success: false, message: err.errors.lastName.message }); // Return error
                          } else {
                            res.json({ success: false, message: err }); // Return any other error not already covered
                          }
                        }
                      }
                    }
                  }
                } else {
                  res.json({ success: false, message: 'Could not save user. Error: ', err }); // Return error if not related to validation
                }
              }
            } else {
              res.json({ success: true, message: 'Account registered!' }); // Return success
            }
          });
        }
      }
    }
  });

  /* ===============================================================
     Route to check if user's username is available for registration
  =============================================================== */
  router.get('/checkUsername/:username', (req, res) => {
    // Check if username was provided in paramaters
    if (!req.params.username) {
      res.json({ success: false, message: 'Username was not provided' }); // Return error
    } else {
      // Look for username in database
      User.findOne({ username: req.params.username }, (err, user) => {
        // Check if connection error was found
        if (err) {
          res.json({ success: false, message: err }); // Return connection error
        } else {
          // Check if user's username was found
          if (user) {
            res.json({ success: false, message: 'Username is already taken' }); // Return as taken username
          } else {
            res.json({ success: true, message: 'Username is available' }); // Return as vailable username
          }
        }
      });
    }
  });

  /* ============================================================
    Route to check if user's email is available for registration
 ============================================================ */
  router.get('/checkEmail/:email', (req, res) => {
    // Check if email was provided in paramaters
    if (!req.params.email) {
      res.json({ success: false, message: 'E-mail was not provided' }); // Return error
    } else {
      // Search for user's e-mail in database;
      User.findOne({ email: req.params.email }, (err, user) => {
        if (err) {
          res.json({ success: false, message: err }); // Return connection error
        } else {
          // Check if user's e-mail is taken
          if (user) {
            res.json({ success: false, message: 'E-mail is already taken' }); // Return as taken e-mail
          } else {
            res.json({ success: true, message: 'E-mail is available' }); // Return as available e-mail
          }
        }
      });
    }
  });


  return router; // Return router object to main index.js
}
