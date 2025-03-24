const { successResponse, errorResponse } = require("../utils/responseUtils");
const executeQuery = require("../utils/dbUtils");

// Controller to get Auto Incident Count By Month
const GetAutoIncidentCountByMonth = async (req, res) => {
    const { startDate, endDate } = req.query;

    const query = `
        EXEC GetAutoIncidentCountByMonth @startDate, @endDate;
    `;

    try {
        const result = await executeQuery(query, { startDate, endDate });
        res.status(200).json(successResponse(result, "Auto incident count retrieved successfully"));
    } catch (err) {
        console.error("Error fetching auto incident count by month:", err);
        res.status(500).json(errorResponse("Failed to fetch auto incident count", err.message));
    }
};

// Controller to get Near Misses Count By Person
const GetNearMissesCountByPerson = async (req, res) => {
    const { startDate, endDate } = req.query;

    const query = `
        EXEC GetNearMissesCountByPerson @startDate, @endDate;
    `;

    try {
        const result = await executeQuery(query, { startDate, endDate });
        res.status(200).json(successResponse(result, "Near misses count retrieved successfully"));
    } catch (err) {
        console.error("Error fetching near misses count by person:", err);
        res.status(500).json(errorResponse("Failed to fetch near misses count", err.message));
    }
};

// Controller to get Safety Hazard Count By Person
const GetSafetyHazardCountByPerson = async (req, res) => {
    const { startDate, endDate } = req.query;

    const query = `
        EXEC GetSafetyHazardCountByPerson @startDate, @endDate;
    `;

    try {
        const result = await executeQuery(query, { startDate, endDate });
        res.status(200).json(successResponse(result, "Safety hazard count retrieved successfully"));
    } catch (err) {
        console.error("Error fetching safety hazard count by person:", err);
        res.status(500).json(errorResponse("Failed to fetch safety hazard count", err.message));
    }
};

// Controller to get List of Auto Incidents (Driver At Fault)
const GetAutoIncidentsDriverAtFault = async (req, res) => {
    const { startDate, endDate } = req.query;

    const query = `
        EXEC GetAutoIncidentsDriverAtFault @startDate, @endDate;
    `;

    try {
        const result = await executeQuery(query, { startDate, endDate });
        res.status(200).json(successResponse(result, "Auto incidents (driver at fault) retrieved successfully"));
    } catch (err) {
        console.error("Error fetching auto incidents (driver at fault):", err);
        res.status(500).json(errorResponse("Failed to fetch auto incidents (driver at fault)", err.message));
    }
};

// Controller to get Count of Auto Incidents (Driver At Fault) per Month
const GetAutoIncidentsDriverAtFaultCountByMonth = async (req, res) => {
    const { startDate, endDate } = req.query;

    const query = `
        EXEC GetAutoIncidentsDriverAtFaultCountByMonth @startDate, @endDate;
    `;

    try {
        const result = await executeQuery(query, { startDate, endDate });
        res.status(200).json(successResponse(result, "Auto incidents count by month (driver at fault) retrieved successfully"));
    } catch (err) {
        console.error("Error fetching auto incidents count by month (driver at fault):", err);
        res.status(500).json(errorResponse("Failed to fetch auto incidents count by month (driver at fault)", err.message));
    }
};

// Controller to get List of Claims Filed (Yes)
const GetClaimsFiledYes = async (req, res) => {
    const { startDate, endDate } = req.query;

    const query = `
        EXEC GetClaimsFiledYes @startDate, @endDate;
    `;

    try {
        const result = await executeQuery(query, { startDate, endDate });
        res.status(200).json(successResponse(result, "Claims filed (Yes) retrieved successfully"));
    } catch (err) {
        console.error("Error fetching claims filed (Yes):", err);
        res.status(500).json(errorResponse("Failed to fetch claims filed (Yes)", err.message));
    }
};

// Controller to get Count of Claims Filed (Yes) per Month
const GetClaimsFiledYesCountByMonth = async (req, res) => {
    const { startDate, endDate } = req.query;

    const query = `
        EXEC GetClaimsFiledYesCountByMonth @startDate, @endDate;
    `;

    try {
        const result = await executeQuery(query, { startDate, endDate });
        res.status(200).json(successResponse(result, "Claims filed count by month (Yes) retrieved successfully"));
    } catch (err) {
        console.error("Error fetching claims filed count by month (Yes):", err);
        res.status(500).json(errorResponse("Failed to fetch claims filed count by month (Yes)", err.message));
    }
};

module.exports = {
    GetAutoIncidentCountByMonth,
    GetNearMissesCountByPerson,
    GetSafetyHazardCountByPerson,
    GetAutoIncidentsDriverAtFault,
    GetAutoIncidentsDriverAtFaultCountByMonth,
    GetClaimsFiledYes,
    GetClaimsFiledYesCountByMonth,
};
