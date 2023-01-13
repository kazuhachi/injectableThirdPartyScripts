// Select the node that will be observed for mutations
console.clear()


const targetElement = document.body.querySelector(`tbody`);
  
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
                      highlightWebsite();
                      return;
                }
              }
            }
          
            if (mutation.removedNodes.length > 0){
               for (const removedNode of mutation.removedNodes){
                  if (removedNode.nodeName == "TR"){
                    console.clear();
                    console.log("\n UPDATE \n");
                    highlightWebsite();
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

    highlightWebsite();

},0)

addDepoWDLinksELement();






























function huntId(){

    let table = document.querySelector('table');
    let tbody = document.querySelector('tbody');
    let tableRows = tbody.querySelectorAll('tr');
    let counter = 0;
    if (tableRows.length > 0){
      tableRows.forEach((row) => {
        let datas = row.querySelectorAll("td");
        let website;
  
        if (datas[1] == undefined){
          console.log("no transaction displayed");
          return;
        }
        try{
          website = datas[1];
          website = website.querySelector("strong").innerHTML;
        }catch(err){
          console.log("unable to identify transactions.");
          return;
        }
  
        let availableWebsites  = ['JPSLOT88', 'LAPAKSLOT777', 'NAGASLOT777', 'BOLA389'];
        // check if specific website is selected
        let isSelectedAll = true;
        availableWebsites.forEach(function(val){
  
          if (website == val.toLowerCase()){
            isSelectedAll = false;
            return;
          }
        })
  
  
        // console.log(`selected  == ${isSelectedAll}`)
  
        let indexShifter = 0;
        if (isSelectedAll) indexShifter = 1;
  
        let userId = datas[3];  // used to be + indexShifter
        userId = userId.querySelector("strong").innerHTML.toLowerCase();
        let amount = datas[8];
        amount = amount.querySelector("span").innerHTML.toLowerCase();
        amount = amount.replace(/[.,\s]/g, '');
        amount = amount+ "0";
        console.log(`${userId} [${parseInt(amount)}]`)
          //
        listId.forEach(function(objTransaction){
          if (objTransaction.userID.toLowerCase() == userId){
              if (website.toLowerCase() == objTransaction.website.toLowerCase()){
                  console.log("user has been found");
                  if (objTransaction.amount <= amount){
                        // highlight found transactiom, the tds
                        datas.forEach(function(td){
                        td.style.backgroundColor = '#ff4949';
                        td.style.color = 'white';
                      })
                      // can cut back
                      alertMemberHasFound(userId);
                      console.log("also can cut")
                    
                        
                  }else{
                      // player withdraw but insuffecient money
                  }
              }
          }
        })
  
      })
    }
    // displayCount(counter);
}


function highlightWebsite(){
    let websiteColor = [
        {
            "website" : "lapakslot777",
            "color" : "#b1a35e",
        },
        {
            "website" : "digislot777",
            "color" : "#80bf7f",
        }
    ]

    let tbody = document.querySelector("tbody");
    let tableRows = tbody.querySelectorAll('tr');
    tableRows.forEach((TR) => {
        let website = TR.querySelectorAll("td")[1];   // index position to select website 
        // console.log(website);
        if (website == undefined){
            console.log("No data available!")
            return;
        }
        website = website.querySelector("span");      // finally select span. holds website value
        websiteColor.forEach((item) => {

            if (item.website == website.innerHTML){
                // website.style.cssText = `
                //     background-color : ${item.color};
                //     padding : 5px 1px;
                //     border-radius : 5px;
                //     color : white;
                //     `;

                website.closest("td").style.cssText =   `
                background-image: linear-gradient(360deg, ${item.color} 7px, rgba(75, 163, 130, 0) 4px)
                `;
            }
        })

        let thWeb = document.querySelectorAll("th")[1];
        // thWeb.style.padding = "20px";
    })
} 



function addDepoWDLinksELement(){
  let body = document.querySelector("#kt_header");
  let element = `
    <div class="quick-link-container" >
      <a href="https://be.myadminvip.com/transactions/deposit/new"   >
        <span class="custom-depo-Counter"></span>
        <i class="fas fa-inbox-out"></i>
        Deposit
      </a>
      <a href="https://be.myadminvip.com/transactions/withdraw/new"   >
        <span class="custom-wd-Counter"></span>
        <i class="fas fa-inbox-out"></i>
        Withdraw
      </a>
    </div>
  `

  body.insertAdjacentHTML('beforeend', element);
}

loop();

function loop() {
  setTimeout(function(){
    console.clear();
    renderCustomTransactionCounter();
    onlyShowTransactionCounterIfHas();
    console.log("loops");
    
    loop();
  },1000)
}


function renderCustomTransactionCounter(){
  let depoCounter = document.querySelector(".depo").innerHTML;
  let wdCounter = document.querySelector(".wd").innerHTML;

  document.querySelector(".custom-depo-Counter").innerHTML = depoCounter;
  document.querySelector(".custom-wd-Counter").innerHTML =wdCounter;
}


function onlyShowTransactionCounterIfHas(){
  let counterElement = document.querySelector(".transaction");
  let number = counterElement.innerHTML;
  console.log(number)
  if (number > 0){
    console.log("has")
    // counterElement.style.display = "block !important";
    counterElement.style.cssText = `
      display : block!important;
    `;
  }else{
    console.log("hasnt")
    // counterElement.style.display = "none !important";
    counterElement.style.cssText = `
      display : none;
    `;
  }
}

// SDA












// INJECT STYLES
let head = document.querySelector("head");
let customStyle = document.createElement("style");

// DECLARE STYLES HERE
let css = document.createTextNode(`
    .quick-link-container{
      position: absolute; 
      top: 0; 
      left: 150px; 
      z-index:100002; 
      background-color: #727d8d; 
      padding: 5px
    }

    .quick-link-container a{
      padding: 8px 20px; 
      display:inline-block;
      border-radius : 5px;
      color: white;
    }
    .quick-link-container a i {
      font-size: 12px; 
      margin-right: 5px;
    }

    .quick-link-container a:nth-child(1){
      background-color: #4f5f76; 
    }
    .quick-link-container a:nth-child(2){
      background-color: #4f5f76; 
    }


    // hide red label counter for Depo and WD

`);

customStyle.appendChild(css);
head.appendChild(customStyle);