const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;

app.use(
  cors({
    origin: "*",
  })
);

app.get("/api/countries", (req, res) => {
  axios
    .get("https://covid19.mathdro.id/api/countries")
    .then((response) => {
      (response.data.responseStatus = "success"), res.send(response.data);
    })
    .catch((error) => {
      const response = {
        responseStatus: "failed",
        code: {
          error: `ERR${error.status}`,
          message: error.message,
        },
      };
      res.sendStatus = error.status;
      res.send(response);
    });
});

app.get("/api/global", (req, res) => {
  axios
    .get("https://covid19.mathdro.id/api/")
    .then((response) => {
      (response.data.responseStatus = "success"), res.send(response.data);
    })
    .catch((error) => {
      const response = {
        responseStatus: "failed",
        code: {
          error: `ERR${error.status}`,
          message: error.message,
        },
      };
      res.sendStatus = error.status;
      res.send(response);
    });
});

app.get("/api/countries/:countryCode", (req, res) => {
  const { countryCode } = req.params;
  axios
    .get(`https://covid19.mathdro.id/api/countries/${countryCode}`)
    .then((response) => {
      (response.data.responseStatus = "success"), res.send(response.data);
    })
    .catch((error) => {
      const response = {
        responseStatus: "failed",
        code: {
          error: `ERR${error.status}`,
          message: error.message,
        },
      };
      res.sendStatus = error.status;
      res.send(response);
    });
});

app.listen(port, () => {
  console.log(`app listening at http://url:${port}`);
});
