/* public/js/scripts.js */

jQuery(function($){
	/* ========================================================================= */

	// !– Dev tools

	/* ========================================================================= */




	/* ========================================================================= */

	// !– Cosmetics

	/* ========================================================================= */

	$('html').removeClass('no-js');
	$('.social-icons a').wrapInner('<span class="js-hidden"></span>');
	$('.product_remove').wrapInner('<span class="js-hidden"></span>');
	$('.search-form #submit').hide();



	/* ========================================================================= */

	// !– Cart

	/* ========================================================================= */



		// !Append HTML



		// !Set vars



		// !Functions



		// !Launch onload functions



		// !Events
		$('.product_list').on('click', '.product_remove', function(event) {
			event.preventDefault();
			$(this).parents('.product_item').remove();
		});



	/* ========================================================================= */

	// !– Gallery slider

	/* ========================================================================= */



		// !Append HTML



		// !Set vars



		// !Functions



		// !Launch onload functions
		if ($('.gallery').length) {
			$('.gallery ul').bxSlider({
				prevText: "",
				nextText: "",
				onSliderLoad: function(){
					$('.gallery .bx-pager-link').wrapInner('<span class="js-hidden"></span>');
			    }
			});
		}


		// !Events




	/* ========================================================================= */

	// !– Tabs

	/* ========================================================================= */



		// !Append HTML



		// !Set vars



		// !Functions



		// !Launch onload functions
		if ($('.favorites').length) {
			$('.favorites ul').bxSlider({
				prevText: '',
				nextText: '',
				pager: false,
				minSlides:4,
				maxSlides:4,
				slideWidth:220,
				slideMargin:20
			});
		}


		// !Events




	/* ========================================================================= */

	// !– Favorites slider

	/* ========================================================================= */



		// !Append HTML



		// !Set vars



		// !Functions
		if ($('.tabs').length) {
			$.getJSON( "tab/tabcontent", function( data ) {
				var list_items = [];
				$.each( data, function( key, val ) {
					list_items.push( "<li><article><h1>" + val.Title + "</h1><div class=\"tab_content\">" + val.Content + "</div></article></li>" );
			    });
			 
				$( "<ul/>", {
					html: list_items.join( "" )
			  	}).appendTo( ".tabs" ).children('li:first-child').addClass('active');

			});
		}



		// !Launch onload functions


		// !Events
		if ($('.tabs').length) {
			$('.tabs').on('click', 'article>h1', function() {
				$(this).parents('.tabs').find('li.active').removeClass('active');
				$(this).parents('li').addClass('active');
			});
		}



	/* ========================================================================= */

	// !– Newsletter form

	/* ========================================================================= */



		// !Append HTML



		// !Set vars



		// !Functions
		if ($('.newsletter-form').length) {
			$('.newsletter-form').append('<output />');
			$('.newsletter-form').on('submit', function(event) {
				console.log($('#newsletter-email').val());
				event.preventDefault();
				$.post( "newsletter/subscribe", { 
					email: $('#newsletter-email').val(), 
					beforeSend:function(){
						$(".newsletter-form output").html('<span class="loading">Subscribing to newsletter...</span>');
			        }}, 
		        function( data ) {
					$(".newsletter-form output").html( data );
				});
			});
		}



		// !Launch onload functions


		// !Events


});