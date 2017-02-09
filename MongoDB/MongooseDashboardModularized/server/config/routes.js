// Show export to "pangolinsController" controller
var showpangolins = require("../controllers/showpangolins.js");

// Pass routes from this file to server.js
module.exports = function(app) {

    // Home page
    app.get("/", function(req, res) {
        showpangolins.show(req, res);
    });

    // Form page to add new pangolins
    // to MongoDB collection
    app.get("/mongooses/new", function(req, res){
        showpangolins.newpangolinform(req, res);
    });

    // Show a single pangolin
    app.get("/mongooses/:id", function(req, res) {
        showpangolins.showSinglePangolin(req, res);

    });

    // Update a single pangolin
    app.get("/mongooses/:id/edit", function(req, res) {
        showpangolins.updateSinglePangolin(req, res);
    });

    // Route to add an pangolin to DB
    app.post("/mongooses", function(req, res) {
        showpangolins.addpangolin(req, res);
    });


    // Route to update a single
    // pangolin document
    app.post("/mongooses/:id", function(req, res) {
        showpangolins.executeUpdatePangolin(req, res);
    });

// Route to delete a single
// pangolin document
    app.get("/mongooses/:id/destroy", function(req, res) {

        showpangolins.deletePangolin(req, res);

    });

}