// a recursion using reduce from array

function reduce(arr,fn,initial){
	return (function reduceOnce(idx,prev){
		if(idx >= arr.length){
			return prev
		}
		return reduceOnce(idx+1, fn(prev,arr[idx],idx,arr))
	}(0, initial))
}

module.exports = reduce;