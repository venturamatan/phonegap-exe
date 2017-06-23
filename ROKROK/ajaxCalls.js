//-----------------------------------------------------------------------
// Call an ajax function on the server
//-----------------------------------------------------------------------
function myAjaxFunc(renderProducts, errorCB) {



    $.ajax({ // ajax call starts
        url: 'products.asmx/getProducts',   // server side web service method
        data: "",                          // the parameters sent to the server
        type: 'POST',                              // can be also GET
        dataType: 'json',                          // expecting JSON datatype from the server
        contentType: 'application/json; charset = utf-8', // sent to the server
        success: renderProducts,                // data.d id the Variable data contains the data we get from serverside
        error: errorCB 
    }) // end of ajax call
}


