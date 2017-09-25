function __(){
    this.ocrApiKey = '8c522db71188957';

    // Set value to localStorage
    this.set = function(key, value){
        return localStorage.setItem(key, JSON.stringify(value));
    }

    // Get value from localStorage
    this.get = function(key){
        return JSON.parse(localStorage.getItem(key));
    }

    // Check for starting
    this.init = function(){
        if(this.isOn()){
            this.setStatusLabel(true);
        }else {
            this.setStatusLabel(false);
        }

        if(!this.get('__ocrApiKey')){
            this.set('__ocrApiKey', this.ocrApiKey);
        }
    }

    this.isOn = function(){
        return this.get('__isOn') === null ? true : this.get('__isOn');
    }

    this.setStatusLabel = function(bool){
        if($(".label.status").length){
            if(bool){
                $(".label.status")
                    .removeClass("label-warning")
                    .text("Đang hoạt động")
                    .addClass("label-success");
            }else {
                $(".label.status")
                    .removeClass("label-success")
                    .text("Đang không hoạt động")
                    .addClass("label-warning");
            }
        }
    }

    this.toggleOnOff = function(){
        if(this.isOn()){
            this.setStatusLabel(false);
            this.set('__isOn', false);
        }else{
            this.setStatusLabel(true);
            this.set('__isOn', true);
        }
    }

    this.saveApiKey = function(ApiKey){
        this.set('__ocrApiKey', ApiKey);
        $(".code-api-key").text(ApiKey);
    }
}