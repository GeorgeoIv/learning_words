export const urlSession = (req, res, next) => {
  res.locals.path = req.originalUrl;
  res.locals.user = req.session.user;
  next();
};

// export const isAuthApi = (req, res, next) => {
//   if (req.session.user) {
//     return next();
//   }
//   res.sendStatus(401);
// };

export const isAuth = (req, res, next) => {
  if (req.session.user) {
    return next();
  }
  res.redirect('/auth/signin');
};
