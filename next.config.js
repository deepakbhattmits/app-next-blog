/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        db: "my-db-dev",
      },
    };
  }
  return {
    reactStrictMode: true,
    env: {
      db: "my-db-prod",
    },
  };
};

module.exports = nextConfig;
