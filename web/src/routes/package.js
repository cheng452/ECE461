// Here we are importing the Express library and creating an instance of a Router object from it
// Router objects are used to define the routing for the applications HTTP requests 
const express = require('express')
const package_router = express.Router()

// Here we are importing the needed models for this endpoint
// Models represent collections in the database. They define the structure of the documents in the collection and provide an 
//      interface for querying, saving, updating, and deleting documents within the database error
const AuthenticationToken = require('../models/authenticationToken')
const PackageData = require('../models/packageData')
const Package = require('../models/package')
const PackageID = require('../models/packageID')
const PackageRating = require('../models/packageRating')
const Error = require('../models/error')
const PackageName = require('../models/packageName')
const PackageRegEx = require('../models/packageRegEx')

// Here we define the routes for this endpoint
// Per spec, this POST: Creates package
//      The req.body will contain PackageData schema
//      The header will contain a parameter named 'X-Authorization'
//          - Can access headers by req.headers['X-Authorization']
//          - Of type AuthenticationToken schema
//      Responses defined as follows:
//          - 201: Success. Check the ID in the returned metadata for the official ID.
//              - Return type is of Package schema
//          - 400: There is missing field(s) in the PackageData/AuthenticationToken or it is formed improperly, or the AuthenticationToken is invalid.
//          - 409: Package exists already.
//          - 424: Package is not uploaded due to the disqualified rating.
package_router.post('/', async (req,res) => {

})

// Per spec, this GET: Interact with the package with this ID. Return this package.
//      The req.params will contain the id of the package
//          - Can access by req.params.id
//          - Will be of type PackageID schema
//      The header will contain a parameter named 'X-Authorization'
//          - Can access headers by req.headers['X-Authorization']
//          - Of type AuthenticationToken schema
//      Responses defined as follows:
//          - default: unexpected error. Return type Error schema
//          - 200: Return the package. Content is required.
//              - Return type is of Package schema
//          - 400: There is missing field(s) in the PackageID/AuthenticationToken or it is formed improperly, or the AuthenticationToken is invalid.
//          - 404: Package does not exist.
package_router.get('/:id', async(req,res) => {

})

// Per spec, this PUT: Update this content of the package. The name, version, and ID must match. The package contents (from PackageData) will replace the previous contents.
//      The req.body will contain Package schema
//      The req.params will contain the id of the package
//          - Can access by req.params.id
//          - Will be of type PackageID schema
//      The header will contain a parameter named 'X-Authorization'
//          - Can access headers by req.headers['X-Authorization']
//          - Of type AuthenticationToken schema
//      Responses defined as follows:
//          - 200: Version is updated.
//          - 400: There is missing field(s) in the PackageID/AuthenticationToken or it is formed improperly, or the AuthenticationToken is invalid.
//          - 404: Package does not exist.
package_router.put('/:id', async(req,res) => {

})

// Per spec, this DELETE: Delete this version of the package.
//      The req.params will contain the id of the package
//          - Can access by req.params.id
//          - Will be of type PackageID schema
//      The header will contain a parameter named 'X-Authorization'
//          - Can access headers by req.headers['X-Authorization']
//          - Of type AuthenticationToken schema
//      Responses as follows:
//          - 200: Package is deleted.
//          - 400: There is missing field(s) in the PackageID/AuthenticationToken or it is formed improperly, or the AuthenticationToken is invalid.
//          - 404: Package does not exist.
package_router.delete('/:id', async(req,res) => {

})

// Per spec, this GET: Rates package
//      The req.params will contain the id of the package
//          - Can access by req.params.id
//          - Will be of type PackageID schema
//      The header will contain a parameter named 'X-Authorization'
//          - Can access headers by req.headers['X-Authorization']
//          - Of type AuthenticationToken schema
//      Responses as follows:
//          - 200: Return the rating. Only use this if each metric was computed successfully.
//              - Return type of PackageRating schema
//          - 400: There is missing field(s) in the PackageID/AuthenticationToken or it is formed improperly, or the AuthenticationToken is invalid
//          - 404: Package does not exist.
//          - 500: The package rating system choked on at least one of the metrics.
package_router.get('/:id/rate', async(req,res) => {

})

// Per spec, this GET: Return the history of this package (all versions).
//      The header will contain a parameter named 'X-Authorization'
//          - Can access headers by req.headers['X-Authorization']
//          - Of type AuthenticationToken schema
//      The req.params will contain the name of the package
//          - Can access by req.params.name
//          - Of type PackageName schema
//      Responses as follows:
//          - default: unexpected error
//              - Return type of Error schema
//          - 200: Return the package history.
//              - Return array of type PackageHistoryEntry schema
//          - 400: There is missing field(s) in the PackageName/AuthenticationToken or it is formed improperly, or the AuthenticationToken is invalid.
//          - 404: No such package.
package_router.get('/byName/:name', async(req,res) => {

})

// Per spec, this DELETE: Delete all versions of this package.
//      The header will contain a parameter named 'X-Authorization'
//          - Can access headers by req.headers['X-Authorization']
//          - Of type AuthenticationToken schema
//      The req.params will contain the name of the package
//          - Can access by req.params.name
//          - Of type PackageName schema
//      Responses as follows:
//          - 200: Package is deleted.
//          - 400: There is missing field(s) in the PackageName/AuthenticationToken or it is formed improperly, or the AuthenticationToken is invalid.
//          - 404: Package does not exist.
package_router.delete('/byName/:name', async(req,res) => {

})

// Per spec, this POST: Get any packages fitting the regular expression. Search for a package using regular expression over package name 
//                      and READMEs. This is similar to search by name.
//      The header will contain a parameter named 'X-Authorization'
//          - Can access headers by req.headers['X-Authorization']
//          - Of type AuthenticationToken schema
//      The req.body will contain PackageRegEx schema
//      Responses as follows:
//          - 200: Return a list of packages.
//              - Return array of type PackageMetaData schema
//          - 400: There is missing field(s) in the PackageRegEx/AuthenticationToken or it is formed improperly, or the AuthenticationToken is invalid.
//          - 404: No package found under this regex.
package_router.post('/byRegEx', async(req,res) => {

})

// If functions are needed, name them according to operationId in spec
// If functions needed for:
//      - Creating package
//          Name it: PackageCreate
//      - Retrieving Package
//          Name it: PackageRetrieve
//      - Updating package
//          Name it: PackageUpdate
//      - Deleting package
//          Name it: PackageDelete
//      - Rating Package
//          Name it: PackageRate
//      - Getting package by name
//          Name it: PackageByNameGet
//      - Deleting package by name
//          Name it: PackageByNameDelete
//      - Getting package by RegEx
//          Name it: PackageByRegExGet
// Replace these comments related to the function with comment describing function


// Export the router as a module so other files can use it
module.exports = package_router