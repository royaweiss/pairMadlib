Meteor.startup(function() {
	$("#submitBtn").click(function() {

		console.log("Hello, world");

		var exclamation = $("#exclamation").val();
		var verb = $("#verb").val();
		var adverb = $("#adverb").val();
		var noun = $("#noun").val();

		console.log("exclamation: " + exclamation);
	});	
});





