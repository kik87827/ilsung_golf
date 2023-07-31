window.addEventListener("load", () => {
	headerPcMenu();
	layoutCommon();
})
$(window).on("load",function(){
	commonResize();
	posLayerEvent();
});

document.addEventListener("DOMContentLoaded", function () {
	commonInit();
});


function commonResize(){
	var $window_width = 0;
	$(window).on("resize",function(){
		if($window_width == $(window).width()){
			return;
		}
		posLayerResize();
	}).resize();
}

function commonInit() {
	let touchstart = "ontouchstart" in window;
	let userAgent = navigator.userAgent.toLowerCase();

	if (touchstart) {
		browserAdd("touchmode");
	}
	if (userAgent.indexOf('samsung') > -1) {
		browserAdd("samsung");
	}

	if (navigator.platform.indexOf('Win') > -1 || navigator.platform.indexOf('win') > -1) {
		browserAdd("window");
	}

	if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
		// iPad or iPhone
		browserAdd("ios");
	}


	function browserAdd(opt) {
		document.querySelector("html").classList.add(opt);
	}
}


function headerPcMenu() {
	const header_wrap = document.querySelector(".header_wrap");
	const btn_header_total = document.querySelector("[name='pcmenu']");
	const global_menu_layer = document.querySelector(".global_menu_layer");
	const gmenu_toggle = document.querySelectorAll(".gmenu_toggle");
	const tmenu_one = document.querySelectorAll(".tmenu_one");
	const mobile_total_layer = document.querySelector(".mobile_total_layer");
	const gnb_twodepth_layer = document.querySelector(".gnb_twodepth_layer");
	const mobile_total_menu = document.querySelectorAll("[name='totalmenu']");
	const btn_mb_total_close = document.querySelector(".btn_mb_total_close");
	const hgroup_nav_menu = document.querySelectorAll(".hgroup_nav_menu");
	const hgroup_gnb_row = document.querySelector(".hgroup_gnb_row");
	const hgroup_main_row = document.querySelector(".hgroup_main_row");
	const bodyDom = document.querySelector("body");
	const htmlDom = document.querySelector("html");
	if (btn_header_total === null || global_menu_layer === null) { return; }


	// header_wrap.addEventListener("mouseleave",()=>{
	// 	global_menu_layer.classList.remove("active");
	// });

	btn_header_total.addEventListener("click", (e) => {
		e.preventDefault();
		const thisTarget = e.currentTarget;
		thisTarget.classList.toggle("active");
		global_menu_layer.classList.toggle("active");
		if(!!gnb_twodepth_layer){
			gnb_twodepth_layer.classList.remove("active");
		}
	});

	if (!!gmenu_toggle) {
		gmenu_toggle.forEach((item) => {
			item.addEventListener("click", (e) => {
				e.preventDefault();
				const thisTarget = e.currentTarget;
				thisTarget.closest(".gmenu_item").classList.toggle("active");
			});
		});
	}

	if(!!hgroup_nav_menu){
		hgroup_nav_menu.forEach((item)=>{
			item.addEventListener("mouseenter",(e)=>{
				if(!!gnb_twodepth_layer){
					gnb_twodepth_layer.classList.add("active");
				}
			});
		});
	}

	if(!!hgroup_gnb_row){
		hgroup_gnb_row.addEventListener("mouseleave",()=>{
			if(!!gnb_twodepth_layer){
				gnb_twodepth_layer.classList.remove("active");
			}
		});
	}

	if(!!hgroup_main_row){
		hgroup_main_row.addEventListener("mouseleave",()=>{
			if(!!gnb_twodepth_layer){
				gnb_twodepth_layer.classList.remove("active");
			}
		});
	}

	if(!!tmenu_one){
		tmenu_one.forEach((item) => {
			item.addEventListener("click", (e) => {
				e.preventDefault();
				const thisTarget = e.currentTarget;
				thisTarget.closest(".tmenu_toggle_item").classList.toggle("active");
			});
		});
	}

	if(!!mobile_total_menu){
		mobile_total_menu.forEach((item) => {
			item.addEventListener("click", (e) => {
				e.preventDefault();
				if(!!mobile_total_layer){
					mobile_total_layer.classList.add("active");
				}
				bodyDom.classList.add("touchDis")
			});
		});
	}

	if(!!btn_mb_total_close){
		btn_mb_total_close.addEventListener("click", (e) => {
			e.preventDefault();
			mobile_total_layer.classList.remove("active");
			bodyDom.classList.remove("touchDis")
		});
	}
}

