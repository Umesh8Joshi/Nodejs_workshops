// A simple program demonstrating how to use higher order functional programming

function repeat(operation, num){
	while(num > 0){
		return repeat(operation,num-1)
	}
}

module.exports = repeat