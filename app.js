require("dotenv").config();

const express = require("express");
const OpenApiValidator = require("express-openapi-validator");
const path = require("path");
const cors = require('cors');

// Routes
const incidentRoutes = require("./routes/incidentRoutes");

const app = express();
const PORT = process.env.APP_PORT || 3000;

// Allow requests from your frontend's origin
app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend's URL
}));

// Middleware to parse JSON requests
app.use(express.json());

// Conditionally load Swagger UI in development
//if (process.env.NODE_ENV === "development") {
    const swaggerUi = require("swagger-ui-express");
    const yaml = require("js-yaml");
    const fs = require("fs");

    // Load the OpenAPI spec
    const openApiSpec = yaml.load(fs.readFileSync(path.join(__dirname, "openapi.yaml"), "utf8"));

    // Serve Swagger UI
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openApiSpec));

    console.log(`Swagger UI is running at http://localhost:${PORT}/api-docs`);
//}

// OpenAPI Validator
app.use(
    OpenApiValidator.middleware({
        apiSpec: path.join(__dirname, "openapi.yaml"),
        validateRequests: true,
        validateResponses: true,
    })
);

// Use the incident routes
app.use("/api/incidents", incidentRoutes);

// Global error-handling middleware
app.use((err, req, res, next) => {
    console.error(err); // Log the error
    res.status(err.status || 500).json({
        message: err.message || "Internal Server Error",
        errors: err.errors || [],
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
