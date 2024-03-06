// форма для поиска полетов
const form = document.querySelector('#searchFlights');

// Поиск кнопки для отправки формы
form.querySelector('button').addEventListener('click', e => {
    e.preventDefault();

    searchFlights();
});

async function searchFlights() {
    // взятие данных из формы
    const formdata = new FormData(form);
    const [from, to, date1, date2, passengers] = formdata.getAll('flights')
    
    let query = '/flight?from=SVO&to=KZN&date1=2020-10-01&date2=2020-10-13&passengers=2';
    // if (date2 ==! '') query = `/flight?from=${from}&to=${to}&date1=${date1}&date2=${date2}&passengers=${passengers}`;
    // else query = `/flight?from=${from}&to=${to}&date1=${date1}&passengers=${passengers}`

    // `/flight?from=${from}&to=${to}&date1=${date1}&date2=${date2}&passengers=${passengers}`
    // '/flight?from=SVO&to=KZN&date1=2020-10-01&date2=2020-10-13&passengers=2'

    const res = await fetch(host + query,
        {
            headers: {
                "Content-Type": "application/json",
            },
            method: 'GET',
        }
    );

    const data = await res.json();

    window.localStorage.setItem('flights', data.data);
}
