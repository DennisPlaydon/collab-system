function toggleMenu() {
  $("#wrapper").toggleClass("toggled");
}

function openForm(text) {
  document.getElementById("objective-name").innerHTML = text;
  $("#myForm").show();
}

function closeForm() {
  $("#myForm").hide();
}

function openMeetingPopup(text) {
  document.getElementById("meeting-point").innerHTML = text;
  document.getElementById("meeting-popup").style.display =
    "block"; /* Element is rendered as a block-level element */
}

function closeMeetingPopup() {
  document.getElementById("meeting-popup").style.display =
    "none"; /* Set a <div> element to not be displayed: */
}

function toggleObjectTable(grid, lock) {
  var objectTable = $("#" + grid);
  //   var keyImage = document.getElementById(lock);
  if (objectTable.css("display") === "none") {
    objectTable.show();
    $("#" + lock).attr("src", "images/openLock.svg");
  } else {
    objectTable.hide();
    $("#" + lock).attr("src", "images/closedLock.svg");
  }
}

function openRoleDate() {
  $("#roles-box").show();
}

function closeRoleDate() {
  $("#roles-box").hide();
}

function roleMeetingBoxColourChange(square) {
  $("#" + square).css("background-color", "#0AA5CC");
  $("#" + square).css("border", "none");
}
