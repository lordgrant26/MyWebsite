let indexValue = 0;
        myWebsite();

            function myWebsite(){
                let x;
                let slides = document.getElementsByClassName ("rightImg");
                for(x = 0; x < slides.length; x++){
                    slides[x].style.display = "none";
                }
                indexValue++;
                if(indexValue > slides.length){indexValue = 1}

                slides[indexValue -1].style.display = "block";
                setTimeout(myWebsite, 2500);

            }




let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute
        ("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
    
});



const swiper = new Swiper('.swiper', {
    // Optional parameters
    

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    grabCursor: "true",
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});