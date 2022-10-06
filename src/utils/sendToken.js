const sendToken = (user, statusCode, res) => {
  const generatedToken = user.getJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIES_EXPIRE_TIME * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", generatedToken, options).json({
    success: true,
    user,
    generatedToken,
  });
};

module.exports = sendToken;
