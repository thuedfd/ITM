const seats = document.querySelectorAll('.seat');
const timeSelect = document.querySelectorAll('.time-select');

const modal = document.querySelector('#modal');

const closeModal = document.querySelector('#close-modal');

seats.forEach((seat) => {
  seat.addEventListener('click', () => {
    modal.style.display = 'flex';
    localStorage.setItem('selectedSeat', seat.id);
  });
});

timeSelect.forEach((time) => {
  time.addEventListener('click', (e) => {
    const selectedSeat = localStorage.getItem('selectedSeat');
    console.log(selectedSeat);
    const timeId = time.id;
    const selectedTime = time.innerText.split('~');
    const startTime = Number(selectedTime[0]);
    const endTime = Number(selectedTime[1]);

    console.log(time);
    console.log(startTime, endTime);
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

console.log(seat);
console.log(modal);
