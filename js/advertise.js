$(document).ready(function(){
	var adnumber=Math.floor(Math.random()*4)+1;
	var sideAd=$(".main-right").find(".side-ad");
	var adimg=$(sideAd).find("img");
	var adExit=$(sideAd).find("a");
	var adAlt=$(sideAd).find(".alt");
	var adAltArrow=$(sideAd).find(".alt-arrow");
	$(adExit).css({"display":"none"});
	$(adimg).attr("src","image/ad"+adnumber+".jpg");
	$(adimg).hover(function(){
        $(adExit).css({"display":"block"});
	},function(){
		$(adExit).css({"display":"none"});
	})
	$(adExit).hover(function(){
		$(this).css({"display":"block"});
		$(adAlt).css({"display":"block"});
		$(adAltArrow).css({"display":"block"});
	},function(){
		$(adAlt).css({"display":"none"});
		$(adAltArrow).css({"display":"none"});
	})
	$(adExit).click(function(){
		$(adimg).css({"display":"none"});
		$(adExit).css({"display":"none"});
	})
})