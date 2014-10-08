$(document).ready(function() {

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
  $.ajax({
    url: '/contacts',
    success: function (data) {
      data.forEach(function (d) {
        $("<p>").text(d.firstname + " " + d.lastname).appendTo($("#contact-list"));
      })
    },
    error: function() {
      alert("Something went wrong. Contacts could not be loaded.");
    }
  });


});
