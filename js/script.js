//=======slider
let slider = document.querySelector('.slider')
let bg = document.querySelector('.bg')
let sliderWidth = slider.offsetWidth
let sliderHeight = slider.offsetHeight
let bgMovment = 40

slider.addEventListener('mousemove', (e) => {

    movement(e)
})

function movement(e) {
    //console.log(e.offsetX , e.offsetY);
    let mousX = Math.floor(-(e.offsetX - (sliderWidth / 2)) * (bgMovment / sliderWidth))
    let mousY = Math.floor(-(e.offsetY - (sliderHeight / 2)) * (bgMovment / sliderHeight))
    //console.log(mousX , mousY);
    bg.style.transform = `translate(${mousX}px , ${mousY}px)`

}

//=============== imeges 
// slide1
let nextBtn = document.querySelector('.nextBtn')
let prevBtn = document.querySelector('.prevBtn')
let ContainerImg1 = document.querySelector('.img1')

let counter = 0
nextBtn.addEventListener('click', nextSlide)
prevBtn.addEventListener('click', prevSlide)

function nextSlide() {
    ContainerImg1.animate([{
        opacity: '0.1'
    }, {
        opacity: '1.0'
    }], {
        duration: 1000,
        fill: 'forwards'
    })

    nextBtn.animate([{
        transform: 'rotate(180deg)'
    }, {
        transform: 'rotate(0deg)'
    }, {
        transform: 'scale(1)'
    }, {
        transform: 'scale(1.5)'

    }], {
        duration: 1000,
        fill: 'forwards'
    })

    if (counter === 4) {
        counter = -1
    }
    counter++
    ContainerImg1.style.backgroundImage = `url(img/parket3d-${counter}.jpg)`

}

function prevSlide() {
    ContainerImg1.animate([{
        opacity: '0.1'
    }, {
        opacity: '1.0'
    }], {
        duration: 1000,
        fill: 'forwards'
    })
    prevBtn.animate([{
        transform: 'rotate(180deg)'
    }, {
        transform: 'rotate(0deg)'
    }, {
        transform: 'scale(1)'
    }, {
        transform: 'scale(1.5)'
    }], {
        duration: 1000,
        fill: 'forwards'
    })
    if (counter === 0) {
        counter = 5
    }
    counter--
    ContainerImg1.style.backgroundImage = `url(img/parket3d-${counter}.jpg)`

}
//------------------



//slide2
let nextBtn2 = document.querySelector('.btnN2')
let prevBtn2 = document.querySelector('.btnP2')
let ContainerImg2 = document.querySelector('.img2')

let counter2 = 0
nextBtn2.addEventListener('click', nextSlide2)
prevBtn2.addEventListener('click', prevSlide2)

function nextSlide2() {
    ContainerImg2.animate([{
        opacity: '0.1'
    }, {
        opacity: '1.0'
    }], {
        duration: 1000,
        fill: 'forwards'
    })
    nextBtn2.animate([{
        transform: 'rotate(180deg)'
    }, {
        transform: 'rotate(0deg)'
    }, {
        transform: 'scale(1)'
    }, {
        transform: 'scale(1.5)'
    }], {
        duration: 1000,
        fill: 'forwards'
    })

    if (counter2 === 3) {
        counter2 = -1
    }
    counter2++
    ContainerImg2.style.backgroundImage = `url(img/wand-${counter2}.jpg)`

}

function prevSlide2() {
    ContainerImg2.animate([{
        opacity: '0.1'
    }, {
        opacity: '1.0'
    }], {
        duration: 1000,
        fill: 'forwards'
    })
    prevBtn2.animate([{
        transform: 'rotate(180deg)'
    }, {
        transform: 'rotate(0deg)'
    }, {
        transform: 'scale(1)'
    }, {
        transform: 'scale(1.5)'
    }], {
        duration: 1000,
        fill: 'forwards'
    })
    if (counter2 === 0) {
        counter2 = 4
    }
    counter2--
    ContainerImg2.style.backgroundImage = `url(img/wand-${counter2}.jpg)`

}
//slide3

let nextBtn3 = document.querySelector('.btnN3')
let prevBtn3 = document.querySelector('.btnP3')
let ContainerImg3 = document.querySelector('.img3')

let counter3 = 0
nextBtn3.addEventListener('click', nextSlide3)
prevBtn3.addEventListener('click', prevSlide3)

function nextSlide3() {
    ContainerImg3.animate([{
        opacity: '0.1'
    }, {
        opacity: '1.0'
    }], {
        duration: 1000,
        fill: 'forwards'
    })
    nextBtn3.animate([{
        transform: 'rotate(180deg)'
    }, {
        transform: 'rotate(0deg)'
    }, {
        transform: 'scale(1)'
    }, {
        transform: 'scale(1.5)'
    }], {
        duration: 1000,
        fill: 'forwards'
    })

    if (counter3 === 3) {
        counter3 = -1
    }
    counter3++
    ContainerImg3.style.backgroundImage = `url(img/farben-${counter3}.jpg)`

}

function prevSlide3() {
    ContainerImg3.animate([{
        opacity: '0.1'
    }, {
        opacity: '1.0'
    }], {
        duration: 1000,
        fill: 'forwards'
    })
    prevBtn3.animate([{
        transform: 'rotate(180deg)'
    }, {
        transform: 'rotate(0deg)'
    }, {
        transform: 'scale(1)'
    }, {
        transform: 'scale(1.5)'
    }], {
        duration: 1000,
        fill: 'forwards'
    })
    if (counter3 === 0) {
        counter3 = 4
    }
    counter3--
    ContainerImg3.style.backgroundImage = `url(img/farben-${counter3}.jpg)`

}



