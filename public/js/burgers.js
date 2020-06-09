$(function () {

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        let splitBurger = $("#burger-name").val().trim().split(" ")

        for (var i = 0; i < splitBurger.length; i++) {
            splitBurger[i] = splitBurger[i].charAt(0).toUpperCase() + splitBurger[i].substring(1);
        }

        let capitalizedBurger = splitBurger.join(" ");

        let newBurger = {
            burger_name: capitalizedBurger
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                location.reload();
            })
    })

    $(".burger-btn").on("click", function (event) {
        let id = $(this).data("id");
        let burgerStatus = $(this).data("devoured");

        isBurgerEaten = {
            devoured: burgerStatus
        }

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: isBurgerEaten
        }).then(
            function () {
                location.reload();
            }
        );
    });

    $("#delete-btn").on("click", function (event) {

        $.ajax("/api/burgers/", {
            type: "DELETE",
        }).then(
            function () {
                location.reload();
            }
        );
    });

})