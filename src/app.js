const express = require('express');
const classifyRoutes = require('./routes/classify.routes');
const { notFound, errorHandler } = require('./middleware/errorHandler');

const app = express();

app.use(express.json({ limit: '10kb' }));

app.get('/health', (req, res) => res.json({ status: 'ok' }));
app.use('/api', classifyRoutes);

// These must come LAST, after all routes
app.use(notFound);
app.use(errorHandler);

module.exports = app;