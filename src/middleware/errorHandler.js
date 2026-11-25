function notFound(req, res) {
  res.status(404).json({ error: 'Route not found.' });
}

// Express knows this is an error handler because it has 4 parameters
// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({ error: 'Invalid JSON body.' });
  }
  const status = err.status || 500;
  console.error(err);
  res.status(status).json({ error: status === 500 ? 'Internal server error.' : err.message });
}

module.exports = { notFound, errorHandler };