const express = require("express");
const router = express.Router();
const client = require("../db");

router.post("/", async (req, res) => {
  console.log("Request body:", req.body);
  // log the request body

  try {
    if (typeof req.body !== "object" || req.body === null) {
      return res.status(400).send("Invalid request body");
    }

    // Insert data into the database
    const collection = client.db("Fresh").collection("signup");
    const result = await collection.insertOne(req.body);

    console.log("Insert result:", result); // log the result to see what it contains

    res.status(200).json({ _id: result.insertedId, ...req.body });
  } catch (err) {
    console.error("Error:", err); // log the error
    res.status(500).send("Error while adding data");
  }
});

module.exports = router;
