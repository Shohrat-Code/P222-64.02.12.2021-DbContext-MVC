// Resize
function resize() {
	window_width = $(window).width(),
	window_height = $(window).height(),
	image_width = 1600,
	image_height = 1200,
	_image = $("#resize img"),
	static_ratio = image_width / image_height;
	dinamic_ratio = window_width / window_height;
	if ((dinamic_ratio - static_ratio) < 0) {
		_image.removeAttr("style");
		_image.css("width", "auto").css("height", "100%");
		_image.css("margin-left", -(_image.width()-window_width)/2);
		
	} else {
		_image.removeAttr("style");
		_image.css("margin-top", -(_image.height()-window_height)/2);
	}
}

resize();

$(window).resize(function() {
	resize();
})


	/* Slider on main page begins */

		// First Data
		var arr_h1 = [],
		arr_h2 = [],
		arr_img = [],
		arr_link = [],
		arr_price = [],
		arr_video = [],
		slider_length = $(".data img").length;
		for (c=0; c < slider_length; c++) {
			var src = $(".data img").eq(c).attr("src"),
			h1 = $(".data img").eq(c).attr("alt"),
			h2 = $(".data img").eq(c).attr("title"),
			link = $(".data img").eq(c).attr("data-link"),
			price = $(".data img").eq(c).attr("data-price");
			video = $(".data img").eq(c).attr("data-video");
			arr_h1.push(h1);
			arr_h2.push(h2);
			arr_img.push(src);
			arr_link.push(link);
			arr_price.push(price);
			arr_video.push(video);
		}

			video_src = "mp4";

		console.log(video_src);

		



		function run_slider() {
			$("#index_slider .image a").prepend("<img src="+arr_img[i]+" alt=''>");
			if (previous < i) {
				$("#index_slider .image img").last().delay(300).animate({"left":"-980px"}, { duration: 900, easing: "easeOutCubic" });
			} else {
				$("#index_slider .image img").last().delay(300).animate({"left":"980px"}, { duration: 900, easing: "easeOutCubic" });
			}

			$("#index_slider .price").delay(300).animate({"right": "-168px", "opacity" : "hide"}, 900);
			setTimeout( function() {
				$("#index_slider .price span").text(arr_price[i]);
			}, 900);
			$("#index_slider .price").delay(300).animate({"right": "10px", "opacity" : "show"}, 900);


			$("#index_slider h1").animate({"opacity": "hide"}, { duration: 900, easing: "easeOutCubic" });
			$("#index_slider h1").animate({"opacity": "show"}, { duration: 900, easing: "easeOutCubic" });
			$("#index_slider h1 strong").css("left", "-900px");
			$("#index_slider h1 strong").delay(900).animate({"left": "0"}, { duration: 900, easing: "easeOutCubic" });
			$("#index_slider h1 span").delay(150).css("left", "-900px");
			$("#index_slider h1 span").delay(1050).animate({"left": "0"}, { duration: 900, easing: "easeOutCubic" });

			setTimeout( function() {
				$("#index_slider section.slider a").attr("href",arr_link[i]);
				$("#index_slider h1 > span").text(arr_h2[i]);
				$("#index_slider h1 > strong").text(arr_h1[i]);
			}, 600);

			setTimeout( function() {
				$("#index_slider .image img").last().remove();
			}, 1000);

			$("#example_video_1_html5_api").attr("src", arr_video[i]+"."+video_src);

            $(".video-js source").eq(0).attr("src", arr_video[i]+".mp4");
            $(".video-js source").eq(1).attr("src", arr_video[i]+".webm");
            $(".video-js source").eq(2).attr("src", arr_video[i]+".ogv");

		}

		// Bullets click
		$(".bullets a").click(function() {

			if ($("#index_slider").hasClass("animated")) {} else {

				previous = $(".bullets a.active").index();
				$("#index_slider").addClass("animated");
				$(".bullets a").removeClass("active");
				$(this).addClass("active");
				i = $(".bullets a.active").index();

				run_slider(i);

			}

			setTimeout( function() {
				$("#index_slider").removeClass("animated");
			}, 2400);

			return false;
		});


		$("#index_slider .arrows a").click(function() {

			if ($("#index_slider").hasClass("animated")) {} else {

				previous = $(".bullets a.active").index();
				i = $(".bullets a.active").index();

				if ($(this).hasClass("prev")) {
					i--;
					if (i==-1) {
						i=slider_length-1;
					}
				} else {
					i++;
					if (i==slider_length) {
						i=0;
					}
				}

				$("#index_slider").addClass("animated");
				$(".bullets a").removeClass("active");
				$(".bullets a").eq(i).addClass("active");

				run_slider(i);

			}

			setTimeout( function() {
				$("#index_slider").removeClass("animated");
			}, 2400);

			return false;
		});

	/* Slider on main page end */

