const balls = document.querySelectorAll('.js-loadingball')
TweenMax.staggerFromTo(
    balls,
    0.75,
    {
        opacity:0,
        transform: 'scale(0)'
    },{
        ease: Power3.easeInOut,
        opacity:0,
        transform: 'scale(1.2)',
        repeat: -1,
        yoyo: true
    },
    2.0
    )