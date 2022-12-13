let form = document.querySelector('form');
let checkBtn = document.querySelector('#check');
let displayer = document.querySelector('.t-f');

 
form.addEventListener("submit", (e) => {
    e.preventDefault();
let s = String(e.target.st1.value).toUpperCase();
let t = String(e.target.st2.value).toUpperCase();
console.log(s.length + " " + t.length)
if (s.length !== t.length) {
    displayer.textContent = 'Please input strings of the same length';
    displayer.classList.add('show');  
   } else {
     const mapa = new Map();
     const mapb = new Map();
   
     for (let i = 0; i < s.length; i++) {
       if (mapa.has(s[i])) {
         if (mapa.get(s[i]) !== t[i]) {
           displayer.textContent = 'False';
           displayer.classList.add('show');
           break;
         }
       } else {
         mapa.set(s[i], t[i])
       }
   
       if (mapb.has(t[i])) {
         if (mapb.get(t[i]) !== s[i]) {
           displayer.textContent = 'False';
           displayer.classList.add('show');
           break;
         }
       } else {
         mapb.set(t[i], s[i])
        }
     }
     displayer.textContent = 'True';
     displayer.classList.add('show');
    }
});