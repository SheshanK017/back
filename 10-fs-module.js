const {readFileSync,writeFileSync}=require('fs');

//reading files
const first=readFileSync('./contents/first.txt','utf8');
const second=readFileSync('./contents/second.txt','utf8');
console.log(first,second);

//writing file
writeFileSync("./contents/newfile.txt", "hello world");

//appending existing file
writeFileSync("./contents/newfile.txt","2nd hello",{flag:'a'})