(() => {
  var request = new XMLHttpRequest();

  request.open("GET", "https://restcountries.eu/rest/v2/all", true);

  request.onload = function () {
    var data = JSON.parse(this.response);

    if (data) {

      const filteredData = data.filter(function (el) {
        if (el.name == "") {
          el.name = "Not specified";
        }
        if (el.capital == "") {
          el.capital = "Not specified";
        }
        if (el.region == "") {
          el.region = "Not specified";
        }
        if (el.demonym == "") {
          el.demonym = "Not specified";
        }
        if (el.population == "") {
          el.population = "Not calculated";
        }
        if (el.latlng == "") {
          el.latlng == "Not specified";
        }
        return el;
      });
      
      document.getElementById("app").innerHTML += `
        <table>
          <thead>
          <tr>
          <th>Flag</th>
          <th>Name</th>
          <th>Capital</th>
          <th>Region</th>
          <th>Demonym</th>
          <th>Population</th>
          <th>Latency</th>
        </tr>
          </thead>
          <tbody>
            ${filteredData
              .map(
                item => `<tr>
                <td><img src=${item.flag} /></td>
                <td data-label="Country">${item.name}</td>
                <td data-label="Capital city">${item.capital}</td>
                <td data-label="Region">${item.region}</td>
                <td data-label="Demonym">${item.demonym}</td>
                <td data-label="Population">${item.population}</td>
                <td data-label="Latency">${item.latlng}</td>
              </tr>`
              )
              .join("")}
          </tbody>
        </table>
      `;
    }
  };
  request.send();
})();