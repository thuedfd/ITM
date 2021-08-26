function button1_click() {
  var ui1 = document.getElementById('user_ID').value;
  var ui2 = document.getElementById('user_PW').value;
  var ui3 = document.getElementById('user_name').value;
  var ui4 = document.getElementById('year').value;
  var ui5 = document.getElementById('month').value;
  var ui6 = document.getElementById('day').value;
  var ui7 = document.getElementById('user_email').value;
  var ui8 = document.getElementById('user_phone').value;
  var obj_length = document.getElementsByName('gender').length;
  var gender;

  for (var i = 0; i < obj_length; i++) {
    if (document.getElementsByName('gender')[i].checked == true) {
      gender = document.getElementsByName('gender')[i].value;
      break;
    }
  }

  // console.log(user_ID, user_PW, user_name, year, month, day, gender, user_email, user_phone);

  //   localStorage.setItem("userinfo", JSON.stringify(test));
  //   var userinfomation = JSON.parse(localStorage.getItem("userinfo"));

  var userkey = ui1;
  var userInfo = [
    {
      user_ID: ui1,
      user_PW: ui2,
      user_name: ui3,
      year: ui4,
      month: ui5,
      day: ui6,
      gender: gender,
      user_email: ui7,
      user_phone: ui8,
      seat: '',
      starttime: '',
      endtime: '',
    },
  ];

  localStorage.setItem(userkey, JSON.stringify(userInfo));
  console.log(localStorage.key(userkey));

  console.log(userInfo);
  var userinfomation = JSON.parse(localStorage.getItem(userkey));
  alert('회원가입이 완료되었습니다.');
  document.getElementById('login').reset();

  window.location.href = './login.html';
}

//아이디 입력 여부

function validation() {
  var id = document.getElementById('user_ID').value;

  var flag = true;

  if (id == '') {
    alert('아이디를 입력해주세요.');

    return;
  }

  for (var i = 0; i < localStorage.length; i++) {
    if (id == localStorage.key(i)) {
      flag = false;

      break;
    }
  }

  if (flag) alert('사용 가능한 아이디 입니다.');
  else alert('중복된 아이디 입니다.');
}
