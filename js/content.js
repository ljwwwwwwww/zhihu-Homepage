$(document).ready(function(){
	var homeListContent=$(".home-list-content");
	var contentItemLength=$(homeListContent).length;
    var contentExit=[];
	var contentExitAlt=[];
	var contentExitArrow=[];
	var contentFooter=$(".content-footer");
    var contentFooterToggle=[];
	var contentFooterHide=[];
	//头像与数字随机
    for(var i=0;i<contentItemLength;i++)
    {   
        var writerProfileImg=$(homeListContent[i]).find(".writerProfile").find("img");
        var contentpic=$(homeListContent[i]).find(".content-body-img").find("img");
	    var readNumber=$(homeListContent[i]).find(".readNumber");
	    var commentNumber=$(homeListContent[i]).find(".comment");
	    var content=Math.floor(Math.random()*8+1);
    	var photo=Math.floor(Math.random()*7+1);
        var read=Math.floor(Math.random()*10000);
        var comment=Math.floor(Math.random()*1000);
      	$(writerProfileImg).attr("src","image/photo"+photo+".jpg");
      	$(contentpic).attr("src","image/contentpic"+content+".jpg");
        $(readNumber).text(read);
        $(commentNumber).text(comment+"条评论");
    }

	    //关闭当前内容
	for(var i=0;i<contentItemLength;i++)
	{
		contentExit[i]=$(homeListContent[i]).find(".content-exit").find("a");
		contentExitAlt[i]=$(homeListContent[i]).find(".content-exit").find(".alt");
		contentExitArrow[i]=$(homeListContent[i]).find(".content-exit").find(".alt-arrow");
		
        $(contentExit[i]).hover((function(index){
			return function()
			{
				$(contentExitAlt[index]).css({"display":"block"});
				$(contentExitArrow[index]).css({"display":"block"});
		    }
		})(i),
		(function(index){
			return function()
			{
				$(contentExitAlt[index]).css({"display":"none"});
				$(contentExitArrow[index]).css({"display":"none"});
		    }
		})(i));

		$(contentExit[i]).click((function(index){
	        return function()
	        {
	        	$(homeListContent[index]).css({"display":"none"})
	        }
		})(i));

    }

	   //内容底部显示      (mouseout事件支持事件冒泡，moueseleave不支持事件冒泡)
	for (var i=0;i<contentItemLength;i++)
	{
		contentFooterToggle[i]=$(contentFooter[i]).find("li")[7];
		contentFooterHide[i]=$(contentFooter[i]).find(".content-footer-hide");
	 	$(contentFooterToggle[i]).mouseenter((function(index){
	 		return function()
	 		{
				for(var j=0;j<$(contentFooterHide[index]).length;j++)
				{
					$(contentFooterHide[index][j]).css({"display":"block"});
				}
		    }
		})(i));
		$(contentFooter[i]).mouseleave((function(index){
			return function(){                   
				for(var j=0;j<$(contentFooterHide[index]).length;j++)
				{
					$(contentFooterHide[index][j]).css({"display":"none"});   
				}
			}
		})(i));
	}
})