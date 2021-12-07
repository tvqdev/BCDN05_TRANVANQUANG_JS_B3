// Bài 1 :
/**
 * K1: Nhập vào 3 số nguyên :
 * input :
 * number1
 * number2
 * number3
 * 
 * K2:
 * Click button
 * TH1 :
 * (number1 < number2) && (number1 < number3)
 * 
 * TH2
 * (number2 < number1) && (number2 < number3)
 * 
 * TH3 
 * (number3 < number1) && (number3 < number2)
 * 
 * K3
 * 
 * output
 * sắp xếp 3 số theo thứ tự tăng dần
 */

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
/**
 * K1 : Chào hỏi các thành viên trong gia đình
 * Bố,Mẹ,Anh Trai, Em Gái
 * 
 * K2 :
 * Chọn trường hợp rồi Click button 
 * Bố -> Xin Chào Bố
 * Mẹ -> Xin Chào Mẹ
 * Anh Trai -> Xin Chào Anh Trai
 * Em gái -> Xin Chào Em gái
 * 
 * 
 * 
 */

function sendTofamily() {
     var family = document.getElementById("family").value;
 
     if (family == "b") {
          document.getElementById("sendTo").innerHTML = "Xin chào Bố!"
     } else if (family == "m") {
          document.getElementById("sendTo").innerHTML = "Xin chào Mẹ!"

     } else if (family == "a") {
          document.getElementById("sendTo").innerHTML = "Xin chào Anh Trai!"

     } else if (family == "e") {
          document.getElementById("sendTo").innerHTML = "Xin chào Em Gái!"

     } else {
          document.getElementById("sendTo").innerHTML = "Xin chào Người lạ ơi!"

     }
}

// Bài 3 
/**
 * K1 :
 * Input : nhập 3 số nguyên  và đếm số lẽ và số chẵn
 * 
 * K2 :
 * TH1 :
 * num1 % 2 == 0 -> chẵn và ngược lại
 * num2 % 2 == 0 -> chẵn và ngược lại
 * num3 % 2 == 0 -> chẵn và ngược lại
 * 
 * K3:
 * output 
 * Đến số chẵn và số lẻ
 */
function dem() {
     var num1 = document.getElementById("num1").value;
     var num2 = document.getElementById("num2").value;
     var num3 = document.getElementById("num3").value;
     var chan = 0;
     var le = 0;

     if (num1 % 2 == 0) {
          chan++;
     } else {
          le++;
     }
     if (num2 % 2 == 0) {
          chan++;
     } else {
          le++;
     }
     if (num3 % 2 == 0) {
          chan++;
     } else {
          le++;
     }
     document.getElementById("inra").innerHTML = "Có " + chan + " số chẵn, " + le + " số lẻ.";
}


// b4 
/**
 * K1 : Nhập 3 cạnh của tam giác và xem đó là tam giác gì
 * 
 * K2:
 * TH1 :
 * a * a == b * b + c * c || b * b == a * a + c * c || c * c == a * a + b * b - > tam giác vuông
 * TH2 :
 * a == b && b == c -> Tam giác đều
 * 
 * TH3 
 * a == b || a == c || b == c -> Tam giác cân
 * 
 * K3:
 * Output : 
 * -Tam giác vuông or
 * -Tam giác đều or
 * -Tam giác cân
 */
function tamgiac() {
     var a = document.getElementById("t1").value;
     var b = document.getElementById("t2").value;
     var c = document.getElementById("t3").value;


          if (a * a == b * b + c * c || b * b == a * a + c * c || c * c == a * a + b * b) {
               document.getElementById("num").innerHTML = "Đây là tam giác vuông";
          }
          else if (a == b && b == c) {
               document.getElementById("num").innerHTML = "Đây là tam giác đều";
          }
          else if (a == b || a == c || b == c) {
               document.getElementById("num").innerHTML = " Đây là tam giác cân";
          } else {
               document.getElementById("num").innerHTML = " Đây là tam giác khác";

          }

}