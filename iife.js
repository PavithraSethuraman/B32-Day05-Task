//IIFE to find odd numbers
(() => {
    let a=[1,2,3,4]
    for(let i=0;i<a.length;i++)
    {
        if(a[i]%2 != 0)
        {
            console.log(a[i])
        }
    }
})()
            