const { poolPromise } = require("../config/dbConfig");

const executeQuery = async (query, params = {}) => {
    try {
        const pool = await poolPromise; // Get the connection pool
        const request = pool.request(); // Create a new request

        // Add parameters to the request
        for (const [key, value] of Object.entries(params)) {
            request.input(key, value);
        }

        const result = await request.query(query); // Execute the query
        return result.recordset; // Return the recordset
    } catch (err) {
        console.error("Database query error:", err);
        throw err; // Rethrow the error for the controller to handle
    }
};

module.exports = executeQuery;
