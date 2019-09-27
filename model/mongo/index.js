const mongoose = require('mongoose');
const { mongo } = require('../../config/config')

module.exports = {
  connect: async () => {
    await mongoose.connect(mongo.database, {
      useNewUrlParser:true,
      poolSize: 10
    })
  },

  close: async () => {
    await mongoose.connection.close()
  }
}

