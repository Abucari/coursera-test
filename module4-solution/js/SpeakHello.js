// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2

// STEP 3: Create an object, called 'helloSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
(function (window) {
  var helloSpeaker = {};

  // DO NOT attach the speakWord variable to the 'helloSpeaker' object.
  var speakWord = "Hello";

  // Rewrite the 'speak' function such that it is attached to the
  // helloSpeaker object instead of being a standalone function.
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // Expose the 'helloSpeaker' object to the global scope. Name it
  // 'helloSpeaker' on the global scope as well.
  window.helloSpeaker = helloSpeaker;
})(window);
