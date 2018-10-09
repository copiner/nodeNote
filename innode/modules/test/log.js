module.exports.log = function (str) {
    console.log(str);
}

module.exports.test = function (str) {
    console.log(str);
}

module.exports = {
    logs : function(str){
      console.log(str);
    },
    tests : function(str){
      console.log(str);
    }
}
