const sql = require("mssql");

// Database configuration for Azure SQL Server
const dbConfig = {
    server: process.env.DB_SERVER,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: parseInt(process.env.DB_PORT, 10),
    options: {
        encrypt: true, // for Azure
        trustServerCertificate: true // change to false for production
    }
};

// Create a connection pool
const poolPromise = new sql.ConnectionPool(dbConfig)
    .connect()
    .then((pool) => {
        console.log("Connected to Azure SQL Database");
        return pool;
    })
    .catch((err) => {
        console.error("Database connection failed: ", err.message);
        process.exit(1); // Exit the process if the connection fails
    });

module.exports = {
    sql,
    poolPromise,
};
