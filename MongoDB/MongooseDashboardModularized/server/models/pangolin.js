// Require mongoose
var mongoose = require("mongoose");

// Create new schemas for
// CRUD pangolins into/from database
var PangolinSchema = new mongoose.Schema({
    name: String,
    updated_at: {type: Date, default: Date.now}
});

// Schema for adding pangolins into database
var AddPangolinSchema = new mongoose.Schema({
    name: String,
    updated_at: {type: Date, default: Date.now}
});

// Schema for updating a single pangolin
var UpdatePangolinSchema = new mongoose.Schema({
    name: String,
    updated_at: {type: Date, default: Date.now}
});

// Connect my collection and model schemas
mongoose.model("Pangolin", PangolinSchema);
mongoose.model("AddPangolin", AddPangolinSchema);
mongoose.model("UpdatePangolin", UpdatePangolinSchema);