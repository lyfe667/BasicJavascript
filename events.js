
function attachText(e)
{
	//�ж���΢��ʽ����W3C��ʽ
	if(!e)
	{
		var e=window.event;
	}
	var element;
	if(e.target)
	{
		element=e.target;
	}
	else
	{
		element=e.srcElement;
	}
	document.getElementById("div1").innerHTML+=element.id+"<br>";
}

function reset()
{
	document.getElementById("buttona").addEventListener("click",attachText,false);
	document.getElementById("buttonb").addEventListener("click",attachText,false);
}

function removeA()
{
	document.getElementById("buttona").removeEventListener("click",attachText,false);	
}

function removeB()
{
	document.getElementById("buttonb").removeEventListener("click",attachText,false);
}

window.onload=function()
{
	document.getElementById("buttonar").addEventListener("click",removeA,false);
	document.getElementById("buttonbr").addEventListener("click",removeB,false);
	document.getElementById("reset").addEventListener("click",reset,false);
	reset();
}