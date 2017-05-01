//search file
$("#search-button").click(function(){
let searchType = $('#searchType').find('option:selected').text();
let searchWord= $("#searchWord").val();
let search=$("#search-menu").show();
if (searchType==="Type" && searchWord==="" && $("#search-error").length==0){
    errorMsgShow='true';
 $("#search-menu").append
 ('<p id="search-error"> Please input a keyword or a type</p>');

}
if((searchType!=='Type' || searchWord!=="") && $("#search-error").length==1){
    $("#search-error").remove();
}
});
