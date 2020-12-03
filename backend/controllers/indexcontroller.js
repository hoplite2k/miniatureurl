import Url from '../model/urlmodel.js';
import asyncHandler from "express-async-handler";

const indexcontroller = asyncHandler(async (req, res) => {
    try {
        const url = await Url.findOne({ urlcode: req.params.code });
        if (url) {
            return res.redirect(url.longurl);
        } else {
            res.status(404);
            res.json('URL not found');
        }
    } catch (error) {
        console.log(error);
        res.status(500);
        res.json('Server Error');
    }
});

export default indexcontroller;