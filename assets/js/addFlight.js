
document.querySelector('#addFlight').addEventListener('click', e => {
    addFlight()
});



function addFlight() {
    const table = document.querySelector('#flightsTable');
    const data = window.localStorage.getItem('flights');

    console.log(data.toString())

    // for(let flight of data.flights_to) {
    //     // table.appendChild(createTableRow(flight))
    // }

}

function createTableRow(flight = {}) {
    const row = document.createElement('tr');

    const idFlight = document.createElement('td').innerText = flight.flight_code;
    const airportFrom = document.createElement('td').innerText = flight.from.city;
    const airportTo = document.createElement('td').innerText = flight.to.city;
    const availability = document.createElement('td').innerText = flight.availability;
    const date1 = document.createElement('td').innerText = flight.from.date;
    const date2 = document.createElement('td').innerText = flight.to.date;
    const cost = document.createElement('td').innerText = flight.cost;

    row.appendChild(idFlight);
    row.appendChild(airportFrom);
    row.appendChild(airportTo);
    row.appendChild(availability);
    row.appendChild(date1);
    row.appendChild(date2);
    row.appendChild(cost);

    return row;
}