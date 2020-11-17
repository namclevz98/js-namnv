// basic try catch
console.log("Xử lý lỗi với Try - Catch:");
var stn = 0;
try{
    if(stn > 0)
        console.log(stn + " la so tu nhien");
    else
        throw e;
}catch(e){
    console.log(stn + " khong phai la so tu nhien");
}

// throw new Error
var tennisPlayer = "Nadal";
try{
    if (tennisPlayer != "Djokovic"){
        throw new Error ( tennisPlayer + ' is not the No.1');
    }
}catch(e){
    console.log(e.message + " Tennis player in the world");
}finally
{ 
}

// throw new Error with function
function PlayerError(){
    this.throwPlayer = function(){
        throw new Error(' is not the best Tennis player')
    };
    return this;
}

try{
    if( tennisPlayer != "Djokovic"){
        var PlayerError =  new PlayerError();
        PlayerError.throwPlayer();
    };
}catch(e){
    console.log(tennisPlayer + e.message);
}