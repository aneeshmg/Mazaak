const config = {
    DEV : {
        mongodbUrl: "ds159274.mlab.com:59274/jokes",
        mongodbUser: "app",
        mongodbPass: "App@2017",
        port: "3000"
    },
    PROD : {
        mongodbUrl: "ds159274.mlab.com:59274/jokes",
        mongodbUser: "app",
        mongodbPass: "App@2017",
        port: "3000"
    }
}

const env = (process.env.ENV) ? process.env.ENV : 'DEV';
module.exports = config[env];