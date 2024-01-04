//Tabs function
function openTab(evt, tabName){
    // Declare all variables
    var i, tabContent, tabBtn;

    //Get all element by classname and hide them    
    tabContent = document.getElementsByClassName('tabContent');
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
    // Get all elements with class="tablinks" and remove the class "active"
    tabBtn = document.getElementsByClassName('tab-item');
    for (i = 0; i < tabBtn.length; i++) {
      tabBtn[i].className = tabBtn[i].className.replace(" active", "");
    }
      // Show the current tab, and add an "active" class to the button that opened the tab
      document.getElementById(tabName).style.display = "block";
}

// Open and close button function
var openPopupBtn = document.getElementById('open-popup');
var closePopupBtn = document.getElementById('close-popup');
var popup = document.getElementById('support-popup');

openPopupBtn.addEventListener("click", openPopup);
closePopupBtn.addEventListener("click", closePopup);

function openPopup() {
  popup.style.display="block";
  closePopupBtn.style.display="block";
  openPopupBtn.style.display="none";
}
function closePopup() {
  popup.style.display="none";
  openPopupBtn.style.display="block";
  closePopupBtn.style.display="none";
}
// Accordion function



var acc = document.getElementsByClassName("acc-title");
var i;


for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("acc-active");
    var accIcon = this.querySelector(".plus-icon i");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      accIcon.classList.replace("fa-minus", "fa-plus");

    } else {
      panel.style.display = "block";
      accIcon.classList.replace("fa-plus", "fa-minus");

    }
  });
}
