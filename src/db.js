const MongoClient = require( 'mongodb' ).MongoClient;
const config = require('./config');

let _db;

module.exports = {
    // TODO: verify this properly - promise, error handling, singleton, logging *?
    connectToDatabase: () => {
        return new Promise((res, rej) => {
            MongoClient.connect(`mongodb://${config.mongodbUser}:${config.mongodbPass}@${config.mongodbUrl}`).then(db => {
                console.log('Connected to db.')
                _db = db;
                res();
            }).catch(err =>{
                console.log('Failed to connect to database: ', err)
            })
        })
      },
    getDb: () => {
        return _db;
    }

};
