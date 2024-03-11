let elems = document.querySelectorAll(".reveal")
function revealtext(){
    elems.forEach(function(elem){
        let parent = document.createElement('span')
        let child = document.createElement('span')

        parent.classList.add('parent')
        child.classList.add('child')

        child.innerHTML=elem.innerHTML
        parent.appendChild(child)

        elem.innerHTML=''
        elem.appendChild(parent)
    })
}

revealtext()






var tl = gsap.timeline()


tl.from("#firstScreen h2",{
    opacity:0,
    x: 3,
    stagger:0.3,
})
tl.to("#firstScreen h1, #firstScreen h3 , #firstScreen i",{
    y:-100,
    opacity:0,
    stagger:0.1,
})
tl.to("#firstScreen",{
    height:0,
    duration: 1,
    ease:Expo.easeInOut
})
tl.to("#greenScreen",{
    height: "100%",
    duration: 2,
    delay: -2,
    ease:Expo.easeInOut
})
tl.to("#whiteScreen",{
    height:"100%",
    duration:2,
    delay: -1.8,
    ease:Expo.easeInOut
})
tl.to(".parent .child",{
    y: 0,
    duration: 0.5,
    delay: -0.8,
    stagger:0.2,
    ease:Expo.easeInOut,
})