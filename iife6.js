//IIFE Return median of two sorted arrays of same size
(()=>{
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
})()
