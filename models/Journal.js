const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const author = require("./Author");

const journalSchema = new Schema(
    {
        title: String,
        content: String,
        author: { type: Schema.Types.ObjectId, ref: "Author" }
    },
    { timestamps: true }
);

module.exports = Journal = mongoose.model("Journal", journalSchema);
