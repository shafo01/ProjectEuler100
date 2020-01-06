/**
 * Project Euler: Problem 3: Largest prime factor
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * 
 *  What is the largest prime factor of the given number?
 * Tested on https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-3-largest-prime-factor
 */

function largestPrimeFactor(number) {

  //getting rid of edge cases
  if(number === 2){
    return 2;
  }

  if(number <= 1){
    return false;
  }

//if composite number
  if(number % 2 === 0){
    return false;
  }

 let i = 3;
 let largestPrimeFactor = 3;
 while(i<=number){

   if(number%i != 0){
     //not a factor so return
     i++;
     continue;
   }
  //check if i is a prime number
  let j = 2;
  let iIsPrime = true;
  while(j<i){
    if(i % j === 0){
      // it is not a prime number so break
      iIsPrime = false;
      break;
    }
    j++;
  }

  if(iIsPrime){
      largestPrimeFactor = i;
    }
   i++;
 }
  return largestPrimeFactor;
}

largestPrimeFactor(13195);
