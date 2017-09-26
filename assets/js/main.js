jQuery(function($){

    $(".button.status").change(function(){
        Resolver.toggleOnOff();
    });

    Resolver.get('__ocrApiKey', function(result){
        $(".form-input.input-api-key").val(result);
        $(".code-api-key").text(result);
    });

    var timeoutId;
    $(".form-input.input-api-key").keyup(function (){
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(function () {
            Resolver.saveApiKey($(".form-input.input-api-key").val());
        }, 100);
    });

});