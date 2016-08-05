var detect = function() {
  if (window.optimizely) {
    window.postMessage({
      sender: 'injection',
      receiver: 'content',
      event: 'found optimizely',
      target: JSON.stringify(window.optimizely)
      // Message event sometimes fails with nested objects for some reason; serialize them.
    }, '*');
  }
  else {
    console.info('There is no optimizely.');
  }
};

window.onload = detect;
