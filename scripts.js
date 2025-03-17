
let reservations = [];
function addReservation(name, date, time, tables) {
    const reservation = {
        name,
        date,
        time,
        tables
    };
    reservations.push(reservation);
    renderReservations();
}
function renderReservations() {
    const reservationListUl = document.getElementById('reservation-list-ul');
    reservationListUl.innerHTML = '';
    reservations.forEach((reservation, index) => {
        const li = document.createElement('li');
        li.textContent = `${reservation.name} - ${reservation.date} - ${reservation.time} - ${reservation.tables} tables`;
        reservationListUl.appendChild(li);
    });
}
document.getElementById('reservation-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const tables = document.getElementById('tables').value;
    addReservation(name, date, time, tables);
    document.getElementById('reservation-form').reset();
});
