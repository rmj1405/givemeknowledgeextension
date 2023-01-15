// window.addEventListener('mouseup', selectedWord)

// function selectedWord() {
//     let selectedText = window.getSelection()
//     console.log(selectedText)
// }


async function fetchData() {
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '7d8216ebb0msh38b7f2a7fe4e9f4p1e8b2ajsn7bc8bf122288',
          'X-RapidAPI-Host': 'word-of-the-day2.p.rapidapi.com'
        }
      };
      
      const record = await fetch('https://word-of-the-day2.p.rapidapi.com/word/today', options)
        // .then(response => response.json())
        // .then(response => console.log(response))
        // .catch(err => console.error(err));

        const res = await record.json()
        console.log(res)
    document.getElementById("def").innerHTML = res[1].word
    document.getElementById("mean").innerHTML = res[1].mean
}

fetchData()

