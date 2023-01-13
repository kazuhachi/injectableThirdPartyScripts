// Select the node that will be observed for mutations
console.clear()


const targetElement = document.body.querySelector(`table`);
  
// Options for the observer (which mutations to observe)
const config = {childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) {
    // Use traditional 'for loops' for IE 11
    for(const mutation of mutationsList) {
        if (mutation.type === 'childList') {
             if (mutation.addedNodes.length > 0){
              for (const addedNode of mutation.addedNodes){
                if (addedNode.nodeName == "TR"){
                    console.clear();
                    console.log("==== addedNode ===");
                    //   huntId();
                      return;
                }
              }
            }
          
            if (mutation.removedNodes.length > 0){
               for (const removedNode of mutation.removedNodes){
                  if (removedNode.nodeName == "TR"){
                    console.clear();
                    console.log("\n UPDATE \n");
                    //   huntId();
                      return;
                  }
               }
            }
            return;
        }
    }
};

//  INI DELAY
setTimeout(function(){
    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);
    
    // Start observing the target node for configured mutations
    observer.observe(targetElement, config);

},1000)




// a[href="/instanttransaction"]