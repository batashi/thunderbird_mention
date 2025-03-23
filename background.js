console.log("Hello from background.js");

// Import all functions defined in the messageTools module.

browser.compose.onComposeStateChanged.addListener(async (tab, details) => {
  if (details.state === "new") {
    console.log("New compose window detected:", tab);

    // Inject script into compose window only once
    await browser.tabs.executeScript(tab.id, { file: "compose/compose.js" });
  }
});
browser.compose.onComposeStateChanged.addListener(async (tab, details) => {
  console.log("XXD Hello from background.js");
  if (details.state === "new") {
    console.log("New compose window detected:", tab);

    document.addEventListener("keydown", (event) => {
      console.log("XXL Hello from background.js");
      if (!triggered && event.key === "#") {
        triggered = true; // Mark as triggered
        console.log("Hashtag detected in new compose window!");
        alert("You typed # in a new message!");

        // Example: Insert text dynamically
        browser.runtime.sendMessage({ action: "insertText", text: " - Custom Text" });
      }
    });
    // Inject content script into the compose window
    await browser.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content.js"]
    });
  }
});

(function () {
  console.log("XXE Hello from background.js");
  let triggered = false; // Ensures action runs only once

  document.addEventListener("keydown", (event) => {
    console.log("XXF Hello from background.js");
    if (!triggered && event.key === "#") {
      triggered = true; // Mark as triggered
      console.log("Hashtag detected in new compose window!");
      alert("You typed # in a new message!");

      // Example: Insert text dynamically
      browser.runtime.sendMessage({ action: "insertText", text: " - Custom Text" });
    }
  });
})();



async function injectIntoContent(tab, info) {
  await browser.scripting.insertCSS({
    target: { tabId: tab.id },
    files: ["compose/compose.css"]
  });
  await browser.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["compose/compose.js"]
  })
}

// listen to keystoke
browser.commands.onCommand.addListener(async (command) => {
  if (command === "mention_action") {

    //loading the script only
    const tabs = await browser.tabs.query({ active: true, currentWindow: true });
    const activeTab = tabs[0];
    if (activeTab) {
      try {
        await browser.scripting.executeScript({
          target: { tabId: activeTab.id },
          files: ["compose/compose.js"]
        });

            let details = await browser.compose.getComposeDetails(activeTab.id);
            
            await browser.compose.setComposeDetails(activeTab.id, {
              body: details.body + "<h2 style='color:red;'>List contactss</h2>"
            });

        
        console.log("Script injected successfully");
      } catch (error) {
        console.error("Failed to inject script:", error);
      }
    }


      browser.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["compose/compose.js"]
      });
    }
});



browser.commands.onCommand.addListener(async (tab, details, coomand) => {
  // console.log("ss Hello from background.js");

  // this is openeing new tap X
  //browser.tabs.create({ url: "compose/compose.html" });



});

