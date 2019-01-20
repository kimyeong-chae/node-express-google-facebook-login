const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const InstagramStrategy = require('passport-instagram').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

passport.use(new GoogleStrategy({
            clientID: '',
            clientSecret: '',
            callbackURL: "/login/callback/google"
    },
    (accessToken, refreshToken, profile, done) => {
        console.log("ACCESS:", accessToken);
        console.log("REFRESH:", refreshTokenㅞㅡ );
        console.log("PROFILE:", profile);

        done(null, {user : profile.id});
    })
);

passport.use(new FacebookStrategy({
        clientID: '',
        clientSecret: '',
        callbackURL: "/login/callback/facebook"
    },
    (accessToken, refreshToken, profile, cb) => {
        console.log("ACCESS:", accessToken);
        console.log("REFRESH:", refreshToken);
        console.log("PROFILE:", profile);
        return cb(null, {user: profile});
    }
));

passport.use(new InstagramStrategy({
        clientID: '',
        clientSecret: '',
        callbackURL: "/login/callback/instagram"
    },
    (accessToken, refreshToken, profile, done) => {
        console.log("ACCESS:", accessToken);
        console.log("REFRESH:", refreshToken);
        console.log("PROFILE:", profile);
        return done(null, {user: profile});
    }
));