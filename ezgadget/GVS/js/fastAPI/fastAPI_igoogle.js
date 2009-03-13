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
    }
});

var FastAPI = new _fastAPI_ezweb();