function layoutCommon(){
	const header_wrap = document.querySelector(".header_wrap");
	const middle_wrap = document.querySelector(".middle_wrap");
	const footer_wrap = document.querySelector(".footer_wrap");
	let header_wrap_height = 0;
	let footer_wrap_height = 0;
	const bodyDom = document.querySelector("body");
	const htmlDom = document.querySelector("html");

	minHeightFunc();
	btnTop();

	let windowWidth = window.innerWidth;
	window.addEventListener("resize",()=>{
		if(window.innerWidth !== windowWidth){
			minHeightFunc();
		}
		windowWidth = window.innerWidth;
	});

	function minHeightFunc(){
		if(!!middle_wrap){
			header_wrap_height = !!header_wrap ? header_wrap.getBoundingClientRect().height : 0;
			footer_wrap_height = !!footer_wrap ? footer_wrap.getBoundingClientRect().height : 0;
			middle_wrap.style.minHeight = 'calc(100vh - '+(footer_wrap_height+header_wrap_height) +'px)';
		}
	}

	function btnTop(){
		let btn_gotop = document.querySelector(".btn_pagetop");
		if(btn_gotop ===null){return;}
		btn_gotop.addEventListener("click",(e)=>{
			e.preventDefault();
			window.scrollTo(0,0);
		});
	}
}


function mainVisual(){
	let mv_obj = null;
	const mv_wrap = document.querySelector(".main_visual_wrap");
	const mv_slide = mv_wrap.querySelectorAll(".swiper-slide");
	let btn_mv_stop = null;
	let btn_mv_play = null;

	heightControl();
	if(mv_slide.length>1){
		mv_obj = new Swiper(".main_visual_swiper", {
			speed : 1000,
			loop : true,
			autoplay: {
				delay: 2500,
				disableOnInteraction: false
			},
			pagination: {
				clickable: true,
				el: ".swiper-pagination.main_visual_paging",
			},
            navigation: {
                nextEl: '.main_visual_wrap .btn_mv_control.next_control',
                prevEl: '.main_visual_wrap .btn_mv_control.prev_control',
            },
			effect: 'fade',
			fadeEffect: {
				crossFade: true
			}
		});
		btn_mv_stop = document.querySelector(".btn_mv_stop");
		btn_mv_play = document.querySelector(".btn_mv_play");

		btn_mv_play.addEventListener("click", (e) => {
			e.preventDefault();
			mv_obj.autoplay.start();
		},false);

		btn_mv_stop.addEventListener("click", (e) => {
			e.preventDefault();
			mv_obj.autoplay.stop();
		},false);
	}else{
		mv_wrap.classList.add("nodata_type");
	}
	
	
	window.addEventListener("resize",()=>{
		heightControl();
	});

	function heightControl(){
		let windowHeight = window.innerHeight;
		let controlHeight = 0;
		if(windowHeight<635){
			controlHeight = 635;
		}else{
			controlHeight = windowHeight;
		}
		mv_wrap.style.height = controlHeight + "px";
	}
}


