$(document).ready(function()
{
    var topRightBar=$(".top-right");
    var topRightBarList=$(".top-right-list");
    var topRightBarItem=$(topRightBarList).find("li");
    var topBarItemLength=topRightBarItem.length;
    $(topRightBar).hover(function(){
        $(this).addClass("top-right-hover");
        $(topRightBarList).css({"display":"block","margin-top":"-1px"});  //解决在div和list之间list消失

    },function(){
        $(this).removeClass("top-right-hover");
        $(topRightBarList).css("display","none");

    })
    for(var i=0;i<topBarItemLength;i++){
    	$(topRightBarItem[i]).hover(function(){
            $(this).addClass("top-list-hover");
    	},function(){
            $(this).removeClass("top-list-hover");
    	})
    }
})