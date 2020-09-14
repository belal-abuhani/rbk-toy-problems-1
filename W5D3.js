/*
1- Using map, Write a function called uppercaseValues that, given an object as a parameter,
 returns a new object with all of its string values converted to uppercase. 
Also, ensure that you only attempt to convert strings to uppercase.
*/function each(coll, func) {

	if(Array.isArray(coll)){
		for(var i=0 ; i<coll.length;i++){
		  func(coll[i],i)
			  }
		}

  else {
	  for (var key in coll) {
		  func(coll[key],key)
	  }
  }


}
function map(coll, f) {
	var acc = Array.isArray(coll) ?  [] : {};
		each(coll,function(element,key){
			acc[key] = f(element,key)
		})
	  
	 return acc;
}



function uppercaseValuesa(obj){
	return map(obj,function(value,key){
		if(typeof(value)=="string"){
			value.toUpperCase()
		}
	})
}


/*
2- Using reduce, write a function that sums the squared values of an array of numbers and returns the sum result.
*/
function reduce(array,f,acc){
	  if(acc===undefined){
		  acc=array[0]
		  array=array.slice(1)
	  }
	  each(array,function(item,i){
	      acc=f(acc,item,i)
	  })
	  return acc;
	}

function sum(numbers) {
	return reduce(numbers,function(num,i){
		return sum+= num * num
	},0)

}