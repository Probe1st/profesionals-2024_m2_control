document.querySelector('#registerButton').addEventListener('click', e => {
    register();
});


async function register() {
    const form = document.querySelector('#registerForm');
    const [first_name, last_name, phone, document_number, password] = new FormData(form).getAll('credentials');

    const res = await fetch(host + '/register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            'first_name': first_name,
            'last_name': last_name,
            'phone': phone,
            'document_number': document_number,
            'password': password
        })
    })
    .catch(err => {
        notification(err);
    });

    console.log(res.status)
}