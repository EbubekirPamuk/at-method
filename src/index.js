let arr = ["👋🏽", "🤚🏽", "🖐🏽", "✋🏽", "🖖🏽", "🤏🏽", "✌🏽", "🤞🏽", "🤟🏽", "🤘🏽"];
let content = document.querySelector(".content");
let sonuc = document.querySelector(".sonuc");
let select = document.getElementById("select");
content.innerHTML = `let arr = [ ${arr.join(" ")} ]`;
select.addEventListener("click", () => {
  let result = select.options[select.selectedIndex].value;
  if (result == -1) {
    sonuc.innerHTML = arr[9];
  } else if (result == -2) {
    sonuc.innerHTML = arr[8];
  } else if (result == -3) {
    sonuc.innerHTML = arr[7];
  } else if (result == -4) {
    sonuc.innerHTML = arr[6];
  } else if (result == -5) {
    sonuc.innerHTML = arr[5];
  } else if (result == -6) {
    sonuc.innerHTML = arr[4];
  } else if (result == -7) {
    sonuc.innerHTML = arr[3];
  } else if (result == -8) {
    sonuc.innerHTML = arr[2];
  } else if (result == -9) {
    sonuc.innerHTML = arr[1];
  } else if (result == -10) {
    sonuc.innerHTML = arr[0];
  } else {
    sonuc.innerHTML = "";
  }
});
