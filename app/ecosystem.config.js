
module.exports = {
  apps: [{
    // name: "helloworld-prod-nextjs",
    // script: 'node_modules/next/dist/bin/next',
    script: 'node_modules/.bin/next',
    args: 'start',
    env_production: {
        name: "helloworld-prod-nextjs",
        NODE_ENV: "production",
        PORT: 3000,
    },
    env_staging: {
        name: "helloworld-prod-nextjs-staging",
        NODE_ENV: "development",
        PORT: 3001,
    }
  }]
}
