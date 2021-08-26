const seats = document.querySelectorAll('.seat');
const timeSelect = document.querySelectorAll('.time-select');

const modal = document.querySelector('#modal');

const closeModal = document.querySelector('#close-modal');

const userInfo = document.querySelector('.user-info');

seats.forEach((seat) => {
  seat.addEventListener('click', () => {
    modal.style.display = 'flex';
    localStorage.setItem('selectedSeat', seat.id);
  });
});

timeSelect.forEach((time) => {
  // TODO: forEach 밖에서 handle 한 후 1회성으로 돌아가게끔 처리
  // const convertUserInfo = JSON.parse(localStorage.getItem(123));
  // console.log(convertUserInfo.user_ID);
  // userInfo.innerHTML = convertUserInfo.user_ID;
  time.addEventListener('click', (e) => {
    const selectedSeat = localStorage.getItem('selectedSeat');
    console.log(selectedSeat);
    const timeId = time.id;
    const selectedTime = time.innerText.split('~');
    const startTime = Number(selectedTime[0]);
    const endTime = Number(selectedTime[1]);

    const selectedInfo = {
      seatNumber: selectedSeat,
      startTime: startTime,
      endtime: endTime,
    };

    localStorage.setItem('seatAndTime', JSON.stringify(selectedInfo));

    alert(
      `${selectedSeat}좌석에 ${startTime}시 ~ ${endTime}시 예약 되었습니다.`
    );
    modal.style.display = 'none';
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

console.log(seat);
console.log(modal);
