var _fastAPI_ezweb = Class.create(_fastAPI,{
    
    initialize: function() {
    },
    
    send_get: function (url, context, successHandler, errorHandler) {
        _IG_FetchContent(url, onSuccess);
        
        function onSuccess(responseText) {
            if (responseText == null){
                errorHandler(responseText);
            } else {
                successHandler(responseText);
            }
        }
    },
    
    getXML: function (url, context, handler) {
        _IG_FetchXMLContent(url, onComplete);

        function onComplete(transport) {
            if(transport.responseXML!=null) {
                handler(transport);
            } else {
                //TODO: Do something
                alert("Invalid Data in XML retrieval");
            }
        }
    }
});

var FastAPI = new _fastAPI_ezweb();
