function form_valid() {
  // first name
  let fname = document.getElementById("fname").value;
  let mname = document.getElementById("mname").value;
  let lname = document.getElementById("lname").value;
  let addr = document.getElementById("addr").value;
  let dob = document.getElementById("dob").value;
  let exp= document.getElementById("exp").value;
  let mno = document.getElementById("mno").value;
  let mail = document.getElementById("mail").value;
  let pass = document.getElementById("pass").value;

  
  
  if (fname == "" &&
      mname == "" &&
      lname == "" &&
      addr == "" &&
      dob == "" &&
      exp == "-1" &&
      mno == "" &&
      mail == "" &&
      pass == ""
  )
  {
      document.getElementById("fmsg").innerHTML = "Enter first name";
      document.getElementById("mmsg").innerHTML = "Enter middle name";
      document.getElementById("lmsg").innerHTML = "Enter last name";
      document.getElementById("addmsg").innerHTML = "Enter Address";
      document.getElementById("dobmsg").innerHTML = "Enter Date of Birth";
      document.getElementById("expmsg").innerHTML = "Select Experience";
      document.getElementById("mnomsg").innerHTML = "Enter Mobile Number";
      document.getElementById("mailmsg").innerHTML = "Enter Email";
      document.getElementById("passmsg").innerHTML = "Enter password";

    return false;
  } 
// first name
  if (!fname.match(/^[a-zA-z]*$/)) {
     document.getElementById("fmsg").innerHTML = "Digits not allowed";
        return false;
    }

// middle name
 if (!mname.match(/^[a-zA-z]*$/)) {
            document.getElementById("mmsg").innerHTML = "Digits not allowed";
            return false;
        }

// last name
if (!lname.match(/^[a-zA-z]*$/)) {
            document.getElementById("lmsg").innerHTML = "Digits not allowed";
            return false;
        }

// mobile no

if(isNaN(mno)){
  document.getElementById("mnomsg").innerHTML = "Alphabet not allowed";
  return false;
}else if(mno.length < 10){
document.getElementById("mnomsg").innerHTML = "Enter number properly ";
return false;
}else {
  return true;
}






}
































