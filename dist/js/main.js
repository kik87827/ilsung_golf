function mainProductType144(){
	let slideObj = null;
	let swiperParentText = '.swiper-product-144';
	let swiperParent = document.querySelector(swiperParentText);
	let swiperSlide = document.querySelectorAll(swiperParentText+" .swiper-slide");
	if(swiperSlide.length>1){
		if(slideObj !== null){
			slideObj.update();
		}else{
			slideObj = new Swiper(swiperParentText, {
				speed : 1000, 
				loop : true,
				pagination: {  
					el: swiperParentText+" .swiper-pagination",
					clickable: true
				}
			});
		}
	}else{
		if(!!swiperParent){
			swiperParent.classList.add("nodata_type");
		}
	}
}
function mainProductType141(){
	let slideObj = null;
	let swiperParentText = '.swiper-product-141';
	let swiperParent = document.querySelector(swiperParentText);
	let swiperSlide = document.querySelectorAll(swiperParentText+" .swiper-slide");
	let windowWidth = window.innerWidth;
	if(swiperSlide.length>1){
		if(slideObj !== null){
			slideObj.update();
		}else{
			if(window.innerWidth >= 1024){
				pcFunc();
			}else{
				mbFunc();
			}
			//slideObj.update();

			window.addEventListener("resize",()=>{
				if(windowWidth !== window.innerWidth){
					slideObj.destroy();
					if(window.innerWidth >= 1024){
						pcFunc();
					}else{
						mbFunc();
					}
				}
				windowWidth = window.innerWidth;
			});

		}
	}else{
		if(!!swiperParent){
			swiperParent.classList.add("nodata_type");
		}
	}

	function pcFunc(){
		slideObj = new Swiper(swiperParentText, {
			speed : 1000, 
			slidesPerView: 4,
			slidesPerGroup : 4,
			spaceBetween : 23,
			freeMode: false,
			slidesPerGroupAuto : false,
			loop : false,
			pagination: {  
				el: swiperParentText+" .swiper-pagination",
				clickable: true
			}
		});
	}

	function mbFunc(){
		slideObj = new Swiper(swiperParentText, {
			speed : 1000, 
			slidesPerView: 'auto',
			slidesPerGroupAuto : true,
			freeMode: true,
			loop : false,
			spaceBetween : 15,
			pagination: {  
				el: swiperParentText+" .swiper-pagination",
				clickable: true
			}
		});
	}
}

function mainProductType133(){
	let slideObj = null;
	let swiperParentText = '.swiper-product-133';
	let swiperParent = document.querySelector(swiperParentText);
	let swiperSlide = document.querySelectorAll(swiperParentText+" .swiper-slide");
	if(swiperSlide.length>1){
		if(slideObj !== null){
			slideObj.update();
		}else{
			slideObj = new Swiper(swiperParentText, {
				speed : 1000, 
				loop : true,
				pagination: {  
					el: swiperParentText+" .swiper-pagination",
					clickable: true
				}
			});
		}
	}else{
		if(!!swiperParent){
			swiperParent.classList.add("nodata_type");
		}
	}
}

function mainProductType122(){
	let slideObj = null;
	let swiperParentText = '.swiper-product-122';
	let swiperParent = document.querySelector(swiperParentText);
	let swiperSlide = document.querySelectorAll(swiperParentText+" .swiper-slide");
	if(swiperSlide.length>1){
		if(slideObj !== null){
			slideObj.update();
		}else{
			slideObj = new Swiper(swiperParentText, {
				speed : 1000, 
				loop : true,
				pagination: {  
					el: swiperParentText+" .swiper-pagination",
					clickable: true
				}
			});
		}
	}else{
		if(!!swiperParent){
			swiperParent.classList.add("nodata_type");
		}
	}
}

function mainProductType244(){
	let slideObj = null;
	let swiperParentText = '.swiper-product-244';
	let swiperParent = document.querySelector(swiperParentText);
	let swiperSlide = document.querySelectorAll(swiperParentText+" .swiper-slide");
	if(swiperSlide.length>1){
		if(slideObj !== null){
			slideObj.update();
		}else{
			slideObj = new Swiper(swiperParentText, {
				speed : 1000, 
				loop : true,
				pagination: {  
					el: swiperParentText+" .swiper-pagination",
					clickable: true
				}
			});
		}
	}else{
		if(!!swiperParent){
			swiperParent.classList.add("nodata_type");
		}
	}
}

