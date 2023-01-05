(function () {
    "use strict";
    const myimage = ["image1.jpg", "image2.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg" ];
    let currentimage = 0;
    const container = document.getElementById('content');
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('previous');

    nextBtn.addEventListener('click', function(event){
        event.preventDefault();
        currentimage++;
        if(currentimage > myimage.length-1) { currentimage = 0;}
        swapimg();
    });

    prevBtn.addEventListener('click', function(event){
        event.preventDefault();
        currentimage--;
        if(currentimage < 0) { currentimage = myimage.length-1;}
        swapimg();
    });
    function swapimg(){
    const nextSlide = document.createElement('img');
        nextSlide.src = `slides/${myimage[currentimage]}`;
        nextSlide.className = 'fadeinimg';
        container.appendChild(nextSlide);
        if(container.children.length > 2){
            container.removeChild(container.children[0]);
        }
    }
})();