// "use strict"; - code được xử lý tại "Strict mode" (khai báo tại đầu script hoặc function)
// không thể dùng 1 biến, hàm mà không khai báo -> tránh vô tình tạo ra 1 biến toàn cục ( global variable), ...

"use strict";
/*
x = "Hello"; // lỗi do x chưa được khai báo
không được delete 1 biến/object/function
không được dùng hệ 8 (otal)
không thể đặt thuộc tính read-only (writable:false)
không thể viết get only
các từ khóa eval,this, with, ..


*/


// String.trim(); - Loại khoảng trắng tại 2 bên string 
var str = "   Van Nam yeu Viet Nam    ";
var str1 = str.trim();
console.log(str1 + " (" + str.length +")");
console.log(str1.indexOf("Nam"), str1.lastIndexOf("Nam"), str1.search("Nam"));
console.log(str1.indexOf("Nam", 10), str1.lastIndexOf("Nam", 10)); // String.indexOf("search", startPosition);
console.log(str1.slice(12,16), str1.slice(17)); // String().slice (start,end);
console.log(str1.substring(12,16)); // substring giống slice nhưng không nhận giá trị âm
console.log(str1.substr(17,3)); // String.substr(start, +index);


//Array.forEach(function(value, index, array))
var arr = ["Djokovic", "Nadal", "Federer", "Thiem", "Medvedev"];
console.log("Array là 1 mảng? " + Array.isArray(arr));
console.log("ATP Ranking");
arr.forEach(funcForEach);
function funcForEach(value, index) {
    console.log(index + 1, value);
}

// Array.map(function(value, index, array)) - trả về 1 mảng
var numbers1 = [1, 2, 3, 4, 5];

var mul2 = numbers1.map(funcMultiple2);
function funcMultiple2(value, index, array){
    return value *2;
}
console.log("Nhân mảng với 2: " + mul2);

// Array.filter(function(value, index, array)) - trả về 1 mảng đạt điều kiện
var over2 = numbers1.filter(funcFilter2);
function funcFilter2(value){
    return value > 2;
}
console.log("Mảng với giá trị > 2: " + over2);

 // Array.reduce(function(total, value, index, array)) - trả về 1 giá trị (total: giá trị khởi tạo/vừa được trả về)
var sum = numbers1.reduce(funcSummary);
function funcSummary(total, value){
    return total + value;
}
console.log("Tổng giá trị của mảng: " + sum);
console.log(numbers1.reduceRight(funcSummary)); // tương tự reduce nhưng total bắt đầu từ phải -> trái

// every, some
function funcOver3(value){
    return value > 3;
}
console.log("Tất cả phần tử đều có giá trị > 3: " + numbers1.every(funcOver3)); // Array.every(function(value, index, array)) - true/false - tất cả các phần từ
console.log("Tồn tại phần tử có giá trị > 3: " +numbers1.some(funcOver3)); // Array.some(function(value, index, array)) - true/false 1 trong số các phần từ

console.log("Vị trí của phần tử 'Medvedev': " + arr.indexOf("Medvedev")); // Array.indexOf(item, start) - first position found / Array.lastIndexOf(item, start) - last position found

console.log("Phần tử đầu tiên có giá trị > 3: " + numbers1.find(funcOver3));
console.log("Vị trị Phần tử đầu tiên có giá trị > 3: " + numbers1.findIndex(funcOver3));

// JSON parse, stringify

var djoker = '{"name":"Djokovic", "age":32, "country":"Serbia"}';

var djob = JSON.parse(djoker); //  JSON.parse(string): JSON string -> object
console.log(djob.name + ", " + djob.age);
console.log(JSON.stringify(djob)); // JSON.stringify(object) :object -> JSON string

//getter, setter
var no1 = {
    firstName: "Novak",
    lastName: "Djokovic",
    age: 32,
    get fullName() {
        return this.firstName + " " + this.lastName;
    },
    languague: "Srbja",
    get lang(){
        return this.languague;
    },
    set lang(value){
        this.languague = value.toUpperCase();
    }
}
no1.lang = "Serbia";
console.log(no1.fullName);
console.log("Languague: " + no1.languague);


// Object.defineProperty
Object.defineProperty(no1, "languague", {
    value: "Srbja",
    writable: true, // có thể thay đổi value
    enumerable: true,  // có thể được liệt kê (hiển thị)
    configurable: true // có thể được cấu hình lại
}) // sửa lại thuộc tính trong object
Object.defineProperty(no1, "description", {
    get : function() {
        return this.fullName + " from " + this.languague;
    }
}) // thêm thuộc tính trong object
console.log(no1.languague);
console.log(no1);

console.log(no1.firstName.charAt(0), no1.firstName[0]);