function mainProductType241(){
	let slideObj = null;
	let swiperParentText = '.swiper-product-241';
	let swiperParent = document.querySelector(swiperParentText);
	let swiperSlide = document.querySelectorAll(swiperParentText+" .swiper-slide");
	let windowWidth = window.innerWidth;
	if(swiperSlide.length>1){
		if(slideObj !== null){
			slideObj.update();
		}else{
			if(window.innerWidth >= 1024){
				pcFunc();
			}else{
				mbFunc();
			}
			//slideObj.update();

			window.addEventListener("resize",()=>{
				if(windowWidth !== window.innerWidth){
					slideObj.destroy();
					if(window.innerWidth >= 1024){
						pcFunc();
					}else{
						mbFunc();
					}
				}
				windowWidth = window.innerWidth;
			});

		}
	}else{
		if(!!swiperParent){
			swiperParent.classList.add("nodata_type");
		}
	}

	function pcFunc(){
		slideObj = new Swiper(swiperParentText, {
			speed : 1000, 
			slidesPerView: 4,
			slidesPerGroup : 4,
			spaceBetween : 23,
			freeMode: false,
			slidesPerGroupAuto : false,
			loop : false,
			pagination: {  
				el: swiperParentText+" .swiper-pagination",
				clickable: true
			}
		});
	}

	function mbFunc(){
		slideObj = new Swiper(swiperParentText, {
			speed : 1000, 
			slidesPerView: 'auto',
			slidesPerGroupAuto : true,
			freeMode: true,
			loop : false,
			spaceBetween : 15,
			pagination: {  
				el: swiperParentText+" .swiper-pagination",
				clickable: true
			}
		});
	}
}

function mainProductType233(){
	let slideObj = null;
	let swiperParentText = '.swiper-product-233';
	let swiperParent = document.querySelector(swiperParentText);
	let swiperSlide = document.querySelectorAll(swiperParentText+" .swiper-slide");
	if(swiperSlide.length>1){
		if(slideObj !== null){
			slideObj.update();
		}else{
			slideObj = new Swiper(swiperParentText, {
				speed : 1000, 
				loop : true,
				pagination: {  
					el: swiperParentText+" .swiper-pagination",
					clickable: true
				}
			});
		}
	}else{
		if(!!swiperParent){
			swiperParent.classList.add("nodata_type");
		}
	}
}

function mainProductType222(){
	let slideObj = null;
	let swiperParentText = '.swiper-product-222';
	let swiperParent = document.querySelector(swiperParentText);
	let swiperSlide = document.querySelectorAll(swiperParentText+" .swiper-slide");
	if(swiperSlide.length>1){
		if(slideObj !== null){
			slideObj.update();
		}else{
			slideObj = new Swiper(swiperParentText, {
				speed : 1000, 
				loop : true,
				pagination: {  
					el: swiperParentText+" .swiper-pagination",
					clickable: true
				}
			});
		}
	}else{
		if(!!swiperParent){
			swiperParent.classList.add("nodata_type");
		}
	}
}



/* 3 */

function mainProductType344(){
	let slideObj = null;
	let swiperParentText = '.swiper-product-344';
	let swiperParent = document.querySelector(swiperParentText);
	let swiperSlide = document.querySelectorAll(swiperParentText+" .swiper-slide");
	if(swiperSlide.length>1){
		if(slideObj !== null){
			slideObj.update();
		}else{
			slideObj = new Swiper(swiperParentText, {
				speed : 1000, 
				loop : true,
				pagination: {  
					el: swiperParentText+" .swiper-pagination",
					clickable: true
				}
			});
		}
	}else{
		if(!!swiperParent){
			swiperParent.classList.add("nodata_type");
		}
	}
}

