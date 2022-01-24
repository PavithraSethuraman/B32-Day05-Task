//anonymous function to find odd numbers
const oddd= function() {
    let a=[1,2,3,4]
    for(let i=0;i<a.length;i++)
    {
        if(a[i]%2 != 0)
        {
            console.log(a[i])
        }
    }
}
oddd()


//anonymous function to strings to title caps in a string array
const stringg= function() {
    function toTitleCase(str) {
        str = str.toLowerCase().split(' ');
        for (var i = 0; i < str.length; i++) {
          str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
        return str.join(' ');
      }
      console.log(toTitleCase("WELCOME TO JAVASCRIPT"));
}
stringg()


// //anonymous function to Sum of all numbers in an array
const sumNum1= function() {
    let a1=[1,2,3,4]
    let sum=0
    for(let i=0;i<a1.length;i++)
    {
        sum += + a1[i]
    }
    console.log(sum)
}
sumNum1()


//anonymous function to Return all the prime numbers in an array
const p2=function()  {
    var arr=[1,2,3,4,5,6,7];
    numArray = arr.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) return false;
        }
        return true;
    })
    console.log(numArray)
    }
    p2()


    //anonymous function Return all the palindromes in an array
    const data22= function() {
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
    }
    data22()


    //anonymous fuction Return median of two sorted arrays of same size
    const medianArray= function() {
        let array1 = [1,2,9];
        let array2 = [3,4,7];
        let n1 = array1.length;
        let n=n1;
        function median(array1,array2,n)
        {
        let i = 0;
        let j = 0;
        let m1 = -1, m2 = -1;
        for ( let a = 0; a <= n; a++)
        {
        if (i == n)
        {
        m1 = m2;
        m2 = array2[0];
        break;
        }
        else if (j == n)
        {
        m1 = m2;
        m2 = array1[0];
        break;
        }
        if (array1[i] <= array2[j])
        {
        m1 = m2;
        m2 = array1[i];
        i++;
        }
        else
        {
        m1 = m2;
        m2 = array2[j];
        j++;
        }
        }
        console.log((m1 + m2)/2)
        }
        median(array1,array2,n1)
    }
    medianArray()


// //anonymous function Remove duplicates from an array
    const dupli= function() {
        let fruit = ["Apple", "Orange","Banana","Apple","Orange","Banana","PineApple","Papaya",];
          let sortFruit = [new Set(fruit)];
          console.log(sortFruit);
        }
        dupli()


    // //anonymous function Rotate an array by k times
        const Rotate=function() {
            const rotateArray = function(num, k) {
                num=[1,2,3,4,5]
                 k=3
                for (let i = 0; i < k; i++) {
                    num.unshift(num.pop());
                }
              
                return num;
              }
              console.log(rotateArray())
            }
            Rotate()