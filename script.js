let popupContainer = document.getElementsByClassName("kontakt")[0];

function showPopup() {
  popupContainer.style.visibility = "visible";
  popupContainer.style.opacity = "1";
}
function hidePopup() {
  popupContainer.style.visibility = "hidden";
  popupContainer.style.opacity = "0";
}
triggerBtn.onclick = (e) => {
  showPopup();
}
popupContainer.onclick = (e) => {
  
    if(e.target.attributes.getNamedItem("script-js") && e.target.attributes.getNamedItem("script-js").value == "popup") {
      hidePopup();
    }
};