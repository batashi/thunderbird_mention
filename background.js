console.log("Background script loaded"); 
// A restarting background will try to re-register the compose scripts, and fail.
// Catch the error.
browser.scripting.compose.registerScripts([{
  id: "compose-script",
  css: ["src/compose.css"],
  js: ["compose.js"],
  runAt: "document_idle"
}]).catch(console.info);

console.info(browser.scripting.compose.getRegisteredScripts());
 

