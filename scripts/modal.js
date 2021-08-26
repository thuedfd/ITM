//모달창 자바스크립트(수정)
const openModal = document.querySelector('.open-modal');
const closeModal = document.querySelector('#close-modal');
const modal = document.querySelector('#modal');

const table = document.querySelector('#seat_table');
const timeSelect = document.getElementsByClassName('time-select');
const modalContent = document.querySelector('.modal_content');

const handleModal = (e) => {
  if (e.target.classList[1] === 'open-modal') {
    modal.style.display = 'flex';
  } else if (e.target.id === 'close-modal') {
    modal.style.display = 'none';
  }
};

const handleTable = (e) => {
  console.log(timeSelect.id);
  console.log(e.target.id);
};

table.addEventListener('click', handleModal);
closeModal.addEventListener('click', handleModal);
timeSelect.addEventListener('click', handleTable);

modalContent.addEventListener('change', () => {
  let time = document.querySelector('time-select').value;

  localStorage.setItem('time', timeselect.time);

  modal.style.display = 'none';
});

function getNowHour() {
  let now = new Date();
  let hours = now.getHours();

  return hours;
}

function seatEnable(){
  today = new Date();
  for(var i=1;i<13;i++){
    if(i*2<=today.getHours())
    enabled(i);
  }
}

function enabled(seatnumber){
  var button_joinus = document.getElementById("seat"+seatnumber);
  button_joinus.disabled=true;
}


function Init() {
  modal.style.display = 'none';
}

Init();
seatEnable();
