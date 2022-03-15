//  Add your code here
const {model, Schema} = require("mongoose");


const CelebritySchema = new Schema ({
    name: String,
    occupation: String,
    catchPhrase: String,
});

const CelebrityModel = model('celebrity', CelebritySchema) // why is this? 
// celebrity gets created on the database. so that is the model (like instance) in the database
//in db it is celebrities, not celebrity --> why?

module.exports = CelebrityModel