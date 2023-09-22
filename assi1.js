//1.
  const prompt=require("prompt-sync")({sigint:true});


  var input = prompt("Enter list of items:");
  let array = input.split(",");
  console.log(array);
  console.log(array[0]);



  function checkPrime(number) {
    
    if (number <= 1) {
      console.log("false");
    } else {
      for (let i = 2; i < number; i++) {
        if (number % i == 0) {
          
            console.log("false");

        }
      }
      console.log("true");
    }
  }
console.log(checkPrime(array[0]));

//2.

/*var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mf = 1;
var m = 0;
var item;

for (var i = 0; i < arr1.length; i++) {
  for (var j = i; j < arr1.length; j++) {
    if (arr1[i] == arr1[j]) m++;
    if (mf < m) {
      mf = m;
      item = arr1[i];
    }
  }

  m = 0;
}

console.log(item + " ( " + mf + " times ) ");*/

//3.
/*for(var i=0;i<=15;i++){
  if(i % 2 == 0){
    console.log(i + " is even number");
  }
  else{
    console.log(i + " is odd number");
  }

}*/

//4.

/*function sum_sq(array){
  var sum =0;
  i=array.length;
  while(i--)
  sum += Math.pow(array[i] , 2);
return sum;
}
console.log(sum_sq([1 ,2,3,4,5,6]));*/





