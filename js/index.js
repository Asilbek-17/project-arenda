const elButtons = document.querySelectorAll('.btn-1');
const elButtons2 = document.querySelectorAll('.btn-2');
const elSelection = document.querySelector(".hudud");
const elWrapper = document.querySelector('.wrapper');
const elBox = document.querySelector('.box');
const elBox2 = document.querySelector('.box-2');
const elBox3= document.querySelector('.box-3');
const elPaginotion = document.querySelector('.container');
const elInfoBox = document.querySelector('.info-box');


elButtons.forEach(btn => {
    btn.addEventListener('click', ()=> {
        elWrapper.innerHTML = ''
        elWrapper.appendChild(elBox)
        elBox.style.display = 'block'
    })
})


elSelection.addEventListener("change", () => {
    elWrapper.innerHTML = '';
    elButtons2.forEach(btn => {
        elWrapper.appendChild(elBox2)
        elBox2.style.display = 'flex'
    })
})


elButtons2.forEach(btn => {
    btn.addEventListener('click', ()=> {
        elWrapper.innerHTML = '';
        elWrapper.appendChild(elInfoBox)
        elWrapper.appendChild(elPaginotion)
        elInfoBox.style.display = 'block'
        elPaginotion.style.display = 'flex'
    })
})

// Pagination

const arr = [1,2,3,4,5,6,7]