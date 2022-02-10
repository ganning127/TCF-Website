module.exports = {
  reactStrictMode: true,

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  env: {
    CONTACT_EMAIL: process.env.CONTACT_EMAIL,
    CONTACT_EMAIL_PASS: process.env.CONTACT_EMAIL_PASS,
    GOOGLE_SERVICE_ACCOUNT_EMAIL: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    GOOGLE_PRIVATE_KEY: process.env.GOOGLE_PRIVATE_KEY,
  }
}
