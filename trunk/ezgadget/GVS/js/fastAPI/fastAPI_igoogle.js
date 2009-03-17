var _fastAPI_igoogle = Class.create(_fastAPI,{
    
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
        _IG_FetchXmlContent(url, handler);
        /*
        _IG_FetchXmlContent(url, onFetchComplete);

        function onFetchComplete(transport) {
            if(transport!=null) {
                handler(transport);
            } else {
                //TODO: Do something
                alert("Invalid Data in XML retrieval");
            }
        }
        */
    },
    
    getText: function (url, context, handler) {
        _IG_FetchContent(url, handler);
/*
        function onComplete(transport) {
            if(transport!=null) {
                handler(transport);
            } else {
                //TODO: Do something
                alert("Invalid Data in Text retrieval");
            }
        }
        */
    }
});

var FastAPI = new _fastAPI_igoogle();
