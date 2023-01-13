let listId = [
    {
      'website': 'JPSLOT88',
      'userID' : 'galiharawnnn',
      'amount' : 0
    },
    {
      'website': 'JPSLOT88',
      'userID' : 'ragajibesi',
      'amount' : 0
    },
    {
      'website': 'JPSLOT88',
      'userID' : 'edoh230',
      'amount' : 0
    },
    {
      'website': 'JPSLOT88',
      'userID' : 'putri08',
      'amount' : 0
    }
    
    
  ]
  
  
  
  
  
  
  //  DONT ALTER BELOW....
  
  
  
  console.log("mistake hunter activated \n\n");

  showListUI();
  
  
  
  // INJECT STYLES
  let head = document.querySelector("head");
  let customStyle = document.createElement("style");
  
  let css = document.createTextNode(`
    #ewalletNotif{
      animation : float 1s infinite;
    }
    @keyframes float{
        0%{
            transform : translateY(0px)
        }
        50%{
            transform : translateY(-40px)
        }
            100%{
            transform : translateY(0px)
        }
    }
    .listContainer{
        position: fixed;
        top :0;
        right: 25%;
        z-index : 10000;
        background: white;
        padding: 10px;
        border-radius: 5px;
        transition: 300ms;
        box-shadow: 0px 0px 10px -2px gray;
    }
    .listContainer:hover table{
        display: block;
    }
    .listContainer table{
        display: none;
    }

    .listContainer tr{
        border: 1px solid lightgray;
    }
    .listContainer td , .listContainer th{
        padding: 5px;
    }

    .listContainer th{
      background-color: black;
      color: white;
    }
  `);
  
  customStyle.appendChild(css);
  head.appendChild(customStyle);
  
  
  
  
  
  setTimeout(() => {
    huntId();
  },200)
  
  
  
  // Select the node that will be observed for mutations
  const targetElement = document.body.querySelector('tbody');
  
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
                        console.log("==== addedNode ===");
                        huntId();
                        return;
                  }
                }
              }
            
              if (mutation.removedNodes.length > 0){
                 for (const removedNode of mutation.removedNodes){
                    if (removedNode.nodeName == "TR"){
                        console.log("\n UPDATE \n");
                        huntId();
                        return;
                    }
                 }
              }
              return;
          }
      }
  };
  
  // Create an observer instance linked to the callback function
  const observer = new MutationObserver(callback);
  
  // Start observing the target node for configured mutations
  observer.observe(targetElement, config);
  
  
  
  let style = {
      position : 'fixed',
      bottom : '10px',
      left : '10px',
      backgroundColor : 'red',
      display : 'none',
      padding : '5px 20px',
      color: 'white',
      fontSize: '20px',
      borderRadius : '5px'
    };
  
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
  
  let divCreated = document.createElement("div");
  document.body.appendChild(divCreated);
  divCreated.setAttribute('id','ewalletNotif')
  Object.assign(divCreated.style, style);
  
  
  function alertMemberHasFound(userId){
    
    /*var params = [
        'height='+screen.height,
        'width='+screen.width,
        'fullscreen=yes' // only works in IE, but here for completeness
    ].join(',');
         // and any other options from
         // https://developer.mozilla.org/en/DOM/window.open
      */
    var params = [
        'height='+400,
        'width='+800,
        'fullscreen=' // only works in IE, but here for completeness
    ].join(',');
    
    var newWin = window.open('','popup_window', params); 
    //newWin.moveTo(0,0);
    newWin.document.write(`
        <p style="    font-size: 25px;
      font-family: segoe ui;
      text-align: center;
      background-color: #ecd0d0;
      padding: 10px;
      border-radius: 5px;
      font-weight: bolder;
      color: #444040">
          User Id has found [ <span style="color:red; ">${userId}</span> ]. This is id has mistake. !  It can be cut now but check <a href="https://docs.google.com/spreadsheets/d/1RO8ki6J4Wl9o8ZvHfLkhAz-NZ5ONAesEVP2AMV4HKt8/edit#gid=1859428588">NTC</a> first.
        </b>`
  
    );
  }
  
  
  function showAttention(){
  
  } 
  
  
  
  function fetchDataToLocalStorage(){
      console.log("fetching data from Cloud..");
        let timeOfFetch  ;
    
        let encryptedListId = encryptJSON(listId);
        localStorage.setItem("GHxEYGraAa", encryptedListId);
  }
  
  function fetchDateFromLocalStorage(){
      console.log("fetching data from Local Storage..");
       let encryptedJSON = localStorage.getItem("GHxEYGraAa");
        let decryptedJSON = window.atob(encryptedJSON);
        let JSONifiedData = JSON.parse(decryptedJSON);
        console.log(JSONifiedData);
  }
  
  function encryptJSON(data){
        let stringified = JSON.stringify(data);
          console.log( window.btoa(stringified));
        return window.btoa(stringified);
  }
  
  function decryptJSON(data){
        try{
          let JSONified = JSON.parse(data);
      }catch(e){
        console.log('data is not a JSON');
      }
  }
  
  // get data from server / cloud by request.
  function fetchDataFromCloud() {
  
     var xhttp = new XMLHttpRequest();
     xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          let data = this.responseText;
          console.log(data);
         }else{
           
         }
       };
  
     xhttp.open("POST", "https://findmymistake.000webhostapp.com/request.php", true);
     xhttp.send();
  }
  
  function showListUI(){
    if (listId.length < 1){
        return;
    }
    let body = document.querySelector("body");
    let listELement = '';   
    listId.forEach((item) => {
        listELement += `
            <tr class="whiteListIDs">
                <td class="website">${item.website}</td>
                <td class="userID">${item.userID}</td>
                <td class="amount" style="text-align:center">${item.amount}</td>
            </tr>
        `
    })

    let divListUI = `
        <div class="listContainer">
            <div class="iconListClickable">
            
            Mistake Whitelist</div>
                <table>
                    <tr>
                        <th>Website</th>
                        <th>UserID</th>
                        <th style="text-align:center">Amount</th>
                    </tr>
                    ${listELement}
                </table>
        </div>
    `;

    body.insertAdjacentHTML('beforeend', divListUI);

  }

  
