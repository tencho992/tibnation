function translateToTibetan() {
    let inputText = document.querySelector('#user').value;
    const apiKey = 'fc021ae2a2784b7e86b50402ef4adb95';
    const endpoint = 'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=bo';
  
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': apiKey,
        'Ocp-Apim-Subscription-Region': 'eastus'
      },
      body: JSON.stringify([{ 'text': inputText }])
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      const translation = data[0].translations[0].text;
      document.getElementById('tibetanOutput').innerText = translation;
      document.getElementById('userInput').innerText = inputText;

    })
    .catch(err => {
      console.log(`Error: ${err}`);
    });
  }
  
  document.querySelector('#translate').addEventListener('click', translateToTibetan);
  