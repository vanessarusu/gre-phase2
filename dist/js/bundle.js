/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/bundle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/bundle.js":
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interactive_belt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interactive-belt */ "./src/js/interactive-belt.js");


(function () {
  console.log("%cSite Credits: Designed by www.lwdg.ca, developed by www.vanessarusu.com", "color: #000; font-size: 14px;");
  history.pushState("", document.title, window.location.pathname);
  var links = document.querySelectorAll('#menu-primary-menu li.menu-item');

  for (var i = 0; i < links.length; i++) {// links[i].classList.remove('current-menu-item');
  }

  var ib = Object(_interactive_belt__WEBPACK_IMPORTED_MODULE_0__["default"])();
  setTimeout(function () {
    // if the age gate screen shows, render and insert the video
    // wait 1000 ms for plugin to init
    if (Boolean(document.querySelector(".age-gate-wrapper"))) {
      var html = '<div class="video-contain"><video id="ageGateVideo" muted="" playsinline="" poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" style="background: transparent; transition: all 1s ease; left: 0px; top: 0px; opacity: 0;"><source src=\"https://lwdgdev.ca/gre/wp-content/uploads/20210310_KENNY-HEAD_NOGlow_720p.mov\" type="video/mp4"></video></div>';
      var hook = document.querySelector(".age-gate-wrapper");
      hook.insertAdjacentHTML("afterbegin", html); // play the video and give opacity

      setTimeout(function () {
        var vid = document.querySelector("#ageGateVideo");
        vid.play();
        vid.style.opacity = 1;
        document.querySelector('.age-gate-background-colour').style.background = 'transparent';
      }, 400); // fade in buttons and ui

      setTimeout(function () {
        document.querySelector(".age-gate-wrapper .age-gate").style.opacity = 1;
      }, 5800);
    }
  }, 500);

  if (document.querySelector('body.home.page-id-9')) {
    ib.init();
  }
})();

/***/ }),

