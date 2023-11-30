const db = require("../config/connection");
const models = require("../models");

module.exports = async (modelName, collectionName) => {
    try {
        // Get the Mongoose model dynamically
        const Model = models[modelName];

        // Check if the collection exists
        const collections = await db.db.listCollections({ name: collectionName }).toArray();
        
        if (collections.length > 0) {
            // Drop the collection if it exists
            await Model.collection.drop();
            console.log(`Collection '${collectionName}' dropped successfully.`);
        } else {
            console.log(`Collection '${collectionName}' does not exist.`);
        }
    } catch (err) {
        throw err;
    }
}