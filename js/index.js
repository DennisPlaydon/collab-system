function toggleMenu() {
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
}

function openForm(text) {
  document.getElementById("objective-name").innerHTML=text
  document.getElementById("myForm").style.display = "block"; /* Element is rendered as a block-level element */
}

function closeForm() {
  document.getElementById("myForm").style.display = "none"; /* Set a <div> element to not be displayed: */
}

function openMeetingPopup(text) {
  document.getElementById("meeting-point").innerHTML=text
  document.getElementById("meeting-popup").style.display = "block"; /* Element is rendered as a block-level element */
}

function closeMeetingPopup() {
  document.getElementById("meeting-popup").style.display = "none"; /* Set a <div> element to not be displayed: */
}

function toggleObjectTable(text) {
  var objectTable = document.getElementById("object-table-1")
  if (objectTable.style.display == "none") {
    objectTable.style.display = "block";
  } else {
    objectTable.style.display = "none";
  }
}