function mainProductType341(){
	let slideObj = null;
	let swiperParentText = '.swiper-product-341';
	let swiperParent = document.querySelector(swiperParentText);
	let swiperSlide = document.querySelectorAll(swiperParentText+" .swiper-slide");
	let windowWidth = window.innerWidth;
	if(swiperSlide.length>1){
		if(slideObj !== null){
			slideObj.update();
		}else{
			if(window.innerWidth >= 1024){
				pcFunc();
			}else{
				mbFunc();
			}
			//slideObj.update();

			window.addEventListener("resize",()=>{
				if(windowWidth !== window.innerWidth){
					slideObj.destroy();
					if(window.innerWidth >= 1024){
						pcFunc();
					}else{
						mbFunc();
					}
				}
				windowWidth = window.innerWidth;
			});

		}
	}else{
		if(!!swiperParent){
			swiperParent.classList.add("nodata_type");
		}
	}

	function pcFunc(){
		slideObj = new Swiper(swiperParentText, {
			speed : 1000, 
			slidesPerView: 4,
			slidesPerGroup : 4,
			spaceBetween : 23,
			freeMode: false,
			slidesPerGroupAuto : false,
			loop : false,
			pagination: {  
				el: swiperParentText+" .swiper-pagination",
				clickable: true
			}
		});
	}

	function mbFunc(){
		slideObj = new Swiper(swiperParentText, {
			speed : 1000, 
			slidesPerView: 'auto',
			slidesPerGroupAuto : true,
			freeMode: true,
			loop : false,
			spaceBetween : 15,
			pagination: {  
				el: swiperParentText+" .swiper-pagination",
				clickable: true
			}
		});
	}
}

function mainProductType333(){
	let slideObj = null;
	let swiperParentText = '.swiper-product-333';
	let swiperParent = document.querySelector(swiperParentText);
	let swiperSlide = document.querySelectorAll(swiperParentText+" .swiper-slide");
	if(swiperSlide.length>1){
		if(slideObj !== null){
			slideObj.update();
		}else{
			slideObj = new Swiper(swiperParentText, {
				speed : 1000, 
				loop : true,
				pagination: {  
					el: swiperParentText+" .swiper-pagination",
					clickable: true
				}
			});
		}
	}else{
		if(!!swiperParent){
			swiperParent.classList.add("nodata_type");
		}
	}
}

function mainProductType322(){
	let slideObj = null;
	let swiperParentText = '.swiper-product-322';
	let swiperParent = document.querySelector(swiperParentText);
	let swiperSlide = document.querySelectorAll(swiperParentText+" .swiper-slide");
	if(swiperSlide.length>1){
		if(slideObj !== null){
			slideObj.update();
		}else{
			slideObj = new Swiper(swiperParentText, {
				speed : 1000, 
				loop : true,
				pagination: {  
					el: swiperParentText+" .swiper-pagination",
					clickable: true
				}
			});
		}
	}else{
		if(!!swiperParent){
			swiperParent.classList.add("nodata_type");
		}
	}
}

function mainProductType431(){
	let slideObj = null;
	let swiperParentText = '.swiper-product-431';
	let swiperParent = document.querySelector(swiperParentText);
	let swiperSlide = document.querySelectorAll(swiperParentText+" .swiper-slide");
	let windowWidth = window.innerWidth;
	if(swiperSlide.length>1){
		if(slideObj !== null){
			slideObj.update();
		}else{
			if(window.innerWidth >= 1024){
				pcFunc();
			}else{
				mbFunc();
			}

			window.addEventListener("resize",()=>{
				if(windowWidth !== window.innerWidth){
					slideObj.destroy();
					if(window.innerWidth >= 1024){
						pcFunc();
					}else{
						mbFunc();
					}
				}
				windowWidth = window.innerWidth;
			});

		}
	}else{
		if(!!swiperParent){
			swiperParent.classList.add("nodata_type");
		}
	}

	function pcFunc(){
		slideObj = new Swiper(swiperParentText, {
			speed : 1000, 
			slidesPerView: 3,
			slidesPerGroup : 3,
			slidesPerGroupAuto : false,
			loop : true,
			navigation : {
				nextEl : '#type_431 .swiper_next', 
				prevEl : '#type_431 .swiper_prev', 
			},
			pagination: {  
				el: swiperParentText+" .swiper-pagination",
				clickable: true
			}
		});
	}

	function mbFunc(){
		slideObj = new Swiper(swiperParentText, {
			speed : 1000, 
			loop : true,
			slidesPerView: 1,
			pagination: {  
				el: swiperParentText+" .swiper-pagination",
				clickable: true
			}
		});
	}
}

