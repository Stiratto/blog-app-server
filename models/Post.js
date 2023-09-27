const mongoose = require('mongoose')
const {Schema, model} = mongoose

const PostSchema = new Schema({
    title: String,
    summary: String,
    content: String,
    // Imagen
    cover: String,  
    author:{type: Schema.Types.ObjectId, ref:'User'}
}, {
    // Extra columns UpdatedAt y  CreatedAt  
    timestamps: true,
})

const PostModel = model('Post', PostSchema)

module.exports = PostModel