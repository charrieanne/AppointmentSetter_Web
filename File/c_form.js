var list1 = document.getElementById("selectText1");
var list2 = document.getElementById("selectText2");

// for dropdown function
function changeStatus(){
// student permit
    if(list1.value == "sp" && list2.value == "n"){
        document.getElementById("sp1n").style.visibility="visible";
    }
    else{
        document.getElementById("sp1n").style.visibility="hidden";
    }
}

function myFunction(){
    var x = document.getElementById("myFile");
    var txt = "";

    if ('files' in x) {
      if (x.files.length == 0) {
        txt = "Select one or more files.";
      } 
      else {
        for (var i = 0; i < x.files.length; i++) {
          txt += "<br><strong>" + (i+1) + ". file</strong><br>";
          var file = x.files[i];
          if ('name' in file) {
            txt += "name: " + file.name + "<br>";
          }
          if ('size' in file) {
            txt += "size: " + file.size + " bytes <br>";
          }
        }
      }
    } 
    else {
      if (x.value == "") {
        txt += "Select one or more files.";
      } else {
        txt += "The files property is not supported by your browser!";
        txt  += "<br>The path of the selected file: " + x.value; // If the browser does not support the files property, it will return the path of the selected file instead. 
      }
    }
    document.getElementById("demo").innerHTML = txt;
  }

  let popup = document.getElementById("popup");

  function openPopup(){
    popup.classList.add( "open-popup");
}
  function closePopup(){
    popup.classList.remove( "open-popup");
}
  function nextBTN(){
    window.open("c_calendar.html");
  }
  /*
function popUp(){
  var blur = document.getElementById('form');
  blur.classList.openPopup('active');

  var popup = document.getElementById('popup');
  popup.classList.openPopup('active');
}
*/
