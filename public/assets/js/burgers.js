
// Make sure we wait to attach our handlers until the DOM is fully loaded.
console.log("burger.js entered");
$(function() {
  console.log("burger.js function entered")
  $(".change-devoured").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevoured");
console.log("id=", id, "newDevoured", newDevoured);
    var newDevouredState = {
      devoured: newDevoured
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState,
      dataType: "json"
    }).then(
      function() {
        console.log("changed devoured to", newDevouredState);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#ca").val().trim(),
      devoured: false
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".devour-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: { devoured: true }
    }).then(
      function() {
        console.log("devoured burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
// module.exports = burgers;