function mainProductType421(){
	let slideObj = null;
	let swiperParentText = '.swiper-product-421';
	let swiperParent = document.querySelector(swiperParentText);
	let swiperSlide = document.querySelectorAll(swiperParentText+" .swiper-slide");
	let windowWidth = window.innerWidth;
	if(swiperSlide.length>1){
		if(slideObj !== null){
			slideObj.update();
		}else{
			if(window.innerWidth >= 1024){
				pcFunc();
			}else{
				mbFunc();
			}

			window.addEventListener("resize",()=>{
				if(windowWidth !== window.innerWidth){
					slideObj.destroy();
					if(window.innerWidth >= 1024){
						pcFunc();
					}else{
						mbFunc();
					}
				}
				windowWidth = window.innerWidth;
			});

		}
	}else{
		if(!!swiperParent){
			swiperParent.classList.add("nodata_type");
		}
	}

	function pcFunc(){
		slideObj = new Swiper(swiperParentText, {
			speed : 1000, 
			slidesPerView: 'auto',
			slidesPerGroup : 2,
			slidesPerGroupAuto : false,
			loop : true,
			navigation : {
				nextEl : '#type_421 .swiper_next', 
				prevEl : '#type_421 .swiper_prev', 
			},
			pagination: {  
				el: swiperParentText+" .swiper-pagination",
				clickable: true
			}
		});
	}

	function mbFunc(){
		slideObj = new Swiper(swiperParentText, {
			speed : 1000, 
			loop : true,
			slidesPerView: 1,
			pagination: {  
				el: swiperParentText+" .swiper-pagination",
				clickable: true
			}
		});
	}
}



function mainProductType531(){
	let slideObj = null;
	let swiperParentText = '.swiper-product-531';
	let swiperParent = document.querySelector(swiperParentText);
	let swiperSlide = document.querySelectorAll(swiperParentText+" .swiper-slide");
	let windowWidth = window.innerWidth;
	if(swiperSlide.length>1){
		if(slideObj !== null){
			slideObj.update();
		}else{
			if(window.innerWidth >= 1024){
				pcFunc();
			}else{
				mbFunc();
			}
			//slideObj.update();

			

			window.addEventListener("resize",()=>{
				if(windowWidth !== window.innerWidth){
					slideObj.destroy();
					if(window.innerWidth >= 1024){
						pcFunc();
					}else{
						mbFunc();
					}
				}
				windowWidth = window.innerWidth;
			});

		}
	}else{
		if(!!swiperParent){
			swiperParent.classList.add("nodata_type");
		}
	}

	function pcFunc(){
		slideObj = new Swiper(swiperParentText, {
			speed : 1000, 
			slidesPerView: 3,
			slidesPerGroup : 3,
			spaceBetween : 35,
			freeMode: false,
			loop : false,
			pagination: {  
				el: swiperParentText+" .swiper-pagination",
				clickable: true
			}
		});
	}

	function mbFunc(){
		
		slideObj = new Swiper(swiperParentText, {
			speed : 1000, 
			slidesPerView: 'auto',
			slidesPerGroupAuto : true,
			freeMode: true,
			loop : false,
			spaceBetween : 15,
			pagination: {  
				el: swiperParentText+" .swiper-pagination",
				clickable: true
			}
		});
	}
}


