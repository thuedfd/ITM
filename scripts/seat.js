const seats = document.querySelectorAll('.seat');
const timeSelect = document.querySelectorAll('.time-select');

const modal = document.querySelector('#modal');

const closeModal = document.querySelector('#close-modal');

const userInfo = document.querySelector('.user-info');

const currentUser = document.querySelector('#currentUser');

seats.forEach((seat) => {
  seat.addEventListener('click', () => {
    modal.style.display = 'flex';
    localStorage.setItem('selectedSeat', seat.id);
  });
});

function showTableUser(){
  const convertUserInfo = JSON.parse(localStorage.getItem("__user__"+id));
  console.log(convertUserInfo);
  userInfo.innerHTML = convertUserInfo.user_ID;
}

function paintUser(){
  
  const data = JSON.parse(sessionStorage.getItem("userinfo"));  
  currentUserName = data[0].user_name;  

  let span = document.createElement("span");
  currentUser.appendChild(span);
  span.innerText = "환영합니다. " + currentUserName + "님";
}


function seatEnable(){
  today = new Date();
  for(var i=1;i<13;i++){
    if(i*2<=today.getHours()){
      enabled(i);
    }
  }
}

function enabled(seatnumber){
  var button_joinus = document.getElementById("seat_"+seatnumber);
  button_joinus.disabled=true;
}


timeSelect.forEach((time) => {
  // TODO: forEach 밖에서 handle 한 후 1회성으로 돌아가게끔 처리
  // const convertUserInfo = JSON.parse(localStorage.getItem(123));
  // console.log(convertUserInfo);
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

seatEnable();
paintUser();
// console.log(seat);
console.log(modal);
