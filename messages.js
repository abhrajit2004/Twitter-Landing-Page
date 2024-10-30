var up_button = document.getElementById("img_messages2");

var down_button = document.getElementById("img_messages3");

var messages = document.getElementById("messages");

// var form1=document.getElementById('form1');
if (messages) {
  messages.onclick = function () {
    messages.style.position = "relative";
    messages.style.top = "43%";
  };
}

//scroll to top button

window.onload = function() {
  let mybutton = document.getElementById("scrollToTopBtn");

  window.onscroll = function() {
      scrollFunction();
  };

  function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          mybutton.style.display = "block";
      } else {
          mybutton.style.display = "none";
      }
  }

  mybutton.onclick = function() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  };
};
