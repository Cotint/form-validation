// email check
function checkEmail() {

    var email = document.getElementById('txtEmail');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
//    $(".email-text").append($('<i class="fa fa-info info-text" aria-hidden="true"></i>\n'));
        $(".email-text").append($('<div class="tooltip-text"><i class="fa fa-info info-text" aria-hidden="true"></i>\n' +
            '  <span class="tooltiptext">لطفا ایمیل خود را درست وارد کنید</span>\n' +
            '</div>'));

        email.focus;
        return false;
    }
}

// form

$('#audit_submit').click(function(e){
    var event = e;
    $('.required-form').each(function () {
        if ($(this).val() == '') {
            event.preventDefault();
            $(this).css('border', '1px solid red');
            $(this).css('background-color', '#FFE9EC');
        }else{
            $(this).css('border', '1px solid #b7bcc1');
            $(this).css('background-color', '#fff');
        }
    });
});
