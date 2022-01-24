//IIFE Return all the palindromes in an array
(()=>{
    const arr5 = ['java', 1001, 2020, 'mom'];
    const Palindrome = (a) => {
       const str = String(a);
       let i = 0;
       let j = str.length - 1;
       while(i < j) {
          if(str[i] === str[j]) {
             i++;
             j--;
          } else {
             return false;
          }
       }
       return true;
    };
    const printPal = (arr5) => {
       return arr5.filter(a => Palindrome(a));
    };
    console.log(printPal(arr5));
})()