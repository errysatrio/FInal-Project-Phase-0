var shape=document.querySelector('select#shape')
var limit=document.querySelector('input[name=jumlah]')
var klik=document.querySelector('div#a button')

const aDiv=document.querySelector('div#hasil')

klik.addEventListener('click', function () {
    for (let i = 0; i < limit.value; i++) {
        if (shape.value==='square'){
            aDiv.innerHTML+='<div class="square"></div>'
        } else {
            aDiv.innerHTML+='<div class="box"></div>'
        }
    }
})