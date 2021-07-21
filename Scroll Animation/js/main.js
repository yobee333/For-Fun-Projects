
const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes(){
    const triggerBottom = window.innerHeight / 5 * 4  //console.log(window.innerHeight) then scroll down to get number - can't use fixed number so divide by 5 and multiply by 4

    boxes.forEach(box =>{
        const boxTop = box.getBoundingClientRect().top //look up on MDN

        if(boxTop < triggerBottom){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}