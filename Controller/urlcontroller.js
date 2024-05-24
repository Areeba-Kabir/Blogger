const shortid = require('shortid');
const url = require('../Model/url.js');

const handleUrlShortner = async (req, res) => {
    try {
        const body = req.body;
        if (!body.url) res.status(400).json({ message: 'url is required' });
        const shortID = shortid();
        await url.create({
            shortId: shortID,
            redirectURL: body.url,
            visitHistory:[],
        })
        res.status(200).json({id: shortID})
       
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

// const handlegetURLShortner = async (req, res) => {
//     try {
//         const shortID = req.params.shortId;
//         await url.findOneAndUpdate(
//             {shortID},{$push:{visitHistory:{timestamp: Date.now()}}}
//         )
//     } catch (err) {
        
//     }
// }

module.exports = handleUrlShortner;