console.log("compose/compose.js loaded");
browser.runtime.onMessage.addListener(async (message, sender) => {
  if (message.action === "insertHTML") {
    let details = await browser.compose.getComposeDetails(sender.tab.id);

    await browser.compose.setComposeDetails(sender.tab.id, {
      body: details.body + "<p style='color:red;'>Custom HTML Content</p>"
    });
  }
});






async function loadContatcts() {
  let list = await browser.addressBooks.list();


  console.log("load Contatcts");
  let results = await browser.addressBooks.contacts.query({
    searchString: "ab",
  });
  results[0];
  let { properties } = results[0].vCard;
  console.log(properties); 
  
  if (results[0] == "vcard") {
    let email = jCard.find(e => e[0] == "email");
    console.log(email);
  }
  //console.log(results[0].vCard);


}

loadContatcts();