function mainVisualTypeb(){
	let mv_obj = null;
	const mv_wrap = document.querySelector(".main_visual_wrap");
	const mv_slide = mv_wrap.querySelectorAll(".swiper-slide");
	let btn_mv_stop = null;
	let btn_mv_play = null;

	if(mv_slide.length>1){
		mv_obj = new Swiper(".main_visual_swiper", {
			speed : 1000,
			loop : true,
			autoplay: {
				delay: 2500,
				disableOnInteraction: false
			},
			pagination: {
				clickable: true,
				el: ".swiper-pagination.main_visual_paging",
			},
            navigation: {
                nextEl: '.main_visual_wrap .btn_mv_control.next_control',
                prevEl: '.main_visual_wrap .btn_mv_control.prev_control',
            },
			effect: 'fade',
			fadeEffect: {
				crossFade: true
			}
		});
		btn_mv_stop = document.querySelector(".btn_mv_stop");
		btn_mv_play = document.querySelector(".btn_mv_play");

		btn_mv_play.addEventListener("click", (e) => {
			e.preventDefault();
			mv_obj.autoplay.start();
		},false);

		btn_mv_stop.addEventListener("click", (e) => {
			e.preventDefault();
			mv_obj.autoplay.stop();
		},false);
	}else{
		mv_wrap.classList.add("nodata_type");
	}
}


function mainVisualTypec(){
	let mv_obj = null;
	const mv_wrap = document.querySelector(".main_visual_wrap");
	const mv_slide = mv_wrap.querySelectorAll(".swiper-slide");
	let btn_mv_stop = null;
	let btn_mv_play = null;

	if(mv_slide.length>1){
		mv_obj = new Swiper(".main_visual_swiper", {
			speed : 1000,
			loop : true,
			autoplay: {
				delay: 2500,
				disableOnInteraction: false
			},
			pagination: {
				clickable: true,
				el: ".swiper-pagination.main_visual_paging",
			},
            navigation: {
                nextEl: '.main_visual_wrap .btn_mv_control.next_control',
                prevEl: '.main_visual_wrap .btn_mv_control.prev_control',
            },
			effect: 'fade',
			fadeEffect: {
				crossFade: true
			}
		});
		btn_mv_stop = document.querySelector(".btn_mv_stop");
		btn_mv_play = document.querySelector(".btn_mv_play");

		btn_mv_play.addEventListener("click", (e) => {
			e.preventDefault();
			mv_obj.autoplay.start();
		},false);

		btn_mv_stop.addEventListener("click", (e) => {
			e.preventDefault();
			mv_obj.autoplay.stop();
		},false);
	}else{
		mv_wrap.classList.add("nodata_type");
	}
}

function mainVisualTyped(){
	let mv_obj = null;
	const mv_wrap = document.querySelector(".mv_vboth_zone");
	const mv_slide = mv_wrap.querySelectorAll(".swiper-slide");
	let btn_mv_stop = null;
	let btn_mv_play = null;

	if(mv_slide.length>1){
		mv_obj = new Swiper(".mvbox_swiper", {
			speed : 1000,
			loop : true,
			autoplay: {
				delay: 2500,
				disableOnInteraction: false
			},
			pagination: {
				clickable: true,
				el: ".swiper-pagination.main_visual_paging",
			},
            navigation: {
                nextEl: '.mv_vboth_zone .btn_mv_control.next_control',
                prevEl: '.mv_vboth_zone .btn_mv_control.prev_control',
            }
		});
		btn_mv_stop = document.querySelector(".btn_mv_stop");
		btn_mv_play = document.querySelector(".btn_mv_play");

		btn_mv_play.addEventListener("click", (e) => {
			e.preventDefault();
			mv_obj.autoplay.start();
		},false);

		btn_mv_stop.addEventListener("click", (e) => {
			e.preventDefault();
			mv_obj.autoplay.stop();
		},false);
	}else{
		mv_wrap.classList.add("nodata_type");
	}
}


