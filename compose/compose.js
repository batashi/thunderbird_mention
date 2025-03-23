console.log("compose/compose.js loaded");
browser.runtime.onMessage.addListener(async (message, sender) => {
    if (message.action === "insertHTML") {
      let details = await browser.compose.getComposeDetails(sender.tab.id);
      
      await browser.compose.setComposeDetails(sender.tab.id, {
        body: details.body + "<p style='color:red;'>Custom HTML Content</p>"
      });
    }
  });
  