$(function () {

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        let newBurger = {
            burger_name: $("#burger-name").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                location.reload();
            })
    })

    $(".devour-it").on("click", function (event) {
        let id = $(this).data("id");

        $.ajax("/api/cats/" + id, {
            type: "PUT",
            data: id
        }).then(
            function () {
                location.reload();
            }
        );
    });

})