/* Video play begin */

	$("#index_slider .play").click(function(){
		if ($(this).hasClass("close")) {

			videojs("example_video_1").ready(function(){
			  var myPlayer = this;

			  // EXAMPLE: Start playing the video.
			  myPlayer.pause();

			});


			$("#index_slider .play").animate({"top": "50%", "right": "50%"}, 450);

			$("#index_slider .video").animate({"opacity": "hide"}, 1200);

			$(this).removeClass("close");
		} else {
			
		videojs("example_video_1").ready(function(){
		  var myPlayer = this;

		  // EXAMPLE: Start playing the video.
		  myPlayer.play();

		});


			$("#index_slider .play").delay(450).animate({"top": "45px", "right": "45px"}, 450);

			$("#index_slider .video").delay(900).animate({"opacity": "show"}, 1200);

			$(this).addClass("close");

		}
		return false;
	});

/* Video play end */


	/* Tabs films begin */

		$("#last_films .tabs ul li a").click(function(){
			var this_eq = $(this).parent().index();
			$("#last_films .tabs ul li a").removeClass("active");
			$(this).addClass("active");

			$("#last_films .list > ul > li").hide();
			$("#last_films .list > ul > li").eq(this_eq).show();
			return false;
		});

	/* Tabs films end */


	/* Poster slider begin */

	var poster_slider_length = $("#poster_slider .slides > ul > li").length, 
	poster_active_slide = 0,
	poster_visible_length = 1;

	function run_poster_carousel() {
		$("#poster_slider .slides > ul").animate({left : -poster_active_slide * 200}, { duration: 900, easing: "easeOutExpo" }); 
	}

	$("#poster_slider .arrows a").click(function() {

			if ($(this).hasClass("prev")) {
				poster_active_slide--;
				if (poster_active_slide == -1) {
					poster_active_slide = poster_slider_length;
				}
				run_poster_carousel(poster_active_slide);
			} else {
				poster_active_slide++;
				if (poster_active_slide == poster_slider_length-poster_visible_length+1) {
					poster_active_slide = 0;
				}
				run_poster_carousel(poster_active_slide);
			}

		return false;
	});

	/* Poster slider end */



	// Map function
	function map(){
		var latitude = $('#map').attr('data-latitude'),
		longitude = $('#map').attr('data-longitude'),
                mzoom = parseInt($('#map').attr('data-zoom'));
		
		var myOptions = {
		  zoom: mzoom,
		  center: new google.maps.LatLng(latitude,longitude),
		  mapTypeId: google.maps.MapTypeId.ROADMAP,
		  scrollwheel: false,
		  mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		
		var map = new google.maps.Map(document.getElementById("map"), myOptions);
		                              
		var image = 'img/label.png';
		var position = new google.maps.LatLng(latitude,longitude);

		var marker = new google.maps.Marker({
		    position: position,
		    map: map,
		    icon: image
		});
		
	}

	if ($("#map").length > 0) {
		map();
	}


/*
 * Floating header
 */
$(window).scroll(function () { 
	var cont_top = window.pageYOffset ? window.pageYOffset : document.body.scrollTop; 
	/* if ie7 or ie8*/
	if (document.all && !document.querySelector) {
		cont_top = document.documentElement.scrollTop;
	}
	if (document.all && document.querySelector && !document.addEventListener) {
    	cont_top = document.documentElement.scrollTop;
	}

	if (cont_top > 150) {
		$("#header").addClass("fix");
	} else {
		$("#header").removeClass("fix");
	}
});


/* Simple gallery begins */

	$(".e_color figure a").click(function() {
		
		// Announcement variables
		var window_width = $(window).width(),
		window_height = $(window).height(),
		aspect_ratio = window_width/window_height;
		imageA = $("<img>").attr("src",  $(this).prop('href')),
		this_index = $(this).parents(".e_color").find("figure a").index(this),
		arr = [],
		text_arrow = [],
		gallery_length = $(this).parents(".e_color").find("figure").length;

		var i = 0;
		for (i=0; i < gallery_length; i++ ) {
			arr.push($(this).parents(".e_color").find("figure").eq(i).find("a").attr("href"));
			text_arrow.push($(this).parents(".e_color").find("figure").eq(i).find("img").attr("alt"));
		}



		/* Functions begins */

		function super_resize() {
			var window_width = $(window).width(),
			window_height = $(window).height(),
			aspect_ratio = window_width/window_height;
			image_width = imageA[0].width,
			image_height = imageA[0].height,
			image_ratio = image_width/image_height;

			if (image_width > window_width && image_height > window_height)  {
				if (aspect_ratio > image_ratio) {
					image_height = window_height - 50;
					image_width = image_height*image_ratio;
				} else {
					image_width = window_width - 50;
					image_height = image_width/image_ratio;
				}
			} else {
				if (image_height < window_height && image_width > window_width) {
					image_width = window_width - 50;
					image_height = image_width/image_ratio -1;	
				}
				if (image_height > window_height && image_width < window_width) {
					image_height = window_height - 50;
					image_width = image_height*image_ratio;
				}
			}
		}

		function close_window() {
			$(".darkness").animate({"opacity": "hide"}, 300);
			$("#e_color").animate({"opacity": "hide"}, 300);
			setTimeout(function() {
				$(".darkness, #e_color").remove();
			}, 300);
			delete arr, imageA, gallery_length;
		}

		/* Functions end */
		$(window).resize(function() {




			super_resize()

			$("#e_color").css("width", image_width).css("height", image_height).css("margin-left", -(image_width)/2).css("margin-top", -(image_height)/2);

		});

		// Open first image
		$("body").append("<div class='darkness'><div id='e_color' class='preload'><img alt='' src="+imageA[0].src+" style='display:none' /><a href='#' class='prev'><span>&nbsp;</span></a><a href='#' class='next'><span>&nbsp;</span></a><span class='close' title='Закрыть'></span><p class='counter'>"+(this_index+1)+" из "+gallery_length+"</p><div class='description'><p style='left:-100%; display:none'><span>"+text_arrow[this_index]+"</span></p></div></div></div>");

		$("#e_color img").load(function(){

			super_resize();

			$("#e_color").animate({"width": image_width, "height": image_height, "margin-left": -(image_width)/2, "margin-top": -(image_height)/2}, 300);
			$("#e_color img").delay(300).animate({"opacity":"show"},600);
			if (text_arrow[this_index] == "") {} else {
				$("#e_color .description p").delay(600).animate({"left": "0", "opacity": "show"}, { duration: 900, easing: "easeInOutCubic" });
			}

		});
		
		// Next prev
		function next_prev() {
			$("#e_color img").animate({"opacity": "hide"}, 300);
			$("#e_color img").replaceWith("<img alt='' src="+arr[this_index]+" style='display:none' />");
			imageA = $("<img>").attr("src", arr[this_index]);

			$("#e_color img").load(function(){

				super_resize();

				$("#e_color").animate({"width": image_width, "height": image_height, "margin-left": -(image_width)/2, "margin-top": -(image_height)/2}, 300);
				$("#e_color img").delay(300).animate({"opacity":"show"},600);


				$("#e_color .counter").text((this_index+1)+" из "+gallery_length);


				$("#e_color .description p").css("display", "none").css("left", "-100%");
				if (text_arrow[this_index] == "") {} else {
					$("#e_color .description p").delay(600).animate({"left": "0", "opacity": "show"}, { duration: 900, easing: "easeInOutCubic" });
				}

				setTimeout( function() {
					$("#e_color .description span").text(text_arrow[this_index]);
				}, 600);
			});
		}
		
		function prev() {
			this_index--;
			if (this_index == -1) { this_index = gallery_length-1}
			next_prev();
		}
		
		function next() {
			this_index++;
			if (this_index == gallery_length) { this_index = 0}
			next_prev();
		}
		
		$("#e_color a").click(function(){
			if ($(this).hasClass("prev")) {
				prev();
			} else {
				next();
			}
			return false;
		});
		
		
		$(".darkness, .close").click(function(){
			close_window();
			return false;
		});
		
		return false;
	});

	// ESCAPE key pressed
	$(document).keydown(function(e) {
	    if (e.keyCode == 27) {
			$(".darkness").click();
	    }
		if (e.keyCode == 37) {
			$("#e_color a.prev").click();
		}
		if (e.keyCode == 39) {
			$("#e_color a.next").click();
		}
	});

/* Simple gallery end */


// with jQuery
if ($("#halls").length > 0) {
    $('#halls .grid').masonry({
        columnWidth: 226,
        itemSelector: 'figure:not(.invis)'
    });

    $("#halls .tabs a").click(function(){
        $("#halls .tabs a").removeClass("active");
        $(this).addClass("active");
        var tabno = $(this).attr('tabno');
        $("#halls .texts div.hall_text").hide();
        $("#halls .texts div.hall_text").eq($(this).parent().index()).show();
        console.log(tabno)
        $("#halls figure").addClass('invis');
        $("#halls figure."+tabno).removeClass('invis');
        setTimeout(function(){
            $('#halls .grid').masonry({
              columnWidth: 226,
              itemSelector: 'figure:not(.invis)'
            });
        }, 300);
        return false;
    });
}




$("#last_films .list figure:nth-child(4)").addClass("four");
$("#last_films .list figure:nth-child(8)").addClass("four");
$("#last_films .list figure:nth-child(12)").addClass("four");
$("#last_films .list figure:nth-child(16)").addClass("four");

