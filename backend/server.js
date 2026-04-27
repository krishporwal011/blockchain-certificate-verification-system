const app = require('./src/app');
const env = require('./src/config/env');

const PORT = env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`NODE_ENV=${env.NODE_ENV}`);
  console.log(`Frontend URL: ${env.FRONTEND_BASE_URL}`);
  if (env.ENABLE_IPFS) {
    console.log(`IPFS Upload: ENABLED`);
  } else {
    console.log(`IPFS Upload: DISABLED`);
  }
});
