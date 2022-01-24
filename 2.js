// where the first element is the count of positives numbers and the second element is sum of negative numbers.
var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
  function countPositivesSumNegatives(arr) {
    if (arr && arr.length) {
        let positiveSum = 0
        let negativeSum = 0
        arr.forEach(num => num > 0 ? positiveSum++ : negativeSum += num)
        return [positiveSum, negativeSum]
    } else {
        return []
    }
}
var ar2 = countPositivesSumNegatives(arr)
console.log(ar2);

//Create a function that receives an array of numbers and returns an array containing only the positive numbers
function getPositives(ar)
{
    return ar.filter(i => i >= 0);
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var array1 = getPositives(ar);
console.log(array1);


//Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).
function powersOfTwo(n){
  var resultss = [];
    for(var i = 0; i <= n; i++){
        resultss.push(Math.pow(2,i));
    }
  return resultss
}
console.log(powersOfTwo(0));
console.log(powersOfTwo(1));
console.log(powersOfTwo(2));


//Find the maximum number in an array of numbers
function findMax(ar)
{
  return Math.max(... ar)
}
var arrr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var maxx = findMax(arrr);
console.log('Max:' , maxx);


//Print the first 100 prime numbers

//Function prints the first nPrimes numbers
function printPrimes(nPrimes)
{
 var n = 0;
 var i = 2;
 
 while(n < nPrimes)
 {
 if (isPrime(i))
 {
 console.log(n, " →" , i);
 n++;
 }
 i++;
 }
}
// Returns true if a number is prime
function isPrime(n) {
    var sqrtn = Math.sqrt(n);

    for (var i = 2; i <= sqrtn; i++)
        if (n % i === 0) return false;
    return true;
    };
printPrimes(100);


//Create a function that will return in an array the first “nPrimes” 
//prime numbers greater than a particular number “startAt”

function getPrimes(nPrimes, startAt)
{
    var arrrr = [];
    var i = startAt;
    while(arrrr.length < nPrimes)
    {
    if (isPrime(i))
        {
            arrrr.push(i);
        }
        i++;
    }
    return arrrr;
}
// Returns true if a number is prime
function isPrime(n)
{
    var sqrtn = Math.sqrt(n);
for (var i = 2; i <= sqrtn; i++)
            if (n % i === 0) return false;
        return true;
    }
    console.log(getPrimes(10, 100));


//Reverse a string
function reverseString(s)
{
    var rev=s.split("").reverse()
    var reverse=rev.join("")
    return reverse
}
var s = reverseString("JavaScript");
console.log(s);


//Create a function that will merge two arrays and return the result as a new array
var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
function mergeArrays(ar1, ar2)
{
 var result = [];
//this will add the first array to the result array
for(let el of ar1)
 {
 result.push(el);
 }
for(els of ar2)
{
    result.push(els)
}
 return result
}
var ars = mergeArrays(ar1, ar2);
console.log(ars);


//Calculate the sum of numbers received in a comma delimited string
function sumCSV(s)
{
        let strArr = s.split(",");
        let sum = strArr.reduce(function(total, num){
          return parseFloat(total) + parseFloat(num);
        });
    
        return sum;
    }
    console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));
