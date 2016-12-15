function css() {
	var a = $(window).height();
	$(".middle").height(a);
	$(".banna").height(a);
	var lastScrollTop = 0;
	var mleft = $(".Horizontalverticalcenter").width();
	var mtop = $(".Horizontalverticalcenter").height();
	// 水平垂直居中
	$(".Horizontalverticalcenter").css({
		"position":"absolute",
		"top":"50%",
		"left":"50%",
		"margin-top":-mtop/2,
		"margin-left":-mleft/2
	});
	$(".Horizontalverticalcenter").parent().css({"position":"relative"});
	// 小标题居中
	var mar = ($(window).width()-$(".smallnav").width())/2;
	$(".smallnav").css({"margin-left":mar,"margin-right":mar});
	// 作品居中
	var num = Math.floor($(window).width()/$(".works").children('dl').width());
	var Mars = ($(window).width()-455*num)/2;
	$(".works").css({"width":455*num,"margin-left":Mars+10});
	$(".pagelis").width($(".prev").width()+$(".page").width()+$(".nex").width()+1);
}
css();

$("#navtop").children('li').hover(function() {
	$(this).children('a').eq(0).css({"display":"block"}).next('a').css({"display":"none"});
}, function() {
	$(this).children('a').eq(0).css({"display":"none"}).next('a').css({"display":"block"});
});
$(".service").hover(function() {
	$(this).children('p').eq(0).css({"display":"none"}).next().css({"display":"block"});
}, function() {
	$(this).children('p').eq(0).css({"display":"block"}).next().css({"display":"none"});
});
$(".img").hover(function() {
	$(this).children('a').children('.imgxq').stop(true).animate({"bottom":"9px","opacity":"1"}, 500);
}, function() {
	$(this).children('a').children('.imgxq').stop(true).animate({"bottom":"-265px","opacity":"0"}, 500);
});
$(".serer").children('p').children('a').hover(function() {
	$(this).children('img').eq(0).css({"display":"none"}).next('img').eq(1).css({"display":"blcok"})
}, function() {
	$(this).children('img').eq(0).css({"display":"blcok"}).next('img').eq(1).css({"display":"none"})
});
$(".mas").parent().hover(function() {
	$(this).children('.mas').stop(true).animate({"left":"0","opacity":"1"}, 500)
}, function() {
	$(this).children('.mas').stop(true).animate({"left":"100%","opacity":"0"}, 500)
});
$(".smallnav").children('li').eq(0).children('a').addClass('black');
$(".smallnav").children('li').children('a').click(function() {
	$(this).addClass('black').parent('li').siblings().children('a').removeClass('black');
});
$(".page").children('a').click(function() {
	$(this).addClass('next').siblings('a').removeClass('next');
});
$(window).scroll(function () {
	if ($(window).width()>767) {
		if ($(window).scrollTop() > 10) {
			$(".header").css({"background":"rgba(255,255,255,"+$(window).scrollTop()/20+")"});
			$(".header").stop(true).animate({"padding":"0"});
		} else if ($(window).scrollTop() > 200) {
			$(".header").css({"background":"rgba(255,255,255,1)"},200);
		} else if ($(window).scrollTop() <= 10) {
			$(".header").css({"background":"rgba(255,255,255,0.6)"});
			$(".header").stop(true).animate({"padding":"20px 0"},200);
		}
	} else {
		if ($(window).scrollTop() > 10) {
			$(".header").css({"background":"#333"});
			$(".header").stop(true).animate({"padding":"0"});
			$(".gol").stop(true).animate({"top":"0"});
		} else if ($(window).scrollTop() <= 10) {
			$(".header").stop(true).animate({"padding":"20px 0"},200);
			$(".gol").stop(true).animate({"top":"25px"});
		}
	}
});

$(".content").click(function() {
	$(".Mask").html($(this).html());
	$(".Mask").css({"display":"block"})
});

// 移动端效果
var headergol = true;
$(".gol").click(function() {
	if (headergol == true) {
		$(".header").css({"height":"auto"});$(this).html("×");
		headergol = false;
	} else {
		$(".header").animate({"height":"50px"});$(this).html("≡");
		headergol = true;
	}
});

