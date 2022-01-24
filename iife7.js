//IIFE Remove duplicates from an array
(()=>{
    let fruit = ["Apple", "Orange","Banana","Apple","Orange","Banana","PineApple","Papaya",];
    let sortFruit = [new Set(fruit)];
    console.log(sortFruit)
})()