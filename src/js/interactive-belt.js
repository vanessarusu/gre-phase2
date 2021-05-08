const interactiveBelt = (function () {
    var interactiveBelt;
    var nodes;
    var classHooks;
    var closeButtons;

    function showPanel(itemNumber) {
        var panelToShow = document.querySelector('#content'+itemNumber+'.hover-content');
        if(Boolean(panelToShow)) {
            panelToShow.classList.add('show');
        }
    }

    function hideAllPanels() {
        document.querySelectorAll('.hover-content').forEach(el => {
            if(Boolean(el)) {
                el.classList.remove('show');
            }
        });        
    }
    
    function addHover(el) {
        var itemNumber = el.getAttribute("data-item");
        document.querySelector("svg #area"+itemNumber).classList.add('active');
    }

    function removeHover(el) {
        var itemNumber = el.getAttribute("data-item");
        document.querySelector("svg #area"+itemNumber).classList.remove('active');

    }

    function addActive(el) {
        var itemNumber = el.getAttribute("data-item");
        document.querySelector("svg #area"+itemNumber).classList.add('active');
        showPanel(itemNumber);
    }

    function removeAllActive() {
        classHooks.forEach(el => {
            el.classList.remove('active');
            hideAllPanels();
        })
    }

    

    function init() {
        interactiveBelt = document.querySelector("svg#interactiveBelt");
        nodes = document.querySelectorAll('.js-clickarea');
        classHooks = document.querySelectorAll('.js-hook');
        closeButtons = document.querySelectorAll('.close-button');

        closeButtons.forEach(el => {
            el.onclick = function(e) {
                removeAllActive();
            }
        })
    
        nodes.forEach(el => {
            el.onclick = function(e) {
                removeAllActive();
                addActive(el);
            }
            el.addEventListener('mouseenter', function(e) {
                addHover(el);
            });
            el.addEventListener('mouseleave', function(e) {
                removeHover(el);
            });
        });
    }

    return {
        init: init
    }
});

export default interactiveBelt;