//All my magic goes in here-ssy

const fetchApi = () => {
    fetch('dummy.json')
    .then((res) => res.json())
    .then((data) => {
        let Results = "<h1>All Results</h1>"

        data.forEach(api => {
            Results += `
            <div>
               <div>
                 
                 <div class="d-flex justify-content-center align-items-center flex-column container-fluid rounded">
                 <img class="bg-warning rounded" src=${api.img}>
                 <p class="bg-white">${api.name}</p>
                 <a href=${api.img} download=${api.img}><button>${api.value}</buton></a>
                 
                 </div>
               </div>
            </div>

            </div>
            `
            document.getElementById('wrap').innerHTML = Results
        });
    })
    .catch((err) => console.log(err))
}

fetchApi()
