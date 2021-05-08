import interactiveBelt from './interactive-belt';

(function() {
    console.log("%cSite Credits: Designed by www.lwdg.ca, developed by www.vanessarusu.com", "color: #000; font-size: 14px;")
    history.pushState("", document.title, window.location.pathname);
    var links = document.querySelectorAll('#menu-primary-menu li.menu-item');
    for(var i=0; i < links.length; i++) {
        // links[i].classList.remove('current-menu-item');
    }

    const ib = interactiveBelt();
    

    setTimeout(function() {
        // if the age gate screen shows, render and insert the video
        // wait 1000 ms for plugin to init
        if(Boolean(document.querySelector(".age-gate-wrapper"))) {
            var html = '<div class="video-contain"><video id="ageGateVideo" muted="" playsinline="" poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" style="background: transparent; transition: all 1s ease; left: 0px; top: 0px; opacity: 0;"><source src=\"https://lwdgdev.ca/gre/wp-content/uploads/20210310_KENNY-HEAD_NOGlow_720p.mov\" type="video/mp4"></video></div>';
            var hook = document.querySelector(".age-gate-wrapper");
            hook.insertAdjacentHTML("afterbegin", html);

            // play the video and give opacity
            setTimeout(function() {
                var vid = document.querySelector("#ageGateVideo");
                vid.play();
                vid.style.opacity = 1;
                document.querySelector('.age-gate-background-colour').style.background = 'transparent';
            },400);

            // fade in buttons and ui
            setTimeout(function() {
                document.querySelector(".age-gate-wrapper .age-gate").style.opacity = 1;
            },5800);

        }
    },500);
    // later date - interactive belt init by page id
    // if(document.querySelector('body.home.page-id-9')) {
    //     ib.init();
    // }

})();


