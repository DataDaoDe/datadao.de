$(document).ready(function() {

  var footerQuotes = [
    "\"If you do not change direction, you may end up where you are heading.\" - Lao Tzu",
    "\"The journey of a thousand miles begins with a single step.\" - Lao Tzu",
    "\"The cautious seldom err.\" - Confucius",
    "\"Care about what other people think and you will always be their prisoner.\" - Lao Tzu",
    "\"Nature does not hurry, yet everything is accomplished.\" - Lao Tzu",
    "\"Mastering others is strength, mastering yourself is true power.\" - Lao Tzu",
    "\"Great acts are made up of small deeds.\" - Lao Tzu",
    "\"He who is contented is rich.\" - Lao Tzu",
    "\"The only true wisdom is knowing you know nothing.\" - Socrates"
  ]  

  function randomQuote() {
    var idx = Math.floor(Math.random() * footerQuotes.length);
    return footerQuotes[idx];
  }

  $footer = $('.footer .quote')
  $footer.text(randomQuote());
  $footer.fadeIn(1000);
})