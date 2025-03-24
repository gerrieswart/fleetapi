const express = require("express");
const router = express.Router();
const {
    GetAutoIncidentCountByMonth,
    GetNearMissesCountByPerson,
    GetSafetyHazardCountByPerson,
    GetAutoIncidentsDriverAtFault,
    GetAutoIncidentsDriverAtFaultCountByMonth,
    GetClaimsFiledYes,
    GetClaimsFiledYesCountByMonth,
} = require("../controllers/IncidentAnalyticsController");

// Define routes
router.get("/auto-incident-count-by-month", GetAutoIncidentCountByMonth);
router.get("/near-misses-count-by-person", GetNearMissesCountByPerson);
router.get("/safety-hazard-count-by-person", GetSafetyHazardCountByPerson);
router.get("/auto-incidents-driver-at-fault", GetAutoIncidentsDriverAtFault);
router.get(
    "/auto-incidents-driver-at-fault-count-by-month",
    GetAutoIncidentsDriverAtFaultCountByMonth
);
router.get("/claims-filed-yes", GetClaimsFiledYes);
router.get("/claims-filed-yes-count-by-month", GetClaimsFiledYesCountByMonth);

module.exports = router;
