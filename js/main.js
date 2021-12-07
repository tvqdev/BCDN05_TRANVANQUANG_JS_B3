// Bài 1 :


function sorts() {
     var number1 = document.getElementById("number1").value;
     var number2 = document.getElementById("number2").value;
     var number3 = document.getElementById("number3").value;

     if ((number1 < number2) && (number1 < number3)) {
          if (number2 < number3) {
               document.getElementById("abc").innerHTML = "<p>Sắp xếp:" + number1 + "<" + number2 + "<" + number3 + "</p>";
          } else {
               document.getElementById("abc").innerHTML = "<p>Sắp xếp:" + number1 + "<" + number3 + "<" + number2 + "</p>";

          }

     }
     if ((number2 < number1) && (number2 < number3)) {
          if (number1 < number3) {
               document.getElementById("abc").innerHTML = "<p>Sắp xếp:" + number2 + "<" + number1 + "<" + number3 + "</p>";

          } else {
               document.getElementById("abc").innerHTML = "<p>Sắp xếp:" + number2 + "<" + number3 + "<" + number1 + "</p>";

          }
     }
     if ((number3 < number1) && (number3 < number2)) {
          if (number1 < number2) {
               document.getElementById("abc").innerHTML = "<p>Sắp xếp:" + number3 + "<" + number1 + "<" + number2 + "</p>";

          } else {
               document.getElementById("abc").innerHTML = "<p>Sắp xếp:" + number3 + "<" + number2 + "<" + number1 + "</p>";

          }

     }

}


// Bài 2:


function hellofamily() {
     var family = document.getElementById("family").value;
 
     if (family == "b") {
          document.getElementById("hello").innerHTML = "bố"
     } else if (family == "m") {
          document.getElementById("hello").innerHTML = "mẹ"

     } else if (family == "a") {
          document.getElementById("hello").innerHTML = "anh"

     } else if (family == "e") {
          document.getElementById("hello").innerHTML = "em"

     } else {
          document.getElementById("hello").innerHTML = "người lạ"

     }
}

// Bài 3 

function decs() {
     var num1 = document.getElementById("num1").value;
     var num2 = document.getElementById("num2").value;
     var num3 = document.getElementById("num3").value;
     var chang = 0;
     var le = 0;

     if (num1 % 2 == 0) {
          chang++;
     } else {
          le++;
     }
     if (num2 % 2 == 0) {
          chang++;
     } else {
          le++;
     }
     if (num3 % 2 == 0) {
          chang++;
     } else {
          le++;
     }
     document.getElementById("xyz").innerHTML = "chang" + chang + "le" + le;
}


// b4 

function tamgiac() {
     var a = document.getElementById("t1").value;
     var b = document.getElementById("t2").value;
     var c = document.getElementById("t3").value;


          if (a * a == b * b + c * c || b * b == a * a + c * c || c * c == a * a + b * b) {
               document.getElementById("rty").innerHTML = "Đây là tam giác vuông";
          }
          else if (a == b && b == c) {
               document.getElementById("rty").innerHTML = "Đây là tam giác đều";
          }
          else if (a == b || a == c || b == c) {
               document.getElementById("rty").innerHTML = " Đây là tam giác cân";
          } else if (a * a > b * b + c * c || b * b > a * a + c * c || c * c > a * a + b * b) {
               document.getElementById("rty").innerHTML = " Day la tam giac tu";
          } else {
               document.getElementById("rty").innerHTML = " Day la tam giac nhon";

          }

}