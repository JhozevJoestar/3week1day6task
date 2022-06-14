import figlet from "figlet"
import fs from "fs"

fs.readFile('text.txt', function(err, data){
    if (err) throw err;
    figlet(data, function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data.toString())
    });
})