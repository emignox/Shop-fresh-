const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://emignox:Difficilissimo97@atlascluster.hzdivvv.mongodb.net/?retryWrites=true&w=majority";
const app = express();
const port = 3000;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.options("*", cors());

app.get("/signup", async (req, res) => {
  try {
    const collection = client.db("Fresh").collection("signup");
    const data = await collection.find().toArray();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error while fetching data");
  }
});

app.use(express.json());

app.post("/signup", async (req, res) => {
  console.log("Request body:", req.body); // log the request body

  try {
    if (typeof req.body !== "object" || req.body === null) {
      return res.status(400).send("Invalid request body");
    }

    const collection = client.db("Fresh").collection("signup");
    const result = await collection.insertOne(req.body);

    console.log("Insert result:", result); // log the result to see what it contains

    res.status(200).json({ _id: result.insertedId, ...req.body });
  } catch (err) {
    console.error("Error:", err); // log the error
    res.status(500).send("Error while adding data");
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    // Start the Express server
    app.listen(port, () => {
      console.log(`Server in esecuzione su http://localhost:${port}`);
    });
  } catch (err) {
    console.error(err);
  }
}

run().catch(console.dir);
