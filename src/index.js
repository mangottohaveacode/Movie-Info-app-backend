const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");

const routes = {
  auth: require("./controllers/auth.controller")
};

app.use(cors());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

const prefix = "/api";
app.use(`${prefix}/auth`, routes.auth);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on https://localhost:${port}`);
});
