import validUrl from 'valid-url';
import asyncHandler from "express-async-handler";
import shortid from 'shortid';
import Url from '../model/urlmodel.js';

const urlcontroller = asyncHandler(async (req, res) => {
    const { longurl } = req.body;
    const baseurl = process.env.BASE_URL;

    if (!validUrl.isUri(baseurl)) {
        res.status(401);
        res.json('Invalid Base URL');
    }

    const urlcode = shortid.generate();

    if (validUrl.isUri(longurl)) {
        try {
            let url = await Url.findOne({ longurl });

            if (url) {
                res.json(url);
            } else {
                const shorturl = baseurl + '/' + urlcode;
                url = new Url({
                    longurl,
                    shorturl,
                    urlcode,
                    date: new Date()
                });

                await url.save();
                res.json(url);
            }
        } catch (error) {
            console.error(error);
            res.status(500);
            res.json('Server Error');
        }
    } else {
        res.status(401);
        res.json('Invalid Long URL');
    }
});

export default urlcontroller;