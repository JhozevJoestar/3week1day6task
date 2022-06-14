// тут код, который удалит файл lorem.txt
import fs from "fs"

fs.unlink("lorem.txt", function(err){
    if (err) {
        console.log('Произошла ошибка');
    } else {
        console.log("Файл удалён");
    }
});