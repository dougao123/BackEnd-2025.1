import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("MONSTER HUNTER LEST FOCKING GOOOOOOOOOOOOOOOOOOOOOOOOOOOO!!!!!");
});

app.get("/test", (req, res) => {
  res.send(
    "MONSTER HUNTER GU É MUITO BOMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM!!!!!!!"
  );
});

app.get("/gugu", (req, res) => {
  res.send("COMO DIRIA RODRIGO FARO: GUGU");
});

app.get("/user/:id", (req, res) => {
  res.json({
    params: req.params,
    query: req.query,
    method: req.method,
    Headers: req.headers,
  });
});

app.listen(port, () => {
  console.log(`servidor escutando em http://127.0.0.1:${port}`);
});
