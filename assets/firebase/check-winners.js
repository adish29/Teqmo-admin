
    var dates = [];
    for (let i = 1; i <= 7; i++) {
        dates.push(new Date(new Date().getTime() - ((7 >= 0 ? i : (i - i - i)) * 24 * 60 * 60 * 1000)).toLocaleString());
   		document.getElementById("date"+i).innerHTML=dates[i-1].substring(0,dates[i-1].indexOf(','));
    }
 console.log(dates)


function collectDetails()
{
	var x = document.getElementById("dateSelector").value;
	console.log(x)
	for(let i=1; i<=6; i++){
	document.getElementById("xyz"+i).innerHTML = x;}
	for(let i=1; i<=6; i++){
	document.getElementById("actual"+i).innerHTML = document.getElementById("t"+i).value;}

}


