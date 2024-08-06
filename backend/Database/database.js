const mongoose = require('mongoose');

const {mongourl} = require('../env/env');

const connectToDatabase = () => {
  mongoose.connect(mongourl, {});
  
  mongoose.connection.on('connected', () =>{
    console.log(`connected to mongoose database`);
  })

}

module.exports = {connectToDatabase}; 