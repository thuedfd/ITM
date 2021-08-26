const id = document.querySelector('#second');
const check_id = id.querySelector('input');
const pw = document.querySelector('#third');
const check_pw = pw.querySelector('input');

//1 이름,2 아이디, 3 비번,
// localStorage.setItem('user002','0000');
// localStorage.clear();

//localStorage.setItem("information", JSON.stringify(test));

function login() {
  const whouser = id.querySelector('input');
  const whoisuser = whouser.value;

  const userID = check_id.value;
  const userPW = check_pw.value;

  if (userID == '') {
    alert('아이디를 입력하세요.');
    location.replace = 'login.html';
    return;
  }

  if (userPW == '') {
    alert('비밀번호를 입력하세요.');
    location.replace = 'login.html';
    return;
  }

  var userkey = localStorage.getItem(whoisuser);
  var jsonuser = JSON.parse(userkey);

  if (jsonuser[0]['user_ID'] == userID) {
    if (jsonuser[0]['user_PW'] == userPW) {
      //location.href=("main.html");
      delete jsonuser[0]['user_PW'];

      var keyuserid = userID;
      sessionStorage.setItem('userinfo', JSON.stringify(jsonuser));

      location.href = 'main.html';
      return;
    } else {
      alert('비밀번호가 맞지 않습니다.');
      location.replace = '/login.html';
      return;
    }
  }
  if (userkey[0]['user_ID'] !== userID) {
    alert('입력정보를 확인해주세요.');
    location.replace = 'login.html';
  }
}

// delete user.password;
// sessionStorage.setItem('__login_user_', JSON.stringify(user));
// location.replace('main.html');

function LSclear() {
  localStorage.clear();
}

clearLoginSession();

function clearLoginSession() {
  sessionStorage.removeItem('__login_user_');
}
