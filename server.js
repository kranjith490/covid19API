const express = require("express");
const axios = require("axios");
const { response } = require("express");
const { json } = require("body-parser");
const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
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

app.get("/api", (req, res) => {
  axios
    .get("https://covid19.mathdro.id/api")
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

app.get("/countries/:countryCode", (req, res) => {
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
