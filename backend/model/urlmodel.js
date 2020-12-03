import mongoose from 'mongoose';

const Urlschema = new mongoose.Schema({
    urlcode: String,
    longurl: String,
    shorturl: String,
    date: {
        type: String,
        default: Date.now()
    }
});

const Url = mongoose.model('Url', Urlschema);

export default Url;