function mainProductType631(){
	let slideObj = null;
	let swiperParentText = '.swiper-product-631';
	let swiperParent = document.querySelector(swiperParentText);
	let swiperSlide = document.querySelectorAll(swiperParentText+" .swiper-slide");
	let windowWidth = window.innerWidth;
	if(swiperSlide.length>1){
		if(slideObj !== null){
			slideObj.update();
		}else{
			if(window.innerWidth >= 1024){
				pcFunc();
			}else{
				mbFunc();
			}
			//slideObj.update();

			window.addEventListener("resize",()=>{
				if(windowWidth !== window.innerWidth){
					slideObj.destroy();
					if(window.innerWidth >= 1024){
						pcFunc();
					}else{
						mbFunc();
					}
				}
				windowWidth = window.innerWidth;
			});

		}
	}else{
		if(!!swiperParent){
			swiperParent.classList.add("nodata_type");
		}
	}

	function pcFunc(){
		slideObj = new Swiper(swiperParentText, {
			speed : 1000, 
			slidesPerView: 3,
			slidesPerGroup : 3,
			spaceBetween : 23,
			freeMode: false,
			slidesPerGroupAuto : false,
			loop : false,
			pagination: {  
				el: swiperParentText+" .swiper-pagination",
				clickable: true
			}
		});
	}

	function mbFunc(){
		slideObj = new Swiper(swiperParentText, {
			speed : 1000, 
			slidesPerView: 'auto',
			slidesPerGroupAuto : true,
			freeMode: true,
			loop : false,
			spaceBetween : 15,
			pagination: {  
				el: swiperParentText+" .swiper-pagination",
				clickable: true
			}
		});
	}
}


function mainProductType733(){
	let slideObj = null;
	let swiperParentText = '.swiper-product-733';
	let swiperParent = document.querySelector(swiperParentText);
	let swiperSlide = document.querySelectorAll(swiperParentText+" .swiper-slide");
	if(swiperSlide.length>1){
		if(slideObj !== null){
			slideObj.update();
		}else{
			slideObj = new Swiper(swiperParentText, {
				speed : 1000, 
				loop : true,
				pagination: {  
					el: swiperParentText+" .swiper-pagination",
					clickable: true
				}
			});
		}
	}else{
		if(!!swiperParent){
			swiperParent.classList.add("nodata_type");
		}
	}
}

function mainProductType844(){
	let slideObj = null;
	let swiperParentText = '.swiper-product-844';
	let swiperParent = document.querySelector(swiperParentText);
	let swiperSlide = document.querySelectorAll(swiperParentText+" .swiper-slide");
	if(swiperSlide.length>1){
		if(slideObj !== null){
			slideObj.update();
		}else{
			slideObj = new Swiper(swiperParentText, {
				speed : 1000, 
				loop : true,
				navigation : {
					nextEl : '#type_844 .next_navi', 
					prevEl : '#type_844 .prev_navi', 
				},
			});
		}
	}else{
		if(!!swiperParent){
			swiperParent.classList.add("nodata_type");
		}
	}
}


function mainBannerType01(){
	let slideObj = null;
	let swiperParentText = '.banner-type01 .swiper-container';
	let swiperParent = document.querySelector(swiperParentText);
	let swiperSlide = document.querySelectorAll(swiperParentText+" .swiper-slide");
	let windowWidth = window.innerWidth;
	if(swiperSlide.length>1){
		if(slideObj !== null){
			slideObj.update();
		}else{
			if(window.innerWidth >= 1024){
				pcFunc();
			}else{
				mbFunc();
			}
			//slideObj.update();

			window.addEventListener("resize",()=>{
				if(windowWidth !== window.innerWidth){
					slideObj.destroy();
					if(window.innerWidth >= 1024){
						pcFunc();
					}else{
						mbFunc();
					}
					slideObj.update();
				}
				windowWidth = window.innerWidth;
			});

		}
	}else{
		if(!!swiperParent){
			swiperParent.classList.add("nodata_type");
		}
	}

	function pcFunc(){
		slideObj = new Swiper(swiperParentText, {
			speed : 1000, 
			slidesPerView: 2,
			slidesPerGroup : 2,
			spaceBetween : 20,
			freeMode: false,
			slidesPerGroupAuto : false,
			loop : true,
			navigation : {
				nextEl : '.banner-type01 .next_navi', 
				prevEl : '.banner-type01 .prev_navi', 
			},
		});
	}

	function mbFunc(){
		slideObj = new Swiper(swiperParentText, {
			speed : 1000, 
			slidesPerView: 1,
			loop : true,
			spaceBetween : 0,
			navigation : {
				nextEl : '.banner-type01 .next_navi', 
				prevEl : '.banner-type01 .prev_navi', 
			},
			pagination: {  
				el: swiperParentText+" .swiper-pagination",
				clickable: true
			},
		});
	}
}