/***/ "./src/js/interactive-belt.js":
/*!************************************!*\
  !*** ./src/js/interactive-belt.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var interactiveBelt = function interactiveBelt() {
  var interactiveBelt;
  var nodes;
  var classHooks;
  var closeButtons;

  function showPanel(itemNumber) {
    var panelToShow = document.querySelector('#content' + itemNumber + '.hover-content');

    if (Boolean(panelToShow)) {
      panelToShow.classList.add('show');
    }
  }

  function hideAllPanels() {
    document.querySelectorAll('.hover-content').forEach(function (el) {
      if (Boolean(el)) {
        el.classList.remove('show');
      }
    });
  }

  function addHover(el) {
    var itemNumber = el.getAttribute("data-item");
    document.querySelector("svg #area" + itemNumber).classList.add('active');
  }

  function removeHover(el) {
    var itemNumber = el.getAttribute("data-item");
    document.querySelector("svg #area" + itemNumber).classList.remove('active');
  }

  function addActive(el) {
    var itemNumber = el.getAttribute("data-item");
    document.querySelector("svg #area" + itemNumber).classList.add('active');
    showPanel(itemNumber);
  }

  function removeAllActive() {
    classHooks.forEach(function (el) {
      el.classList.remove('active');
      hideAllPanels();
    });
  }

  function init() {
    interactiveBelt = document.querySelector("svg#interactiveBelt");
    nodes = document.querySelectorAll('.js-clickarea');
    classHooks = document.querySelectorAll('.js-hook');
    closeButtons = document.querySelectorAll('.close-button');
    closeButtons.forEach(function (el) {
      el.onclick = function (e) {
        removeAllActive();
      };
    });
    nodes.forEach(function (el) {
      el.onclick = function (e) {
        removeAllActive();
        addActive(el);
      };

      el.addEventListener('mouseenter', function (e) {
        addHover(el);
      });
      el.addEventListener('mouseleave', function (e) {
        removeHover(el);
      });
    });
  }

  return {
    init: init
  };
};

/* harmony default export */ __webpack_exports__["default"] = (interactiveBelt);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW50ZXJhY3RpdmUtYmVsdC5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImRvY3VtZW50IiwidGl0bGUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwibGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsImxlbmd0aCIsImliIiwiaW50ZXJhY3RpdmVCZWx0Iiwic2V0VGltZW91dCIsIkJvb2xlYW4iLCJxdWVyeVNlbGVjdG9yIiwiaHRtbCIsImhvb2siLCJpbnNlcnRBZGphY2VudEhUTUwiLCJ2aWQiLCJwbGF5Iiwic3R5bGUiLCJvcGFjaXR5IiwiYmFja2dyb3VuZCIsImluaXQiLCJub2RlcyIsImNsYXNzSG9va3MiLCJjbG9zZUJ1dHRvbnMiLCJzaG93UGFuZWwiLCJpdGVtTnVtYmVyIiwicGFuZWxUb1Nob3ciLCJjbGFzc0xpc3QiLCJhZGQiLCJoaWRlQWxsUGFuZWxzIiwiZm9yRWFjaCIsImVsIiwicmVtb3ZlIiwiYWRkSG92ZXIiLCJnZXRBdHRyaWJ1dGUiLCJyZW1vdmVIb3ZlciIsImFkZEFjdGl2ZSIsInJlbW92ZUFsbEFjdGl2ZSIsIm9uY2xpY2siLCJlIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7O0FBRUEsQ0FBQyxZQUFXO0FBQ1JBLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLDJFQUFaLEVBQXlGLCtCQUF6RjtBQUNBQyxTQUFPLENBQUNDLFNBQVIsQ0FBa0IsRUFBbEIsRUFBc0JDLFFBQVEsQ0FBQ0MsS0FBL0IsRUFBc0NDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsUUFBdEQ7QUFDQSxNQUFJQyxLQUFLLEdBQUdMLFFBQVEsQ0FBQ00sZ0JBQVQsQ0FBMEIsaUNBQTFCLENBQVo7O0FBQ0EsT0FBSSxJQUFJQyxDQUFDLEdBQUMsQ0FBVixFQUFhQSxDQUFDLEdBQUdGLEtBQUssQ0FBQ0csTUFBdkIsRUFBK0JELENBQUMsRUFBaEMsRUFBb0MsQ0FDaEM7QUFDSDs7QUFFRCxNQUFNRSxFQUFFLEdBQUdDLGlFQUFlLEVBQTFCO0FBR0FDLFlBQVUsQ0FBQyxZQUFXO0FBQ2xCO0FBQ0E7QUFDQSxRQUFHQyxPQUFPLENBQUNaLFFBQVEsQ0FBQ2EsYUFBVCxDQUF1QixtQkFBdkIsQ0FBRCxDQUFWLEVBQXlEO0FBQ3JELFVBQUlDLElBQUksR0FBRyw4WEFBWDtBQUNBLFVBQUlDLElBQUksR0FBR2YsUUFBUSxDQUFDYSxhQUFULENBQXVCLG1CQUF2QixDQUFYO0FBQ0FFLFVBQUksQ0FBQ0Msa0JBQUwsQ0FBd0IsWUFBeEIsRUFBc0NGLElBQXRDLEVBSHFELENBS3JEOztBQUNBSCxnQkFBVSxDQUFDLFlBQVc7QUFDbEIsWUFBSU0sR0FBRyxHQUFHakIsUUFBUSxDQUFDYSxhQUFULENBQXVCLGVBQXZCLENBQVY7QUFDQUksV0FBRyxDQUFDQyxJQUFKO0FBQ0FELFdBQUcsQ0FBQ0UsS0FBSixDQUFVQyxPQUFWLEdBQW9CLENBQXBCO0FBQ0FwQixnQkFBUSxDQUFDYSxhQUFULENBQXVCLDZCQUF2QixFQUFzRE0sS0FBdEQsQ0FBNERFLFVBQTVELEdBQXlFLGFBQXpFO0FBQ0gsT0FMUyxFQUtSLEdBTFEsQ0FBVixDQU5xRCxDQWFyRDs7QUFDQVYsZ0JBQVUsQ0FBQyxZQUFXO0FBQ2xCWCxnQkFBUSxDQUFDYSxhQUFULENBQXVCLDZCQUF2QixFQUFzRE0sS0FBdEQsQ0FBNERDLE9BQTVELEdBQXNFLENBQXRFO0FBQ0gsT0FGUyxFQUVSLElBRlEsQ0FBVjtBQUlIO0FBQ0osR0F0QlMsRUFzQlIsR0F0QlEsQ0FBVjs7QUF1QkEsTUFBR3BCLFFBQVEsQ0FBQ2EsYUFBVCxDQUF1QixxQkFBdkIsQ0FBSCxFQUFrRDtBQUM5Q0osTUFBRSxDQUFDYSxJQUFIO0FBQ0g7QUFFSixDQXRDRCxJOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBLElBQU1aLGVBQWUsR0FBSSwyQkFBWTtBQUNqQyxNQUFJQSxlQUFKO0FBQ0EsTUFBSWEsS0FBSjtBQUNBLE1BQUlDLFVBQUo7QUFDQSxNQUFJQyxZQUFKOztBQUVBLFdBQVNDLFNBQVQsQ0FBbUJDLFVBQW5CLEVBQStCO0FBQzNCLFFBQUlDLFdBQVcsR0FBRzVCLFFBQVEsQ0FBQ2EsYUFBVCxDQUF1QixhQUFXYyxVQUFYLEdBQXNCLGdCQUE3QyxDQUFsQjs7QUFDQSxRQUFHZixPQUFPLENBQUNnQixXQUFELENBQVYsRUFBeUI7QUFDckJBLGlCQUFXLENBQUNDLFNBQVosQ0FBc0JDLEdBQXRCLENBQTBCLE1BQTFCO0FBQ0g7QUFDSjs7QUFFRCxXQUFTQyxhQUFULEdBQXlCO0FBQ3JCL0IsWUFBUSxDQUFDTSxnQkFBVCxDQUEwQixnQkFBMUIsRUFBNEMwQixPQUE1QyxDQUFvRCxVQUFBQyxFQUFFLEVBQUk7QUFDdEQsVUFBR3JCLE9BQU8sQ0FBQ3FCLEVBQUQsQ0FBVixFQUFnQjtBQUNaQSxVQUFFLENBQUNKLFNBQUgsQ0FBYUssTUFBYixDQUFvQixNQUFwQjtBQUNIO0FBQ0osS0FKRDtBQUtIOztBQUVELFdBQVNDLFFBQVQsQ0FBa0JGLEVBQWxCLEVBQXNCO0FBQ2xCLFFBQUlOLFVBQVUsR0FBR00sRUFBRSxDQUFDRyxZQUFILENBQWdCLFdBQWhCLENBQWpCO0FBQ0FwQyxZQUFRLENBQUNhLGFBQVQsQ0FBdUIsY0FBWWMsVUFBbkMsRUFBK0NFLFNBQS9DLENBQXlEQyxHQUF6RCxDQUE2RCxRQUE3RDtBQUNIOztBQUVELFdBQVNPLFdBQVQsQ0FBcUJKLEVBQXJCLEVBQXlCO0FBQ3JCLFFBQUlOLFVBQVUsR0FBR00sRUFBRSxDQUFDRyxZQUFILENBQWdCLFdBQWhCLENBQWpCO0FBQ0FwQyxZQUFRLENBQUNhLGFBQVQsQ0FBdUIsY0FBWWMsVUFBbkMsRUFBK0NFLFNBQS9DLENBQXlESyxNQUF6RCxDQUFnRSxRQUFoRTtBQUVIOztBQUVELFdBQVNJLFNBQVQsQ0FBbUJMLEVBQW5CLEVBQXVCO0FBQ25CLFFBQUlOLFVBQVUsR0FBR00sRUFBRSxDQUFDRyxZQUFILENBQWdCLFdBQWhCLENBQWpCO0FBQ0FwQyxZQUFRLENBQUNhLGFBQVQsQ0FBdUIsY0FBWWMsVUFBbkMsRUFBK0NFLFNBQS9DLENBQXlEQyxHQUF6RCxDQUE2RCxRQUE3RDtBQUNBSixhQUFTLENBQUNDLFVBQUQsQ0FBVDtBQUNIOztBQUVELFdBQVNZLGVBQVQsR0FBMkI7QUFDdkJmLGNBQVUsQ0FBQ1EsT0FBWCxDQUFtQixVQUFBQyxFQUFFLEVBQUk7QUFDckJBLFFBQUUsQ0FBQ0osU0FBSCxDQUFhSyxNQUFiLENBQW9CLFFBQXBCO0FBQ0FILG1CQUFhO0FBQ2hCLEtBSEQ7QUFJSDs7QUFJRCxXQUFTVCxJQUFULEdBQWdCO0FBQ1paLG1CQUFlLEdBQUdWLFFBQVEsQ0FBQ2EsYUFBVCxDQUF1QixxQkFBdkIsQ0FBbEI7QUFDQVUsU0FBSyxHQUFHdkIsUUFBUSxDQUFDTSxnQkFBVCxDQUEwQixlQUExQixDQUFSO0FBQ0FrQixjQUFVLEdBQUd4QixRQUFRLENBQUNNLGdCQUFULENBQTBCLFVBQTFCLENBQWI7QUFDQW1CLGdCQUFZLEdBQUd6QixRQUFRLENBQUNNLGdCQUFULENBQTBCLGVBQTFCLENBQWY7QUFFQW1CLGdCQUFZLENBQUNPLE9BQWIsQ0FBcUIsVUFBQUMsRUFBRSxFQUFJO0FBQ3ZCQSxRQUFFLENBQUNPLE9BQUgsR0FBYSxVQUFTQyxDQUFULEVBQVk7QUFDckJGLHVCQUFlO0FBQ2xCLE9BRkQ7QUFHSCxLQUpEO0FBTUFoQixTQUFLLENBQUNTLE9BQU4sQ0FBYyxVQUFBQyxFQUFFLEVBQUk7QUFDaEJBLFFBQUUsQ0FBQ08sT0FBSCxHQUFhLFVBQVNDLENBQVQsRUFBWTtBQUNyQkYsdUJBQWU7QUFDZkQsaUJBQVMsQ0FBQ0wsRUFBRCxDQUFUO0FBQ0gsT0FIRDs7QUFJQUEsUUFBRSxDQUFDUyxnQkFBSCxDQUFvQixZQUFwQixFQUFrQyxVQUFTRCxDQUFULEVBQVk7QUFDMUNOLGdCQUFRLENBQUNGLEVBQUQsQ0FBUjtBQUNILE9BRkQ7QUFHQUEsUUFBRSxDQUFDUyxnQkFBSCxDQUFvQixZQUFwQixFQUFrQyxVQUFTRCxDQUFULEVBQVk7QUFDMUNKLG1CQUFXLENBQUNKLEVBQUQsQ0FBWDtBQUNILE9BRkQ7QUFHSCxLQVhEO0FBWUg7O0FBRUQsU0FBTztBQUNIWCxRQUFJLEVBQUVBO0FBREgsR0FBUDtBQUdILENBNUVEOztBQThFZVosOEVBQWYsRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9idW5kbGUuanNcIik7XG4iLCJpbXBvcnQgaW50ZXJhY3RpdmVCZWx0IGZyb20gJy4vaW50ZXJhY3RpdmUtYmVsdCc7XG5cbihmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZyhcIiVjU2l0ZSBDcmVkaXRzOiBEZXNpZ25lZCBieSB3d3cubHdkZy5jYSwgZGV2ZWxvcGVkIGJ5IHd3dy52YW5lc3NhcnVzdS5jb21cIiwgXCJjb2xvcjogIzAwMDsgZm9udC1zaXplOiAxNHB4O1wiKVxuICAgIGhpc3RvcnkucHVzaFN0YXRlKFwiXCIsIGRvY3VtZW50LnRpdGxlLCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgIHZhciBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNtZW51LXByaW1hcnktbWVudSBsaS5tZW51LWl0ZW0nKTtcbiAgICBmb3IodmFyIGk9MDsgaSA8IGxpbmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGxpbmtzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQtbWVudS1pdGVtJyk7XG4gICAgfVxuXG4gICAgY29uc3QgaWIgPSBpbnRlcmFjdGl2ZUJlbHQoKTtcbiAgICBcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIGlmIHRoZSBhZ2UgZ2F0ZSBzY3JlZW4gc2hvd3MsIHJlbmRlciBhbmQgaW5zZXJ0IHRoZSB2aWRlb1xuICAgICAgICAvLyB3YWl0IDEwMDAgbXMgZm9yIHBsdWdpbiB0byBpbml0XG4gICAgICAgIGlmKEJvb2xlYW4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZ2UtZ2F0ZS13cmFwcGVyXCIpKSkge1xuICAgICAgICAgICAgdmFyIGh0bWwgPSAnPGRpdiBjbGFzcz1cInZpZGVvLWNvbnRhaW5cIj48dmlkZW8gaWQ9XCJhZ2VHYXRlVmlkZW9cIiBtdXRlZD1cIlwiIHBsYXlzaW5saW5lPVwiXCIgcG9zdGVyPVwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3XCIgc3R5bGU9XCJiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7IGxlZnQ6IDBweDsgdG9wOiAwcHg7IG9wYWNpdHk6IDA7XCI+PHNvdXJjZSBzcmM9XFxcImh0dHBzOi8vbHdkZ2Rldi5jYS9ncmUvd3AtY29udGVudC91cGxvYWRzLzIwMjEwMzEwX0tFTk5ZLUhFQURfTk9HbG93XzcyMHAubW92XFxcIiB0eXBlPVwidmlkZW8vbXA0XCI+PC92aWRlbz48L2Rpdj4nO1xuICAgICAgICAgICAgdmFyIGhvb2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFnZS1nYXRlLXdyYXBwZXJcIik7XG4gICAgICAgICAgICBob29rLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgaHRtbCk7XG5cbiAgICAgICAgICAgIC8vIHBsYXkgdGhlIHZpZGVvIGFuZCBnaXZlIG9wYWNpdHlcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWdlR2F0ZVZpZGVvXCIpO1xuICAgICAgICAgICAgICAgIHZpZC5wbGF5KCk7XG4gICAgICAgICAgICAgICAgdmlkLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZ2UtZ2F0ZS1iYWNrZ3JvdW5kLWNvbG91cicpLnN0eWxlLmJhY2tncm91bmQgPSAndHJhbnNwYXJlbnQnO1xuICAgICAgICAgICAgfSw0MDApO1xuXG4gICAgICAgICAgICAvLyBmYWRlIGluIGJ1dHRvbnMgYW5kIHVpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWdlLWdhdGUtd3JhcHBlciAuYWdlLWdhdGVcIikuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgICAgICB9LDU4MDApO1xuXG4gICAgICAgIH1cbiAgICB9LDUwMCk7XG4gICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keS5ob21lLnBhZ2UtaWQtOScpKSB7XG4gICAgICAgIGliLmluaXQoKTtcbiAgICB9XG5cbn0pKCk7XG5cblxuIiwiY29uc3QgaW50ZXJhY3RpdmVCZWx0ID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaW50ZXJhY3RpdmVCZWx0O1xuICAgIHZhciBub2RlcztcbiAgICB2YXIgY2xhc3NIb29rcztcbiAgICB2YXIgY2xvc2VCdXR0b25zO1xuXG4gICAgZnVuY3Rpb24gc2hvd1BhbmVsKGl0ZW1OdW1iZXIpIHtcbiAgICAgICAgdmFyIHBhbmVsVG9TaG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnK2l0ZW1OdW1iZXIrJy5ob3Zlci1jb250ZW50Jyk7XG4gICAgICAgIGlmKEJvb2xlYW4ocGFuZWxUb1Nob3cpKSB7XG4gICAgICAgICAgICBwYW5lbFRvU2hvdy5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlQWxsUGFuZWxzKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG92ZXItY29udGVudCcpLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgaWYoQm9vbGVhbihlbCkpIHtcbiAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pOyAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGFkZEhvdmVyKGVsKSB7XG4gICAgICAgIHZhciBpdGVtTnVtYmVyID0gZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1pdGVtXCIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic3ZnICNhcmVhXCIraXRlbU51bWJlcikuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlSG92ZXIoZWwpIHtcbiAgICAgICAgdmFyIGl0ZW1OdW1iZXIgPSBlbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWl0ZW1cIik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzdmcgI2FyZWFcIitpdGVtTnVtYmVyKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZEFjdGl2ZShlbCkge1xuICAgICAgICB2YXIgaXRlbU51bWJlciA9IGVsLmdldEF0dHJpYnV0ZShcImRhdGEtaXRlbVwiKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInN2ZyAjYXJlYVwiK2l0ZW1OdW1iZXIpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICBzaG93UGFuZWwoaXRlbU51bWJlcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsQWN0aXZlKCkge1xuICAgICAgICBjbGFzc0hvb2tzLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICBoaWRlQWxsUGFuZWxzKCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgXG5cbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBpbnRlcmFjdGl2ZUJlbHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic3ZnI2ludGVyYWN0aXZlQmVsdFwiKTtcbiAgICAgICAgbm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtY2xpY2thcmVhJyk7XG4gICAgICAgIGNsYXNzSG9va3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtaG9vaycpO1xuICAgICAgICBjbG9zZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2xvc2UtYnV0dG9uJyk7XG5cbiAgICAgICAgY2xvc2VCdXR0b25zLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgZWwub25jbGljayA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVBbGxBY3RpdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICBcbiAgICAgICAgbm9kZXMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICBlbC5vbmNsaWNrID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIHJlbW92ZUFsbEFjdGl2ZSgpO1xuICAgICAgICAgICAgICAgIGFkZEFjdGl2ZShlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGFkZEhvdmVyKGVsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVIb3ZlcihlbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdDogaW5pdFxuICAgIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBpbnRlcmFjdGl2ZUJlbHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==