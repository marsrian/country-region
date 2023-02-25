const loadCountry = (regionText) =>{
    const url = `https://restcountries.com/v3.1/region/${regionText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountry(data));
}

const displayCountry = countries => {
    const countryContainer = document.getElementById("countryContainer");
    countryContainer.innerHTML = '';
    countries.forEach(country =>{
        console.log(country);
        const countryDiv = document.createElement("div");
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
            <h5>Country Name: ${country.name.common}</h3>
            <img src="${country.flags.png}" class="mb-4" width="100">
            <br>
            <button class="btn btn-danger" onclick="">Details</button>
        `
        countryContainer.appendChild(countryDiv);
    })
}

const regionText = document.getElementById("region");
regionText.addEventListener("change", (e) => {
  switch (e.target.value) {
    case "africa":
        loadCountry("Africa");
        break;
    case "america":
        loadCountry("America");
        break;
    case "asia":
        loadCountry("Asia");
    break;
    case "europe":
        loadCountry("Europe");
    break;
    case "oceania":
        loadCountry("Oceania");
    break;
    default:
      console.log("others selected");
  }
});

loadCountry('Asia');
