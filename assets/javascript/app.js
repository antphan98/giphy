$(document).ready(function() {


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


$("#submit-button").on("click", "#food-form", function (event) {

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
            foodImage.addClass("foodGifs");
            foodImage.attr("src", results[i].images.fixed_height.url);


           const animate = results[i].images.fixed_height.url;
           const still = results[i].images.fixed_height_still.url;
           foodImage.attr("src", still);
           foodImage.attr("data-still", still);
           foodImage.attr("data-animate", animate);
           foodImage.attr("data-state", still);
           

            foodDiv.append(p);
            foodDiv.append(foodImage);
            $("#gifs").prepend(foodDiv);

        }

});

}

$("#gifs").on("click", ".foodGifs", function() {

    const state = $(this).attr("data-state");
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    
    }
else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");

}


});


$(document).on("click", ".food", showGifs);


loadButtons();

});