const fs = require('fs').promises;

fs.appendFile('./file.txt', 'HELLO WORLD').then(() => {
    console.log('done')
}).catch(e => {
    console.log(e);
})
//
// fs.readFile('./file.txt').then(data => {
//     console.log(data);
// })
//
// fs.unlink('./file.txt').then(value => {
//     console.log(value);
// })

// fs.mkdir('./home_video').catch(e => {
//     console.log(e);
// })

fs.readdir('./home_video').then(files => {
    console.log('_________')
    console.log(files);

    for (const files of files) {

    }

});