$(document).ready(function(){
	var mainbodyLeft=$("#main").find(".main-left");
	var mainbodyRight=$("#main").find(".main-right");
	var mainbody=$("#main");
	var homeListContent=$(".home-list-content");
	var contentItemLength=$(homeListContent).length;
	(function(){
		var width=$(mainbodyLeft).width();
		var height=$(mainbody).height();
		var mainbodyWidth=$(mainbody).width();    //改为监听mainbodyWidth
		if(mainbodyWidth<810)
		{
	       $(mainbodyLeft).addClass("main-body-left-change");
	       $(mainbodyRight).css({"left":"0","top":height+20})
		}
	    if(mainbodyWidth>810){
	       $(mainbodyLeft).removeClass("main-body-left-change");
	       $(mainbodyRight).css({"left":width+58,"top":"0"});
	    }
    })()
    $(window).scroll(function(){
    	var width=$(mainbodyLeft).width();
		var height=$(mainbodyLeft).height();
		var mainbodyWidth=$(mainbody).width();    //改为监听mainbodyWidth
		if(mainbodyWidth<810)
		{
           $(mainbodyLeft).addClass("main-body-left-change");
           $(mainbodyRight).css({"left":"0","top":height+20})
		}
        if(mainbodyWidth>810)
        {
           $(mainbodyLeft).removeClass("main-body-left-change");
           $(mainbodyRight).css({"left":width+58,"top":"0"});
        }
	});

	$(window).resize(function(){
		var width=$(mainbodyLeft).outerWidth();
		var height=$(mainbodyLeft).height();
		var mainbodyWidth=$(mainbody).width();    //改为监测mainbodyWidth
		var browserWidth=$(window).width();
		 console.log(mainbodyWidth)
		 console.log(width)

		if(mainbodyWidth<810)
		{
           $(mainbodyLeft).addClass("main-body-left-change");
           $(mainbodyRight).css({"left":"0","top":height+20})
           return;
		}
		if(width>browserWidth*0.88-328){                       	//监测浏览器最大化      
           $(mainbodyLeft).removeClass("main-body-left-change");
           $(mainbodyRight).css({"left":browserWidth*0.88-328+58,"top":"0"});
           return;
        }
        if(mainbodyWidth>810){
           $(mainbodyLeft).removeClass("main-body-left-change");
           $(mainbodyRight).css({"left":width+58,"top":"0"});
           return;
        }
        
	})
})