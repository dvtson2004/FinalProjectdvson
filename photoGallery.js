function upDate(previewPic) {
  document.getElementById("image").style.backgroundImage =
    "url('" + previewPic.src + "')";

  document.getElementById("image").innerHTML = previewPic.alt;
}

function unDo() {
  document.getElementById("image").style.backgroundImage = "";

  document.getElementById("image").innerHTML =
    "Hover over an image below to display here.";
}
function addTabFocus(element) {
  element.setAttribute("tabfocus", "true");
  console.log("Focus event triggered");
}

function removeTabFocus(element) {
  element.removeAttribute("tabfocus");
  console.log("Blur event triggered");
}
