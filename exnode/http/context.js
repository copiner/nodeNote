
//上下文 this
// var pet = {
//   words: '...',
//   speak: function(){
//     console.log(this.words);
//     console.log(this === pet);
//   }
// }
// pet.speak();


// function pet(words) {
//   this.words = words;
//
//   console.log(this.words);
//   console.log(this === global);
//   console.log(this);
// }
// pet('...');


//this
function Pet(words) {
  this.words = words;
  this.speak = function(){
    console.log(this.words);
    console.log(this);
  }
}

var cat = new Pet('Miao');
cat.speak();

//可以通过call(), apply()改变上下文
