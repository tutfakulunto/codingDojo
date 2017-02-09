// Require mongoose
var mongoose = require("mongoose");

// Load models by name
var Pangolin = mongoose.model("Pangolin");
var AddPangolin = mongoose.model("AddPangolin");
var UpdatePangolin = mongoose.model("UpdatePangolin");

// Create a controller object to use for export
var showpangolinsController = {};

// Call the "show" method for the controller object
showpangolinsController.show = function(req, res) {

    Pangolin.find({}).exec(function (err, pangolins) {
        if (err) {
            console.log("Error:", err);
        }
        else {
            res.render("../client/views/index", {pangolins: pangolins});
        }
    });
};

// Go to form to add a new pangolin to
// the MongoDB "pangolins" collection
showpangolinsController.newpangolinform = function(req, res) {
    res.render("../client/views/new");
};

// Add a new pangolin into the MongoDB
// the MongoDB "pangolins" collection
showpangolinsController.addpangolin = function(req, res) {
    // Create a new "pangolin" object
    // to save
    var pangolin = new Pangolin(req.body);

    // Save a single pangolin into MongoDB
    pangolin.save(function(err) {
        // Show form data posted
        //console.log("POST DATA", req.body);

        if(err) {
            console.log("Pangolin not added to 'pangolins' collection.");

            res.render("/mongooses/new");
        }
        else {
            console.log("Successfully updated an pangolin.");
            res.redirect("/");
        }
    });
};

// Show a single pangolin
showpangolinsController.showSinglePangolin = function(req, res) {

    // Show one "pangolin" document based
    // on said document's "_id"
    Pangolin.findOne({_id: req.params.id}, function(err, pangolin) {

        res.render("../client/views/pangolin", {pangolin: pangolin});
    });

};

// Update single pangolin document
showpangolinsController.updateSinglePangolin = function(req, res) {

    Pangolin.findOne({_id: req.params.id}, function(err, pangolin) {

        console.log("Edit an pangolin");

        res.render("../client/views/editpangolin", {pangolin: pangolin});
    });
};

// Update a single pangolin name controller method
showpangolinsController.executeUpdatePangolin = function(req, res) {

    // Update a single pangolin
    Pangolin.update({_id: req.params.id}, {$set: {name: req.body.name} }, function(err) {

        // If error exists display it
        if(err) {
            console.log("Update Pangolin Error:", err);
        }
        // Else update a single pangolin name
        else {
            console.log("New Pangolin Name:", req.body.name);
            res.redirect("/");
        }

    });

};

// Delete a single pangolin document method
showpangolinsController.deletePangolin = function(req, res) {

    // Delete a single pangolin document
    // and redirect to the home page
    Pangolin.remove({_id: req.params.id}, function(err) {

        // If error exists display it
        if(err) {
            console.log("Delete Pangolin Error", err);
        }
        else {
            console.log("Pangolin deleted!");
            res.redirect("/");
        }

    });
};

module.exports = showpangolinsController;