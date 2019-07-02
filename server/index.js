const express = require("express");
const path = require("path");

const distFolder = path.join(__dirname, "..", "dist");

const app = express();

app.use(express.static(distFolder));

const PORT = process.env.PORT || 8080;

app.get("/*", (req, res) => {
  res.sendFile(path.join(distFolder, locale, "index.html"));
})
app.listen(PORT, () => {
  console.log(`Webshop UI started on port ${PORT}`);
})
