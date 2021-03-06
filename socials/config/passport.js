import { Strategy, ExtractJwt } from 'passport-jwt';
import mongoose from 'mongoose';
const User = mongoose.model('users');
const secret = require('./keys').secret;

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = secret;

module.exports = passport => {
  passport.use(new Strategy(opts, (jwt_payload, done) => {
    User.findById(jwt_payload.id)
      .then(user => {
        if(user){
          return done(null, user);
        }

        return done(null, false);
      })
      .catch(err => console.log(err));
  }));
};