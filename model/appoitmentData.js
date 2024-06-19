const mongoose = require('mongoose');
const { Schema } = mongoose;

const appoitmentSchema = new Schema({
    id: Number,
    fullName: String,
    dob: String,
    email: String,
    appoitmentDate: Date,
    speciality: String,
    doctor: {
        type: Schema.Types.ObjectId,
        ref: "Doctor"
    }
   
},
    {strictPopulate: false}
)


const Appoitment = mongoose.model('Appoitment', appoitmentSchema);
module.exports = Appoitment