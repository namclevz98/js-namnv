// basic callback
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

// multiple callback
function1 = (callback1, callback2, callback3) => {
    setTimeout(() => {
      console.log("function 1 timed out!");
      callback1(callback2, callback3);
    }, 1500);
  }
  
  function2 = (callback1, callback2) => {
    setTimeout(() => {
      console.log("function 2 timed out!");
      callback1(callback2);
    }, 1500);
  }
  
  function3 = (callback1) => {
    setTimeout(() => {
      console.log("function 3 timed out!")
      callback1()
    }, 1500);
  }
  
  function4 = () => {
    setTimeout(() => {
      console.log("function 4 timed out!")
    }, 1500);
  }
  
  function1(function2, function3, function4);