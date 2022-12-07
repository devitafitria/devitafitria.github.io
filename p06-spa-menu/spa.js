$(document).ready(function() {
    $("nav ul li a").click(function(){
        $(".depita-isi").slideToggle("slow");

	$('nav ul li.tidak-aktif').each(function(index, el) {
		var isiID = el.id.split('-')[1];
		$('.depita-isi#' + isiID).hide();
	});
});

$('nav').delegate('.tidak-aktif', 'click', function(event) {
	var pilihIsi = this.id.split('-')[1];
	console.log(pilihIsi);
	document.location.hash = pilihIsi;

	$('.isiID:visible').fadeOut('slow', function() {
		$('.depita-isi#' + pilihIsi).fadeIn('slow');
	});

	var $this = $(this);
	$this.removeClass('tidak-aktif').addClass("aktif");
    $this.siblings().addClass('tidak-aktif').removeClass('aktif');

    });
});