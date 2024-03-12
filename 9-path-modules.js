const path=require('path');
console.log(path.sep);

const a=path.join("/contents/","subfolder","ss.text");
console.log(a);

const b=path.basename(a);
console.log(b);

const c=path.resolve(__dirname,"contents","subfolder","ss.text");
console.log(c);