const handler = (req, res) => {
  res.status(200).json({
    message: 'Server is running',
  });
};

module.exports = {
  handler,
};
