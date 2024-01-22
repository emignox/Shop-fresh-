const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://emignox:Difficilissimo97@atlascluster.hzdivvv.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

module.exports = client;
