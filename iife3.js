//IIFE function to Sum of all numbers in an array
(() => {
    let a1=[1,2,3,4]
    let sum=0
    for(let i=0;i<a1.length;i++)
    {
        sum += + a1[i]
    }
    console.log(sum)
})()
