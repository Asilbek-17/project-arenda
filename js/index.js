const elButtons = document.querySelectorAll('.btn-1');
const elButtons2 = document.querySelectorAll('.btn-2');
const elSelection = document.querySelector(".hudud");
const elWrapper = document.querySelector('.wrapper');
const elBox = document.querySelector('.box');
const elBox2 = document.querySelector('.box-2');
const elBox3= document.querySelector('.box-3');
const elPaginotion = document.querySelector('.container');
const elInfoBox = document.querySelector('.info-box');
const elBackTo2 = document.querySelector(".back-to-2");
const elBackTo3 = document.querySelector(".back-to-3");
const elBackTo4 = document.querySelector(".back-to-4");
const elTitle = document.querySelector('.title')

elSelection.addEventListener("change", () => {
    elWrapper.innerHTML = '';
    elBox.style.display = 'flex'
    elWrapper.appendChild(elBox)
    // elButtons.forEach(btn => {
    //     btn.style.display = 'block'
    //     elWrapper.appendChild(btn)
    // })
})

elButtons.forEach(btn => {
    btn.addEventListener('click', ()=> {
        elWrapper.innerHTML = ''
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

elBackTo2.addEventListener("click", ()=> {
    elWrapper.innerHTML = ''
    elBox.style.display = 'none'
    elWrapper.appendChild(elSelection)
    elWrapper.appendChild(elTitle)
})

elBackTo3.addEventListener("click", ()=> {
    elWrapper.innerHTML = ''
    elBox.style.display = 'flex'
    elWrapper.appendChild(elBox)
})


elBackTo4.addEventListener("click", ()=> {
    elWrapper.innerHTML = '';
    elWrapper.appendChild(elBox2)
    elBox2.style.display = 'flex'
})




// Pagination

const arr = [1,2,3,4,5,6,7]