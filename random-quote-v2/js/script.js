// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quotes = [
    {
      quote: 'One good thing about music, when it hits you, you feel no pain.', 
      source: 'The autography of Bob Marley', 
      citation: 'https://www.brainyquote.com/quotes/bob_marley_109299',       
      year: 1998       
    }, 
    {
       quote:'Nothing is better than going home to family and eating good food and relaxing ', 
       source: 'The life in Stalingrad', 
       citation: 'https://www.brainyquote.com/quotes/irina_shayk_807961', 
       year: 1937       
    }, 
    {
      quote: 'For beautiful eyes, look for the good in others; for beautiful lips, speak only words of kindness; and for poise, walk with the knowledge that you are never alone. ', 
      source:  'The biography of Audrey Hepburn', 
      citation:  'https://www.brainyquote.com/lists/topics/top_10_good_quote', 
      year: 1940
    }, 
    {
      quote:  'Happiness radiates like the fragrance from a flower and draws all good things towards you.',   
      source:  'Marharishi Mahesh Yogi',  
      citation:  'https://www.brainyquote.com/quotes/maharishi_mahesh_yogi_641007', 
    }, 
    {
      quote: 'Some days are just bad days, that\'s all. You have to experience sadness to know happiness, and I remind myself that not every day is going to be a good day, that\'s just the way it is!',  
      source:   'Dita Von Tesse', 
      citation:  'https://www.brainyquote.com/quotes/dita_von_teese_513157', 
    }
];

//create a number between 0 and the length of the quotes array
//return the randomly picked quote object
//
function getRandomQuote(quote_list){
    var number = Math.floor(Math.random()*(quote_list.length - 1)) + 1; 
    var random_quote = quote_list[number]; 
    return random_quote; 
    
}


function printQuote(){
    var quote = getRandomQuote(quote_list); 
    var html = ''; 
    html += '<p class = "quote">'+ quote.quote + '</p>'; 
    html += '<p class = "source">'; 
    html += '<span>'+ quote.source + '</span>'; 
    if(quote.citation!==null){
        html += '<span class="citation">'+quote.citation +'</span>'; 
        
    }
    if(!quote.year.isNaN()){
        html += '<span class="year">'+quote.year + '</span>'; 
    }
    html+= '</p>'; 
    print(html); 
}

function print(message){
    var div = document.getElementById('quote-box'); 
    div.innerHTML = message; 
}



