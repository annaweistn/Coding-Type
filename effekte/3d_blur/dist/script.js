// Set properties
TweenMax.set("#container", {perspective: 400});
TweenMax.set("#lost", {rotationY:-30,rotationX: 30,  rotation: -20, scale: 0.5, opacity: 0}); 

// Init timeline
var tl = new TimelineMax({repeat: -1});

tl.to("#lost", 12, { scale: 7.1, ease: Circ.easeIn})
.to("#lost", 1.5, { opacity: 1, ease: Linear.easeNone}, "-=12")
.to("#lost", 12, { rotationY: 0, rotationX: 10, rotation: 20}, "-=12");