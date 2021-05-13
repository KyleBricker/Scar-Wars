const express = require("express");
const cors = require("cors");
const port = 8000;

require("./config/mongoose.config");

const app = express();

app.use(express.json());
app.use(cors());


require("./routes/song.routes")(app);
require("./routes/playlist.routes")(app);

app.listen(port, () =>
    console.log(`Listening on port ${port}.`)
);
