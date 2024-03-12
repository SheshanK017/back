const {readFile,writeFile}= require('fs');

readFile("./contents/first.txt","utf8",(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
   const first=result;
   readFile("./contents/second.txt","utf8",(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
   const second=result;
   writeFile("./contents/newfile-async",`${first} , ${second}`,(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
   console.log(result);
   })
   })

    
})