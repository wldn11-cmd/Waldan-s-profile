document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const menuButton = document.querySelector('.menu-button');
    const menuContainer = document.querySelector('.menu-container');
    const content = document.querySelector('.content');
    const mainButton = document.querySelector('.button');


    // 1. Header Fade-in Animation
    header.style.opacity = 0;
    header.style.transform = 'translateY(-20px)';
    header.style.transition = 'opacity 0.8s ease, transform 0.8s ease'; // add transition for animation

    setTimeout(() => {
        header.style.opacity = 1;
        header.style.transform = 'translateY(0)';
    }, 100); // small delay

      // 2. Content Fade-in Animation
    content.style.opacity = 0;
    content.style.transform = 'translateY(20px)';
    content.style.transition = 'opacity 1s ease, transform 1s ease'; // add transition for animation

    setTimeout(() => {
      content.style.opacity = 1;
      content.style.transform = 'translateY(0)';
    }, 400); // delay of 400 ms

    // 3. Menu Animation
    menuButton.addEventListener('click', function() {
        menuContainer.classList.toggle('active');
        if (menuContainer.classList.contains('active')) {
              menuContainer.style.maxHeight = menuContainer.scrollHeight + "px"; // set max-height to allow menu expansion
              menuContainer.style.transition = "max-height 0.5s ease-in-out";
        }
         else {
          menuContainer.style.maxHeight = 0; // reset to 0 to collapse the menu
           menuContainer.style.transition = "max-height 0.5s ease-in-out";
       }

    });

    document.addEventListener('click', function (event) {
      if(!menuButton.contains(event.target) && !menuContainer.contains(event.target)) {
        menuContainer.classList.remove('active');
        menuContainer.style.maxHeight = 0; // ensure menu closes

      }
    });

     // 4. Button Scale Animation
    mainButton.addEventListener('mouseenter', function() {
         mainButton.style.transition = "transform 0.2s ease";
        mainButton.style.transform = 'scale(1.1)';
    });
    mainButton.addEventListener('mouseleave', function() {
        mainButton.style.transition = "transform 0.2s ease";
        mainButton.style.transform = 'scale(1)';
    });
    mainButton.addEventListener('mousedown', function(){
       mainButton.style.transition = "transform 0.1s ease";
         mainButton.style.transform = 'scale(0.95)';
    })
     mainButton.addEventListener('mouseup', function(){
        mainButton.style.transition = "transform 0.1s ease";
       mainButton.style.transform = 'scale(1.05)';
    })
});