const setAppointment = (appointment) => {

    const appointmentMsg = document.getElementById('appointment-message');

    fetch('https://akademia108.pl/api/ajax/post-appointment.php', {
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors',
            method: 'POST',
            body: JSON.stringify(appointment)
        })
        .then(res => res.json())
        .then(resJSON => {
            appointmentMsg.classList.add('sended');
            appointmentMsg.innerText = `${resJSON.appointment.name}, Your appointment has been made!`;
        })
}


document.getElementById('appointment-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const appointmentMsg = document.getElementById('appointment-message');
    let appointmentFields = document.getElementsByClassName('appointment-field');
    let allFields = false;
    appointmentMsg.classList.remove('sended');

    let appointment = {
        name: document.getElementById('appointment-name').value,
        email: document.getElementById('appointment-email').value,
        service: document.getElementById('appointment-service').value,
        phone: document.getElementById('appointment-tel').value,
        date: document.getElementById('appointment-date').value,
        time: document.getElementById('appointment-time').value,
        message: document.getElementById('appointment-notes').value
    }

    for (let index of appointmentFields) {
        if (index.value.trim() === '') {
            allFields = false;
            index.classList.add('error');
        } else {
            allFields = true;
            index.classList.remove('error');
        }
    }

    if (allFields) {
        setAppointment(appointment);
    } else {
        appointmentMsg.classList.add('error');
        appointmentMsg.innerText = 'Fill in the marked fields!';
    }
})