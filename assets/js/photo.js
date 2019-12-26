$(document).ready(function () {
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