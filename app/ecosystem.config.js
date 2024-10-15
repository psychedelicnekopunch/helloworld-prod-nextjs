
module.exports = {
  apps: [{
    // name: "helloworld-prod-js",
    // script: 'node_modules/next/dist/bin/next',
    script: 'node_modules/.bin/next',
    args: 'start',
    env_production: {
        name: "helloworld-prod-js",
        NODE_ENV: "production",
        PORT: 3000,
    },
    env_staging: {
        name: "helloworld-prod-js-staging",
        NODE_ENV: "staging",
        PORT: 3001,
    }
  }]
}
