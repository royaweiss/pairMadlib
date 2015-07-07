Meteor.startup(function() {
	$("#submitBtn").click(function() {

		console.log("Hello, world");

		var exclamation = $("#exclamation").val();
		var verb = $("#verb").val();
		var adverb = $("#adverb").val();
		var noun = $("#noun").val();

		console.log("exclamation: " + exclamation);

		var mad_lib = "'" + exclamation + "!' he said, as he  " + adverb + " jumped onto his " + noun + " and "+ verb + " into the sunset.";

		$("#mad_lib").hide();
		$("#mad_lib").text(mad_lib).fadeIn("slow").css("color", "#0000ff");
	});	
});





