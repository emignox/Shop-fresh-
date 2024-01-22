const express = require("express");
const corsMiddleware = require("./middleware/cors");
const app = express();
const port = 3000;
const client = require("./db");
const signupRoutes = require("./routes/signup");
const loginRoutes = require("./routes/login");

app.use(corsMiddleware);
app.use(express.json());
app.use("/signup", signupRoutes);
app.use("/login", loginRoutes);

async function run() {
  try {
    await client.connect();
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    app.listen(port, () => {
      console.log(`Server in esecuzione su http://localhost:${port}`);
    });
  } catch (err) {
    console.error(err);
  }
}

run().catch(console.dir);
