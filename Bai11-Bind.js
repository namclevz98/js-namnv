console.log("/nBind: /n");
var playerInfo = {
    name: "Djokovic",
    age: 32,
    atpPoints: 11830,
    showRanking : function (callbackFunction){
        callbackFunction();
    },
    render: function(){
        // var _self = this;
        this.showRanking(function(){
            console.log(this);
            console.log(this.name);
            console.log(this.age);
            console.log(this.atpPoints);
        }.bind(this)); // gán dữ liệu vào this
    }
};
playerInfo.render();

var blog = {
    showWebsite : function (callbackFunction){
        callbackFunction();
    },
    render : function(){
        this.showWebsite(function(args){
           console.log(this); // This chính là mảng truyền vào
        }.bind(["digidinos.com"]));
    }
};
 
blog.render();