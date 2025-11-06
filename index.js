import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

const PORT = process.env.PORT || 10000;
const API_TOKEN = process.env.COC_API_TOKEN;

app.get("/", (req, res) => {
  res.send("Clash of Clans Proxy Server is running 🚀");
});

app.get("/player/:tag", async (req, res) => {
  const tag = req.params.tag.replace("#", "");
  const url = `https://api.clashofclans.com/v1/players/%23${tag}`;
  try {
    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${API_TOKEN}` },
    });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch player data" });
  }
});

app.get("/clan/:tag", async (req, res) => {
  const tag = req.params.tag.replace("#", "");
  const url = `https://api.clashofclans.com/v1/clans/%23${tag}`;
  try {
    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${API_TOKEN}` },
    });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch clan data" });
  }
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
