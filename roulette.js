function spin() 
{
	var speed = 10;
	// document.getElementById("roulette").setAttribute("transform","rotate(360deg)");
	requestAnimationFrame(spin);
	for(let i=1;i<5000;i++)
	{
		$("#roulette").css("transform","rotate("+(speed*i)+"deg)");
	}
 }

