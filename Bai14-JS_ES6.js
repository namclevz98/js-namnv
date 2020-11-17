// let: chỉ có tác dụng trong phạm vi block, function - biến địa phương

var nam = 23;
{
    let nam = 12;
    nam = 45;
    console.log(nam);
}
console.log(nam);

//const tương tự let - gán giá trị khi khai báo
{
    const nam = 45;    
    // nam = 23; // lỗi do không thể thay đổi giá trị const trong cùng 1 phạm vi/ block
    console.log(nam);
}
console.log(nam);
const no2 = {
    name: "Rafael Nadal",
    age: 33
} 
// no2 = { age:12 };                             // lỗi do không thể khai báo lại giá trị object
no2.age = 34;                                    // có thể khai báo lại giá trị thuộc tính trong const object
console.log(no2.name + ", " + no2.age);

// Symbol - tạo 1 thuộc tính duy nhất (đỉnh danh ẩn)

let id = Symbol["id"];
no2.id = 2;
console.log("Word Number " + no2.id);


const players = ["Djokovic", "Nadal", "Federer"];
players[2] = "Thiem";                            // có thể khai báo lại giá trị phần tử trong const array
// players = ["Djoker", "Nadal", "Federer"];     // lỗi do không thể khai báo lại giá trị array
console.log(players);
players.forEach(rankFunction);
function rankFunction(value,index){
    console.log(index + 1 + " " + value + "\n");
};

// arrow function
// arrow function ko chứa "this" - windows object
const vnam = (name) => { return "Hello " + name };
console.log(vnam("Van Nam")); 
const mul = (x, y = 10 ) => { return x * y };      
console.log(mul(12,34));

//  function rest paraments
function sum(...args) {
    let sum = 0;
    for (let arg of args) sum+= arg;
    return sum;
}
var x = sum(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(x);



// class
class Player {
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}
let player1 = new Player("Djokovic", 1987);
let player2 = new Player("Nadal", 1986);
console.log(player1.name + ", " + player1.age());

let myPromise = new Promise(function(myResolve,myReject) {
    setTimeout(function() {
        myResolve("Hello World!");        
    }, 3000);
});
myPromise.then(function(value) {
    document.getElementById("demo").innerHTML = value;
})


