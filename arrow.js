// Do the below programs in arrow functions
 //Print odd numbers in an array
 const odd1= () =>{
         let a=[1,2,3,4]
         for(let i=0;i<a.length;i++)
         {
             if(a[i]%2 != 0)
             {
                 console.log(a[i])
            }
         }
     }
     odd1()

    
// Convert all the strings to title caps in a string array
    const string11= () => {
        function toTitleCase(str) {
            str = str.toLowerCase().split(' ');
            for (var i = 0; i < str.length; i++) {
              str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
            }
            return str.join(' ');
          }
          console.log(toTitleCase("WELCOME TO JAVASCRIPT"));
    }
    string11()


// Sum of all numbers in an array
            const sumNum2= () => {
                    let a1=[1,2,3,4]
                    let sum=0
                    for(let i=0;i<a1.length;i++)
                    {
                        sum += + a1[i]
                    }
                    console.log(sum)
                }
                sumNum2()


//Return all the prime numbers in an array
const p1= () => {
        var arr=[1,2,3,4,5,6,7];
        numArray = arr.filter((number) => {
            for (var i = 2; i <= Math.sqrt(number); i++) {
              if (number % i === 0) return false;
            }
            return true;
        })
        console.log(numArray)
        }
        p1()


// Return all the palindromes in an array
            const data33= () => {
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
    data33()
    
            