// File Syatem is Build in package in Nodejs
//requrie ---> used to import the Build in Package in to the file.
const fs=require('fs');

// //Read file in Asynchronous 

// //data read in buffer object format
// fs.readFile('./file/hii.txt',(err,data)=>{
//     if(err){
//         console.log('error')
//     }else{
//         console.log(data);
//     }
// })

// // data read in string format
// //-------2 ways to read a data in string format------

// //1st way-------->use toString()
// fs.readFile('./file/hii.txt',(err,data)=>{
//     if (err){
//         console.log('error')
//     }
//     console.log(data.toString());
// })


//2nd way ------->use encoding character(utf-8)
fs.readFile('./file/hii.txt','utf-8',(err,data)=>{
    if (err){
        console.log('error')
    }
    console.log(data.toString());
})

// readfile------>Synchronous


try {
    // Read the file synchronously
    const data = fs.readFileSync('./file/hii.txt', 'utf-8');
    console.log(data);
    console.log("read completed");
} catch (err) {
    console.error('error:', err);
}

// ------write file-----
// synchronous functions like fs.readFileSync() do not take a callback function as an argument.
let data1="File system module"
fs.writeFile('book.txt',data1,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("written completed")
        console.log(fs.readFile("book.txt","utf-8"))
    }
})

// writeFileSync()


// const data2 = "This is the content that will be written to the file.";

// try {
//     fs.writeFileSync('./file/book.txt', data2,{ encoding: 'utf-8' });
//     console.log("Data has been written to output.txt");
// } catch (err) {
//     console.log(err);
// }



// -----appendFile()-----

const dataToAppend = "This is the content that will be appended to the file.";

fs.appendFile('hii.txt', dataToAppend, 'utf-8', (err) => {
    if (err) {
        console.error('Error appending to file:', err);
    } else {
        console.log('Data has been appended to output.txt');
    }
});

