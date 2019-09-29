window.onload = function(){
	//导航栏特效
	var box_11 = document.getElementById("box-11");
	var oa = box_11.getElementsByTagName("a");
	for(var i=1;i<oa.length;i++){
		oa[i].onmouseover = function(){
			this.parentNode.getElementsByClassName("line")[0].style.width="100%";
			this.style.color="#5de0fe";
		}
		oa[i].onmouseout = function(){
			this.parentNode.getElementsByClassName("line")[0].style.width="0px";
			this.style.color="white";
		}
	}
	
	//鼠标滑过查看详情
	var details = document.getElementsByClassName("details")[0];
	details.onmouseover = function(){
		this.style.color = "black";
		this.style.background = "white";
		this.style.border = "solid 1px white";
		this.style.transition = "none";
	}
	details.onmouseout = function(){
		this.style.color = "white";
		this.style.background = "";
		this.style.border = "solid 1px #5de0fe";
	}
	
	//box-12
	var box_12 = document.getElementById("box-12");
	var h1 = box_12.getElementsByTagName("h1")[0];
	var span = box_12.getElementsByTagName("span")[0];
	var a = box_12.getElementsByTagName("a")[0];
	h1.style.top = "0px";
	span.style.top = "0px";
	a.style.top = "0px";
	h1.style.opacity = "1";
	span.style.opacity = "1";
	a.style.opacity = "1";
	
	//最新动态
	var box_32 = document.getElementById("box-32");
	var box_321 = box_32.getElementsByClassName("box-321")[0];
	var box_322 = box_32.getElementsByClassName("box-322")[0];
	var box_323 = box_32.getElementsByClassName("box-323")[0];
	
	box_321.onmouseenter = function(){
		box_321.style.background="url(img/ia_100000004.png) no-repeat center center/100%";
		var timer1 = setTimeout(function(){
			box_321.style.transition = "all 1s";
			box_321.style.background="url(img/ia_100000004.png) no-repeat center center/105%";
		},0)
		
	}
	box_321.onmouseleave = function(){
		box_321.style.background = "#f2f2f2";
		box_321.style.transition = "";
		clearTimeout(timer1);
	}
	
	box_322.onmouseenter = function(){
		box_322.style.background="url(img/ia_100000005.jpg) no-repeat center center/100%";
		var timer2 = setTimeout(function(){
			box_322.style.transition = "all 1s";
			box_322.style.background="url(img/ia_100000005.jpg) center center/105%";
		},0)
	}
	box_322.onmouseleave = function(){
		box_322.style.background = "#f2f2f2";
		box_322.style.transition = "";
		clearTimeout(timer2);
	}
	
	box_323.onmouseenter = function(){
		box_323.style.background="url(img/ia_100000006.png) no-repeat center center/100%";
		var timer3 = setTimeout(function(){
			box_323.style.transition = "all 1s";
			box_323.style.background="url(img/ia_100000006.png) center center/105%";
		},0)
	}
	box_323.onmouseleave = function(){
		box_323.style.background = "#f2f2f2";
		box_323.style.transition = "";
		clearTimeout(timer3);
	}
	
	
	//box-5特效
	var box_51 = document.getElementById("box-51");
	var anniu1 = document.getElementById("anniu1");
	var anniu2 = document.getElementById("anniu2");
	var box_511 = document.getElementById("box-511");
	var box_512 = document.getElementById("box-512");
	console.log(anniu1);
	
	anniu1.onclick = function(){
		console.log("a");
		this.style.background = "white";
		anniu2.style.background = "#8e72c1";
		box_511.style.left = "0%";
		box_512.style.left = "100%";
	}
	
	anniu2.onclick = function(){
		console.log("a");
		this.style.background = "white";
		anniu1.style.background = "#8e72c1";
		box_512.style.left = "0%";
		box_511.style.left = "-100%";
	}
	
	
}
