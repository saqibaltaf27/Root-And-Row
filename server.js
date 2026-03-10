const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Import Routes
const farmRoutes = require('./routes/farms');
const ingredientsRoutes = require('./routes/ingredients');
const provenanceRoutes = require('./routes/provenance');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/farms', farmRoutes);
app.use('/ingredients', ingredientsRoutes);
app.use('/provenance', provenanceRoutes);

app.use((req, res) => {
    res.status(404).json({ error: "Resource not found"});
});

// Start Server
app.listen(PORT, () => {
    console.log(`Root & Row API Running on http://localhost:${PORT}`);
});
