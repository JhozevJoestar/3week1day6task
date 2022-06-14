let text = 'lorem ipsum :)';

// тут должен быть код, который сохранит текст из переменной в файл lorem.txt 
import fs from "fs"

fs.writeFile('lorem.txt', text, function (err) {
    if (err) return console.log(err);      
  });