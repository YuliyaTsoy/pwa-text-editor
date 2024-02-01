const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Adds an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    window.deferredPrompt = event;
    // remoes hidden class from the button
  butInstall.classList.toggle("hidden", false);
});

// Implements a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }
  // shows prompt
  promptEvent.prompt();
  // reset deferredPrompt variable
  window.deferredPrompt = null;

  butInstall.classList.toggle("hidden", true);
});

// Adds a handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // clear prompt
        window.deferredPrompt = null;
});
