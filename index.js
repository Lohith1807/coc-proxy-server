import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

const PORT = process.env.PORT || 10000;
const API_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImIwMzdiOGFkLWI4MWYtNDY0NC1hZTY5LTYxNTA4YWQ3YjNiNyIsImlhdCI6MTc2MjQ0MzIyMSwic3ViIjoiZGV2ZWxvcGVyL2U2YjA5NmQ4LTkwMTktOGQ2Zi01ODc4LTM3ODZlMjNkYWM5NCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjUyLjEzLjEyOC4xMDgiXSwidHlwZSI6ImNsaWVudCJ9XX0.ay1t8ryeLJ1Z3X1XiO9WVidGL_mRzr1C047BdzQtAkV_TKF0AHkHNLT3lPdd3jv-fYGpDUNTNAZipIKxvzZ2LA";

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
