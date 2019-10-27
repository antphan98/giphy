
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

loadButtons();

