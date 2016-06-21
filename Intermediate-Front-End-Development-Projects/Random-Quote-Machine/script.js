$(document).ready(function() {

  $("#new-quote").on("click", function(){

      var apiKey = "457653";
      var apiMethod = "getQuote";
      var url = "http://api.forismatic.com/api/1.0/?method="+apiMethod+"&key="+apiKey+"&format=jsonp&lang=en&jsonp=?";
      $.getJSON(url, function(data) {

        var json = JSON.stringify(data);
        var quoteData = JSON.parse(json);
        var quote = quoteData.quoteText;
        var author = quoteData.quoteAuthor;
        $("#quote").html(quote);
        $("#author").html(author);
      });
  });
});
