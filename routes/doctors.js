const express = require("express");
const operations = require("../controllers/doctors");
const router = express.Router();

router.get('/', operations.getDoctors);
router.get('/:id', operations.getDoctor);
router.post('/', operations.createDoctor);
router.put('/:id', operations.updateDoctor);
router.delete('/', operations.deleteDoctor);

router.post('/:id/appoitment', operations.createAppoitment);
router.get('/:id/appoitment', operations.getDoctorAppoitments);
router.put('/:id/appoitment/:appoitmentId', operations.updateAppoitment);
router.delete('/:id/appoitment/:appoitmentId', operations.deleteAppoitment);

module.exports = router;