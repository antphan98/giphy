const topics = ["sushi", "pizza", "burgers", "sandwich", "pasta"];

function loadButtons() {

    $("#buttons-view").empty();

    for (let i = 0; i < topics.length; i++) {
        const newButton = $("<button>");
        newButton.addClass("food");
        newButton.attr("data-name", topics[i]);
        newButton.text(topics[i]);
        $("#buttons-view").append(newButton);
    }
}


$("#submit-button").on("click", function (event) {

    event.preventDefault();
    const topic = $("#submit-input").val().trim();
    topics.push(topic);

    loadButtons();
});


function showGifs() {

    const food = $(this).attr("data-name");
    const queryURL = `https://api.giphy.com/v1/gifs/search?q=${food}&api_key=mG7YbA6SQ8q8PRgpYLumQ16Fg2xaNZpu&limit=10`

    $.ajax({
        url: queryURL,
        method: "GET"
     }).then(function(response) {

        $("#gifs").empty();
        
        console.log(queryURL);
        console.log(response);

        const results = response.data;
        for (let i = 0; i< results.length; i++) {
            const foodDiv = $("<div>");
            foodDiv.addClass("foodDiv");
            const p = $("<p>").text("Rating: " + results[i].rating);
            const foodImage = $("<img>");
            foodImage.attr("src", results[i].images.fixed_height.url);

            foodDiv.append(p);
            foodDiv.append(foodImage);

            $("#gifs").prepend(foodDiv);

        }



});

}

$(document).on("click", ".food", showGifs);


loadButtons();