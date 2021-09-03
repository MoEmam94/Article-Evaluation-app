const handleSubmit = async (e) => {
    e.preventDefault()
    let inputedURL = document.getElementById('url').value
    Client.linkChecker(inputedURL) ? postRequest('http://localhost:8081/evaluate-url', { url: inputedURL })
        .then(function(res) {
        // document.getElementById('text').innerHTML = `Text: ${res.entence_list[0].text}`
        document.getElementById('agreement').innerHTML = `Agreement: ${res.agreement}`
        document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`
        document.getElementById('confidence').innerHTML = `Confidence: ${res.confidence}`
        document.getElementById('irony').innerHTML = `Irony: ${res.irony}`
            document.getElementById('score_tag').innerHTML = 'Polarity: ' + polarityIndex(res.score_tag)
    }) : alert('Please enter a valid URL :)')
}

const polarityIndex = (score_tag) => {
    switch (score_tag){
        case 'P+':
            return 'Strong Positive';
        case 'P':
            return 'Positive';
        case 'NEW':
            return 'Neutral';
        case 'N':
            return 'Negative';
        case 'N+':
            return 'Strong Negative';
        case 'NONE':
            return 'No Sentiment';
    }
}

const postRequest = async (url = '', data = {}) => {
    console.log('Evaluating: ', data)
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    try {
        const analysedData = await response.json()
        console.log('Anaylysed data:', analysedData)
        return analysedData
    } catch (err) {
        console.log(`Error : ${err}`)
    }
}

export { handleSubmit }
export { polarityIndex }