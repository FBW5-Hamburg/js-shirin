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
    ContainerImg1.animate([{ opacity: '0.1'  }, { opacity: '1.0' }], {  duration: 1000,fill: 'forwards'})
       
  nextBtn.animate([{ transform:'rotate(180deg)'}, { transform: 'rotate(0deg)'}, {transform: 'scale(1)'}, { transform: 'scale(1.5)'
       
     }], { duration: 1000,  fill: 'forwards'   })
      
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


/* 
let imgsSlider = document.querySelectorAll('.slide')


window.addEventListener('scroll' , slideReveal)

function slideReveal(e) {
 //   e.preventDefault()
    console.log(imgsSlider)
    imgsSlider.forEach(item =>{
        let slidInAt = (window.scrollY + window.innerHeight) -(item.height / 2) ;//height von screen + height von Scroll
      // console.log(slidInAt);
        let imgBotton = (item.offsetTop + item.height) //botton Fotos

        let isHalf = slidInAt > item.offsetTop 

        let imgNotPassed = window.scrollY < imgBotton  // img is inside screen

        console.log(isHalf ,imgNotPassed );

        if (isHalf && imgNotPassed) {     // img is inside screen
           item.classList.add('reveal')
        }else{
           item.classList.remove('reveal')
        }
    })
}
 */

 //==================
 let a = document.querySelector('#cardContainer1 div a')

a.addEventListener('mouseover' , ()=>{
    a.classList.add('hover')
}) 
a.addEventListener('mouseout' , ()=>{
    a.classList.remove('hover')
}) 
