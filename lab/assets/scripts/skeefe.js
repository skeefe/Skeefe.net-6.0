console.log('Hit the JS like Barry Bonds.');

$(function () {

	/* ---- Mobile Nav ---- */
	$('#mobile-nav, header.primary ul a').click(function () {
		toggleNav();
	});

	//Close the Mobile Nav on window resize.
	$(window).resize(function () {
		if ($('header.primary nav ul').hasClass('active')) {
			toggleNav();
		}
	});

	//Close the Mobile Nav on "Esc" key press.
	$(document).keyup(function (e) {
		if (e.keyCode == 27) {
			if ($('header.primary nav ul').hasClass('active')) {
				toggleNav();
			}
		}
	});

	//Close the Mobile Nav on overlay click.
	$('body').on('click', '#nav-overlay', function () {
		toggleNav()
	});

	//Toggles the Mobile Nav
	function toggleNav() {
		var mobileNav = $('header.primary nav ul');
		if ($(mobileNav).hasClass('active')) {

			//Hide the Mobile Nav.
			$(mobileNav).removeClass('active');

			//Remove overlay.
			$('#nav-overlay').fadeOut(250).remove();
		}
		else if ($('#mobile-nav:visible').length > 0) { //If the breakpoint is phoneLandscape or smaller.

			//Display the Mobile Nav.
			$(mobileNav).addClass('active');

			//Add overlay.
			$('body').append('<div id="nav-overlay"></div>');
			$('#nav-overlay').fadeIn(350);
		}
	}


	/* ---- Filter Menu ---- */
	$('body').on('click', '.filter li:not(.active)', function () {
		var selectedFilter = $(this);

		//Update the active filter item.
		$(selectedFilter).add('.filter li.active').toggleClass('active');
		
		//Update the H1.
		var headingBase = $('h1').data('filter-heading');
		$('h1').html(headingBase + $(selectedFilter).data('title'));

	});

});