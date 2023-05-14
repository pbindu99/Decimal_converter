function select()  {
  var selected = document.getElementById("select").value;
  if (selected === "0") {
    document.getElementById("input").type = "number";
    document.getElementById("ttile-1").innerHTML = "Enter the Decimal number :";
    document.getElementById("ttile-2").innerHTML = "Binary number :";
    document.getElementById("result").placeholder = "Binary number :";
  }
  else if(selected === "1") {
    document.getElementById("input").type = "number";
    document.getElementById("ttile-1").innerHTML = "Enter the Binary number :";
    document.getElementById("ttile-2").innerHTML = "Decimal number :";
    document.getElementById("result").placeholder = "Decimal number :";
  }
  else if(selected === "2") {
    document.getElementById("input").type = "number";
    document.getElementById("ttile-1").innerHTML = "Enter the Octal number :";
    document.getElementById("ttile-2").innerHTML = "Decimal number :";
    document.getElementById("result").placeholder = "Decimal number :";
  }
  else if(selected === "3") {
    document.getElementById("input").type = "text";
    document.getElementById("ttile-1").innerHTML = "Enter the Hexa Code :";
    document.getElementById("ttile-2").innerHTML = "Decimal number :";
    document.getElementById("result").placeholder = "Decimal number :";
  }
}
function convert() {
  var select = document.getElementById("select").value;

  //Deimal to Binary
  if (select === "0") {
    var i = document.getElementById("input").value;
    var re = "";
    while (i > 0) {
      var r = i % 2;
      if (r === 0) {
        re = "0" + re;
      } else {
        re = "1" + re;
      }
      i = Math.floor(i / 2);
    }
    document.getElementById("result").value = re;
  }

  //Binary to Decimal
  else if (select === "1") {
    var i = document.getElementById("input").value;
    var re = 0;
    var c = 0;
    while (i > 0) {
      var r = i % 10;
      re += r * Math.pow(2, c);
      i = Math.floor(i / 10);
      c++;
    }
    document.getElementById("result").value = re;
  }
  
  //Octal to Decimal
  else if (select === "2") {
    var j = document.getElementById("input").value;
    var flag = true;
    while (j>0) {
      var r = j%10;
      if(r>7) {
        alert("octal number doesn't consist of number 8 & 9"+ "\n" + "where you have entered " + r);
        flag = false;
        document.getElementById("result").value = "";
        break;
      }
      j = Math.floor(j / 10);
    }
    if(flag === true){
      var i = document.getElementById("input").value;
    var re = 0;
    var c = 0;
    while (i > 0) {
      var r = i % 10;
      re += r * Math.pow(8, c);
      i = Math.floor(i / 10);
      c++;
    }
    document.getElementById("result").value = re;
    }
  }
  
  //Hexa to Decimal
  //used JQuery and ParseInt method
  else if (select === "3") {
    var i = $("#input").val();
    var hex = /^[0-9a-fA-F]+$/;
    if(hex.test(i)){
      $("#result").val(parseInt(i, 16));
    }
    else {
      alert("Not a Hexa Number")
    }
  }
}