// File Syatem is Build in package in Nodejs
const fs=require('fs');

fs.readFile('./file/hii.txt','utf-8',(err,data)=>{
    if (err){
        console.log('error')
    }
    console.log(data.toString());
})

try {
    // Read the file synchronously
    const data = fs.readFileSync('./file/hii.txt', 'utf-8');
    console.log(data);
    console.log("read completed");
} catch (err) {
    console.error('error:', err);
}

let data1="File system module"
fs.writeFile('book.txt',data1,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("written completed")
        console.log(fs.readFile("book.txt","utf-8"))
    }
})

const dataToAppend = "This is the content that will be appended to the file.";

fs.appendFile('hii.txt', dataToAppend, 'utf-8', (err) => {
    if (err) {
        console.error('Error appending to file:', err);
    } else {
        console.log('Data has been appended to output.txt');
    }
});

