const mongoose = require('mongoose')
const Schema = mongoose.Schema
const dataMovies = new Schema({
    title: String,
    movieInformation: {
        title: String,
        poster: String,
        synopsis: String,
        dateRelease:String,
        language:String,
        country: Array,
        directors:Array,
        stars:  Array,
        imdbRate:String,
        year: String,
        duration:String,
        genre: Array
    },
    videoEmbed: {type: Array, default: []},
    linkDownload: {type: Array, default: []}
},{collection: 'all-movies-data'})
module.exports = mongoose.model('all-movies-data', dataMovies)