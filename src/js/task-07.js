const ref = {
    fontSizeControl: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
};
  
updateFontSize(ref.fontSizeControl.value);

ref.fontSizeControl.addEventListener('input', (evnt) => {
   updateFontSize(evnt.currentTarget.value);
});

function updateFontSize(value) {
 ref.text.style.fontSize = `${value}px`
}