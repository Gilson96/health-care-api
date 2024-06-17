const Doctor = require("../model/doctorData")
const Appoitment = require("../model/appoitmentData")

// Get all doctor data
exports.getDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.status(200).json(doctors);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// Get a specific doctor
exports.getDoctor = async (req, res) => {
    const id = req.params.id;
    try {
        const doctor = await Doctor.findOne({ id: id });
        res.status(200).json(doctor);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// Create a doctor
exports.createDoctor = async (req, res) => {
    console.log(req.body)
    try {
        const createDoctor = await Doctor.create(req.body)
        res.status(200).json(createDoctor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Upadate a doctor
exports.updateDoctor = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedDoctor = await Doctor.findOneAndUpdate({ id: id }, req.body, { new: true });
        res.status(200).json(updatedDoctor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Delete a doctor
exports.deleteDoctor = async (req, res) => {
    const id = req.params.id;
    try {
        await Doctor.deleteMany();
        res.status(200).json('deleted');
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Create an Appoitment
exports.createAppoitment = async (req, res, doctorId) => {
     const id = req.params.id;
    try {
        const createAppoitment = await Appoitment.create(req.body)
        const updatedDoctor = await Doctor.findOneAndUpdate({ id: id }, {$push: {appoitments: createAppoitment}}, { new: true });

        res.status(200).json(createAppoitment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Get all Appoitment from a specefic Doctor
exports.getDoctorAppoitments = async (req, res) => {
    const id = req.params.id;
    try {
        const doctors = await Doctor.findOne({id: id}).populate('appoitments', "-_id -__v" );
        res.status(200).json(doctors);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// Delete an appoitment
exports.deleteAppoitment = async (req, res) => {
    const id = req.params.id;
    const appoitmentId = req.params.appoitmentId
    try {
        const doctor = await Doctor.findOne({id: id}).deleteOne({appoitmentId});
        res.status(200).json('deleted');
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

exports.updateAppoitment = async (req, res) => {
    const id = req.params.id;
    const appoitmentId = req.params.appoitmentId;

    try {
        const updatedDoctor = await Doctor.findOne({ id: id }).findOneAndUpdate({ appoitmentId: appoitmentId }, req.body, { new: true });
        res.status(200).json(updatedDoctor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
