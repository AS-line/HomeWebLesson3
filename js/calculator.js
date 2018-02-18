function input(num) {
	var display = document.getElementById('display');
	display_arr = display.value.split('');
	if ((display_arr[display_arr.length - 1] == "+" || display_arr[display_arr.length - 1] == "-" || display_arr[display_arr.length - 1] == "*" || display_arr[display_arr.length - 1] == "/") && (num == "+" || num == "-" || num == "*" || num == "/")){
		null;
	} else {
		if ((num == '/' || num == '*' || num == '-' || num == '+') && display.value == "0"){
			null;
		} else {
			if (display.value == "0"){
				display.value = num;
			} else {
				display.value += num;
			}
		}
	}
}



function equal(){
	var display = document.getElementById('display');
	result = eval(display.value);
	if (result == Infinity){
		display.value = "Error - division by 0.";	
	} else {
    	display.value = result;
	}
}


function clear_display(){
	var display = document.getElementById('display');
	display.value = '0';
}