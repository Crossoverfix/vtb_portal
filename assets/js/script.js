$(document).ready(function () {
    var $redactionDrop = $('[data-js-drop="redaction"]');
    $redactionDrop.on('click',function () {
        $('.header__wrap__date__drop').toggleClass('active');
        $(this).toggleClass('active');
        return false;
    })
    var $redactionYear = $('[data-js-drop-select]');
    var $redactionSelect = $('[data-js-drop-selected]');
    $redactionYear.on('click',function () {
        let tempSelect = $(this).attr('data-js-drop-select');
        $redactionYear.removeClass('active');
        $redactionSelect.removeClass('active');
        $(this).addClass('active');
        $('.header__wrap__date__drop__second').addClass('active');
        $('[data-js-drop-selected="' + tempSelect +'"]').addClass('active');
        return false;
    })
    $(document).keyup(function(e) {
        if(e.key === "Escape") {
            $('.header__wrap__date__drop').removeClass('active');
            $redactionDrop.removeClass('active');
        }
    });
    var $breakingStatus = true;
    function fBreaking(){
        $breakingStatus = false;
        setTimeout(() => $breakingStatus = true, 600);
    }
})