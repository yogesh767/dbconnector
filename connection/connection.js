const { MongoClient, ServerApiVersion } = require('mongodb');
const url='mongodb+srv://yogesh:NFZaO9RoWolituHQ@cluster0.vrjdjsm.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(url, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
module.exports= client