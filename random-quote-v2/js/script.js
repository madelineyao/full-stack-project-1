//All the quotes for the webpage 
var quotes = [
    {
      quote: 'One good thing about music, when it hits you, you feel no pain.', 
      source: 'Bob Marley', 
           
    }, 
    {
       quote:'Nothing is better than going home to family and eating good food and relaxing ', 
       source: 'Irina Shayk', 
       tags: 'going home'
              
    }, 
    {
      quote: 'For beautiful eyes, look for the good in others; for beautiful lips, speak only words of kindness; and for poise, walk with the knowledge that you are never alone. ', 
      source:  'Audrey Hepburn', 
      tags: 'wisdom'
      
    }, 
    {
      quote:  'Happiness radiates like the fragrance from a flower and draws all good things towards you.',   
      source:  'Marharishi Mahesh Yogi',  
      
    }, 
    {
      quote: 'Some days are just bad days, that\'s all. You have to experience sadness to know happiness, and I remind myself that not every day is going to be a good day, that\'s just the way it is!',  
      source:   'Dita Von Tesse', 
    
    }
];

//create a number between 0 and the length of the quotes array
//return the randomly picked quote object

setInterval(printQuote, 30000);

//The function is to produce a random quote from the array of quotes 
function getRandomQuote(){
    var number = Math.floor(Math.random()*quotes.length); 
    var random_quote = quotes[number]; 
    return random_quote; 
    
}


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


function randomColor(){
    var x = Math.floor(Math.random()*256); 
    var y = Math.floor(Math.random()*256); 
    var z = Math.floor(Math.random()*256); 
    var new_color = "rgb("+x+", "+y+", "+z+")";
    document.body.style.backgroundColor = new_color;
}



function print(message){
    var div = document.getElementById('quote-box'); 
    div.innerHTML = message; 
}

 
 










// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

 