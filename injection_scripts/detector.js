if (window['optimizely']) {
  // console.info('found optimizely:', window['optimizely']);

  window.postMessage({
    sender: 'injection',
    receiver: 'content',
    event: 'found optimizely',
    target: JSON.stringify(window.optimizely) // Message event doesn't seem to be good at nested objects; serialize them
  }, '*');
}
else {
  console.info('There is no optimizely.');
}
