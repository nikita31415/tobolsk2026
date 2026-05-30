const cards=[...document.querySelectorAll('.day-card')];
const toggle=document.querySelector('#toggleAll');
cards.forEach(card=>{card.querySelector('.day-head').addEventListener('click',()=>card.classList.toggle('collapsed'))});
toggle.addEventListener('click',()=>{const anyOpen=cards.some(c=>!c.classList.contains('collapsed'));cards.forEach(c=>c.classList.toggle('collapsed',anyOpen));toggle.textContent=anyOpen?'Развернуть все':'Свернуть все';});