window.addEventListener("load", () => {
	headerMenu();
	layoutCommon();
})
$(window).on("load",function(){
	commonResize();
	posLayerEvent();
	setVh();
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
		setVh();
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

	
	if($(".dimbg").length === 0){
		$("body").append("<div class='dimbg' />")
	}
}


function headerMenu() {
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
	const mb_total_quick_slide = document.querySelectorAll(".mb_total_quick_list .swiper-slide");
	const bodyDom = document.querySelector("body");
	const htmlDom = document.querySelector("html");
	let windowWidth = 0;

	let mbquickObj = null;
	if (btn_header_total === null || global_menu_layer === null) { return; }


	// header_wrap.addEventListener("mouseleave",()=>{
	// 	global_menu_layer.classList.remove("active");
	// });

	btn_header_total.addEventListener("click", (e) => {
		e.preventDefault();
		const thisTarget = e.currentTarget;
		thisTarget.classList.toggle("active");
		global_menu_layer.classList.toggle("active");
		textHeightResize2(global_menu_layer.querySelectorAll(".gmenu_one"));
		if(!!gnb_twodepth_layer){
			gnb_twodepth_layer.classList.remove("active");
		}
	});


	window.addEventListener("resize",()=>{
		if(windowWidth !== window.innerWidth){
			if(window.innerWidth < 1024){
				mobile_total_layer.classList.remove("active");
				bodyDom.classList.remove("touchDis")
			}
		}
		windowWidth = window.innerWidth;
	})

	if (!!gmenu_toggle) {
		gmenu_toggle.forEach((item) => {
			item.addEventListener("click", (e) => {
				e.preventDefault();
				const thisTarget = e.currentTarget;
				thisTarget.closest(".gmenu_item").classList.toggle("active");
				textHeightResize2(thisTarget.closest(".gmenu_item").querySelectorAll(".gmenu_one"));
			});
		});
	}

	if(!!hgroup_nav_menu){
		hgroup_nav_menu.forEach((item)=>{
			item.addEventListener("mouseenter",(e)=>{
				if(!!gnb_twodepth_layer){
					gnb_twodepth_layer.classList.add("active");
					textHeightResize(".gnb_twodepth_layer .gmenu_one");
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
				
				mbQuickMenu();
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

	function mbQuickMenu(){
		if(mb_total_quick_slide.length>1){
			if(mbquickObj == null){
				mbquickObj = new Swiper(".mb_total_quick_wrap", {
					speed : 1000, 
					slidesPerView: 4,
					slidesPerGroup : 4,
					freeMode: false,
					slidesPerGroupAuto : false,
					loop : false,
					pagination: {  
						el: ".mb_total_quick_wrap .swiper-pagination",
						clickable: true
					}
				});
			}
		}
	}
}

function layoutCommon(){
	const header_wrap = document.querySelector(".header_wrap");
	const middle_wrap = document.querySelector(".middle_wrap");
	const footer_wrap = document.querySelector(".footer_wrap");
	const floating_layer = document.querySelector(".floating_layer");
	let header_wrap_height = 0;
	let footer_wrap_height = !!footer_wrap ? footer_wrap.getBoundingClientRect().height : 0;
	const bodyDom = document.querySelector("body");
	const htmlDom = document.querySelector("html");
	let scrollend = bodyDom.scrollHeight - window.innerHeight;

	minHeightFunc();
	btnTop();

	let windowWidth = window.innerWidth;
	window.addEventListener("resize",()=>{
		if(window.innerWidth !== windowWidth){
			minHeightFunc();
			footer_wrap_height = !!footer_wrap ? footer_wrap.getBoundingClientRect().height : 0;
		}
		windowWidth = window.innerWidth;
	});

	scrollFloating();
	window.addEventListener("scroll",()=>{
		scrollFloating();
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

	function scrollFloating(){
		if(!floating_layer){return;}
		if(scrollend <= window.scrollY){
			floating_layer.style.display = 'none';
		}else{
			floating_layer.style.display = 'block';
		}
	}
}



function setVh() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    function action() {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    action();
  };

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
		// btn_search_result_reset
		if($(e.target).hasClass("btn_search_result_reset")){return;}
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
		let activeText = thisParent.find(".product_choice_depth.active,.choice_item.active,.product_choice_one.active").text();

		

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

	$(document).on("click",".btn_search_result_reset",function(e){
		e.preventDefault();
		e.stopPropagation();
		
		$(this).parents(".search_field_target").removeClass("result_mode");
		$(this).parents(".search_field_target").find(".search_form_text_result").text("");
	});

	$(document).on("click",".choice_item",function(e){
		e.preventDefault();
		$(this).parents("li").siblings().find(".choice_item").removeClass("active");
		$(this).addClass("active");
	});

	$(document).on("click",".product_choice_depth,.product_choice_one",function(e){
		e.preventDefault();
		$(this).parents(".pcont_w").find(".product_choice_depth,.product_choice_one").removeClass("active");
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
	$("html").addClass("dim_active");
	$(".dimbg").addClass("active");
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
	

	if($target.find(".product_choice_one").length){
		textHeightResize(".product_choice_one");
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

	if($target.find(".product_choice_one").length){
		textHeightResize(".product_choice_one");
	}
}

function posLayerHide(target){
	var target = $(target) || target;
	target.removeClass("active");
	$("html").removeClass("dim_active");
	$(".dimbg").removeClass("active");
}


function textHeightResize(target){
	const targetDom = $(target) || target;

	action();

	window.addEventListener("resize",()=>{
		action();
	})

	function action(){
		targetDom.css({"height" : ""});
		let arrayHeight = [];
		targetDom.each(function(){
			arrayHeight.push($(this).height());
		});
		targetDom.css({"height" : Math.max.apply(null,arrayHeight)});
	}
}

function textHeightResize2(target){
	const targetDom = target;

	action();

	window.addEventListener("resize",()=>{
		action();
	})

	function action(){
		targetDom.forEach((item) => {
			item.removeAttribute("style");
		})
		let arrayHeight = [];
		targetDom.forEach((item) => {
			arrayHeight.push(item.getBoundingClientRect().height);
		})
		targetDom.forEach((item) => {
			item.style.height = Math.max.apply(null,arrayHeight)+"px";
		})
	}
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


function filterToggleCont(){
	const pcont_toggle_bar = document.querySelectorAll(".pcont_toggle_bar");
	if(!!pcont_toggle_bar){
		pcont_toggle_bar.forEach((item)=>{
			item.addEventListener("click",(e)=>{
				e.preventDefault();
				const thisTarget = e.currentTarget;
				thisTarget.closest(".pcont_toggle_item").classList.toggle("active");
			});
		});
	}
}



function multiRange(target){
    let multi_range_z = document.querySelector(target);
	let inputLeft = multi_range_z.querySelector(".input-left"); 
	let inputRight = multi_range_z.querySelector(".input-right"); 
	let thumbLeft = multi_range_z.querySelector(".slider > .thumb.left"); 
	let thumbRight = multi_range_z.querySelector(".slider > .thumb.right"); 
	let range = multi_range_z.querySelector(".slider > .range");
	let setLeftValue = () => { 
		const _this = inputLeft; 
		const [min, max] = [parseInt(_this.min), parseInt(_this.max)]; 
		
		// 교차되지 않게, 1을 빼준 건 완전히 겹치기보다는 어느 정도 간격을 남겨두기 위해. 
		_this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1); 
		
		// input, thumb 같이 움직이도록 
		const percent = ((_this.value - min) / (max - min)) * 100; 
		thumbLeft.style.left = percent + "%"; 
		range.style.left = percent + "%"; 
	}; 
	let setRightValue = () => { 
		const _this = inputRight; 
		const [min, max] = [parseInt(_this.min), parseInt(_this.max)]; 
		
		// 교차되지 않게, 1을 더해준 건 완전히 겹치기보다는 어느 정도 간격을 남겨두기 위해. 
		_this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1); 
		
		// input, thumb 같이 움직이도록 
		const percent = ((_this.value - min) / (max - min)) * 100; 
		thumbRight.style.right = 100 - percent + "%"; 
		range.style.right = 100 - percent + "%"; 
	}; 
	
	inputLeft.addEventListener("input", setLeftValue); 
	inputRight.addEventListener("input", setRightValue);
}


// function multiRange(){
//     let multi_range_z = document.querySelectorAll(".multi_range_z");
//     multi_range_z.forEach(function(elem,index){
//         let this_elem = elem;
//         let inputLeft = this_elem.querySelector(".input-left"); 
//         let inputRight = this_elem.querySelector(".input-right"); 
//         let thumbLeft = this_elem.querySelector(".slider > .thumb.left"); 
//         let thumbRight = this_elem.querySelector(".slider > .thumb.right"); 
//         let range = this_elem.querySelector(".slider > .range");
//         let setLeftValue = () => { 
//             const _this = inputLeft; 
//             const [min, max] = [parseInt(_this.min), parseInt(_this.max)]; 
            
//             // 교차되지 않게, 1을 빼준 건 완전히 겹치기보다는 어느 정도 간격을 남겨두기 위해. 
//             _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1); 
            
//             // input, thumb 같이 움직이도록 
//             const percent = ((_this.value - min) / (max - min)) * 100; 
//             thumbLeft.style.left = percent + "%"; 
//             range.style.left = percent + "%"; 
//         }; 
//         let setRightValue = () => { 
//             const _this = inputRight; 
//             const [min, max] = [parseInt(_this.min), parseInt(_this.max)]; 
            
//             // 교차되지 않게, 1을 더해준 건 완전히 겹치기보다는 어느 정도 간격을 남겨두기 위해. 
//             _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1); 
            
//             // input, thumb 같이 움직이도록 
//             const percent = ((_this.value - min) / (max - min)) * 100; 
//             thumbRight.style.right = 100 - percent + "%"; 
//             range.style.right = 100 - percent + "%"; 
//         }; 
        
//         inputLeft.addEventListener("input", setLeftValue); 
//         inputRight.addEventListener("input", setRightValue);
//     });

// }


function quickMenu(){
	const quick_data_layer_zone = document.querySelector(".quick_data_layer_zone");
	const parent_pos_item = document.querySelector(quick_data_layer_zone.getAttribute("data-initpos"));
	let parent_pos = !!parent_pos_item ? parent_pos_item.getBoundingClientRect().top + window.scrollY : 0;
	const btn_quick_topgo = document.querySelector(".btn_quick_topgo");
	window.addEventListener("scroll",()=>{
		parent_pos = !!parent_pos_item ? parent_pos_item.getBoundingClientRect().top + window.scrollY : 0;

		if(window.scrollY > parent_pos){
			quick_data_layer_zone.classList.add("fixed");
		}else{
			quick_data_layer_zone.classList.remove("fixed");
		}
	});

	if(!!btn_quick_topgo){
		btn_quick_topgo.addEventListener("click",function(e){
			e.preventDefault();
			setTimeout(()=>{
				window.scrollTo(0,0);
			},30);
		});
	}
}





function stickyTab() {
    const detailAnchorContentsWrap = document.querySelector(".detail_anchor_contents_wrap");
    const stickyTabsContainerZone = document.querySelector(".sticky_tabs_container_zone");
    const tabContents = document.querySelectorAll(".tab_contents");
    const stickyTabsInnerWrap = document.querySelector(".sticky_tabs_inner_wrap");
    const stickyTabsInner = document.querySelector(".sticky_tabs_inner");
    const stickyTab = document.querySelectorAll(".sticky_tab");
    const stickyTabFirst = document.querySelector(".sticky_tab:first-child");
    let detailAnchorContentsWrapPos = !!detailAnchorContentsWrap ? detailAnchorContentsWrap.getBoundingClientRect().top + window.scrollY : 0;
    let getPosValue = getLayerPos();
    let getPosHeight = getHeight();
    let getPosArrayValue = getPosArray();
    let getWindowWid = window.innerWidth;
    let activeItem = null;
    let btnClickIs = false;
    window.addEventListener("resize", () => {
        if (getWindowWid !== window.innerWidth) {
            getPosValue = getLayerPos();
            getPosHeight = getHeight();
            getPosArrayValue = getPosArray();
            detailAnchorContentsWrapPos = !!detailAnchorContentsWrap ? detailAnchorContentsWrap.getBoundingClientRect().top + window.scrollY : 0;
        }
        getWindowWid = window.innerWidth;
    });


    window.addEventListener("touchstart", () => {
        btnClickIs = false;
    });

    window.addEventListener("mousewheel", () => {
        btnClickIs = false;
    });

    window.addEventListener("mousedown", () => {
        btnClickIs = false;
    });

    window.addEventListener("scroll", () => {
        scrollAction();
    });

    window.addEventListener("touchmove", () => {
        scrollAction();
    });

    
    stickyTab.forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const thisTarget = e.currentTarget;
            const thisScrollPosTop = document.querySelector(thisTarget.getAttribute("href")).getBoundingClientRect().top;
            const thisScrollPos = (thisScrollPosTop + window.scrollY - getPosHeight);
            activeTab(thisTarget);
            if (!!thisScrollPos) {
                window.scrollTo({
                    top: thisScrollPos,
                    left: 0,
                    behavior: "smooth",
                });
            }
            btnClickIs = true;
        });
    });

	
	/* 작업용 */
	// let clickEvent = new Event('click');
	// stickyTab[0].classList.remove("active");
	// activeTab(stickyTab[5])
	// stickyTab[5].dispatchEvent(clickEvent);
	/* // 작업용 */

    function getLayerPos() {
        let localTop = stickyTabsContainerZone.getBoundingClientRect().top;
        return localTop -(stickyTabsInnerWrap.getBoundingClientRect().height/2) + window.scrollY;
    }

    function getPosArray() {
        let posArray = [];
        if(!!tabContents){
            tabContents.forEach((item)=>{
                let eachTop = item.getBoundingClientRect().top;
                posArray.push(eachTop + window.scrollY - getPosHeight);
            });
        }
        return posArray;
    }


    function getHeight() {
        return stickyTabsInner.getBoundingClientRect().height + 10;
    }

    function scrollAction() {
        if (getPosValue < window.scrollY) {
            stickyTabsInnerWrap.classList.add("fixed");
            stickyTabsInnerWrap.style.top = '0px';
        } else {
            stickyTabsInnerWrap.classList.remove("fixed");
            stickyTabsInnerWrap.style.top = '0px';
            if(window.scrollY <= detailAnchorContentsWrapPos){
                //firstActive();
            }
        }
        if(!btnClickIs){
            stickyTab.forEach((item,index) => {
                if(getPosArrayValue[index] <= window.scrollY){
                    activeTab(item);
                }
            });
        }
    }

    function activeTab(target){
        if (activeItem) {
            activeItem.classList.remove("active");
        }
        target.classList.add("active");
        activeItem = target;
    }
}





function stickyPanel() {
    const detailCalculationZone = document.querySelector(".detail_calculation_zone");
    const detailCalculationWrap = document.querySelector(".detail_calculation_wrap");
    const detailCalculationInnerWrap = document.querySelector(".detail_calculation_inner_wrap");
    const stickyTabsInner = document.querySelector(".sticky_tabs_inner");
    const footerWrap = document.querySelector(".footer_wrap");
    const footerWrapPos = !!footerWrap ? footerWrap.getBoundingClientRect().top + window.scrollY : 0;
    const footerWrapHeight = !!footerWrap ? footerWrap.getBoundingClientRect().height : 0;
    let detailCalculationZonePos = !!detailCalculationZone ? detailCalculationZone.getBoundingClientRect().top + window.scrollY : 0;
    let getWindowWid = window.innerWidth;
    window.addEventListener("resize", () => {
        if (getWindowWid !== window.innerWidth) {
            detailCalculationZonePos = !!detailCalculationZone ? detailCalculationZone.getBoundingClientRect().top + window.scrollY : 0;
        }
        getWindowWid = window.innerWidth;
    });


    window.addEventListener("scroll", () => {
        scrollAction();
    });

    window.addEventListener("touchmove", () => {
        scrollAction();
    });

    function scrollAction() {
        if (detailCalculationZonePos < window.scrollY) {
            detailCalculationWrap.classList.add("fixed");
			if(footerWrapPos - window.innerHeight - footerWrapHeight < window.scrollY){
				detailCalculationWrap.classList.add("bottom");
			}else{
				detailCalculationWrap.classList.remove("bottom");
			}
        } else {
            detailCalculationWrap.classList.remove("fixed");
        }

		
    }
}


/* 상세 비쥬얼 */
function detailVisualA(){
	let detail_mv_obj = null;
	const detail_mv_wrap = document.querySelector(".detail_visual_wrap");
	const detail_mv_slide = detail_mv_wrap.querySelectorAll(".swiper-slide");
	let btn_d_mv_stop = null;
	let btn_d_mv_play = null;

	if(detail_mv_slide.length>1){
		detail_mv_obj = new Swiper(".detail_mv_swiper", {
			speed : 1000,
			loop : true,
			centeredSlides: true,
			slidesPerView: 'auto',
			autoplay: {
				delay: 2500,
				disableOnInteraction: false
			},
			pagination: {
				clickable: true,
				el: ".detail_visual_wrap .swiper-pagination.d_mv_paging",
			},
            navigation: {
                nextEl: '.detail_visual_wrap .btn_d_mv_control.next',
                prevEl: '.detail_visual_wrap .btn_d_mv_control.prev',
            }
		});
		btn_d_mv_stop = document.querySelector(".btn_d_mv_stop");
		btn_d_mv_play = document.querySelector(".btn_d_mv_play");

		btn_d_mv_play.addEventListener("click", (e) => {
			e.preventDefault();
			detail_mv_obj.autoplay.start();
		},false);

		btn_d_mv_stop.addEventListener("click", (e) => {
			e.preventDefault();
			detail_mv_obj.autoplay.stop();
		},false);
	}else{
		detail_mv_wrap.classList.add("nodata_type");
	}
	
}




function detailVisualB(){

	let detail_mv_obj = null;
	const detail_multi_visual_wrap = document.querySelector(".detail_multi_visual_wrap");
	const detail_mv_slide = detail_multi_visual_wrap.querySelectorAll(".swiper-slide");
	let btn_d_mv_stop = null;
	let btn_d_mv_play = null;

	if(detail_mv_slide.length>1){
		detail_mv_obj = new Swiper(".detail_multi_visual_swiper", {
			speed : 1000,
			loop : true,
			centeredSlides: true,
			spaceBetween :15,
			slidesPerGroup : 3,
			slidesPerView: 3,
			autoplay: {
				delay: 2500,
				disableOnInteraction: false
			},
			pagination: {
				clickable: true,
				el: ".detail_multi_visual_wrap .swiper-pagination.d_mv_paging",
			},
            navigation: {
                nextEl: '.detail_multi_visual_wrap .btn_d_mv_control.next',
                prevEl: '.detail_multi_visual_wrap .btn_d_mv_control.prev',
            }
		});
		btn_d_mv_stop = detail_multi_visual_wrap.querySelector(".btn_d_mv_stop");
		btn_d_mv_play = detail_multi_visual_wrap.querySelector(".btn_d_mv_play");

		btn_d_mv_play.addEventListener("click", (e) => {
			e.preventDefault();
			detail_mv_obj.autoplay.start();
		},false);

		btn_d_mv_stop.addEventListener("click", (e) => {
			e.preventDefault();
			detail_mv_obj.autoplay.stop();
		},false);
	}else{
		detail_multi_visual_wrap.classList.add("nodata_type");
	}
	
}


function detailVisualC(){
	let detail_mv_obj = null;
	const detail_multi_visual_wrap = document.querySelector(".detail_grid_visual_wrap");
	const detail_mv_slide = detail_multi_visual_wrap.querySelectorAll(".swiper-slide");
	const dgrid_thum_item = detail_multi_visual_wrap.querySelectorAll(".dgrid_thum_item");

	if(detail_mv_slide.length>1){
		detail_mv_obj = new Swiper(".detail_grid_main_swiper", {
			speed : 1000,
			loop : true,
			effect: "fade",
			autoplay: {
				delay: 2500,
				disableOnInteraction: false
			}
		});
		dgrid_thum_item.forEach((item,index)=>{
			item.addEventListener("click",(e)=>{
				e.preventDefault();
				if(index<3){
					detail_mv_obj.slideToLoop(index);
				}
			});
		});
	}else{
		detail_multi_visual_wrap.classList.add("nodata_type");
	}
}




/* popup */

/**
 * 디자인 팝업
 * @param {*} option 
 */
 function DesignPopup(option) {
	this.option = option;
	this.selector = this.option.selector;
  
	if (this.selector !== undefined) {
	  this.selector = document.querySelector(this.option.selector);
	}
	this.design_popup_wrap = document.querySelectorAll(".popup_wrap");
	this.domHtml = document.querySelector("html");
	this.domBody = document.querySelector("body");
	this.pagewrap = document.querySelector(".page_wrap");
	this.layer_wrap_parent = null;
	this.btn_closeTrigger = null;
	this.btn_close = null;
	this.bg_design_popup = null;
	this.scrollValue = 0;
  
	this.btn_closeTrigger = null;
	this.btn_close = null;
  
	const popupGroupCreate = document.createElement("div");
	popupGroupCreate.classList.add("layer_wrap_parent");
  
	if(!this.layer_wrap_parent && !document.querySelector(".layer_wrap_parent")){
	  this.pagewrap.append(popupGroupCreate);
	}
  
	this.layer_wrap_parent = document.querySelector(".layer_wrap_parent");
  
	
  
	// console.log(this.selector.querySelectorAll(".close_trigger"));
  
  
  
	this.bindEvent();
  }
  
  
  
  DesignPopup.prototype.dimCheck = function(){
	const popupActive = document.querySelectorAll(".popup_wrap.active");
	if(!!popupActive[0]){
	  popupActive[0].classList.add("active_first");
	}
	if(popupActive.length>1){
	  this.layer_wrap_parent.classList.add("has_active_multi");
	}else{
	  this.layer_wrap_parent.classList.remove("has_active_multi");
	}
  }
  DesignPopup.prototype.popupShow = function () {
	this.design_popup_wrap_active = document.querySelectorAll(".popup_wrap.active");
  
	if (this.selector == null) {
	  return;
	}
	// this.domHtml.classList.add("touchDis");
	
	this.selector.classList.add("active");
	setTimeout(()=>{
	  this.selector.classList.add("motion_end");
	},30);
	if ("beforeCallback" in this.option) {
	  this.option.beforeCallback();
	}
  
	if ("callback" in this.option) {
	  this.option.callback();
	}
	if(!!this.design_popup_wrap_active){
	  this.design_popup_wrap_active.forEach((element,index)=>{
		if(this.design_popup_wrap_active !== this.selector){
		  element.classList.remove("active");
		}
	  })
	}
	//animateIng = true;
  
	this.layer_wrap_parent.append(this.selector);
	
  
	this.dimCheck();
  
	// this.layer_wrap_parent
  
	// ****** 주소 해시 설정 ****** //
	// location.hash = this.selector.id
	// modalCount++
	// modalHash[modalCount] = '#' + this.selector.id
  }
  DesignPopup.prototype.popupHide = function () {
	var target = this.option.selector;
	if (target !== undefined) {
  
	  this.selector.classList.remove("motion");
	  if ("beforeClose" in this.option) {
		this.option.beforeClose();
	  }
	   //remove
	   this.selector.classList.remove("motion_end");
	   setTimeout(()=>{
  
		 this.selector.classList.remove("active");
	   },400)
	   this.design_popup_wrap_active = document.querySelectorAll(".popup_wrap.active");
	   this.dimCheck();
	   if ("closeCallback" in this.option) {
		 this.option.closeCallback();
	   }
	  //  if (this.design_popup_wrap_active.length == 0) {
	  //    this.domHtml.classList.remove("touchDis");
	  //  }
	}
  }
  
  DesignPopup.prototype.bindEvent = function () {
	this.btn_close = this.selector.querySelectorAll(".btn_popup_close");
	this.bg_design_popup = this.selector.querySelector(".bg_dim");
	var closeItemArray = [...this.btn_close];
  
	if(!!this.btn_closeTrigger){
	  this.btn_closeTrigger = this.selector.querySelectorAll(".close_trigger");
	  closeItemArray.push(...this.btn_closeTrigger)
	}
	if (!!this.bg_design_popup) {
	  closeItemArray.push(this.bg_design_popup);
	}
	if (closeItemArray.length) {
	  closeItemArray.forEach((element) => {
		element.addEventListener("click", (e) => {
		  e.preventDefault();
		  this.popupHide(this.selector);
		}, false);
	  });
	}
  };





function timeSwiper(){
	const time_gallery_swiper_wrap = document.querySelectorAll(".time_gallery_swiper_wrap");
	if(!time_gallery_swiper_wrap){return;}
	const option = {
		loop: true,
		speed: 800,
		pagination: {
		  el: ".swiper_imgbanner_container .swiper-pagination",
		  clickable: true
		}
	  }
	time_gallery_swiper_wrap.forEach((item,index)=>{

	});
}



function timeLineSwiper() {
	const time_gallery_swiper_wrap = document.querySelectorAll(".time_gallery_swiper_wrap");
	if (time_gallery_swiper_wrap.length) {
		time_gallery_swiper_wrap.forEach((swiperGroup, index) => {
		const thisSwiperGroup = swiperGroup;
		const thisSwiperSlide = thisSwiperGroup.querySelectorAll(".swiper-slide");
		swiperGroup.setAttribute("id", "swiper0" + (index + 1));
		if (thisSwiperSlide.length) {
		  (new Function(
			`
			  ${swiperGroup.getAttribute("id")} = new Swiper("#${swiperGroup.getAttribute("id")} .time-swiper", {
				loop: true,
				speed : 800,
				spaceBetween :12,
				slidesPerView: 3,
				slidesPerGroup : 3,
				navigation: {
					nextEl: '#${swiperGroup.getAttribute("id")} .btn_time_gallery_control.next',
					prevEl: '#${swiperGroup.getAttribute("id")} .btn_time_gallery_control.prev',
				},
			  });
			`
		  )());
		}
	  });
	}
  }


  function accordionFunc(){
	const accordion_bar = document.querySelectorAll(".accordion_bar");
	if(!accordion_bar){return;}
	accordion_bar.forEach((item)=>{
		item.addEventListener("click",(e)=>{
			const thisTarget = e.currentTarget;
			const thisParent = thisTarget.closest(".accordion_vitem");
			e.preventDefault();
			thisParent.classList.toggle("active");
		});
	})
  }


  

function photoSwiperFunc(){
	let photo_mv_obj = null;
	const photo_swiper_popup = document.querySelector("#photo_swiper_popup");
	const gallery_main_swiper_wrap = document.querySelector(".gallery_main_swiper_wrap");
	const gallery_main_slide = gallery_main_swiper_wrap.querySelectorAll(".swiper-slide");
	const gfraction_current = photo_swiper_popup.querySelector(".gfraction_current");
	const gfraction_length = photo_swiper_popup.querySelector(".gfraction_length");

	gfraction_length.textContent = gallery_main_slide.length;
	if(photo_mv_obj !== null){
		photo_mv_obj.update();
	}else{
		photo_mv_obj = new Swiper(".gallery_main_swiper_wrap .swiper-container", {
			speed : 1000,
			navigation: {
                nextEl: '.gallery_main_swiper_wrap .btn_gallery_ms_control.next',
                prevEl: '.gallery_main_swiper_wrap .btn_gallery_ms_control.prev',
            },
			autoplay: {
				delay: 2500,
				disableOnInteraction: false
			}
		});

		slideSetting();
		photo_mv_obj.on("slideChange",()=>{
			slideSetting();
		});
		

		function slideSetting(){
			gfraction_current.textContent = photo_mv_obj.realIndex + 1;
		}

	}
}