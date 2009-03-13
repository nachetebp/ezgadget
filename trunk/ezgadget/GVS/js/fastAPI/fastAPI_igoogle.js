var _fastAPI_ezweb = Class.create(_fastAPI,{
    
    initialize: function() {
    },
    
    send_get: function (url, context, successHandler, errorHandler) {
        //_IG_FetchContent(url, successHandler);
        
        _IG_FetchXmlContent(url, onSuccess);
        
        
        function onSuccess(responseText) {
            alert(responseText);
            if (responseText == null){
                errorHandler(responseText);
            } else {
                alert("1");
                successHandler(responseText);
                alert("2");
            }
        }
        
    }
});

var FastAPI = new _fastAPI_ezweb();
