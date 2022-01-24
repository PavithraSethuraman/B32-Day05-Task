// IIFE Rotate an array by k times
(() =>{
    const rotateArray = function(num, k) {
        num=[1,2,3,4,5]
         k=3
        for (let i = 0; i < k; i++) {
            num.unshift(num.pop());
        }
      
        return num;
      }
      console.log(rotateArray())
    })()
