const harParse = require('./harParser.js'); // harParser(INPUTFILE,OUTPUTFILE,MEDIA) -- strings
const https = require('https');
const fs = require('fs');
const rl = require('readline');
var url = require("url");
var path = require("path");
//this takes the hal file, input file and media indicators as input, same as har parser.
//it creates its own output file based on input filename
//then it runs harParse and uses that output file as input to download the files

module.exports = function downLoader(inF,media){
    var outF = inF + '.csv';
    try {
        var count = harParse(inF,outF,media);
        var current = 0;
        if(count != 0){
            var lineReader = rl.createInterface({
                input: fs.createReadStream(outF)
              });
            lineReader.on('line', function (line) {
                //parse out file name to make output filename
                var outFile = getFileName(line); //shold be file.mp4
                var writeStream = fs.createWriteStream(outFile);
                var request = https.get(line, function(response) {
                    response.pipe(writeStream);
                });
                current++;
                console.log(`downloaded: ${current} of ${count}`);
            });
        } else {
            console.log('harParser failed');
            return 0;
        }
    } catch (e) {
        console.log(`broke, error: ${e}`);
        return 0;
    }
    return 1;
}

function getFileName(line){
    var parsed = url.parse(line);
    var lastPart = path.basename(parsed.pathname);
    return lastPart;
}