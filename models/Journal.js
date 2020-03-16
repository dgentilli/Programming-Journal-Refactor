const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//const User = require("./User");

const journalSchema = new Schema(
    {
        title: String,
        content: String,
        //user: { type: Schema.Types.ObjectId, ref: "User" }
        user: String
    },
    { timestamps: true }
);

module.exports = Journal = mongoose.model("Journal", journalSchema);
