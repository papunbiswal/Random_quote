function generateQuote() {
    fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data =>{
        const quote = `${data.content} - ${data.author}`;
        document.getElementById('quote').innerText = quote;
    })
    .catch(error => {
        document.getElementById('quote').innerText = "An error occured"
    });
}

generateQuote();