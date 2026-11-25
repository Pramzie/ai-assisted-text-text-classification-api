require('dotenv').config();

const app = require('./app');
console.log('app is:', typeof app, app);
const PORT = process.env.PORT || 3000;

const missing = ['AI_API_KEY', 'AI_BASE_URL', 'AI_MODEL'].filter((k) => !process.env[k]);
if (missing.length > 0) {
  console.error(`Missing environment variables: ${missing.join(', ')}. Copy .env.example to .env and set them.`);
  process.exit(1);
}

app.listen(PORT, () => {
  console.log(`Text Classification API running on http://localhost:${PORT}`);
});