/* This excellent solution provided by Ben Frain:
https://benfrain.com/preventing-body-scroll-for-modals-in-ios/ */

function stopBodyScrolling(bool) {
  if (bool === true) {
    document.body.addEventListener('touchmove', freezeVp, false);
  } else {
    document.body.removeEventListener('touchmove', freezeVp, false);
  }
}

var freezeVp = function(e) {
  e.preventDefault();
};

export default stopBodyScrolling;
