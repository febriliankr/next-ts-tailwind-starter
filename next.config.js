/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  env: {
    firebaseApiKey: process.env.firebaseApiKey,
  },
};
