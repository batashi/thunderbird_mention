/**
 * Update the message by adding an introduction. For this example, we only handle
 * the case, when there is exactly 1 to-address given.
 */ 
async function create_list(){
console.log("Creating list of to address");
}

async function main() {
    console.log("Hello from tm.js");
 
    let to = await browser.runtime.sendMessage({ command: "getToAddress" });
    await console.log(to);
}
main();