const User = require('../serverSide/models/user'); // Import User Model Schema
const Organization = require('../serverSide/models/organization'); // Import User Model Schema
const Athlete = require('../serverSide/models/athlete'); // Import User Model Schema
const Recruit = require('../serverSide/models/recruit'); // Import User Model Schema
const BasketballSchema = require('../serverSide/models/sports/basketball');
const BaseballSchema = require('../serverSide/models/sports/baseball');
const FootballSchema = require('../serverSide/models/sports/football');
const jwt = require('jsonwebtoken');
const config = require('../serverSide/config/database');
const passport = require('passport');

module.exports = (router, session) => {

  /* ================================================
  MIDDLEWARE - Used to grab user's token from headers
  ================================================ */
  router.use((req, res, next) => {
    const token = req.headers['authorization']; // Create token found in headers
    // Check if token was found in headers
    if (!token) {
      res.json({ success: false, message: 'No token provided' }); // Return error
    } else {
      // Verify the token is valid
      jwt.verify(token, config.secret, (err, decoded) => {
        // Check if error is expired or invalid
        if (err) {
          res.json({ success: false, message: 'Token invalid: ' + err }); // Return error for token validation
        } else {
          req.decoded = decoded; // Create global variable to use in any request beyond
          next(); // Exit middleware
        }
      });
    }
  });

  /* ==============
        Create BasketballSchema Route
     ============== */
  router.post('/createBasketballSchema', (req, res) => {
    if (!req.body.number) {
      res.json({ success: false, message: 'Please provide a Pitch Speed'});
    }
    let basketballSchema = new BasketballSchema({
      number : req.body.number,
    });

    User.findOne({ _id: req.decoded.userId }).select('organization').exec((err, organID) => {
      if (err) {
        res.json({ success: false, message: err }); // Return error
      } else {
        if (!organID) {
          res.json({ success: false, message: 'We do not have any organizations' }); // Return error, organs was not found in db
        } else {
          BasketballSchema.createBasketballSchema(basketballSchema, function(err){
            if (err) {
              if (err.errors) {
                // Check if validation error is in the email field
                if (err.errors.number) {
                  res.json({ success: false, message: err.errors.number.message }); // Return error
                }
              } else {
                res.json({ success: false, message: 'Could not save BasketballSchema. Error: ', err }); // Return error if not related to validation
              }
            } else {
              res.json({ success: true, message: 'BasketballSchema registered!', organID : organID.organization,
                basketballSchemaID: basketballSchema._id }); // Return success
            }
          });
        }
      }
    })
  });


  /* ==============
        Create BaseballSchema Route
     ============== */
  router.post('/createBaseballSchema', (req, res) => {
    if (!req.body.pitchSpeed) {
      res.json({ success: false, message: 'Please provide a Pitch Speed'});
    }
    let baseballSchema = new BaseballSchema({
      pitchSpeed : req.body.pitchSpeed,
    });

    User.findOne({ _id: req.decoded.userId }).select('organization').exec((err, organID) => {
      if (err) {
        res.json({ success: false, message: err }); // Return error
      } else {
        if (!organID) {
          res.json({ success: false, message: 'We do not have any organizations' }); // Return error, organs was not found in db
        } else {
          BaseballSchema.createBaseballSchema(baseballSchema, function(err){
            if (err) {
              if (err.errors) {
                // Check if validation error is in the email field
                if (err.errors.pitchSpeed) {
                  res.json({ success: false, message: err.errors.pitchSpeed.message }); // Return error
                }
              } else {
                res.json({ success: false, message: 'Could not save BaseballSchema. Error: ', err }); // Return error if not related to validation
              }
            } else {
              res.json({ success: true, message: 'BaseballSchema registered!', organID : organID.organization,
                      baseballSchemaID: baseballSchema._id }); // Return success
            }
          });
        }
      }
    })
  });


  /* ==============
        Create FootballSchema Route
     ============== */
  router.post('/createFootballSchema', (req, res) => {
    if (!req.body.fortyDash) {
      res.json({ success: false, message: 'Please provide a 40 YD Dash'});
    }
    let footballSchema = new FootballSchema({
      fortyDash : req.body.fortyDash,
    });

    User.findOne({ _id: req.decoded.userId }).select('organization').exec((err, organID) => {
      if (err) {
        res.json({ success: false, message: err }); // Return error
      } else {
        if (!organID) {
          res.json({ success: false, message: 'We do not have any organizations' }); // Return error, organs was not found in db
        } else {
          FootballSchema.createFootballSchema(footballSchema, function(err){
            if (err) {
              if (err.errors) {
                // Check if validation error is in the email field
                if (err.errors.fortyDash) {
                  res.json({ success: false, message: err.errors.fortyDash.message }); // Return error
                }
              } else {
                res.json({ success: false, message: 'Could not save FootballSchema. Error: ', err }); // Return error if not related to validation
              }
            } else {
              res.json({ success: true, message: 'FootballSchema registered!', organID : organID.organization,
                footballSchemaID: footballSchema._id }); // Return success
            }
          });
        }
      }
    })
  });



  /* ==============
      Create Athlete Route
   ============== */
  router.post('/createAthlete', (req, res) => {
    if (!req.body.firstname) {
      res.json({ success: false, message: 'Please provide a first name'});
    } else {
      if (!req.body.lastname) {
        res.json({success: false, message: 'Please provide a last name'});
      }  else {
        if (!req.body.organization) {
          res.json({success: false, message: 'You must provide a organization'});
        }
      }
    }
    let athlete = new Athlete({
      firstname : req.body.firstname,
      lastname : req.body.lastname,
      basketballStat : req.body.basketballStat,
      // baseballStat : req.body.baseballStat,
      // footballStat : req.body.footballStat,
      organization : req.body.organization
    });
    Athlete.createAthlete(athlete, function(err){
      if (err) {
        if (err.errors) {
          // Check if validation error is in the email field
          if (err.errors.firstname) {
            res.json({ success: false, message: err.errors.firstname.message }); // Return error
          } else {
            // Check if validation error is in the username field
            if (err.errors.lastname) {
              res.json({ success: false, message: err.errors.lastname.message}); // Return error
            } else {
              if (err.errors.basketballStat) {
                res.json({ success : false, message : err.errors.basketballStat.message});
              } else {
                 {
                  if (err.errors.organization) {
                    res.json({ success : false, message : err.errors.organization.message});
                  }
                }
              }
            }
          }
        } else {
          res.json({ success: false, message: 'Could not save athlete. Error: ', err }); // Return error if not related to validation
        }
      } else {
        res.json({ success: true, message: 'Athlete registered!', athleteFirstName: athlete.firstname }); // Return success
      }
    });
  });

  /* ==============
      Create Recruit Route
   ============== */
  router.post('/createRecruit', (req, res) => {
    if (!req.body.firstname) {
      res.json({ success: false, message: 'Please provide a first name'});
    } else {
      if (!req.body.lastname) {
        res.json({success: false, message: 'Please provide a last name'});
      }  else {
        if (!req.body.organization) {
          res.json({success: false, message: 'You must provide a organization'});
        }
      }
    }
    let recruit = new Recruit({
      firstname : req.body.firstname,
      lastname : req.body.lastname,
      baseballStat : req.body.baseballStat,
      footballStat : req.body.footballStat,
      organization : req.body.organization
    });
    Recruit.createRecruit(recruit, function(err){
      if (err) {
        if (err.errors) {
          // Check if validation error is in the email field
          if (err.errors.firstname) {
            res.json({ success: false, message: err.errors.firstname.message }); // Return error
          } else {
            // Check if validation error is in the username field
            if (err.errors.lastname) {
              res.json({ success: false, message: err.errors.lastname.message}); // Return error
            } else {
              if (err.errors.baseballStat) {
                res.json({ success : false, message : err.errors.baseballStat.message});
              } else {
                if (err.errors.footballStat) {
                  res.json({ success : false, message : err.errors.footballStat.message});
                } else {
                  if (err.errors.organization) {
                    res.json({ success : false, message : err.errors.organization.message});
                  }
                }
              }
            }
          }
        } else {
          res.json({ success: false, message: 'Could not save recruit. Error: ', err }); // Return error if not related to validation
        }
      } else {
        res.json({ success: true, message: 'Recruit registered!', recruitFirstName: recruit.firstname }); // Return success
      }
    });
  });

  /* ===============================================================
     Route to get all athletes
  =============================================================== */
  router.get('/getAthletes', (req, res) => {
    Athlete.find({}).select('firstname').exec((err, allAthlete) => {
      if (err) {
        res.json({ success: false, message: err }); // Return error
      } else {
        if (!allAthlete) {
          res.json({ success: false, message: 'We do not have any athletes' }); // Return error, organs was not found in db
        } else {
          res.json({ success : true, athleteList : allAthlete})
        }
      }
    })
  });

  /* ===============================================================
    Route to get all recruits
 =============================================================== */
  router.get('/getRecruits', (req, res) => {
    Recruit.find({}).select('firstname').exec((err, allRecruit) => {
      if (err) {
        res.json({ success: false, message: err }); // Return error
      } else {
        if (!allRecruit) {
          res.json({ success: false, message: 'We do not have any recruits' }); // Return error, organs was not found in db
        } else {
          res.json({ success : true, recruitList : allRecruit})
        }
      }
    })
  });

  /* ===============================================================
     Route to get all sports
  =============================================================== */
  router.get('/getSports', (req, res) => {
    User.findOne({ _id: req.decoded.userId }).select('sport').exec((err, allSports) => {
      if (err) {
        res.json({ success: false, message: err }); // Return error
      } else {
        if (!allSports) {
          res.json({ success: false, message: 'We do not have any organizations' }); // Return error, organs was not found in db
        } else {
          res.json({ success : true, sportList : allSports})
        }
      }
    })
  });

  /* ===============================================================
     Route to get user
  =============================================================== */
  router.get('/getUser/:id', (req, res) => {
    console.log(req.params.id)
    User.findOne({ _id: req.params.id }).select('firstname lastname').exec((err, user) => {
      if (err) {
        res.json({ success: false, message: err }); // Return error
      } else {
        if (!user) {
          res.json({ success: false, message: 'We do not have any organizations' }); // Return error, organs was not found in db
        } else {
          res.json({ success : true, user : user})
        }
      }
    })
  });

  return router; // Return router object to main index.js
};
