const quoteButton = document.getElementById("quoteButton");
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const wrapper = document.getElementById("wrapper");
const tweetButton = document.getElementById("tweet");



const queryURL = "https://talaikis.com/api/quotes/random/";


function changeBackground() {
   // let randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
   var letters = 'BCDEF'.split('');
   var color = '#';
   for (var i = 0; i < 6; i++ ) {
         color += letters[Math.floor(Math.random() * letters.length)];
   }

   document.body.style.backgroundColor = color;
   $(".wrapper").show();
  
}

function getQuote() {
   $.ajax({
      url: queryURL,
      method: "GET",
   }).done(function(response){
      quote.innerHTML = `"${response.quote}"`;
      author.innerHTML =`--${response.author}`;
   });
}

quoteButton.addEventListener("click", function() {
   getQuote();
   setTimeout(changeBackground, 200);
});

tweetButton.addEventListener("click", function(){
   window.open(`https://twitter.com/intent/tweet?text=${quote.textContent} ${author.textContent}`, "_blank");
});