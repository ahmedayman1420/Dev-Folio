// ============================================================================================================= //
// ============================================================================================================= //
// ========== ----- ========== // --> JavaScript Styling Code <-- // ========== ----- ========== //
// ============================================================================================================= //
// ============================================================================================================= //

let temp = true;
var currentImg;
var index;
var imgsScr = [];

// ================================================================================ //
// ========== ----- ========== // --> Home Section <-- // ========== ----- ========== //
// ================================================================================ //

// ========== ----- ========== // --> Loading Document <-- // ========== ----- ========== //
$(document).ready(function() {
    $('.loading-layer').fadeOut(1000, function() {
        $('body').css({ 'overflow': 'visible' });
    });
});


//========== ----- ========== // --> Set Activ Link <-- // ========== ----- ========== //

var drawLinkLine = (state) => {

    // ------- Nav Bar Background
    let currentHeight = $(window).scrollTop();

    if (state) {


        if (currentHeight == 0) {
            $('nav').css({ 'background-color': 'transparent' });
        } else {
            $('nav').css({ 'background-color': 'rgba(0, 0, 0, 1)' });
        }

    }
    // ------- Link Line
    $('.link-line').css({ 'width': '0%' });
    if (currentHeight < $('section').eq(1).offset().top) {
        if (state)
            $('.link-line').eq(0).css({ 'width': '100%' });
        else
            $('.link-line').eq(0).css({ 'width': '5%' });

        $('.to-top').fadeOut(1000);

    } else if (currentHeight >= $('section').eq(1).offset().top && currentHeight < $('section').eq(2).offset().top) {
        if (state)
            $('.link-line').eq(1).css({ 'width': '100%' });
        else
            $('.link-line').eq(1).css({ 'width': '5%' });

        $('.to-top').fadeIn(1000);

    } else if (currentHeight >= $('section').eq(2).offset().top && currentHeight < $('section').eq(3).offset().top) {
        if (state)
            $('.link-line').eq(2).css({ 'width': '100%' });
        else
            $('.link-line').eq(2).css({ 'width': '5%' });

        $('.to-top').fadeIn(1000);

    } else if (currentHeight >= $('section').eq(3).offset().top && currentHeight < $('section').eq(4).offset().top) {
        if (state)
            $('.link-line').eq(3).css({ 'width': '100%' });
        else
            $('.link-line').eq(3).css({ 'width': '5%' });

        $('.to-top').fadeIn(1000);

    } else if (currentHeight >= $('section').eq(4).offset().top && currentHeight < $('section').eq(5).offset().top) {
        if (state)
            $('.link-line').eq(4).css({ 'width': '100%' });
        else
            $('.link-line').eq(4).css({ 'width': '5%' });

        $('.to-top').fadeIn(1000);

    } else if (currentHeight >= $('section').eq(5).offset().top) {
        if (state)
            $('.link-line').eq(6).css({ 'width': '100%' });
        else
            $('.link-line').eq(6).css({ 'width': '5%' });

        $('.to-top').fadeIn(1000);

    }

    // ------- Counter
    if (!(currentHeight < ($('.services').offset().top) + $('.experience').height()) && temp) {
        console.log('Hello')
        $('.timer').countTo();
        temp = false;
    }

};

$(window).scroll(function() {
    drawLinkLine(!($(window).width() <= 992));
});


// ========== ----- ========== // --> Scroll When Click Link & Draw Link Line <-- // ========== ----- ========== //

$('.nav-link').click(function() {

    let href = $(this).attr('href');
    let section = $(href);
    let sectionHeight = section.offset().top;

    $('html').animate({ scrollTop: sectionHeight + 10 }, 1000);
});

$('.nav-item').hover(function() {

    $('.nav-item').find('.link-line').css({ 'width': '0%' });
    drawLinkLine();

    if (!($(window).width() <= 992))
        $(this).find('.link-line').css({ 'width': '100%' });
    else
        $(this).find('.link-line').css({ 'width': '5%' });

});

$('.nav-item').mouseleave(function() {

    $(this).find('.link-line').css({ 'width': '0%' });
});

// ========== ----- ========== // --> To Top BTN <-- // ========== ----- ========== //

$('.to-top').click(function() {
    $('html').animate({ scrollTop: 0 }, 1000);
});

// ========== ----- ========== // --> Typing (Home Caption) <-- // ========== ----- ========== //
var setCaptionHeight = () => {
    let homeHeight = $('.home').outerHeight();
    let navHeight = $('nav').outerHeight();

    let captionLayerHeight = homeHeight - navHeight;
    $('.home-caption-layer').css({ 'height': `${captionLayerHeight}px` });
};
setCaptionHeight();

var typed = new Typed('.element', {
    strings: ['Designer', 'Developer', 'Freelancer', 'Photographer'],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true,

});

// ========== ----- ========== // --> End Home <-- // ========== ----- ========== //


// ================================================================================ //
// ========== ----- ========== // --> Portfolio Section <-- // ========== ----- ========== //
// ================================================================================ //

// ========== ----- ========== // --> Slider <-- // ========== ----- ========== //

// ========== ----- ========== // --> Click On Img To Open Slider <-- // ========== ----- ========== //
$('.port-item .img-layer img').click(function() {

    currentImg = $(this)[0].currentSrc;
    $('.slider img').attr('src', `${currentImg}`);
    $('.slider img').css('width', `70%`);
    $('.slider').fadeIn(1000, function() {
        $('body').css({ 'overflow': 'hidden' });
        $('.slider').css('display', 'flex');
    });


    let imgs = $('.img-layer img');
    imgs = Array.from(imgs);

    for (let i = 0; i < imgs.length; i++)
        imgsScr.push(imgs[i].currentSrc);

    index = imgsScr.indexOf(currentImg);

});

// ========== ----- ========== // --> Close Slider <-- // ========== ----- ========== //
$('.exit').click(function() {
    $('.slider').fadeOut(1000, function() {
        $('.slider').css('display', 'none');
        $('body').css({ 'overflow': 'visible' });
    });
});

let imgs = $('.img-layer img');
console.log(imgs[0].currentSrc);

// ========== ----- ========== // --> Right Icon <-- // ========== ----- ========== //
$('.slider .to-right').click(function() {

    index++;
    if (index == imgs.length)
        index = 0;

    $('.slider img').attr('src', `${imgsScr[index]}`);
    $('.slider img').css('width', `70%`);

});

// ========== ----- ========== // --> Left Icon <-- // ========== ----- ========== //
$('.slider .to-left').click(function() {
    index--;
    if (index == 0)
        index = imgs.length - 1;

    $('.slider img').attr('src', `${imgsScr[index]}`);
    $('.slider img').css('width', `70%`);

});



// ========== ----- ========== // --> End Portfolio <-- // ========== ----- ========== //

// ================================================================================ //
// ========== ----- ========== // --> Media Query <-- // ========== ----- ========== //
// ================================================================================ //
if ($(window).width() <= 992 && $(window).width() > 789) {}

// ========== ----- ========== // --> End Media Query <-- // ========== ----- ========== //


// ============================================================================================================= //
// ============================================================================================================= //
// ========== ----- ========== // --> End JS Style <-- // ========== ----- ========== //
// ============================================================================================================= //
// ============================================================================================================= //