// 89998887766
// password

document.querySelector('#loginButton').addEventListener('click', e => {
    login();
});

// const host = window.localStorage.getItem('backendHost');

async function login() {
    const form = document.querySelector('#loginForm');
    const [phone, password] = new FormData(form).getAll('credentials');

    await fetch(host + '/login', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        // body: JSON.stringify({
        //     'phone': phone,
        //     'password': password
        // }),
        body: JSON.stringify({
            'phone': 89998887766,
            'password': 'password'
        }),

    })
    .then(res => res.json())
    .then(data => window.localStorage.setItem('auth-token', data.data.token))
    .catch(err => {
        notification(err)
    })


}