console.log("Hello word!");

//var là 1 biến toàn cục không qua tâm block { }
//var có thể khai báo lại đc và lấy lại giá trị cuối cung đươc khai báo


//let nằm trong  block sẽ là biến local
// let nằm ngoài block là biến toàn cục
//let không thể khởi tạo lại giá trị
{
    let a=1;

    var aa=a
}
console.log(aa);

//const là muốn giá trị thay đổi trong suốt trương trình chạy
//const dạng object có thể giá trị bằng 

const objA={}
console.log('object :>> ', objA);
objA["name"] ="nhat truong";
console.log('object :>> ', objA);

// không khái báo biến trong js thì khai "tên = gái trị"
//sẽ trở thành biến toàn cục
{
     x = 1;
}
console.log('x :>> ', x);


// taosn từ
var b;
try {
    b=2/0
} catch (error ) {
    console.log('b :>> ', error);
}

let ac=2**3;
console.log('ac :>> ', ac);


let ab=3%2;
console.log('ab :>> ', ab);
console.log(ab++);

let arr=[1,2,3,4,5];
for (let i = 0; i < arr.length; ++i) {
    console.log(arr[i]);
}


// == so sanh gia tri. === so sanh biến và giá trị


//toán tử && và or 