import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Yes, this is Express speaking!");
});

app.listen(PORT, () => {
  console.log(`Listening on port:${PORT}`);
});
