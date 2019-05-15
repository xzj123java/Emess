 function checkForm(){
  var nametip = checkUserName();
  var passtip = checkPassword();
  var conpasstip = ConfirmPassword();
  var phonetip = checkPhone();
  var codetip = checkcode();
  var dcodetip = checkdcode();
  return nametip && passtip && conpasstip && phonetip && codetip && checkdcode();
  }
  //验证密码
function checkPassword(){
  var userpasswd = document.getElementById('adr_password');
  var errPasswd = document.getElementById('passwordErr');
  var pattern = /^[a-zA-Z0-9]{8,18}$/; //密码要在4-8位
  if(!pattern.test(userpasswd.value)){
    errPasswd.innerHTML="8-18位字母与数字组合"
    errPasswd.className="error"
    return false;
    }
   else{
     errPasswd.innerHTML="恭喜，输入正确"
     errPasswd.className="success";
     return true;
     }
  }
  //确认密码
  function ConfirmPassword(){
  var userpasswd = document.getElementById('adr_password');
  var userConPassword = document.getElementById('adr_password_check');
  var errConPasswd = document.getElementById('conPasswordErr');
  if((userpasswd.value)!=(userConPassword.value) || userConPassword.value.length == 0){
    errConPasswd.innerHTML="两次输入不一致"
    errConPasswd.className="error"
    return false;
    }
   else{
     errConPasswd.innerHTML="恭喜，输入正确"
     errConPasswd.className="success";
     return true;
     }
  }
//验证手机号
  function checkPhone(){
  var userphone = document.getElementById('adr_iphone');
  var phonrErr = document.getElementById('phoneErr');
  var pattern = /^1[345789]\d{9}$/; //验证手机号正则表达式
  if(!pattern.test(userphone.value)){
    phonrErr.innerHTML="请输入正确的手机号码"
    phonrErr.className="error"
    return false;
    }
   else{
     phonrErr.innerHTML="恭喜，手机号码填写正确"
     phonrErr.className="success";
     return true;
     }
  }
//图片验证码
  function checkcode(){
  var code = document.getElementById('code');
  var codeErr = document.getElementById('codeErr');
  var pattern = /^[A-Za-z0-9]{4}$/; //验证手机号正则表达式
  if(!pattern.test(code.value)){
    codeErr.innerHTML="请输入正确的验证码！"
    codeErr.className="error"
    return false;
    }
   else{
     codeErr.innerHTML="恭喜，输入成功，请确认是否输入正确"
     codeErr.className="success";
     return true;
     }
  }
//短信验证码
  function checkdcode(){
  var dcode = document.getElementById('adr_dcode');
  var dcodeErr = document.getElementById('dcodeErr');
  var pattern = /^\d{6}$/; //验证手机号正则表达式
  if(!pattern.test(dcode.value)){
    dcodeErr.innerHTML="请输入正确的手机验证码！"
    dcodeErr.className="error"
    return false;
    }
   else{
     dcodeErr.innerHTML="恭喜，输入成功"
     dcodeErr.className="success";
     return true;
     }
  }

