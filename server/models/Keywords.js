const { Schema, model } = require('mongoose');

const keywordSchema = new Schema({
    keyword: {
        type: String,
        required: true,
    },
    section: [
        {
            type: Schema.Types.ObjectId,
            ref: 'LawSection',
        }
    ]
});

const Keyword = model('Keyword', keywordSchema);

module.exports = Keyword;