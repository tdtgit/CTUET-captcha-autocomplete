var ___ = new __();
___.init();

jQuery(function($){
    $(".button.status").prop("checked", ! ___.isOn());
    $(".button.status").change(function(){
        ___.toggleOnOff();
    });

    $(".code-api-key").text(___.get('__ocrApiKey'));
    $(".form-input.input-api-key").val(___.get('__ocrApiKey'));
    var timeoutId;
    $(".form-input.input-api-key").keypress(function (){
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(function () {
            ___.saveApiKey($(".form-input.input-api-key").val());
        }, 200);
    });
});