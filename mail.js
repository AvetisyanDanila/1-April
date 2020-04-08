$(document).ready(function() {

	$("#form-modal").submit(function () {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function () {
			$(this).find("input").val("");
			$('.header-modal').fadeOut();
			$('.thank-modal').fadeIn();
			$("#form").trigger("reset");
		});
		return false;
	});
	
});