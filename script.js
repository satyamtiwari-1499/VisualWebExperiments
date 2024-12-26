var tl = gsap.timeline({
    repeat:-1
})

tl
.to(".imgcontainer",{

    width:"100%",
    ease: Expo.InOut,
    duration:2,
    stagger:2
    },'a')

.to(".text h1", {
        
        ease: Expo.InOut, 
        stagger: 2,
        top:0
        
    },'a')
.to(".text h1", {
        delay:2,
        ease: Expo.InOut, 
        stagger: 2,
        top:"-100%"
        
    },'a');    
       

    
