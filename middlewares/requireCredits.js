module.exports = (req, res, next) => {
  if (req.user.credits < 1) {
    return res.status(403).send({ error: "Not enough credits!" });
  }
  next();
};
//next is like 'done' callback, go to the next middleware
