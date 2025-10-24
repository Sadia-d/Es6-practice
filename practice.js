/// problem 1 : write an arrow function that will take 3 perameters , will multiply the perameters and return result.

const multiply = (num1 ,num2 , num3)=>{
     return num1 * num2 * num3
}
// console.log(multiply(2,3,4));

/// problem 2 : write the the sentence in three lines and print the result . I am web developer . I love code . I love to eat biriany.

const sentence = `I am web developer. 
I love code. 
I love to eat biriany.`

// console.log(sentence);


// problem 3: default perameter

const add = (num1 ,num2=5)=>{
     return num1 + num2
}

// console.log(add(4));


// problem -4 :



const friendsArr = array =>{
     let newArray = [];
     for(let arr of array){
        let length = arr.length;
          if(length % 2 === 0){
               newArray.push(arr)
          }
      
     }
     // return newArray
}

// console.log(friendsArr(['Baishakhi','Sumaiya','Dipa','Pinky','Ayesha']))

// problem - 5 ;

const square = array =>{
     let sum = 0;
     for(let arr of array){
          let squareNum = arr * arr;
          sum += squareNum
     }
     let avarage = sum / array.length;
     return avarage
}

// console.log(square([1,2,3,4]));


// problem 6 : 

const getMax = (arr1 , arr2)=>{
     let marge = [...arr1 ,...arr2];
     let max = Math.max(...marge);
     return max
     
}
console.log(getMax([1,2,3],[4,7,2]))