function foo(){
	var bar;
	quux = 2;
	function zip(){
		var quux;
		bar = true;
	}
	return zip;
}