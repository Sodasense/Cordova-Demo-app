document.getElementById("btn").addEventListener("click",msg);
var cnt=0;
function msg(){
	cnt++;
	if(cnt==1){
		alert("You pressed the button " + cnt + " time!")
	}
	else {
		alert("You pressed the button " + cnt + " times!")
	}
}