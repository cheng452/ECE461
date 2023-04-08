// Here we are importing the Express library and creating an instance of a Router object from it
// Router objects are used to define the routing for the applications HTTP requests 
const express = require('express')
const reset_router = express.Router()

// Here we are importing the needed models for this endpoint
// Models represent collections in the database. They define the structure of the documents in the collection and provide an 
//      interface for querying, saving, updating, and deleting documents within the database error
const AuthenticationToken = require('../models/authenticationToken')

// Here we define the routes for this endpoint
// This DELETE: Reset the registry to a system default state.
//      The header will contain a parameter named 'X-Authorization'
//          - Can access headers by req.headers['X-Authorization']
//          - Of type AuthenticationToken schema
//      Responses defined as follows:
//          - 200: Registry is reset.
//          - 400: There is missing field(s) in the AuthenticationToken or it is formed improperly, or the AuthenticationToken is invalid.
//          - 401: You do not have permission to reset the registry.
reset_router.delete('/', async (req,res) => {

})

// Probably have to make function here to reset registry. If so, name function according to operationId from yaml. 
// For this, the operationId was RegistryReset
// Replace these comments related to the function with comment describing function

// Export the router as a module so other files can use it
module.exports = reset_router