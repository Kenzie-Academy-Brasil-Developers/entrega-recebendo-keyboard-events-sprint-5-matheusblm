let boxTop = 200;
let boxLeft = 200;

document.addEventListener('keydown', (event) => {
	const keyName = event.key;
	let sound = document.getElementById("audioMove");
	if(keyName === "ArrowDown"){
		sound.play();
		boxTop += 10
		document.getElementById("box").style.top = boxTop + "px";   
	}
	else if(keyName === "ArrowUp"){
		sound.play();
		boxTop -= 10
		document.getElementById("box").style.top = boxTop + "px";   
	}
	else if(keyName === "ArrowRight"){
		sound.play();
		boxLeft += 10
		document.getElementById("box").style.left = boxLeft + "px";   
	}
	else if(keyName === "ArrowLeft"){
		sound.play();
		boxLeft -= 10
		document.getElementById("box").style.left = boxLeft + "px";   
	}
      });
 
