const expressjwt = require("express-jwt");

const secret = "";

exports.jwt = () => {
  return expressjwt({
    secret,
    algorithms: ["HS256"],
  }).unless({
    path: ["/api/user/login"],
  });
};
