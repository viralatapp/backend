const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const petRoute = require('./pet.route');
const adoptionRoute = require('./adoption.route');
const applicationRoute = require('./application.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/pets',
    route: petRoute,
  },
  {
    path: '/adoptions',
    route: adoptionRoute,
  },
  {
    path: '/applications',
    route: applicationRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
