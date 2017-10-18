function ResolverCls(){

    var __ = this;

    this.set = function(key, value){
        chrome.storage.sync.set({[key]: value});
    }

    this.get = function(key, callback){
        chrome.storage.sync.get(key, function(result){
            if (!chrome.runtime.error) {
                callback(result[key]);
            }
        });
    }

    this.setStatus = function(){
        if($(".label.status").length){
            this.get('__isOn', function(result){
                if(result){
                    $(".button.status").prop("checked", false);
                    $(".label.status")
                        .removeClass("label-warning")
                        .text("Đang hoạt động")
                        .addClass("label-success");
                }else {
                    $(".button.status").prop("checked", true);
                    $(".label.status")
                        .removeClass("label-success")
                        .text("Đang không hoạt động")
                        .addClass("label-warning");
                }
            });
        }
    }

    this.toggleOnOff = function(){
        this.get('__isOn', function(result){
            if(result){
                __.set('__isOn', false);
            }else{
                __.set('__isOn', true);
            }
            __.setStatus();
        });
    }

    this.init = function(){
        this.setStatus();
    }

    return this;
}

var Resolver = new ResolverCls();
Resolver.init();