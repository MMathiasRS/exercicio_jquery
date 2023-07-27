$(document).ready(() => {
    $("form").on("submit", e => {
      e.preventDefault();
      const InputValue = $("form input").val();
      $("#container").append(`<ul><li>${InputValue}</li></ul>`);

      $("#container").on("click", "li", function () {
        $("li").css("text-decoration", "line-through");
      });
    });
  });