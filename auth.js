//external routes
const jwt = require('jsonwebtoken');
const bearerToken = require('express-bearer-token');

//internal routes
const {Users} = require('./db/models')
const {secret, expiresIn} = require('./config').jwtConfig;

//function to create a users token
const getUserToken = (users) => {
  const usersData = {
    id: users.id,
    email: users.email
  }

  const token = jwt.sign(
    {data:usersData},
    secret,
    {expiresIn: parseInt(expiresIn, 10)}
  )
  return token;
}

//function to obtain information from token if still authorized 

const autoRefresh = (req, res, next) =>  {
  const {token} = req;
  if(!token) {
    return res.set("WWW-Authenticate", "Bearer").status(401).end();
  }

  return jwt.verify(token, secret, null, async(error, jwtPayload)=> {
    if(error) {
      error.status = 401;
      return next(error);
    }

    const {id} = jwtPayload.data;

    try {
      req.users = await Users.findbyPk(id);
    } catch(error) {
      return next(error);
    }

    if(!req.users) {
      return res.set("WWW-Authenticate", "Bearer").status(401).end();
    }

    return next();
  })
}


const restoreusers = (req,res,next) => {
  const {token} = req;

  if(!token && (req.path === '/sign-in' || req.path === '/register')) {
    return next();
  }

  if(!token) {
    return res.redirect('/sign-in')
  }


  return jwt.verify(token, secret, null, async (error, jwtPayload) => {

    if (error) {
      error.status = 401;
      return next(error);
    }

    if (token && (req.path == "/register" || req.path == "/sign-in")) {
      return res.redirect('/');
    }

    const { id } = jwtPayload.data;

    try {
      req.users = await Users.findByPk(id);
    } catch (error) {
      return next(error);
    }

    if (!req.users) {
      return res.set("WWW-Authenticate", "Bearer").status(401).end();
    }

    return next();
  });
}



const authCheck = [bearerToken(), autoRefresh]

const usersValidation = [bearerToken({ cookie: { signed: true, secret, key: "accessToken" } }), restoreusers]

module.exports = {getUserToken, authCheck, usersValidation };
