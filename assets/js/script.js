$(document).ready(function () {
    var $redactionDrop = $('[data-js-drop="redaction"]');
    $redactionDrop.on('click',function () {
        $('.header__wrap__date__drop').toggleClass('active');
        $(this).toggleClass('active');
        return false;
    });
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
    });
    var $sliderPreview = $('[data-js-preview]');
    $sliderPreview.on('click',function () {
        let direction = $(this).attr('data-js-preview');
        if($breakingStatus){
            fBreaking();
            if(direction == 'prev'){
                $('.preview__content__item').eq($('.preview__content__item').length - 1).prependTo('.preview__content__wrap');
                $('.preview__content__item').eq(0).css({'margin-left':'-100%'});
                $('.preview__content__item').eq(0).animate({'margin-left':'0'},500);
            } else if(direction == 'next'){
                $('.preview__content__item').eq(0).css({'margin-left':'0'});
                $('.preview__content__item').eq(0).animate({'margin-left':'-100%'},500,function () {
                    $('.preview__content__item').eq(0).appendTo('.preview__content__wrap');
                    $('.preview__content__item').css({'margin-left':'0'});
                });
            }
        }
        return false;
    });
    var $sliderEvent = $('[data-js-event]');
    var $eventPosition = 0;
    $sliderEvent.on('click',function () {
        let direction = $(this).attr('data-js-event');
        if($breakingStatus){
            fBreaking();
            if(direction == 'prev'){
                $eventPosition++;
                $('.event__body__wrap__card').eq(0).css({'margin-left':'calc(-' + ($eventPosition * 25) +'% + 15px)'});
            } else if(direction == 'next'){
                if($eventPosition <= 0){
                    $eventPosition = 0;
                    $('.event__body__wrap__card').eq(0).css({'margin-left':'calc(-' + ($eventPosition * 25) +'% + 15px)'});
                } else {
                    $eventPosition--;
                    $('.event__body__wrap__card').eq(0).css({'margin-left':'calc(-' + ($eventPosition * 25) +'% + 15px)'});
                }
            }
        }
        return false;
    });
    var $sliderChoice = $('[data-js-choice]');
    $sliderChoice.on('click',function () {
        let direction = $(this).attr('data-js-choice');
        if($breakingStatus){
            fBreaking();
            if(direction == 'prev'){
                $('.choice__select__wrap__card').eq($('.choice__select__wrap__card').length - 1).prependTo('.choice__select__wrap');
                $('.choice__select__wrap__card').eq(0).css({'margin-left':'-100%'});
                $('.choice__select__wrap__card').eq(0).animate({'margin-left':'0'},300);
            } else if(direction == 'next'){
                $('.choice__select__wrap__card').eq(0).css({'margin-left':'0'});
                $('.choice__select__wrap__card').eq(0).animate({'margin-left':'-100%'},300,function () {
                    $('.choice__select__wrap__card').eq(0).appendTo('.choice__select__wrap');
                    $('.choice__select__wrap__card').css({'margin-left':'0'});
                });
            }
        }
        return false;
    });
    var $collapseHot = $('.hot__bar__collapse');
    $collapseHot.on('click',function () {
        $('.hot__bar__nav').toggleClass('active');
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