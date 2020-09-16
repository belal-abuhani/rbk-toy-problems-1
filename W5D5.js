/*
Using filter to write the following function:
-Write a function called evenMult that takes an array of numbers as a parameter, 
and returns an array of only the even numbers in the parameter that are also multiple of 2
evenMult([2,3,1,4,10,0,44]) ====> [2,10,44]
*/

function each(coll,func){
    if(Array.isArray(coll)){
      for(let i =0 ; i<coll.length;i++){
      func(coll[i],i)
    }
  }
      else {
      for (var key in coll) {
        f(coll[key], key);
      }
    }
  }
  function filter(coll,predicate){
    var acc={};
    if(Array.isArray(coll)){
      acc =[]
      each(coll,function(value,i){
        if(predicate(value,i))
        acc.push(value)
      })
    }
        else {
      each(array,function(value,i){
      if(predicate(value,i)){
        acc[i]=value
      }
    })
    }
    return acc
  }
  
  
  function map(coll, f) {
      var acc = Array.isArray(coll) ?  [] : {};
          each(coll,function(element,key){
              acc[key] = f(element,key)
          })
        
       return acc;
  }
  
  
    function evenMult(arrayofnumber){
      arrayEven= filter(arrayofnumber,function(num,i){
        return num%2===0
      })
      return map(arrayEven,function(num,i){
      return num *=2
      })
    }
    evenMult([2,3,1,4,10,0,44])

  

/*
Using filter, write a function called endsWithChar that takes two parameters: an array of strings, and a character (e.g. "a"), 
and returns an array of only the strings that end with that character:
var words=”we just love RBK world"
endsWithChar(words, “e"); // => [”we”,”love"]
*/

function endsWithChar(words,char){
    arrayOfString = words.split(" ")
    return filter(arrayOfString,function(str,i){
      return str[str.length -1] === char
    })
    }
    endsWithChar("we just love RBK world", "e")