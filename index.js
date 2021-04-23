require("dotenv").config;
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Deployed using Travis CI, API Key Secured",
    by: "Qasim Abdullah",
    email: "qasim.abdullah@travis-ci.org",
  });
});

app.listen(process.env.PORT || 3000, () =>
  console.log("Server running on port 3000.")
);
