var fs = require('fs');
var dir;
var fileList=[];
var fileLoc=[];
//If argument is missing, use current directory
function getFiles(dir,callback){
    fileList=[];
    /*
if (process.argv.length <= 2) {
    dir = __dirname;
}
else {
    dir = process.argv[2];
}
*/
fs.readdir(dir, function(err, files) {
   if (err) {
	   console.log("Error reading " + dir);
	   process.exit(1);
   }
   //console.log("Listing files in Directory " + dir);
   fileList=[];
   fileLoc=[];
   files.forEach(function(f) {
      //console.log(f);
      fileList.push(f);
      fileLoc.push(dir+"/"+f);
    });
    callback();
});
    
}