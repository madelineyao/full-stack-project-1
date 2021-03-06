//All the quotes for the webpage 
var quotes = [
    {
      quote: 'One good thing about music, when it hits you, you feel no pain.', 
      source: 'Bob Marley'
           
    }, 
    {
       quote:'Nothing is better than going home to family and eating good food and relaxing ', 
       source: 'Irina Shayk'
       
              
    }, 
    {
      quote: 'For beautiful eyes, look for the good in others; for beautiful lips, speak only words of kindness; and for poise, walk with the knowledge that you are never alone. ', 
      source:  'Audrey Hepburn' 
      
      
    }, 
    {
      quote:  'Happiness radiates like the fragrance from a flower and draws all good things towards you.',   
      source:  'Marharishi Mahesh Yogi' 
      
    }, 
    {
      quote: 'Some days are just bad days, that\'s all. You have to experience sadness to know happiness, and I remind myself that not every day is going to be a good day, that\'s just the way it is!',  
      source:   'Dita Von Tesse'
    
    }, 
    {
      quote: 'We should be taught not to wait for inspiration to start a thing. Action always generates inspiration. Inspiration seldom generates action.', 
      source: 'Frank Tibolt'
    }
];


//make the quote on the webpage auto-refreshed every 30 seconds 
setInterval(printQuote, 30000);

//The function is to produce a random quote from the array of quotes 
function getRandomQuote(){
    var number = Math.floor(Math.random()*quotes.length); 
    var random_quote = quotes[number]; 
    return random_quote; 
    
}

//The function is to make the quote shown on the webpage for the user
function printQuote(){
    var quote = getRandomQuote(); 
    var html = ''; 
    html += '<p class = "quote">'+ quote.quote + '</p>'; 
    html += '<p class = "source">'; 
    html +=  quote.source; 
    if(quote.citation){
        html += '<span class="citation">'+quote.citation +'</span>'; 
        
    }
    if(quote.year){
        html += '<span class="year">'+quote.year + '</span>'; 
    }
    if(quote.tags){
        html += '<span class="tags">'+quote.tags +'</span>'; 
    }
    html+= '</p>'; 
    randomColor();
    print(html); 
}

//Helper function for printQuote
//Make the color change as the quote changes in the webpage
function randomColor(){
    var new_color = "rgb("; 
    for(var i=0; i<3; i+=1){
        var x = Math.floor(Math.random()*256); 
        if(i!==2){
            new_color+= x + ",";
        } else {
            new_color+= x+ ")";
        }
        
    }
    
    document.body.style.backgroundColor = new_color;
}


//Helper function for printQuote
//Help the quote to be shown on the webpage 
function print(message){
    var div = document.getElementById('quote-box'); 
    div.innerHTML = message; 
}

 
 










// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

 