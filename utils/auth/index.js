const passport = require('passport');

const LocalStrategy = require('./srategies/local.strategy');
const JwtStrategy = require('./srategies/jwt.strategy');

passport.use(LocalStrategy);
passport.use(JwtStrategy);