function mainBannerType02(){
	let slideObj = null;
	let swiperParentText = '.banner-type02 .swiper-container';
	let swiperParent = document.querySelector(swiperParentText);
	let swiperSlide = document.querySelectorAll(swiperParentText+" .swiper-slide");
	let windowWidth = window.innerWidth;
	if(swiperSlide.length>1){
		if(slideObj !== null){
			slideObj.update();
		}else{
			if(window.innerWidth >= 1024){
				pcFunc();
			}else{
				mbFunc();
			}
			//slideObj.update();

			window.addEventListener("resize",()=>{
				if(windowWidth !== window.innerWidth){
					slideObj.destroy();
					if(window.innerWidth >= 1024){
						pcFunc();
					}else{
						mbFunc();
					}
					slideObj.update();
				}
				windowWidth = window.innerWidth;
			});

		}
	}else{
		if(!!swiperParent){
			swiperParent.classList.add("nodata_type");
		}
	}

	function pcFunc(){
		slideObj = new Swiper(swiperParentText, {
			speed : 1000, 
			slidesPerView: 1,
			slidesPerGroup : 1,
			spaceBetween : 20,
			freeMode: false,
			slidesPerGroupAuto : false,
			loop : true,
			navigation : {
				nextEl : '.banner-type02 .next_navi', 
				prevEl : '.banner-type02 .prev_navi', 
			},
		});
	}

	function mbFunc(){
		slideObj = new Swiper(swiperParentText, {
			speed : 1000, 
			slidesPerView: 1,
			loop : true,
			spaceBetween : 0,
			autoHeight : true,
			pagination: {  
				el: swiperParentText+" .swiper-pagination",
				clickable: true
			},
		});
	}
}

function mainBannerType03(){
	let slideObj = null;
	let swiperParentText = '.banner-type03 .swiper-container';
	let swiperParent = document.querySelector(swiperParentText);
	let swiperSlide = document.querySelectorAll(swiperParentText+" .swiper-slide");
	let windowWidth = window.innerWidth;
	if(swiperSlide.length>1){
		if(slideObj !== null){
			slideObj.update();
		}else{
			if(window.innerWidth >= 1024){
				pcFunc();
			}else{
				mbFunc();
			}
			//slideObj.update();

			window.addEventListener("resize",()=>{
				if(windowWidth !== window.innerWidth){
					slideObj.destroy();
					if(window.innerWidth >= 1024){
						pcFunc();
					}else{
						mbFunc();
					}
					slideObj.update();
				}
				windowWidth = window.innerWidth;
			});

		}
	}else{
		if(!!swiperParent){
			swiperParent.classList.add("nodata_type");
		}
	}

	function pcFunc(){
		slideObj = new Swiper(swiperParentText, {
			speed : 1000, 
			slidesPerView: 4,
			slidesPerGroup : 4,
			spaceBetween : 20,
			freeMode: false,
			slidesPerGroupAuto : false,
			loop : true,
			pagination: {  
				el: ".banner-type03 .swiper-pagination",
				clickable: true
			},
			navigation : {
				nextEl : '.banner-type03 .next_navi', 
				prevEl : '.banner-type03 .prev_navi', 
			},
		});
	}

	function mbFunc(){
		slideObj = new Swiper(swiperParentText, {
			speed : 1000, 
			slidesPerView: 'auto',
			slidesPerGroupAuto : true,
			freeMode: true,
			loop : false,
			spaceBetween : 15,
			pagination: {  
				el: ".banner-type03 .swiper-pagination",
				clickable: true
			},
			navigation : {
				nextEl : '.banner-type03 .next_navi', 
				prevEl : '.banner-type03 .prev_navi', 
			},
		});
	}
}

