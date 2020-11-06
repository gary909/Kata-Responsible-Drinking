/*
Kata: Responsible Drinking

https://www.codewars.com/kata/5aee86c5783bb432cd000018/train/javascript

assert.strictEqual(hydrate("2 glasses of wine and 1 shot"), "3 glasses of water");
*/

function hydrate(s) {
    var result = 0;
    for (var i = 0; i < s.length; i++){
      if(s[i] >= '0' && s[i] <= '9'){
        result += Number(s[i]) //change string to num then add
      }
    } if (result == 1) {
      return result + " glass of water";
    } else {
      return result + " glasses of water";
    }
  }
  
  console.log(hydrate("2 glasses of wine and 1 shot"))

  //Test loop
  // var result = '';
  // function countSheep(limit){
  //     for (var i = 1; i < limit; i +=1){
  //         console.log(i + " sheep")
  //     }
  // }
  
  // countSheep(10);