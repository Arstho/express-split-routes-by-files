const express = require("express");
const app = express();



app.use(require("./routes/products.route"));
app.use(require("./routes/brands.route"));

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})