function mainBannerType04(){
	let slideObj = null;
	let swiperParentText = '.banner-type04 .swiper-container';
	let swiperParent = document.querySelector(swiperParentText);
	let swiperSlide = document.querySelectorAll(swiperParentText+" .swiper-slide");
	let windowWidth = window.innerWidth;
	if(swiperSlide.length>1){
		if(slideObj !== null){
			slideObj.update();
		}else{
			if(window.innerWidth >= 1024){
				pcFunc();
			}else{
				mbFunc();
			}
			//slideObj.update();

			window.addEventListener("resize",()=>{
				if(windowWidth !== window.innerWidth){
					slideObj.destroy();
					if(window.innerWidth >= 1024){
						pcFunc();
					}else{
						mbFunc();
					}
					slideObj.update();
				}
				windowWidth = window.innerWidth;
			});

		}
	}else{
		if(!!swiperParent){
			swiperParent.classList.add("nodata_type");
		}
	}

	function pcFunc(){
		slideObj = new Swiper(swiperParentText, {
			speed : 1000, 
			slidesPerView: 1,
			slidesPerGroup : 1,
			spaceBetween : 20,
			freeMode: false,
			slidesPerGroupAuto : false,
			loop : true,
			navigation : {
				nextEl : '.banner-type04 .next_navi', 
				prevEl : '.banner-type04 .prev_navi', 
			},
		});
	}

	function mbFunc(){
		slideObj = new Swiper(swiperParentText, {
			speed : 1000, 
			slidesPerView: 1,
			loop : true,
			spaceBetween : 0,
			autoHeight : true,
			pagination: {  
				el: swiperParentText+" .swiper-pagination",
				clickable: true
			},
		});
	}
}




function mainBannerTapeFunc(){
	let slideObj = null;
	let swiperParentText = '.tape-banner';
	let swiperParent = document.querySelector(swiperParentText);
	let swiperSlide = document.querySelectorAll(swiperParentText+" .swiper-slide");
	if(swiperSlide.length>1){
		if(slideObj !== null){
			slideObj.update();
		}else{
			slideObj = new Swiper(swiperParentText, {
				speed : 1000, 
				loop : true,
				autoplay: {
					delay: 3500,
					disableOnInteraction: false
				},
				pagination: {  
					el: ".tape-banner .swiper-pagination",
					clickable: true
				},
			});
		}
	}else{
		if(!!swiperParent){
			swiperParent.classList.add("nodata_type");
		}
	}
}



function mainCardCircleSwiper(){
	let slideObj = null;
	let swiperParentText = '#card_circle_swiper01 .swiper-container';
	let swiperParent = document.querySelector(swiperParentText);
	let swiperSlide = document.querySelectorAll(swiperParentText+" .swiper-slide");
	let windowWidth = window.innerWidth;
	if(swiperSlide.length>1){
		if(slideObj !== null){
			slideObj.update();
		}else{
			if(window.innerWidth >= 1024){
				pcFunc();
			}else{
				mbFunc();
			}
			//slideObj.update();

			window.addEventListener("resize",()=>{
				if(windowWidth !== window.innerWidth){
					slideObj.destroy();
					if(window.innerWidth >= 1024){
						pcFunc();
					}else{
						mbFunc();
					}
					slideObj.update();
				}
				windowWidth = window.innerWidth;
			});

		}
	}else{
		if(!!swiperParent){
			swiperParent.classList.add("nodata_type");
		}
	}

	function pcFunc(){
		slideObj = new Swiper(swiperParentText, {
			speed : 1000, 
			slidesPerView: 7,
			slidesPerGroup : 7,
			freeMode: false,
			slidesPerGroupAuto : false,
			loop : true,
			autoplay: {
				delay: 3500,
				disableOnInteraction: false
			},
			navigation : {
				nextEl : '#card_circle_swiper01 .next_navi', 
				prevEl : '#card_circle_swiper01 .prev_navi', 
			},
		});
	}

	function mbFunc(){
		slideObj = new Swiper(swiperParentText, {
			speed : 1000, 
			slidesPerView: 'auto',
			slidesPerGroupAuto : true,
			freeMode: true,
			loop : false,
			autoplay: {
				delay: 3500,
				disableOnInteraction: false
			},
			pagination: {  
				el: swiperParentText+" .swiper-pagination",
				clickable: true
			},
		});
	}
}