function posLayerEvent(){
	var posCallBtn = $("[data-poslayer]");
	var poslayer_z = $(".poslayer_z");
	
	$("body").append(poslayer_z);

	
	
	posCallBtn.on("click",function(e){
		var $this = $(this),
			$t_t = $($this.attr("data-poslayer"));
		e.preventDefault();
		posLayerShow($t_t,$this);
	});
	poslayer_z.on("click",".layerclose",function(e){
		e.preventDefault();
		posLayerHide($(this).parents(".poslayer_z"));
	});

	$(document).on("click",".btn_psubmit",function(e){
		e.preventDefault();
		let thisParent = $(this).parents(".poslayer_z");
		let targetCols = $(`[data-poslayer='#${thisParent.attr("id")}']`);
		let activeDate = thisParent.attr("data-date");
		let activeText = thisParent.find(".product_choice_depth.active,.choice_item.active").text();

		

		if(thisParent.attr("data-date") !== undefined){
			targetCols.find(".search_form_text_result").html(activeDate);
			targetCols.addClass("result_mode");
		}else{
			if(activeText.length>0){
				targetCols.find(".search_form_text_result,.mv_vboth_wbox_text,.mv_form_text").html(activeText);
				targetCols.addClass("result_mode");
			}
		}
		posLayerHide(thisParent);
	});

	$(document).on("click",".choice_item",function(e){
		e.preventDefault();
		$(this).parents("li").siblings().find(".choice_item").removeClass("active");
		$(this).addClass("active");
	});

	$(document).on("click",".product_choice_depth",function(e){
		e.preventDefault();
		$(this).parents(".product_choice_item_wrap").find(".product_choice_depth").removeClass("active");
		$(this).addClass("active");
	});

	$(document).on("click",function(e){
		if (!$(e.target).parents("[data-poslayer] , .poslayer_z , .layer_in_control").length && !$(e.target).is("[data-poslayer]") && !$(e.target).is(".layer_in_control")){
			posLayerHide($(".poslayer_z.active"));
		}
	});
}

function posLayerShow(target,btn){
	var poslayer_z = $(".poslayer_z");
	var target = $(target);
	
	$("body").append(target);
	poslayer_z.removeClass("active");
	target.addClass("active");
	posLayerPos(target,btn);
}

function posLayerResize(){
	var poslayer_z = $(".poslayer_z");
	if (poslayer_z.length){
		poslayer_z.each(function(){
			posLayerResizeAction($(this));
		});
	}
}

function posLayerPos(target,btn){
	var $target = $(target);
	var $posTopMargin = $target.attr("data-topmargin")>0 ? Number($target.attr("data-topmargin")) : 20;
	var $posTopMobileMargin = $target.attr("data-topMobileMargin")>0 ? Number($target.attr("data-topMobileMargin")) : 0;
	var $target_tvitdep = $target.find(".tvitdep_vlist_wrap");
	var $target_tvitdep_pos = $target_tvitdep.length ? $target_tvitdep.offset().left : 0;
	var $target_tvitdep_wid = $target_tvitdep.length ? $target_tvitdep.outerWidth() : 0;
	var $targetWid = $target.length ? $target.outerWidth() : 0;
	var $btn = $(btn);
	var $btnIndex = $btn.index();
	var $btnPosTop = $btn.length ? $btn.offset().top : 0;
	var $btnPosHeight = $btn.length ? $btn.outerHeight() : 0;
	var $btnPosLeft = $btn.length ? $btn.offset().left : 0;
	var $btnWid = $btn.length ? $btn.outerWidth() : 0;
	var elseMargin = 0;

	
	$target.css({"top":"", "left" : "" , "right" : "" , "width" : ""});
	// if ($targetWid + $btnPosLeft > $(window).width()){
	// 	$target.css({
	// 		"top": $btnPosTop + $btnPosHeight + 20,
	// 		"left": "auto",
	// 		"right" : 20
	// 	});
	// }else{
	// 	$target.css({
	// 		"top": $btnPosTop + $btnPosHeight + 20,
	// 		"left": $btnPosLeft
	// 	});
	// }

	if($(window).width()<1024){
		$posTopMargin = $posTopMobileMargin; 
	}

	$target.css({
		"top": $btnPosTop + $btnPosHeight + $posTopMargin
	});

	if($target.hasClass("has_leftpos")){
		if ($targetWid + $btnPosLeft > $(window).width()){
			$target.css({
				"top": $btnPosTop + $btnPosHeight + $posTopMargin,
				"left": "auto",
				"right" : 20
			});
		}else{
			$target.css({
				"left": $btnPosLeft
			});
		}
	}

	if($(window).width()<1279){
		$target.css({
			"top": $btnPosTop + $btnPosHeight + $posTopMargin
		});
	}
	
}

