const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const author = require("./Author");

const journalSchema = new Schema(
    {
        title: { type: String, required: true },
        content: { type: String, required: true },
        author: { type: Schema.Types.ObjectId, ref: "Author" }
    },
    { timestamps: true }
);

module.exports = Journal = mongoose.model("Journal", journalSchema);
