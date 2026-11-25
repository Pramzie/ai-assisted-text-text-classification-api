const classifierService = require('../services/classifier.service');

const MAX_LENGTH = 2000;

async function classify(req, res, next) {
  try {
    const { text } = req.body || {};

    if (typeof text !== 'string' || text.trim().length === 0) {
      return res.status(400).json({ error: '"text" is required and must be a non-empty string.' });
    }
    if (text.length > MAX_LENGTH) {
      return res.status(400).json({ error: `"text" must be at most ${MAX_LENGTH} characters.` });
    }

    const result = await classifierService.classifyText(text.trim());
    return res.status(200).json(result);
  } catch (err) {
    next(err);
  }
}

module.exports = { classify };