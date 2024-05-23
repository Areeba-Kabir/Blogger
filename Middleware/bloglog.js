const fs = require('fs');

const logfile = (filename) => {
    return (req, res, next) => {
        fs.appendFile(
            filename,
            `\n${Date.now()} ip:${req.ip} method:${req.method} path:${req.path}\n`,
            (err, data) => {
                next();
            }
        );
    }
}

module.exports = logfile;