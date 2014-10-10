$(document).ready(function() {

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready();

  var $firstname = $("#firstname");
  var $lastname = $("#lastname");
  var $email = $("#email");

  function addContact(contact) {
    var row = $("<tr>").append("<td>" + contact.id + "</td><td>" + contact.firstname + "</td><td>" + contact.lastname + "</td><td>" + contact.email + "</td><td><button class='delete' id='" + contact.id + "'>Remove</button></td>");
    row.appendTo($("#contact-list"));
  }


  $.ajax({
    url: '/contacts',
    success: function(contacts) {
      $.each(contacts, function(i, contact) {
        addContact(contact);
      })
    },
    error: function() {
      alert("Something went wrong. Contacts could not be loaded.");
    }
  });

  $('#newcontact').on('click', function(event) {

    event.preventDefault();

    var contact = {
      firstname: $firstname.val(),
      lastname: $lastname.val(),
      email: $email.val(),
    }

    $.ajax({
      url: '/contacts',
      type: "POST",
      data: contact,
      success: function(newContact) {
        addContact(newContact);
      },
      error: function() {
        alert("Something went wrong. Contact was not created.");
      }
    });

    $(".form-control").val("");

  });

  $("button").on('click', '.delete', function() {


  });

});
