//Write a function called “addFive”.
//Given a number, “addFive” returns 5 added to that number.
function addFive(num) { 
    return 5+num
}
var res = addFive(5)
var res1 = addFive(0)
var res2 = addFive(-5)
console.log(res)
console.log(res1)
console.log(res2)


//Write a function called “getOpposite”.
//Given a number, return its opposite
function getOpposite(num) {
return (-num)
}
var result = getOpposite(5)
var result1 = getOpposite(0)
var result2 = getOpposite(-5)
var result3 = getOpposite("5a")
var result4 = getOpposite(5.5)
console.log(result)
console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)


//Fill in your code that takes an number minutes and converts it to seconds.
function toSeconds(min) {
    return min*60
}
var secs = toSeconds(5)
var secs1 = toSeconds(3)
var secs2 = toSeconds(2)
console.log(secs)
console.log(secs1)
console.log(secs2)


//Create a function that takes a string and returns it as an integer.
function toInteger(mystr) {
    return Number(mystr)
}
var myint = toInteger("6")
var myint1 = toInteger("1000")
var myint2 = toInteger("12")
console.log(myint)
console.log(myint1)
console.log(myint2)


//Create a function that takes a number as an argument, increments the number by +1 and returns the result.
function nextNumber(myint) {
    return myint+1
}
var myNextint = nextNumber(0)
var myNextint1 = nextNumber(9)
var myNextint2 = nextNumber(-3)
console.log(myNextint)
console.log(myNextint1)
console.log(myNextint2)


//Create a function that takes an array and returns the first element.
function getFirstElement(arr) {
    return arr[0]// can use .shift(0)
}
var data = getFirstElement([1,2,3])
var data1 = getFirstElement([80,5,100])
var data2 = getFirstElement([-500,0,50])
console.log(data)
console.log(data1)
console.log(data2)


//Write a function that converts hours into seconds
function hourToSeconds(arr) {
    return arr * 3600
}
var dataa = hourToSeconds(2)
var dataa1 = hourToSeconds(10)
var dataa2 = hourToSeconds(24)
console.log(dataa)
console.log(dataa1)
console.log(dataa2)


//Create a function that takes height and width and finds the perimeter of a rectangle.
function findPerimeter(num1,num2) {
    return 2* (num1+num2)
}
var peri = findPerimeter(6,7)
var peri1 = findPerimeter(20,10)
var peri2 = findPerimeter(2,9)
console.log(peri)
console.log(peri1)
console.log(peri2)


//Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function lessThan100(num1,num2) {
    if((num1+num2) < 100){
        return true
    }
    else{
        return false
    }
}
var resu = lessThan100(22,15)
var resu1 = lessThan100(83,34)
console.log(resu)
console.log(resu1)


// remainder of a division operation.
function remainder(num1,num2) {
    return num1%num2
}
var ress = remainder(1,3)
var ress1 = remainder(3,4)
var ress2 = remainder(-9,45)
var ress3 = remainder(5,5)
console.log(ress)
console.log(ress1)
console.log(ress2)
console.log(ress3)


//the total number of legs of all the animals.
function CountAnimals(tur,horse,pigs) {
    return (tur*2)+(horse*4)+(pigs*4)
}
var legs = CountAnimals(2,3,5)
var legs1 = CountAnimals(1,2,3)
var legs2 = CountAnimals(5,2,8)
console.log(legs)
console.log(legs1)
console.log(legs2)


//Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
function frames(num1,num2) {
    return (num1*num2)*60
}
var fps = frames(1,1)
var fps1 = frames(10,1)
var fps2 = frames(10,25)
console.log(fps)
console.log(fps1)
console.log(fps2)


//Check if an Integer is Divisible By Five
function divisibleByFive(num1) {
    if(num1%5 == 0)
    {
        return true
    }
    else{
        return false
    }
}
var divisible = divisibleByFive(5)
var divisible1 = divisibleByFive(-55)
var divisible2 = divisibleByFive(37)
console.log(divisible)
console.log(divisible1)
console.log(divisible2)


//Write a function called “isEven”.
function isEven(num){
    if(num%2 == 0){
        return true
    }else{
        return false
    }
    }
   var even = isEven(12)
   var even1 = isEven(0)
   var even2 = isEven(11)
   var even3= isEven("11h")
   console.log(even) 
   console.log(even1)
   console.log(even2)
   console.log(even3)


//Write a function called “areBothOdd”.
function areBothOdd(num1, num2){
   if(num1%2 !==0 && num2%2 !== 0){
       return true
    }
   else{
       return false
   }
}
var bothOdd = areBothOdd(1,3)
var bothOdd1 = areBothOdd(1,4)
var bothOdd2 = areBothOdd(2,3)
var bothOdd3 = areBothOdd(0,0)
console.log(bothOdd)
console.log(bothOdd1)
console.log(bothOdd2)
console.log(bothOdd3)


//Write a function called “getFullName”.
function getFullName(firstName, lastName){
    return firstName+" "+lastName
   }
   var fullName=getFullName("GUVI","GEEK")
   var fullName1=getFullName("GUVI","")
   var fullName2=getFullName("","GEEK")
   var fullName3=getFullName("","")
   console.log(fullName)
   console.log(fullName1.toString())
   console.log(fullName2.toString())
   console.log(fullName3.toString())


//ERROR//Write a function called “getLengthOfWord”.
function getLengthOfWord(word1){
    return word1.length
   }
   var lengthOfWord= getLengthOfWord("GUVI")
   var lengthOfWord1= getLengthOfWord("")
//    var lengthOfWord2= getLengthOfWord( )
   var lengthOfWord3= getLengthOfWord(9)
   console.log(lengthOfWord)
   console.log(lengthOfWord1)
//    console.log(lengthOfWord2)
   console.log(lengthOfWord3)


//Write a function called “isSameLength”.
function isSameLength(word1, word2){
    if(word1.length == word2.length){
        return true
    }else{
        return false
    }
   }
   var sameLength=isSameLength("GUVI","GEEK")
   var sameLength1=isSameLength("GUVI","GEEEK")
   console.log(sameLength)
   console.log(sameLength1)


//Create a function to calculate the distance between two points defined by their x, y coordinates
function getDistance(x1, y1, x2, y2)
{
return Math.sqrt(((x2-x1)**2) + ((y2-y1)**2))   
}
var distance=getDistance(100, 100, 400, 300)
console.log(distance)


//Write a function called “getNthElement”.
function getNthElement(array,n){
    return array[n]
  }
  var nthElement=  getNthElement([1,3,5],1)
     console.log(nthElement)


//Write a function called “getLastElement”.
function getLastElement(array){
  return array[array.length-1]
 }
 var lElement=getLastElement([1, 2, 3, 4])
 console.log(lElement)


//Write a function called “getProperty”.
var obj = {
    mykey: "value"
   };
   function getProperty(obj, key){
    return obj.hasOwnProperty(key) ?obj[key] : undefined; 
  }
  
   console.log(getProperty(obj,'mykey'));
  console.log(getProperty(obj,'dummykey'));


//Write a function called “addProperty”.
var obje = {
  mykey: "value"
 };
 function addProperty(obj, key) {
    obj[key] = true;
    return obj;
 }
 console.log(addProperty(obje,'mykey'))

//Write a function called “removeProperty”.
var obj1= {
      mykey: "value"
     };
function removeProperty(obj1, key){
    if(key in obj1){
          delete obj1[key];
          return key
        }
    }
        console.log(removeProperty(obj1, "name"))

