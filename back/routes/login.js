const express = require("express");
const router = express.Router();
const client = require("../db");

router.post("/", async (req, res) => {
  try {
    const { name, password } = req.body;
    const collection = client.db("Fresh").collection("signup");
    const user = await collection.findOne({ name, password });

    if (user) {
      res.json({ message: "Accesso consentito" });
      // Qui puoi impostare un cookie di sessione o generare un token JWT
    } else {
      res.status(401).json({ message: "Accesso negato" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Errore durante il recupero dei dati");
  }
});

module.exports = router;
