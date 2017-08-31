var gamesArray = [];

$("#submit-button").on("click", function(e) {
      e.preventDefault();
      var game = $("#game-search").val().trim();
      console.log(game);
      var queryURL = "https://api.twitch.tv/kraken/streams/?game=" + game + "&limit=10";
          
          gamesArray.push(game);
          console.log(gamesArray);

      $.ajax({
        url: queryURL,
        method: "GET",
        headers: {"Client-ID": "uo6dggojyb8d6soh92zknwmi5ej1q2"}
      }).done(function(response) {
        
        console.log(response);

        var results = response.streams;
        

        for (var i = 0; i < results.length; i++) {

          var streamDiv = $("<div class='streamDiv'>");
          

          var streamName = results[i].channel.display_name;
          var streamLink = results[i].channel.url;

          var h5 = $("<h5>").text("Streamer name: " + streamName);
          var p = $("<p>").text("Link: " + streamLink);

          var streamImage = $("<img>");

          streamImage.attr("src", results[i].preview.medium);

          streamDiv.append(h5);
          streamDiv.append(p);
          streamDiv.append(streamImage);


          $("#results-display").prepend(streamDiv);

        }

    });

});