//=======effect an ADDbtn===========
let aBtns = document.querySelectorAll('#cardContainer1 a')

aBtns.forEach(btn => {
    btn.addEventListener('mouseover', () => {
        btn.classList.add('hover')
    })
    btn.addEventListener('mouseout', () => {
        btn.classList.remove('hover')
    })

});

let aBtn2 = document.querySelectorAll('#cardContainer2 a')

aBtn2.forEach(btn => {
    btn.addEventListener('mouseover', () => {
        btn.classList.add('hover')
    })
    btn.addEventListener('mouseout', () => {
        btn.classList.remove('hover')
    })

});


//=================ToDoList 

let pName = document.querySelector('#cardContainer1 .p1')
let creatLiPrice = document.querySelector('#cardContainer1 .span1')
let items = document.querySelector('#items')
let ul = document.createElement('ul')
items.append(ul)
let btn1 =document.querySelector('#cardContainer1 .addBtn1')
console.log(btn1);



btn1.addEventListener('click', (e)=> {
    e.preventDefault()

    let creatLi = document.createElement('li')
    creatLi.innerText = pName.innerText
    ul.append(creatLi)


    let creatLi2 = document.createElement('li')
    creatLi2.innerText = creatLiPrice.innerText
    ul.append(creatLi2)


    let creatLi3 = document.createElement('li')
    creatLi3.innerText = '3'
    ul.append(creatLi3)


    let creatLi4 = document.createElement('button')
    creatLi4.innerText = 'Remove'
    ul.append(creatLi4)


})




let pName2 = document.querySelector('#cardContainer1 .p2')
let creatLiPrice2 = document.querySelector('#cardContainer1 .span2')
let ul2 = document.createElement('ul')
items.append(ul2)
let btn2 =document.querySelector('#cardContainer1 .addBtn2')
console.log(btn2);


btn2.addEventListener('click', (e)=> {
    e.preventDefault()

    let creatLi = document.createElement('li')
    creatLi.innerText = pName2.innerText
    ul2.append(creatLi)


    let creatLi2 = document.createElement('li')
    creatLi2.innerText = creatLiPrice2.innerText
    ul2.append(creatLi2)


    let creatLi3 = document.createElement('li')
    creatLi3.innerText = '3'
    ul2.append(creatLi3)


    let creatLi4 = document.createElement('button')
    creatLi4.innerText = 'Remove'
    ul2.append(creatLi4)


})






let pName3 = document.querySelector('#cardContainer1 .p3')
let creatLiPrice3 = document.querySelector('#cardContainer1 .span3')
let ul3 = document.createElement('ul')
items.append(ul3)
let btn3 =document.querySelector('#cardContainer1 .addBtn3')
console.log(btn3);


btn3.addEventListener('click', (e)=> {
    e.preventDefault()

    let creatLi = document.createElement('li')
    creatLi.innerText = pName3.innerText
    ul3.append(creatLi)


    let creatLi2 = document.createElement('li')
    creatLi2.innerText = creatLiPrice3.innerText
    ul3.append(creatLi2)


    let creatLi3 = document.createElement('li')
    creatLi3.innerText = '3'
    ul3.append(creatLi3)


    let creatLi4 = document.createElement('button')
    creatLi4.innerText = 'Remove'
    ul3.append(creatLi4)


})



let pName4 = document.querySelector('#cardContainer2 .p4')
let creatLiPrice4 = document.querySelector('#cardContainer2 .span4')
let ul4 = document.createElement('ul')
items.append(ul4)
let btn4 =document.querySelector('#cardContainer2 .addBtn4')
console.log(btn4);


btn4.addEventListener('click', (e)=> {
    e.preventDefault()

    let creatLi = document.createElement('li')
    creatLi.innerText = pName4.innerText
    ul4.append(creatLi)


    let creatLi2 = document.createElement('li')
    creatLi2.innerText = creatLiPrice4.innerText
    ul4.append(creatLi2)


    let creatLi3 = document.createElement('li')
    creatLi3.innerText = '3'
    ul4.append(creatLi3)


    let creatLi4 = document.createElement('button')
    creatLi4.innerText = 'Remove'
    ul4.append(creatLi4)


})


let pName5 = document.querySelector('#cardContainer2 .p5')
let creatLiPrice5 = document.querySelector('#cardContainer2 .span5')
let ul5 = document.createElement('ul')
items.append(ul5)
let btn5 =document.querySelector('#cardContainer2 .addBtn5')
console.log(btn5);


btn5.addEventListener('click', (e)=> {
    e.preventDefault()

    let creatLi = document.createElement('li')
    creatLi.innerText = pName5.innerText
    ul5.append(creatLi)


    let creatLi2 = document.createElement('li')
    creatLi2.innerText = creatLiPrice5.innerText
    ul5.append(creatLi2)


    let creatLi3 = document.createElement('li')
    creatLi3.innerText = '3'
    ul5.append(creatLi3)


    let creatLi4 = document.createElement('button')
    creatLi4.innerText = 'Remove'
    ul5.append(creatLi4)


})
