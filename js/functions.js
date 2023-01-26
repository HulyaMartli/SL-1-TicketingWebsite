let adults=42;
let children=8;

if(adults<0) {
	adults=0;
}

if(children<0) {
	adults=0;
}

for(let i=1; i<=42; i++) {
    console.log('Ticket #'+i)
}

function calc(x, y) {
	return x*12+y*6;
}

window.onload = function(buyticket) {
	let btn = document.getElementById("buyticket");
	btn.onclick = function() {
		let adults = document.getElementById("adults").value;
		let children = document.getElementById("children").value;
		let price = calc(adults, children);
		alert("Total price of the tickets=" + price)
	}
}