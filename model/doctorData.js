const mongoose = require('mongoose');
const { Schema } = mongoose;

const doctorSchema = new Schema({
    id: Number,
    email: String,
    password: String,
    avatar: String,
    firstName: String,
    lastName: String,
    phone: Number,
    speciality: [{
        name: String,
        description: String,
        fee: Number
    }],
    appoitments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Appoitment"
    }]

})


const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor