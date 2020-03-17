
/* Grab the input */

document.getElementById('js-search').addEventListener('click', function(){
    var inputText = document.getElementById('input-field').value;
    pushToDOM(inputText);
});

document.getElementById('input-field').addEventListener('keyup', function(e){
    var inputText = document.getElementById('input-field').value;
    console.log(inputText);
    
    // if the key ENTER is pressed...
    if(e.which===13){
       pushToDOM(inputText);
    }
});

/* Do the data work with the API */

var url = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC";
var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open('GET', url);
GiphyAJAXCall.send();

GiphyAJAXCall.addEventListener('load', function(e){
    
    var data = e.target.response;
    pushToDOM(data);
});

/* Show the GIFS */

function pushToDOM(inputText){
    
    var response = JSON.parse(inputText);
    
    var imageUrls = response.data;
    
    imageUrls.forEach(function(image){
        var src = image.images.fixed_height.url;
        var gifContainer = document.getElementById('js-gif-container');
        
        gifContainer.innerHTML += "<img src=\"" + src +"\" class=\"gifs\">";
        
        console.log(src);
    });
    
    
}





