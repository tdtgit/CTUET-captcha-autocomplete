function solveCaptcha(){
    $("input#txtSercurityCode").val(" ");
    $("input#txtSercurityCode1").val(" ");
    $("input#txtSecurityCodeValue").val("7215ee9c7d9dc229d2921a40e899ec5f");
    $("input#txtSecurityCodeValue1").val("7215ee9c7d9dc229d2921a40e899ec5f");
}

jQuery(function(){
    // Lấy captcha khi vào trang
    solveCaptcha();
});
