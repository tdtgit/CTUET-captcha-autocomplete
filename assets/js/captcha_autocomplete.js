function solveCaptcha(elements){
    for(var $ele in elements){
        if(elements.hasOwnProperty($ele) && document.getElementById($ele) != null){
            document.getElementById($ele).value = elements[$ele];
        }
    }
}

window.onload = function(){
    solveCaptcha({
        'txtSercurityCode':         ' ',
        'txtSercurityCode1':        ' ',
        'txtSecurityCodeValue':     '7215ee9c7d9dc229d2921a40e899ec5f',
        'txtSecurityCodeValue1':    '7215ee9c7d9dc229d2921a40e899ec5f'
    })
}
