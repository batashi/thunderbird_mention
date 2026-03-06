await browser.composeScripts.register({
  js: [
    { file: "tm.js" }
  ]
});

console.log(browser.runtime.getManifest());

/**
 * Handles commands received from the compose script, to send make the
 * ComposeDetails available to the compose script.
 */
async function doHandleCommand (message, sender) {
  const { command } = message;
  const { tab: { id: tabId } } = sender;
  switch(command) {
    case "getToAddress":
       
      return "to addresss @ omana.com";
      break;
  }
}

/**
 * Handles the received commands by filtering all messages where "type" property
 * is set to "command". Ignore all other requests.
 */
browser.runtime.onMessage.addListener((message, sender) => {
    return doHandleCommand(message, sender);
  
});