function posLayerResizeAction(target){
	var $target = $(target);
	var $posTopMobileMargin = $target.attr("data-topMobileMargin")>0 ? Number($target.attr("data-topMobileMargin")) : 0;
	var $posTopMargin = $target.attr("data-topmargin")>0 ? Number($target.attr("data-topmargin")) : 20;
	var $target_tvitdep = $target.find(".tvitdep_vlist_wrap");
	var $target_tvitdep_pos = $target_tvitdep.length ? $target_tvitdep.offset().left : 0;
	var $target_tvitdep_wid = $target_tvitdep.length ? $target_tvitdep.outerWidth() : 0;
	var $targetWid = $target.length ? $target.outerWidth() : 0;
	var $btn = $("[data-poslayer='#" + $target.attr("id") +"']");
	var $btnIndex = $btn.index();
	var $btnPosTop = $btn.length ? $btn.offset().top : 0;
	var $btnPosHeight = $btn.length ? $btn.outerHeight() : 0;
	var $btnPosLeft = $btn.length ? $btn.offset().left : 0;
	var $btnWid = $btn.length ? $btn.outerWidth() : 0;
	$target.css({"top":"", "left" : "" , "right" : "" , "width" : ""});
	// if ($targetWid + $btnPosLeft > $(window).width()) {
	// 	$target.css({
	// 		"top": $btnPosTop + $btnPosHeight + 20,
	// 		"left": "auto",
	// 		"right": 20
	// 	});
	// } else {
	// 	$target.css({
	// 		"top": $btnPosTop + $btnPosHeight + 20,
	// 		"left": $btnPosLeft
	// 	});
	// }

	if($(window).width()<1024){
		$posTopMargin = $posTopMobileMargin; 
	}

	$target.css({
		"top": $btnPosTop + $btnPosHeight + $posTopMargin
	});

	if($target.hasClass("has_leftpos")){
		if ($targetWid + $btnPosLeft > $(window).width()){
			$target.css({
				"top": $btnPosTop + $btnPosHeight + $posTopMargin,
				"left": "auto",
				"right" : 20
			});
		}else{
			$target.css({
				"left": $btnPosLeft
			});
		}
	}
	
	if($(window).width()<1279){
		$target.css({
			"top": $btnPosTop + $btnPosHeight + $posTopMargin
		});
	}
}

function posLayerHide(target){
	var target = $(target) || target;
	target.removeClass("active");
}


function productTabCont(){
	const product_tabmenu = document.querySelectorAll(".product_tabmenu");
	let product_tabActive = document.querySelector(".product_tabmenu.active");
	let product_contActive = document.querySelector(".product_tabcont.active");
	product_tabmenu.forEach((item)=>{
		item.addEventListener("click",(e)=>{
			e.preventDefault();
			const thisTarget = e.currentTarget;
			const thisTargetCont = document.querySelector(thisTarget.getAttribute("href"));

			if(product_tabActive){
				product_tabActive.classList.remove("active");
			}
			thisTarget.classList.add("active");

			if(!!thisTargetCont){
				if(product_contActive){
					product_contActive.classList.remove("active");
				}
				thisTargetCont.classList.add("active");
				product_contActive = thisTargetCont;
			}

			product_tabActive = thisTarget;
		})
	});
}