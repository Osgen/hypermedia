const passport = require('passport');

module.exports=(app)=>{//send module as a function

    app.get('/auth/google', passport.authenticate('google', {//route auth with google
        scope: ['profile', 'email']
        })
    );
    
    app.get('/auth/google/callback', passport.authenticate('google'));//user passport when routing google/callback

    app.get('/api/current_user', (req, res)=>{
        res.send(req.user);
    });
};
