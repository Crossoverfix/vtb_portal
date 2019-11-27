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
    var $collapseParrent = $('[data-js-collapse]');
    $collapseParrent.on('click',function () {
        let $parent = $(this).attr('data-js-collapse');
        $(this).parents('.'+ $parent).toggleClass('show');
        return false;
    })
    var $dropTrigger = $('[data-js-drop-head="trigger"]');
    var $dropSelect = $('[data-js-drop-head="select"]');
    $dropTrigger.on('click',function () {
        $dropTrigger.toggleClass('active');
        $('.pages-head__sort__select__drop').toggleClass('active');
    })
    $dropSelect.on('click',function () {
        let content = $(this).text();
        $dropTrigger.text(content);
        $dropTrigger.removeClass('active');
        $('.pages-head__sort__select__drop').removeClass('active');
    })
    var $searchCollapse = $('[data-js-search="collapse"]');
    $searchCollapse.on('click',function () {
        $(this).toggleClass('collapsed');
        $('.search__form').toggleClass('hide');
        return false;
    })
    var $inputSearch = $('[data-js-search="input"] input');
    $inputSearch.on('change',function () {
        if($(this).val()){
            $('.search__form__field__clear').addClass('cross');
            $('.pagination__result').removeClass('hide');
        } else {
            $('.search__form__field__clear').removeClass('cross');
            $('.pagination__result').addClass('hide');
        }
    })
    $('.search__form__field__clear').on('click',function () {
        if($(this).hasClass('cross')){
            $inputSearch.val('');
            $(this).removeClass('cross');
            $('.pagination__result').addClass('hide');
        }
    })
    var $searchDrop = $('[data-js-search="drop"]');
    $searchDrop.on('click',function () {
        $(this).toggleClass('active');
        $(this).siblings('.collapsed-content').toggleClass('hide');
        return false;
    })
    var $cardSocial = $('[data-js-social="true"] a');
    $cardSocial.on('click',function () {
        $(this).toggleClass('active');
        return false;
    })
    var $photoModal = $('[data-js-modal="photo"] a');
    var $modalClose = $('.modal__slider__control__close');
    var $modalControl = $('.modal__slider__control__btn');
    var $modalCurr = 0;
    $modalControl.on('click',function () {
        if($(this).hasClass('btn-prev')){
            fSlideControl('prev');
            console.log('prev');
        } else if ($(this).hasClass('btn-next')){
            fSlideControl('next');
            console.log('next');
        } else {
            console.log('error 1' + $(this) + 'fds' + $(this).attr('class'));
        }
    })
    function fSlideControl(direction){
        if(direction == 'prev'){
            $modalCurr--;
            if($modalCurr < 0){
                $modalCurr = $photoModal.length - 1;
            }
            $(fconstructor($modalCurr)).appendTo('.modal__slider__content');
            $('.modal__slider__content__point').eq(0).animate({'margin-left':'-100%'},400,function () {
                $('.modal__slider__content__point').eq(0).remove();
            });
        } else if(direction == 'next'){
            $modalCurr++;
            if($modalCurr >= $photoModal.length){
                $modalCurr = 0;
            }
            $(fconstructor($modalCurr)).prependTo('.modal__slider__content');
            $('.modal__slider__content__point').eq(0).css({'margin-left':'-100%'});
            $('.modal__slider__content__point').eq(0).animate({'margin-left':'0'},400,function () {
                $('.modal__slider__content__point').eq(1).remove();
            });
        } else {
            console.log('error 2');
        }
    }
    $modalClose.on('click',function () {
        fclosemodal();
        return false
    })
    $photoModal.on('click',function () {
        $modalCurr = $photoModal.index($(this));
        $('.modal').addClass('active');
        $('body').addClass('mod-modal');
        $('.modal__slider__content').html(fconstructor($modalCurr));
        return false;
    })
    function fconstructor(thisIndex){
        let $text = $photoModal.eq(thisIndex).siblings('.article-open__photo__card__text').text();
        let $link = $photoModal.eq(thisIndex).attr('data-js-background');
        let $content =  '<div class="modal__slider__content__point">\n' +
            '                <img alt="img" src="' + $link + '">\n' +
            '                <p class="article-open__photo__card__text">' + $text + '</p>\n' +
            '            </div>';
        return $content;
    }
    function fclosemodal(){
        $('.modal').removeClass('active');
        $('body').removeClass('mod-modal');
        $('.modal__slider__content').html(" ");
    }



    $(document).keyup(function(e) {
        if(e.key === "Escape") {
            $('.header__wrap__date__drop').removeClass('active');
            $redactionDrop.removeClass('active');
            fclosemodal();
        }
    });
    var $breakingStatus = true;
    function fBreaking(){
        $breakingStatus = false;
        setTimeout(() => $breakingStatus = true, 600);
    }
})