let div = document.querySelector(".box");

let frist_box = document.querySelector("#frist_box");
console.log(frist_box)
frist_box.addEventListener("wheel", function (e) {
    //禁止事件默认行为（此处禁止鼠标滚轮行为关联到"屏幕滚动条上下移动"行为）  
    if (e.deltaY > 10) {
        $('.box2').css('display', 'block')
    }
});

let _box_2 = document.querySelector("#box_2");

_box_2.addEventListener("wheel", function (e) {
    //禁止事件默认行为（此处禁止鼠标滚轮行为关联到"屏幕滚动条上下移动"行为）
    if (e.deltaY > 10) {
        $('.box3').css('display', 'block')
    }
});

let _box_3 = document.querySelector("#box_3");

_box_3.addEventListener("wheel", function (e) {
    //禁止事件默认行为（此处禁止鼠标滚轮行为关联到"屏幕滚动条上下移动"行为）  
    if (e.deltaY > 10) {
        $('.box4').css('display', 'block')
    }
});
let _box_4 = document.querySelector("#box_4");

_box_4.addEventListener("wheel", function (e) {
    //禁止事件默认行为（此处禁止鼠标滚轮行为关联到"屏幕滚动条上下移动"行为）  
    if (e.deltaY > 10) {
        $('.box5').css('display', 'block')
    }
});
let _box_5 = document.querySelector("#box_5");

_box_5.addEventListener("wheel", function (e) {
    //禁止事件默认行为（此处禁止鼠标滚轮行为关联到"屏幕滚动条上下移动"行为）  
    if (e.deltaY > 10) {
        $('.box6').css('display', 'block')
    }
});
let _box_6 = document.querySelector("#box_6");

_box_6.addEventListener("wheel", function (e) {
    //禁止事件默认行为（此处禁止鼠标滚轮行为关联到"屏幕滚动条上下移动"行为）  
    if (e.deltaY > 10) {
        $('.box7').css('display', 'block')
    }
});
let _box_7 = document.querySelector("#box_7");

_box_7.addEventListener("wheel", function (e) {
    //禁止事件默认行为（此处禁止鼠标滚轮行为关联到"屏幕滚动条上下移动"行为）  
    if (e.deltaY > 10) {
        $('.box8').css('display', 'block')
    }
});



$('#back').click(function () {
    $('.box').animate({
        scrollLeft: 0,
    }, 1000);
    $('#box_front').css('display', 'block')
})

$('#backTop').click(function () {
    if ($(window).scrollTop() > 0) {
        $("html,body").stop().animate({ scrollTop: 0 }, 600);
    }
})
$('#backTop1').click(function () {
    if ($(window).scrollTop() > 0) {
        $("html,body").stop().animate({ scrollTop: 0 }, 600);
    }
})
$('#backTop2').click(function () {
    if ($(window).scrollTop() > 0) {
        $("html,body").stop().animate({ scrollTop: 0 }, 600);
    }
})
$('#backTop3').click(function () {
    if ($(window).scrollTop() > 0) {
        $("html,body").stop().animate({ scrollTop: 0 }, 600);
    }
})
$('#backTop4').click(function () {
    if ($(window).scrollTop() > 0) {
        $("html,body").stop().animate({ scrollTop: 0 }, 600);
    }
})
$('#backTop5').click(function () {
    if ($(window).scrollTop() > 0) {
        $("html,body").stop().animate({ scrollTop: 0 }, 600);
    }
})
$('#backTop6').click(function () {
    if ($(window).scrollTop() > 0) {
        $("html,body").stop().animate({ scrollTop: 0 }, 600);
    }
})
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() == 0) {
            $('.box2').css('display', 'none')
            $('.box3').css('display', 'none')
            $('.box4').css('display', 'none')
            $('.box5').css('display', 'none')
            $('.box6').css('display', 'none')
            $('.box7').css('display', 'none')
            $('.box8').css('display', 'none')
        }
        if ($(this).scrollTop() > 900) {
            $('.big-fiexd').css('position', 'fixed')
        } else {
            $('.big-fiexd').css('position', 'relative')
        }
        if ($(this).scrollTop() > 1700) {
            $('.big-fiexd2').css('display', 'none')
            $('.text-left').css('display', 'block')

        } else {
            $('.big-fiexd2').css('display', 'block')
            $('.text-left').css('display', 'none')
        }
    });

})
$('.aboutMe').hover(function () {
    $('.aboutMe').html('About me')
}
    , function () {
        $('.aboutMe').html('back to the far left')
    }
)