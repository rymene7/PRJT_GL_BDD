
require("dotenv").config({ path: __dirname + "/.env" });
const express = require('express');

const app = express();

const PORT = process.env.PORT || 9000;







app.listen(PORT, () => {
    console.log(`Server listening on the port  ${PORT}`);
})