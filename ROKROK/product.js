var s = 0;



$(document).on('pagebeforeshow', '#store', function ()
{
    
    myAjaxFunc(renderProducts, errorCB);
    //myAjaxFunc(successCB, errorCB);

});
//-----------------------------------------------------------------------------
// A Method for presenting the results, called on success
//-----------------------------------------------------------------------------
function successCB(resutls) {
    resutls = $.parseJSON(resutls.d)
    $.each(resutls, function (i, row) {
        alert(i + ": " + row.ProdId);
    });

    //alert(resutls.d);
    ////tmpStr = "";
    //for (i = 0; i < resutls.length; i++) {
    //    tmpStr += "<h1> " + resutls[i] + "</h1>";
    //}
    //document.getElementById("resultsDiv").innerHTML = tmpStr;

}

//-----------------------------------------------------------------------------
// A Method for presenting the error, called on error
//-----------------------------------------------------------------------------
function errorCB(e) {
    alert("I caught the exception : failed in someAjaxFunc \n The exception message is : " + e.responseText);
}
function renderProducts(result) {
    result = $.parseJSON(result.d)
    $("#product-list").empty();
    //prodInfo.result = result.results;
    $.each(result, function (i, row) {
        console.log(JSON.stringify(row));
        $('#product-list').append('<li><a href="" select1=0 price="' + row.Price + '" data-id="' + row.ProdId + '"><img style = "width:65px" src="' + row.ImagePath + '"/><h3>' + row.Name + '</h3><p>' + row.Type + " , " + row.Price + "$" + '</p></a></li>');
    });
    s = 0;
    $('#product-list').listview('refresh');
}


$(document).on('vclick', '#product-list li a', function () {
    r =  $(this)
    if ($(this).attr("select1") == "0")
    {
        $(this).css("background-color", "yellow");
        $(this).attr("select1", "1");
        //r.clone().appendTo("#cart-list");
        $( this ).addClass( "sogreen" );
        s += parseFloat($(this).attr("price"));

    }
    else
    {
        $(this).css("background-color", "");
        $(this).attr("select1", "0");
        //r.closest("#cart-list").remove();
        $(this).removeClass("sogreen");
        s -= parseFloat($(this).attr("price"));
        //$("#cart-list").remove($(this));
        //$(this).appendto('#cart-list');
    }
    
});



$(document).on('pagebeforeshow', '#cart', function (){
    //for($('#product-list li a').attr("select1") == "0")
    $("#summ").empty();
    $("#cart-list").empty();
    $(".sogreen").clone().appendTo("#cart-list");
    $("#summ").append("" + s + " :מחיר לתשלום ");
    $("#cart-list").listview('refresh');

});



