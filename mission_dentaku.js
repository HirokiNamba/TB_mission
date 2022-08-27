function get_calc(btn) {
    if(btn.value == "=") {
      var oldrireki = document.getElementById('rireki').value;
      var newrireki = document.getElementById('display').value + "="
                        +eval(document.getElementById('display').value);
      document.getElementById('rireki').value ="";

      document.getElementById('rireki').value += newrireki + "\n" + oldrireki;

      document.dentaku.display.value = eval(document.dentaku.display.value);
    } else if (btn.value == "C") {
      document.dentaku.display.value = "";
    } else {
      if (btn.value == "×") {
        btn.value = "*";
      } else if (btn.value == "÷") {
        btn.value = "/";
      }
      document.dentaku.display.value += btn.value;
      document.dentaku.add_btn.value = "×";
      document.dentaku.div_btn.value = "÷";
    }
  }
function dlt(){
  document.getElementById('rireki').value ="";
}
