$(document).ready(function(){

	
  var validemail=function(elementValue){
 	 var emailPattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
     return emailPattern.test(elementValue);
 }
$("#email").keyup(function(){
   var value=$(this).val();
   var valid=validemail(value);
   if(!valid){
   	 $("#msg1").removeClass("positive");
     $("#msg1").text("not valid").addClass("negative");
   }
   else{
   	$("#msg1").removeClass("negative");
   	$("#msg1").text("valid").addClass("positive");
   }
});

$(function() {
    $("#pass2").keyup(function() {
        var pass1 = $("#pass1").val();
        $("#msg4").html(pass1 == $(this).val() ? "Passwords match.": "Passwords do not match!").addClass("red");
    });

});

$("#register").click(function(){
     var name=$("#name").val();
     // var name1=$("#name1").val();
     var email=$("#email").val();
     var pass1=$("#pass1").val();
     var pass2= $("#pass2").val();
       if( name ==''){
			$("#msg2").text("Field must be required!!").addClass("negative");
		}
		// if( name1 ==''){
		// 	$("#msg3").text("Field must be required!!").addClass("negative");
		// }

		if( email ==''){
			$("#msg1").text("Field must be required!!").addClass("negative");
		}

		if( pass1 ==''){
			$("#msg3").text("Field must be required!!").addClass("negative");
		}
		if( pass2 ==''){
			$("#msg4").text("Field must be required!!").addClass("negative");
		}

});



});


function myFunction1() {
  var dots1 = document.getElementById("dots1");
  var moreText1 = document.getElementById("more1");
  var btnText1 = document.getElementById("myBtn1");

  if (dots1.style.display === "none") {
    dots1.style.display = "inline";
    btnText1.innerHTML = "See more"; 
    moreText1.style.display = "none";
  } else {
    dots1.style.display = "none";
    btnText1.innerHTML = "See less"; 
    moreText1.style.display = "inline";
  }
}

function myFunction2() {
  var dots2 = document.getElementById("dots2");
  var moreText2 = document.getElementById("more2");
  var btnText2 = document.getElementById("myBtn2");

  if (dots2.style.display === "none") {
    dots2.style.display = "inline";
    btnText2.innerHTML = "See more"; 
    moreText2.style.display = "none";
  } else {
    dots2.style.display = "none";
    btnText2.innerHTML = "See less"; 
    moreText2.style.display = "inline";
  }
}

function myFunction3() {
  var dots3 = document.getElementById("dots3");
  var moreText3 = document.getElementById("more3");
  var btnText3 = document.getElementById("myBtn3");

  if (dots3.style.display === "none") {
    dots3.style.display = "inline";
    btnText3.innerHTML = "See more"; 
    moreText3.style.display = "none";
  } else {
    dots3.style.display = "none";
    btnText3.innerHTML = "See less"; 
    moreText3.style.display = "inline";
  }
}

function myFunction4() {
  var dots4 = document.getElementById("dots4");
  var moreText4 = document.getElementById("more4");
  var btnText4 = document.getElementById("myBtn4");

  if (dots4.style.display === "none") {
    dots4.style.display = "inline";
    btnText4.innerHTML = "See more"; 
    moreText4.style.display = "none";
  } else {
    dots4.style.display = "none";
    btnText4.innerHTML = "See less"; 
    moreText4.style.display = "inline";
  }
}

function myFunction5() {
  var dots5 = document.getElementById("dots5");
  var moreText5 = document.getElementById("more5");
  var btnText5 = document.getElementById("myBtn5");

  if (dots5.style.display === "none") {
    dots5.style.display = "inline";
    btnText5.innerHTML = "See more"; 
    moreText5.style.display = "none";
  } else {
    dots5.style.display = "none";
    btnText5.innerHTML = "See less"; 
    moreText5.style.display = "inline";
  }
}

function myFunction6() {
  var dots6 = document.getElementById("dots6");
  var moreText6 = document.getElementById("more6");
  var btnText6 = document.getElementById("myBtn6");

  if (dots6.style.display === "none") {
    dots6.style.display = "inline";
    btnText6.innerHTML = "See more"; 
    moreText6.style.display = "none";
  } else {
    dots6.style.display = "none";
    btnText6.innerHTML = "See less"; 
    moreText6.style.display = "inline";
  }
}

function myFunction7() {
  var dots7 = document.getElementById("dots7");
  var moreText7 = document.getElementById("more7");
  var btnText7 = document.getElementById("myBtn7");

  if (dots7.style.display === "none") {
    dots7.style.display = "inline";
    btnText7.innerHTML = "See more"; 
    moreText7.style.display = "none";
  } else {
    dots7.style.display = "none";
    btnText7.innerHTML = "See less"; 
    moreText7.style.display = "inline";
  }
}

function myFunction8() {
  var dots8 = document.getElementById("dots8");
  var moreText8 = document.getElementById("more8");
  var btnText8 = document.getElementById("myBtn8");

  if (dots8.style.display === "none") {
    dots8.style.display = "inline";
    btnText8.innerHTML = "See more"; 
    moreText8.style.display = "none";
  } else {
    dots8.style.display = "none";
    btnText8.innerHTML = "See less"; 
    moreText8.style.display = "inline";
  }
}

function myFunction9() {
  var dots9 = document.getElementById("dots9");
  var moreText9 = document.getElementById("more9");
  var btnText9 = document.getElementById("myBtn9");

  if (dots9.style.display === "none") {
    dots9.style.display = "inline";
    btnText9.innerHTML = "See more"; 
    moreText9.style.display = "none";
  } else {
    dots9.style.display = "none";
    btnText9.innerHTML = "See less"; 
    moreText9.style.display = "inline";
  }
}

// function myFunction() {
//   var dots = document.getElementsByClassName("dots");
//   var moreText = document.getElementById("more");
//   // var moreText = document.querySelectorAll("#more1 , #more2");
//   var btnText = document.getElementsByClassName("myBtn");

//   if (dots.style.display === "none") {
//     dots.style.display = "inline";
//     btnText.innerHTML = "See more"; 
//     moreText.style.display = "none";
//   } else {
//     dots.style.display = "none";
//     btnText.innerHTML = "See less"; 
//     moreText.style.display = "inline";
//   }
// }

// function myFunctions() {
//   var dots1 = document.getElementsByClassName("dots1");
//   var moreText1 = document.getElementsByClassName("more1");
//   var btnText1 = document.getElementsByClassName("myBtn1");

//   if (dots1.style.display === "none") {
//     dots1.style.display = "inline";
//     btnText1.innerHTML = "See more"; 
//     moreText1.style.display = "none";
//   } else {
//     dots1.style.display = "none";
//     btnText1.innerHTML = "See less"; 
//     moreText1.style.display = "inline";
//   }
// }












