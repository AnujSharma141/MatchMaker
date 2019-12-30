const start = () =>{
    console.log('test');
    document.querySelector(".start").style.cssText = 'animation:init 0.5s 1;';
    document.querySelector(".holo-text").style.cssText = 'animation:init 0.5s 1;';
    setTimeout(function() {
        document.querySelector(".start").style.cssText = 'opacity:0;';
        document.querySelector(".holo-text").style.cssText = 'opacity:0;';         
        document.querySelector(".holo").style.cssText = 'animation:uper 0.5s 1;';
        document.querySelector(".til-name").style.cssText = 'animation:trol 0.5s 1;';
        setTimeout(function() {
            document.querySelector(".til-name").style.cssText = 'font-size:9vw;';
            document.querySelector(".holo").style.cssText = 'top:15vw; ';
            document.querySelector(".mid").style.cssText = 'animation:0.8s come 1';
            setTimeout(function() {
            document.querySelector(".mid").style.cssText = 'left:7.5%;';}, 0800);
        }, 0750);  
    }, 0500);       
}
 