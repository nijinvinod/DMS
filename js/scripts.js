$(document).ready(function(){
	$(".clips").change(function(){
        var checked = $( "input.clips:checked" ).length;
        if(checked>0){
            $("#clipboard").show();
        }else{
            $("#clipboard").hide();
        }
    });
    
    $("#advSearch").click(function(){
        $("#advanceSearchBox").slideToggle();
    });
});