function mainCardCircleSwiper02(){
	let slideObj = null;
	let swiperParentText = '#card_circle_swiper02 .swiper-container';
	let swiperParent = document.querySelector(swiperParentText);
	let swiperSlide = document.querySelectorAll(swiperParentText+" .swiper-slide");
	let windowWidth = window.innerWidth;
	if(swiperSlide.length>1){
		if(slideObj !== null){
			slideObj.update();
		}else{
			if(window.innerWidth >= 1024){
				pcFunc();
			}else{
				mbFunc();
			}
			//slideObj.update();

			window.addEventListener("resize",()=>{
				if(windowWidth !== window.innerWidth){
					slideObj.destroy();
					if(window.innerWidth >= 1024){
						pcFunc();
					}else{
						mbFunc();
					}
					slideObj.update();
				}
				windowWidth = window.innerWidth;
			});

		}
	}else{
		if(!!swiperParent){
			swiperParent.classList.add("nodata_type");
		}
	}

	function pcFunc(){
		slideObj = new Swiper(swiperParentText, {
			speed : 1000, 
			slidesPerView: 5,
			slidesPerGroup : 5,
			slidesPerGroupAuto : false,
			loop : true,
			navigation : {
				nextEl : '#card_circle_swiper02 .next_navi', 
				prevEl : '#card_circle_swiper02 .prev_navi', 
			},
		});
	}

	function mbFunc(){
		slideObj = new Swiper(swiperParentText, {
			speed : 1000, 
			slidesPerView: 2,
			slidesPerGroup : 2,
			loop : true,
			pagination: {  
				el: "#card_circle_swiper02 .swiper-pagination",
				clickable: true
			},
		});
	}
}




function mainBannerbest(target){
	let slideObj = null;
	let swiperParentText = target;
	let swiperParent = document.querySelector(swiperParentText);
	let swiperSlide = document.querySelectorAll(swiperParentText+" .swiper-slide");
	if(swiperSlide.length>1){
		if(slideObj !== null){
			slideObj.update();
		}else{
			slideObj = new Swiper(swiperParentText+' .swiper-container', {
				speed : 1000, 
				loop : true,
				pagination: {  
					el: swiperParentText+" .swiper-pagination",
					clickable: true
				},
				navigation : {
					nextEl : swiperParentText+' .next_navi', 
					prevEl : swiperParentText+' .prev_navi', 
				},
			});
		}
	}else{
		if(!!swiperParent){
			swiperParent.classList.add("nodata_type");
		}
	}
}


function bannerSwiper10(){
	let slideObj = null;
	let swiperParentText = '.swiper-banner-10';
	let swiperParent = document.querySelector(swiperParentText);
	let swiperSlide = document.querySelectorAll(swiperParentText+" .swiper-slide");
	if(swiperSlide.length>1){
		if(slideObj !== null){
			slideObj.update();
		}else{
			slideObj = new Swiper(swiperParentText, {
				speed : 1000, 
				loop : true,
				navigation : {
					nextEl : '#banner_10 .next_navi', 
					prevEl : '#banner_10 .prev_navi', 
				},
			});
		}
	}else{
		if(!!swiperParent){
			swiperParent.classList.add("nodata_type");
		}
	}
}

function galleryResponSwiper(target){
	let slideObj = null;
	let swiperParentText = target;
	let swiperParent = document.querySelector(swiperParentText);
	let swiperSlide = document.querySelectorAll(swiperParentText+" .swiper-slide");
	if(swiperSlide.length>1){
		if(slideObj !== null){
			slideObj.update();
		}else{
			slideObj = new Swiper(swiperParentText+' .swiper-container', {
				speed : 1000, 
				loop : true,
				navigation : {
					nextEl : swiperParentText+' .next_navi', 
					prevEl : swiperParentText+' .prev_navi', 
				},
				pagination: {  
					el: swiperParentText+" .swiper-pagination",
					clickable: true
				},
			});
		}
	}else{
		if(!!swiperParent){
			swiperParent.classList.add("nodata_type");
		}
	}
}