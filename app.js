
//function to grab data
async function fetchData(date) {
  try {
    let response = await axios.get(`https://api.nasa.gov/planetary/apod/?date=${date}&api_key=dJXmtgi5Ot3o758TqppoAXRJ2SRTk6sTEtJ141dM`)
    const data = response
    console.log(data)
    return response
  } catch (error) {
    console.log(error)
  }
}


//function to append content to the DOM
function showNasaPhoto() {
  let nasaPhoto = `
<img src='${data.hdurl}
`
}




//Dynamically search dates to choose photo using html input
let button = document.querySelector('#search')
button.addEventListener('click', (e) => {
  e.preventDefault()
  let value = document.querySelector('#date-input').value
  fetchData(value)
})


//remove photo if another photo is searched