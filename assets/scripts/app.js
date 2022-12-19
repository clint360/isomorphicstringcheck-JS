let form = document.querySelector('form');
let checkBtn = document.querySelector('#check');
let displayer = document.querySelector('.t-f');

 
form.addEventListener("submit", (e) => {
    e.preventDefault();
let a = String(e.target.st1.value).toUpperCase();
let b = String(e.target.st2.value).toUpperCase();
console.log(a + " " + b)
if (a.length !== b.length) {
  displayer.textContent = 'Please input strings of the same length';
  displayer.classList.add('show');
} else {
 if(isomorphic(a, b)) {
  displayer.textContent = 'True';
  displayer.classList.add('show');
 } else {
  displayer.textContent = 'False';
  displayer.classList.add('show');
 }
}
});

//Functions
function isomorphic(str1, str2) {
  var map = {};
  for(var i = 0; i < str1.length; i++) {
      var a = str1[i]; 
      var b = str2[i];
      if (typeof map[a] === "undefined") {
          map[a] = b;

      // check for error in first tuple ("ABB", "XYZ")
      } else if (map[a] !== b) {
          return false;
      }

      // check for error in second tuple ("ABC", "XYY")
      for (var key in map) {
          if (key !== a && b === map[key]) {
              return false;
          }
      }
  }
  return true;
}
