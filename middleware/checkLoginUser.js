module.exports = (req, res, next) => {
  if (!req.session.user_id) return res.redirect("/user/login");
  next();
};
