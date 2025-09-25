const fs = require('fs');
const path = require('path');

function logger(req, res, next){

    const now = new Date().toISOString();
    const log = `${now} - ${req.method} -a call was made `
    const filePath = path.join(__dirname, 'log.txt');
    fs.appendFile('log.txt', log, (err) => {
        if (err) console.error(err);
    });
    next();
}
module.exports = logger;