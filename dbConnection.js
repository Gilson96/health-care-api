const mongooose = require('mongoose')

const connectDB = async () => {
  try {
    await mongooose.connect("mongodb+srv://grafael99:zuWCNHIfeMsX8p4t@healthcenter.qrgfzdr.mongodb.net/healthCenterDB?retryWrites=true&w=majority&appName=healthCenter")

    
  } catch (err) {
    console.log(err)
  }
}

module.exports = connectDB