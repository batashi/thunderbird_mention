console.log("compose/compose.js loaded");



// how to load the ical.js library 
import ICAL from '../lib/ical.js';

console.log(ICAL);

browser.runtime.onMessage.addListener(async (message, sender) => {
  if (message.action === "insertHTML") {
    let details = await browser.compose.getComposeDetails(sender.tab.id);

    await browser.compose.setComposeDetails(sender.tab.id, {
      body: details.body + "<p style='color:red;'>Custom HTML Content</p>"
    });
  }
});




export async function loadContatcts() {
  let list = await browser.addressBooks.list();


  console.log("load Contatcts");
  let results = await browser.addressBooks.contacts.query({
    searchString: "a",
  });
  results[0];
  let { properties } = results[0].vCard;

  for (let index = 0; index < results.length; index++) {
    const element = results[index];

  let x = ICAL.parse(results[0].vCard);
  console.log(x);

  }
   
 
}

 
