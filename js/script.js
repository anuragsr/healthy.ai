$(document).on("ready", function(){
	function mobileAndTabletcheck() {
  	 	if(window.innerWidth <= 800 && window.innerHeight <= 768) {
	        return true;
	    } else {
	        return false;
	    }
	};
	var isMobile = mobileAndTabletcheck();
	var menuWidth, menuRight;
	if(isMobile){
		menuWidth = "100%";
		menuRight = "-100%";
	}else{
		menuWidth = "325px";
		menuRight = "-325px";
	}
	function pageOneOpen(){
		$(".alt-logo").attr("src", "img/logo-w.png");
		TweenMax.to([".alt-logo-link"], 1.75, {color:"#FFF"});
		if(homePage){
			TweenMax.to([".menu-icons"], 1.75, {color:"#FF9800"});
			TweenMax.to(".alt-header", 1.75, {top:"-60px"});
		}else{
			TweenMax.to(".alt-header", 1.75, {top:"0px"});
		}
	};
	function pageTwoOpen(){
		$(".alt-logo").attr("src", "img/logo-w.png");
		TweenMax.to([".alt-logo-link", ".menu-icons"], 1.75, {color:"#FFF"});
		TweenMax.to($(".chat-page .chat-right"), 1.75, {right:0, opacity:1});
		TweenMax.to(".alt-header", 1.75, {top:"0px"});
	};
	function pageThreeOpen(){
		$(".alt-logo").attr("src", "img/logo-w.png");
		TweenMax.to([".alt-logo-link", ".menu-icons"], 1.75, {color:"#FFF"});
		TweenMax.to($(".bill-page .bill-left"), 1.75, {left:0, opacity:1});
		TweenMax.to(".alt-header", 1.75, {top:"0px"});
	};
	function pageFourOpen(){
		$(".alt-logo").attr("src", "img/logo-w.png");
		TweenMax.to([".alt-logo-link", ".menu-icons"], 1.75, {color:"#FFF"});
		if(!isMobile){
			TweenMax.to($(".bye-page .bye-page-content"), 1.75, {bottom:0, opacity:1});
		}else{
			TweenMax.to($(".bye-page .bye-page-content"), 1.75, {top:0, opacity:1});
		}
		TweenMax.to(".alt-header", 1.75, {top:"0px"});
	};
	function pageFiveOpen(){
		if(isMobile){
			$(".alt-logo").attr("src", "img/logo.png");
			TweenMax.to(".alt-logo-link", 1.75, {color:"#0087E2"});
			TweenMax.to(".menu-icons", 1.75, {color:"#FF9800"});
		}else{
		}
	};
	$(".open-icon").on("click", function(){		
		function removedOpen(){
			if(!isMobile){
				TweenMax.to([".header", ".alt-header"], 1.75, {left:menuRight});
				TweenMax.to(".alt-header", 1.75, {background:"rgba(0, 135, 226, 0)"});
				TweenMax.to([".page", ".footer"], 1.75, {left:menuRight});
			}else{
				$(".close-icon img").attr("src", "img/close.png");
				TweenMax.to([".header .logo-link"], 1.75, {opacity:0});
				TweenMax.to([".alt-logo-link"], 1.75, {opacity:0});
			}
			TweenMax.set(".side-menu", {css:{width: menuWidth, right: menuRight}});
			TweenMax.to(".open-icon", 1.75, {opacity:0, cursor:"default"});
			TweenMax.to(".close-icon", 0.1, {display:"inline"});
			TweenMax.to(".close-icon", 1.75, {opacity:1.75, cursor: "pointer"});
			TweenMax.to(".side-menu", 1.75, {right:0});
		};
		TweenMax.to(".open-icon", 0.1, {display:"none", onComplete:removedOpen});
	});
	$(".close-icon").on("click", function(){
		function removedClose(){
			TweenMax.to(".open-icon", 0.1, {display:"inline"});
			TweenMax.to(".close-icon", 1.75, {opacity:0, cursor:"default", display:"none"});
			TweenMax.to(".open-icon", 1.75, {opacity:1.75, cursor:"pointer"});
			TweenMax.to(".side-menu", 1.75, {right:menuRight});
			if(!isMobile){
				TweenMax.to([".header", ".alt-header"], 1.75, {left:0});
				TweenMax.to(".alt-header", 1.75, {background:"rgba(0, 135, 226, 1)"});
				TweenMax.to([".page", ".footer"], 1.75, {left:"0%"});
			}else{
				TweenMax.to([".header .logo-link", ".alt-logo-link"], 1.75, {opacity:1});
				$(".close-icon img").attr("src", "img/close-accent.png");
			}
			setTimeout(function(){
				$(".doc-menu-content, .menu-contact").css("display","none");
				$(".menu-accent, .menu-primary").css("display","table-cell");
			},1000);
		};
		TweenMax.to(".close-icon", 0.1, {display:"none", onComplete:removedClose});

	});
	$(".home-footer .fa-angle-down").on("click", function(){
		TweenMax.to(window, 1.5, {scrollTo:$(".home-page").height(), ease:Back.easeOut});
	});
	$(".chat-footer .fa-angle-down").on("click", function(){
		TweenMax.to(window, 1.5, {scrollTo:2*$(".home-page").height(), ease:Back.easeOut});
	});
	$(".bill-footer .fa-angle-down").on("click", function(){
		TweenMax.to(window, 1.5, {scrollTo:3*$(".home-page").height(), ease:Back.easeOut});
	});
	$(".bye-footer .fa-angle-down").on("click", function(){
		TweenMax.to(window, 1.5, {scrollTo:4*$(".home-page").height(), ease:Back.easeOut});
	});
	$(".backToTop").on("click", function(){
		TweenMax.to(window, 2.5, {scrollTo:0});
	});
	$(".testi-person").on("mouseover", function(e){
		$(".tes-text").css({"display":"none"})	
		console.log($(e.currentTarget).attr("per-no"));
		var id = $(e.currentTarget).attr("per-no");
		for(var i = 0; i < $(".tes-text").length; i++ ){
			if($($(".tes-text")[i]).attr("tes-no") == id){
				$($(".tes-text")[i]).css({"display":"block"});	
				break;
			}
		}
	});
	$($(".tes-text")[0]).css({"display":"block"});
	if(!isMobile)
		$(".mention-item, .testi-person").css({"display":"inline-block"});
	else{
		$($(".mention-item")[0]).css({"display":"block"});
		$($(".testi-person")[0]).css({"display":"block"});
	}
	$(".app-btn").on("mouseenter", function(e){
		var currImg = $(e.currentTarget).find("img")[0];
		if(currImg.className == "app-img gp-img"){
			$(currImg).attr("src", "img/pr/gp.png");
		}else{
			$(currImg).attr("src", "img/pr/iP.png");
		}
	});
	$(".app-btn").on("mouseleave", function(e){
		var currImg = $(e.currentTarget).find("img")[0];
		if(currImg.className == "app-img gp-img"){
			$(currImg).attr("src", "img/wt/gp.png");
		}else{
			$(currImg).attr("src", "img/wt/iP.png");
		}
	});
	$(".for-doc-btn").on("click", function(e){
		$(".menu-accent").css("display","none");
		$(".doc-menu-content").css("display","table-cell");
		$(".open-icon").click();
	});
	$(".partner-link").on("click", function(){
		TweenMax.to(".menu-primary", 0.1, {display:"none", onComplete:hideComplete});
		function hideComplete(){
			TweenMax.to(".menu-contact", 0.1, {display:"table-cell"});
			TweenMax.to(".custom-menu-item", 0.1, {display:"none"});
			TweenMax.to(".partner-item", 0.1, {display:"block"});	
			setTimeout(function(){
				$(".open-icon").click();
			}, 200);
		};
	});
	$(".invest-link").on("click", function(){
		TweenMax.to(".menu-primary", 0.1, {display:"none", onComplete:hideComplete});
		function hideComplete(){
			TweenMax.to(".menu-contact", 0.1, {display:"table-cell"});
			TweenMax.to(".custom-menu-item", 0.1, {display:"none"});
			TweenMax.to(".invest-item", 0.1, {display:"block"});	
			setTimeout(function(){
				$(".open-icon").click();
			}, 200);
		};
	});
	$(".work-link").on("click", function(){
		TweenMax.to(".menu-primary", 0.1, {display:"none", onComplete:hideComplete});
		function hideComplete(){
			TweenMax.to(".menu-contact", 0.1, {display:"table-cell"});
			TweenMax.to(".custom-menu-item", 0.1, {display:"none"});
			TweenMax.to(".work-item", 0.1, {display:"block"});	
			setTimeout(function(){
				$(".open-icon").click();
			}, 200);
		};
	});
	function tlComplete(tl){
		setTimeout(function(){
			tl.restart()
		}, 1000);
	}
	var tl = new TimelineMax({
		onComplete:tlComplete, 
        onCompleteParams:["{self}"]
	})
	tl.staggerTo($(".chat-page .container"), 1.75,{opacity:1}, 1);

	var tl2 = new TimelineMax({
		onComplete:tlComplete, 
        onCompleteParams:["{self}"]
	})
	tl2.staggerTo($(".bill-page .container"), 1.75,{opacity:1}, 1);
	
	$(".health-query").on("mouseenter", function(){
		TweenMax.to(".result-right", 1.75, {opacity: 1});
	});
	$(".health-query").on("mouseleave", function(){
		TweenMax.to(".result-right", 1.75, {opacity: 0});
	});

	$(window).on('scroll', function() {
		var y_scroll_pos = window.pageYOffset;
        var scroll_pos_test = $(".page").height();
		if(y_scroll_pos >= 3.9*scroll_pos_test){
			pageFiveOpen();
			//console.log("section 5");
		}else if(y_scroll_pos >= 2.9*scroll_pos_test){
			pageFourOpen();
			//console.log("section 4");
		}else if(y_scroll_pos >= 1.9*scroll_pos_test){
			pageThreeOpen();
			//console.log("section 3");
		}else if(y_scroll_pos >= 0.9*scroll_pos_test){
			pageTwoOpen();
			//console.log("section 2");
		}else if(y_scroll_pos >= scroll_pos_test/2){
			pageOneOpen();
			//console.log("section 1");
		}
	});

	$(".contact-submit").on("click", function(){
		console.log("Sending..");
		var fd = new FormData();
	    var file_data = $('input[type="file"]')[0].files; // for multiple files
	    for(var i = 0;i<file_data.length;i++){
	        fd.append("file_"+i, file_data[i]);
	    };
	    var other_data = $('form[name="contactForm"]').serializeArray();
	    $.each(other_data,function(key,input){
	        fd.append(input.name,input.value);
	    });
		$.ajax({
			type: "POST",
			url: "backend/send_mail.php",
			data: fd,
			contentType: false,
        	processData: false,
			success: function(result){
				console.log(JSON.parse(result));
				if(JSON.parse(result).success){
					TweenMax.to(".mail-success-overlay", 0.1, {display:"table", opacity:0});
					TweenMax.to(".mail-success-overlay", 1, {delay:0.1, opacity:1});
				}
			}
		});
	});
	$(".mail-success-overlay").on("click", function(){
		TweenMax.to(".mail-success-overlay", 1, {opacity:0});
		TweenMax.to(".mail-success-overlay", 0.1, {delay:1, display:"none"});
	});
	$(".floating-btn").on("click", function(){
		window.location.href="https://www.facebook.com";
	});
});