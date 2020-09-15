function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

/*
1-write the the filter function
*/

function filter(array,predictae) {
  var acc = []
  each(array,function(item,i){
    if(predictae){
      acc.push(item)
    }
  })
  return acc
}

/*
2-write the the new version of reduce function
*/

function reduce(array,f,acc) {
	  if(acc===undefined){
		  acc=array[0]
		  array=array.slice(1)
	  }
	  each(array,function(item,i){
	      acc=f(acc,item,i)
	  })
	  return acc;
	
}
