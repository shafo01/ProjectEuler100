/**
 * Challenge:
 * Project Euler: Problem 2: Even Fibonacci Numbers
 * Each new term in the Fibonacci sequence is generated by 
 * adding 
 * the previous two terms. By starting with 1 and 2, the first 
 * 10 terms will be:
 * 
 * 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 * By considering the terms in the Fibonacci sequence that do 
 * not exceed the nth term, find the sum of the even-valued 
 * terms.
 
 **TODO: Where does not exceed 4,000,000 terms
  */



function fiboEvenSum(n) {

  let sumEvenValueTerms = 0;
  if(n>=2){
    sumEvenValueTerms = 2;
  }
  else{
    return 0;
  }

  let pre = 1;
  let current = 2;

  let i = 2;

  while(i<n){
    let newTerm = pre + current;

    if(newTerm % 2 == 0){
      sumEvenValueTerms += newTerm;
    }
    pre = current;
    current = newTerm;

    i++;
  }
  return sumEvenValueTerms;
}

fiboEvenSum(10);
