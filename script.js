  $(document).ready(function() {

    $(".owl-carousel").owlCarousel({
    
    autoPlay: 3000,
    items : 3,
    center: true,
    margin:20,
    nav:true,
    navText:["<div class='btn-prev controlsize'></div>","<div class='btn-next controlsize'></div>"],
    loop:true,
    responsive: {
    0: {
    items: 1
    },
    768: {
    items: 3
    }
    }
    });
    
    });