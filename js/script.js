// JavaScript Document

var index = 1;
changeImage = function(){
	var imgs = ["img/poster/poster18.jpg", "img/poster/poster19.jpg"
		, "img/poster/poster20.jpg", "img/poster/poster21.jpg", "img/poster/poster22.jpg"
		, "img/poster/poster23.jpg", "img/poster/poster24.jpg"
		, "img/poster/poster25.jpg", "img/poster/poster26.jpg"
		, "img/poster/poster27.jpg", "img/poster/poster28.jpg"];
	document.getElementById('img').src = imgs[index];
	index++; 
	if(index==11) {
		index = 0;
	}
}
setInterval(changeImage, 5000);
/*
var index1 = 1;
changeAds = function(){
	var imgs = ["img/poster/poster11.jpg", "img/poster/poster12.jpg"
		, "img/poster/poster13.jpg"];
	document.getElementById('img').src = imgs[index1];
	index1++;
	if(index1==3) {
		index1 = 0;
	}
}*/


$(document).ready(function(e) {
	$(".thumb img").click(function() {
		$("#mainId").attr("src", $(this).attr("src"));
	});	
	
	$(".category a").click(function() {
		var path = "img/phone/";
		var name = "iphone";

		if($(this).text() == "IPhone10" ) {
			path = "img/phone/";
			name = "ip";
		}

		$("#mainId").attr("src", path + name + "1.png");
		var thumImgs = $(".thumb img");
		for (var i = 0; i < thumImgs.length; i++)
			$(thumImgs[i]).attr("src", path + name + (i + 1) + ".png");
	});
});