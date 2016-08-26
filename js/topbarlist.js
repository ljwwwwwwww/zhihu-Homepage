$(document).ready(function(){
	var topbarList=$("#navbarCollapse li");
	var topbarlength=topbarList.length;
    for(var i=0;i<topbarlength-1;i++)
    {   
    	

        
    	$(topbarList[i]).click(
    		(function(index){
             return function(){clickFun(index)};
            })(i)
        )
        

    	/*方法一
    	(function(){
    	    var index=i;
    	    $(topbarList[index]).click(function(){
    	    	clickFun(index);
    	    });
        })();
        */
    	

    	/*   var index=i;
	    	 console.log(index);
	         $(topbarList[index]).click(function(){
	    	       console.log(index);              闭包的影响,最后index一直为3
	         })
	    */
	}
	
})
function clickFun(index){
	    var topbarList=$("#navbarCollapse li");
	    var topbarlength=topbarList.length;
		//console.log(index);
        $(topbarList[index]).addClass("navbar-right-active");
        for(var i=0;i<topbarlength-1;i++)
        {
        	if(i!=index)
        	{
        		$(topbarList[i]).removeClass("navbar-right-active");
        	}
        }
};