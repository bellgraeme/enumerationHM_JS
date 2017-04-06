var arrayTasks = {

	concat: function (arr1, arr2) {
		var result = new Array;
		 result = arr1
		 for(elem of arr2){
		 	result.push(elem)
		 }
		return result;
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd)
		return arr
		
	},

	square: function (arr) {
		var result  = new Array;
		arr.forEach( function(elem){
			result.push(elem * elem)})
		return result
	},

	sum: function (arr) {
		var result  = 0;
		arr.forEach( function(elem){
			result+= elem})
		return result
	},

	findDuplicates: function (arr) {
		arr.sort()
		var results = [];
		for (var i = 0; i < arr.length - 1; i++) {
		    if (arr[i + 1] == arr[i]) {
		        results.push(arr[i]);
		    }
		}
		for(var i = 0; i < results.length; i++){
			if (results[i + 1] == results[i]){
				results.splice(i+1)
			}
		} 
		return results
	},

	removeAndClone: function (arr, valueToRemove) {
		var results = new Array
		for(var i = 0; i < arr.length; i++){
					if (arr[i] != valueToRemove){
						results.push(arr[i])
				 }
			}
	return results
},

	findIndexesOf: function (arr, itemToFind) {
		var results = new Array
				for(var i = 0; i < arr.length; i++){
							if (arr[i] == itemToFind){
								results.push(i)
						 }
					}
			return results
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		var result = 0;
		for(var i = 0; i < arr.length; i++){
			if(arr[i]%2 === 0){
				result+= arr[i]*arr[i]
			}
		}
		return result
	}

}

module.exports = arrayTasks
