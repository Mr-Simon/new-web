$(document).ready(function(e) {
	// ====手机端菜单显示=====
	$("#content_mulu").click(function(e){
		$("#content_nav").toggle(500);
		e.stopPropagation();
	});
	// 点击其他地方收起菜单
	$("*").click(function (event) {
		if ($(this).attr("id") != "content_mulu"){
			if ($('#content_nav').css('display') != 'none') {
				$("#content_mulu").click();
				event.stopPropagation();
			}
		}
	});
	// ====手机端菜单显示end=====

	// ====页头按钮====
	$(".out_btn1").hover(
		function(){
			$(this).find("img").attr("src", "/templets/luckystar/images/gfsc_click.png");
		},
		function(){
			$(this).find("img").attr("src", "/templets/luckystar/images/gfsc.png");
		}
	);
	$(".out_btn2").hover(
		function(){
			$(this).find("img").attr("src", "/templets/luckystar/images/zsjm_click.png");
		},
		function(){
			$(this).find("img").attr("src", "/templets/luckystar/images/zsjm.png");
		}
	);
	// ====页头按钮end====
});

// ========页脚固定底部===========
// Window load event used just in case window height is dependant upon images
$(window).bind("load", function() {
	positionFooter();
	//$(window).scroll(positionFooter).resize(positionFooter);
});
//定义positionFooter function
function positionFooter() {
	var footerHeight = 0,
		footerTop = 0,
		$footer = $("#footer");
	//取到div#footer高度
	footerHeight = $footer.height();
	//div#footer离屏幕顶部的距离
	footerTop = ($(window).scrollTop()+$(window).height()-footerHeight)+"px";
	//如果页面内容高度小于屏幕高度，div#footer将绝对定位到屏幕底部，否则div#footer保留它的正常静态定位
	if ( ($(document.body).height()+footerHeight) < $(window).height()) {
		$footer.css({
			position: "absolute",
			top: footerTop,
			width: "100%"
		});
	} else {
		$footer.css({
			position: "static",
			margin: "20px 0 0 0"
		});
	}
}
// ========页脚固定底部 end===========
