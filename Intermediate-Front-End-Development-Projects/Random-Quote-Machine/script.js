var currentQuote="";
var currentAuthor="";

function getNewQuote() {
  var apiKey = "457653";
  var apiMethod = "getQuote";
  var url = "http://api.forismatic.com/api/1.0/?method="+apiMethod+"&key="+apiKey+"&format=jsonp&lang=en&jsonp=?";
  $.getJSON(url, function(data) {

    var json = JSON.stringify(data);
    var quoteData = JSON.parse(json);
    currentQuote = quoteData.quoteText;
    currentAuthor = quoteData.quoteAuthor;
    $("#quote").html(currentQuote);
    $("#author").html(currentAuthor);
  });
}

$(document).ready(function() {
  getNewQuote();
  // Generating new quote
  $("#new-quote").on("click", function() {
    getNewQuote();
  });

  // Tweet the current quote
  $("#tweet-quote").on("click", function(){
    var url = 'https://twitter.com/intent/tweet?hashtags=quotes&text="'+currentQuote+'" ' +currentAuthor;
    $("#tweet-quote").attr("href",url);
  });
});
