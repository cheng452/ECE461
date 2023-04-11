// Here we are importing the Express library and creating an instance of a Router object from it
// Router objects are used to define the routing for the applications HTTP requests 
const express = require('express')
const authenticate_router = express.Router()

// Here we define the routes for this endpoint
// Per spec, this PUT: Authenticate this user -- get an access token.
//                     If your system supports the authentication scheme described in the spec, then:
// 
//                     1. The obtained token should be provided to the other endpoints via the "X-Authorization" header.
//                     2. The "Authorization" header is *required* in your system.
// 
//                     Otherwise, this endpoint should return HTTP 501 "Not implemented", and the "X-Authorization" header should be unused for the other endpoints.
//      The req.body will contain AuthenticationRequest schema
//      Responses defined as follows:
//          - 200: Return an AuthenticationToken.
//              - Return type of AuthenticationToken schema
//          - 400: There is missing field(s) in the AuthenticationRequest or it is formed improperly.
//          - 401: The user or password is invalid.
//          - 501: This system does not support authentication.
authenticate_router.put('/', async (req,res) => {
    res.status(501).json({ message: 'This system does not support authentication.' })
})

// Export the router as a module so other files can use it
module.exports = authenticate_router