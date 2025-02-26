const counter = document.querySelector('.viewCounter');
async function updateCounter() {
    let response = await fetch('https://zlk272dvxs2lrc33rllkbnnfka0tjqly.lambda-url.us-east-1.on.aws/');
    let data = await response.json();
    counter.innerHTML = `${data}`;
}

updateCounter();