function Instagram(n){
	if (n==1){
		document.getElementById('home').style.display = "initial";
	    document.getElementById('search').style.display = "none";
		document.getElementById('reel').style.display = "none";
		document.getElementById('heart').style.display = "none";
		document.getElementById('profile').style.display = "none";
	}else if (n == 2){
		document.getElementById('home').style.display = "none";
	    document.getElementById('search').style.display = "initial";
		document.getElementById('reel').style.display = "none";
		document.getElementById('heart').style.display = "none";
		document.getElementById('profile').style.display = "none";
	}else if (n == 3){
		document.getElementById('home').style.display = "none";
	    document.getElementById('search').style.display = "none";
		document.getElementById('reel').style.display = "initial";
		document.getElementById('heart').style.display = "none";
		document.getElementById('profile').style.display = "none";
	}else if (n == 4){
		document.getElementById('home').style.display = "none";
	    document.getElementById('search').style.display = "none";
		document.getElementById('reel').style.display = "none";
		document.getElementById('heart').style.display = "initial";
		document.getElementById('profile').style.display = "none";
	}else{
		document.getElementById('home').style.display = "none";
	    document.getElementById('search').style.display = "none";
		document.getElementById('reel').style.display = "none";
		document.getElementById('heart').style.display = "none";
		document.getElementById('profile').style.display = "initial";
	}
	
}