function animateFib() {
  var canv = document.getElementById("canvas");
  var cntx = canv.getContext("2d");
   
  var fib = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
  cntx.strokeStyle = "BlueViolet";
  cntx.fillStyle = "BlueViolet";
  cntx.lineWidth = "3";
  var maxFib = document.getElementById("quantity").value;
  var length = (maxFib % 2 == 0) ? 630: 580;
  var step = length/(fib[maxFib-1]+fib[maxFib-2]);
  cntx.clearRect(0, 0, canv.width, canv.height);

  var posX = 0, posY = 0;
  cntx.strokeRect(posX,posY,fib[0]*step,fib[0]*step);
  cntx.fillText(fib[0], posX + fib[0]*step/2, posY + fib[0]*step/2);
  
  posX += step;
  setTimeout(function(){
	  cntx.strokeRect(posX,posY,fib[1]*step,fib[1]*step);
	  cntx.fillText(fib[1], posX + fib[1]*step/2, posY + fib[1]*step/2);
  }, 1500);
  
  setTimeout(function(){
	  var inter = setInterval(add, 1500);
	  var it = 2;
	  function add() {
		if (it == maxFib) {
		  clearInterval(inter);
		} else {
			if(it % 2 == 1) {
		  		posX += fib[it-1] * step;
		  		posY = 0;
		  }
		  else {
		  		posX = 0;
		  		posY += fib[it-1] * step;
		  }
		  cntx.strokeRect(posX, posY, fib[it] * step, fib[it] * step);
		  cntx.fillText(fib[it], posX + fib[it]*step/2, posY + fib[it]*step/2);
		  it++;
		}
	  }
  }, 1500);
}

function resetFib() {
	var canv = document.getElementById("canvas");
	var cntx = canv.getContext('2d');
	cntx.clearRect(0, 0, canv.width, canv.height);
}

function showInfo() {
	var info = document.getElementById("info");
	var facts = document.getElementById("facts");
	facts.style.display = 'none';
	info.style.display = 'block';
	var titleFib = document.getElementById("title");
	titleFib.innerHTML = "Ciąg Fibonacciego";
}

function showFacts() {
	var info = document.getElementById("info");
	var facts = document.getElementById("facts");
	info.style.display = 'none';
	facts.style.display = 'block';
	var titleFib = document.getElementById("title");
	titleFib.innerHTML = "Ciekawostki";
}
