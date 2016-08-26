$(document).ready(function(){
	var collapseButton=$("#collapse-button");
	var topbarList=$("#navbarCollapse ul");
	var searchText=$("#navbarCollapse").find("form");
	$(collapseButton).click(function(){
				$(topbarList).addClass("collapseListBg");
				$(searchText).addClass("collapseSearch");
	})
	$(window).resize(function(){
		if($(topbarList.find("li")[0]).width()==58)
		{
				$(topbarList).removeClass("collapseListBg");
				$(searchText).removeClass("collapseSearch");

		}
		else{
				$(topbarList).addClass("collapseListBg");
				$(searchText).addClass("collapseSearch");
		}
	})
})