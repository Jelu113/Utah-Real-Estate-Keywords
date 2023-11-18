const db = require("../config/connection");
const models = require("../models");

module.exports = async (modelName, collectionName) => {
    try {
        let existingModel = await models[modelName].db.db.listCollections({
            name: collectionName
        }).toArray()

        if (existingModel.length) {
            await db.dropCollection(collectionName);
        }
    } catch (err) {
        throw err;
    }
}