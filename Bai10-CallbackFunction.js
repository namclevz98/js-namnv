// basic callback
console.log("Callback function:");
var keywords = ["Djokovic", "Nadal", "Federer", "Thiem"];
keywords.forEach(function(eachName, index){
    console.log(index + 1 + ". " + eachName);
});


function createUsername(callback){
    if(typeof callback !== 'function'){
        alert("Bạn phải truyền vào một function");
        return false;
    }
    return callback('namclevz98');
}
var username = createUsername(function (user_name){
    return user_name;
});
console.log("Ten tai khoan: " + username);


// "this" in callback, apply and call
var playerInfo = {
    name: 'Novak Djokovic',
    age: 32,
    setName: function(name){
        this.name = name;
    },
    setAge: function(age){
        this.age = age;
    }
};

function test(callback){
    callback('Rafael Nadal');
}
test(playerInfo.setName);

document.write(playerInfo.name + ", " + playerInfo.age); // không thay đổi do callback tại window object

function changName(callback, callbackObject){
    var name = "Rafael Nadal";
    callback.apply(callbackObject, [name]); // dùng apply với object
};

changName(playerInfo.setName, playerInfo);

function changeAge(callback, callbackObject){
    var age = 33;
    callback.call(callbackObject, [age]); // dùng apply với object
};
changeAge(playerInfo.setAge, playerInfo);

document.write("</br>" + playerInfo.name + ", " + playerInfo.age);

