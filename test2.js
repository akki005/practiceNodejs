let array1 = [{a:1}, {b:2}]
let array2 = [{c:1}, {d:3}];
let array3=[];
//array3 = [{a:1, c:1}, {b:2, d:3}];


for(let i=0;i<array1.length;i++){
    //array3[i]={array1[i],array2[i]}
    let obj=Object.assign(array1[i],array2[i]);
    array3.push(obj);
}

console.log(array3);