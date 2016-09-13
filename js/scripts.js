var quoteCollection = [
  { 
    quote: "If you don't know where you are going, any road will get you there.",
    author: "Lewis Carroll"
  },
  {
    quote: "The most important thing in life is to learn how to give out love, and to let it come in.",
    author: "Morrie Schwartz"
  },
  {
    quote: "The best way to waste your life, ... is by taking notes. The easiest way to avoid living is to just watch. Look for the details. Report. Don't participate.",
    author: "Chuck Palahniuk"
  },
  {
    quote: "I laugh, I love, I hope, I try, I hurt, I need, I fear, I cry. And I know you do the same things too, So we're really not that different, me and you.",
    author: "Colin Raye"
  },
  {
    quote: "Courage is the discovery that you may not win, and trying when you know you can lose.",
    author: "Tom Krause"
  },
  {
    quote: "I am easily satisfied with the very best.",
    author: "Winston Churchill"
  },
  {
    quote: "Whenever you're in conflict with someone, there is one factor that can make the difference between damaging your relationship and deepening it. That factor is attitude.",
    author: "William James"
  },
  {
    quote: "Excellence is not a singular act, but a habit. You are what you repeatedly do.",
    author: "Shaquille ONeal"
  },
  {
    quote: "Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.",
    author: "Jamie Paolinetti"
  },
  {
    quote: "Ordinary riches can be stolen, real riches cannot. In your soul are infinitely precious things that cannot be taken from you.",
    author: "Oscar Wilde"
  },
  {
    quote: "“If you only do what you know you can do- you never do very much.",
    author: "Tom Krause"
  },
  {
    quote: "Anyone who trades liberty for security deserves neither liberty nor security",
    author: "Benjamin Franklin"
  },
  {
    quote: "Your birth is a mistake you'll spend your whole life trying to correct.",
    author: "Chuck Palahniuk"
  },
  {
    quote: "Be yourself. Above all, let who you are, what you are, what you believe, shine through every sentence you write, every piece you finish.",
    author: "John Jakes"
  },
  {
    quote: "The Answer to the Great Question Of.....Life, the Universe and Everything.....(is) Forty-two.",
    author: "Douglas Adams"
  },
  {
    quote: "Do not spoil what you have by desiring what you have not; remember that what you now have was once among the things you only hoped for.",
    author: "Epicurus"
  },
  {
    quote: "The critic has to educate the public; the artist has to educate the critic.",
    author: "Oscar Wilde"
  },
  {
    quote: "The greatest barrier to success is the fear of failure.",
    author: "Sven Goran Eriksson"
  },
  {
    quote: "There's no half-singing in the shower, you're either a rock star or an opera diva.",
    author: "Josh Groban"
  },
  {
    quote: "A man's errors are his portals of discovery.",
    author: "James Joyce"
  },
  {
    quote: "Through humor, you can soften some of the worst blows that life delivers. And once you find laughter, no matter how painful your situation might be, you can survive it.",
    author: "Bill Cosby"
  },
  {
    quote: "They may forget what you said, but they will never forget how you made them feel.",
    author: "Carl W. Buechner"
  },
  {
    quote: "Obstacles are things a person sees when he takes his eyes off his goal.",
    author: "E. Joseph Cossman"
  },
  {
    quote: "Losing doesn't eat at me the way it used to. I just get ready for the next play, the next game, the next season.",
    author: "Troy Aikman"
  },
  {
    quote: "You can do anything, but not everything.",
    author: "David Allen"
  },
  {
    quote: "You must be the change you wish to see in the world.",
    author: "Gandhi"
  },
  {
    quote: "To the man who only has a hammer, everything he encounters begins to look like a nail.",
    author: "Abraham Maslow"
  },
  {
    quote: "We are what we repeatedly do; excellence, then, is not an act but a habit.",
    author: "Aristotle"
  },
  {
    quote: "Do not seek to follow in the footsteps of the men of old; seek what they sought.",
    author: "Basho"
  },
  {
    quote: "Watch your thoughts; they become words. Watch your words; they become actions. Watch your actions; they become habits. Watch your habits; they become character. Watch your character; it becomes your destiny.",
    author: "Lao-Tze"
  },
  {
    quote: "Everyone is a genius at least once a year. The real geniuses simply have their bright ideas closer together.",
    author: "Georg Christoph Lichtenberg"
  },
  {
    quote: "What we think, or what we know, or what we believe is, in the end, of little consequence. The only consequence is what we do.",
    author: "John Ruskin"
  },
  {
    quote: "The real voyage of discovery consists not in seeking new lands but seeing with new eyes.",
    author: "Marcel Proust"
  },
  {
    quote: "Try a thing you haven’t done three times. Once, to get over the fear of doing it. Twice, to learn how to do it. And a third time, to figure out whether you like it or not.",
    author: "Virgil Garnett Thomson"
  },
  {
    quote: "Even if you’re on the right track, you’ll get run over if you just sit there.",
    author: "Will Rogers"
  },
  {
    quote: "People often say that motivation doesn’t last. Well, neither does bathing – that’s why we recommend it daily.",
    author: "Zig Ziglar"
  },
  {
    quote: "The person who reads too much and uses his brain too little will fall into lazy habits of thinking.",
    author: "Albert Einstein"
  }  
];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getNewQuote() {
  var index = getRandomInt(0, quoteCollection.length - 1);
  
  return quoteCollection[index];
}

function generateTweeterLink(quote, author) {
  var aHref = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=";
  $("#tweeter-link").attr("href", aHref + quote + " " + author);
}

function showNewQuote() {
    var newQuote = getNewQuote();
    $("#quote").html(newQuote.quote);
    $("#author").html("--- " + newQuote.author);  
    generateTweeterLink(newQuote.quote, newQuote.author);
}

$(document).ready(function() {
  showNewQuote();
  $("#newQuote").on("click", function() {
    showNewQuote();
  });
});