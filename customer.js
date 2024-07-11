const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customersSchema = new Schema({
    user_name: {
        type: String,
        required: true 
    },
    password: {
        type: String,
        required: true 
    },
    email: {
        type: String,
        required: true 
    },
    age: {
        type: Number,  
        required: true 
    }
});

// The first argument is the name of the collection, and the second argument is the schema.
const CustomersModel = mongoose.model('customers', customersSchema);

module.exports = CustomersModel;