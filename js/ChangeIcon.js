$(document).ready(function(){
	var sidebarList=$(".sidebar").find(".sidebar-list");
	var sidebarListItem=$(sidebarList).find("li");
	var sidebarListIcon=$(sidebarList).find("span");
	var homeEntry=$(".main-left").find(".homeEntry")
	var homeEntryItem=$(homeEntry).find("a");
	var homeEntryIcon=$(homeEntry).find("i");
    listIconChange($(sidebarListItem[0]),$(sidebarListIcon[0]),167,167,4,24);
    listIconChange($(sidebarListItem[1]),$(sidebarListIcon[1]),183,183,4,24);
    listIconChange($(sidebarListItem[2]),$(sidebarListIcon[2]),200,200,4,24);
    listIconChange($(sidebarListItem[4]),$(sidebarListIcon[3]),234,234,5,25);
    listIconChange($(sidebarListItem[5]),$(sidebarListIcon[4]),269,269,5,25);
    listIconChange($(sidebarListItem[6]),$(sidebarListIcon[5]),24,67,41,39);
    listIconChange($(homeEntryItem[0]),homeEntryIcon[0],50,50,0,26);
    listIconChange($(homeEntryItem[1]),homeEntryIcon[1],0,26,0,0);
    listIconChange($(homeEntryItem[2]),homeEntryIcon[2],0,26,25,25);

    //content-icon
    var homeListContent=$(".home-list-content");
    var contentItemLength=$(homeListContent).length;
    var contentExit=[];
    var contentFooter=$(".content-footer");
    var contentFooterItem=[];
    var contentFooterIcon=[];
    for(var i=0;i<contentItemLength;i++)
    {   
        contentExit[i]=$(homeListContent[i]).find(".content-exit").find("a");
        contentFooterItem[i]=$(contentFooter[i]).find("a");
        contentFooterIcon[i]=$(contentFooter[i]).find("i");
    
        (function(index)
            {
            listIconChange($(contentExit[index]),$(contentExit[index]),262,262,61,41);
            listIconChange($(contentFooterItem[index][0]),$(contentFooterIcon[index][0]),97,97,22,37);
            listIconChange($(contentFooterItem[index][1]),$(contentFooterIcon[index][1]),28,28,22,37);
            listIconChange($(contentFooterItem[index][2]),$(contentFooterIcon[index][2]),40,40,22,37);
            listIconChange($(contentFooterItem[index][3]),$(contentFooterIcon[index][3]),67,67,22,37);
            listIconChange($(contentFooterItem[index][4]),$(contentFooterIcon[index][4]),54,54,22,37);
            })(i);
    }
    //Right-sidebar-icon
    $(sidebarListItem[7]).hover(function(){
    	var url="url('image/copyright1.png')";
    	$(sidebarListIcon[6]).css({"background-image":url});
    },function(){
    	var url="url('image/copyright.png')";
    	$(sidebarListIcon[6]).css({"background-image":url});
    })
})
function listIconChange(sideli,sidespan,x0,x1,y0,y1)
{
	var X0pos=-x0+"px",X1pos=-x1+"px",Y0pos=-y0+"px",Y1pos=-y1+"px";
    var pos1=X1pos+" "+Y1pos;
    var pos0=X0pos+" "+Y0pos;
    $(sideli).hover(function(){
    	$(sidespan).css({"background-position":pos1})
    },
    function(){
        $(sidespan).css({"background-position":pos0})
    })
}