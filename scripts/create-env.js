const fs = require('fs')
fs.writeFileSync('./.env', `PRIVATE_KEY=${process.env.PRIVATE_KEY}\nPRIVATE_KEY_ID=${process.env.PRIVATE_KEY_ID}\nPROJECT_ID=${process.env.PROJECT_ID}`)yarn install --dev netlify-plugin-inline-functions-env
