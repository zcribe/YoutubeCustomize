/* global chrome */
// If your extension doesn't need a content script, just leave this file empty

// This is an example of a script that will run on every page. This can alter pages
// Don't forget to change `matches` in manifest.json if you want to only change specific webpages
let options;

chrome.storage.local.get(['options'], function(result) {
  options = result.options;
  if(options.views !== true){
    console.log("Views")
    removeViewCount();
  }
  
  if (options.comments !== true){
    console.log("Comments")
    removeComments();
  }
  
  if (options.merchandise !== true){
    console.log("Merch")
    removeMerch();
  }
  
  if (options.meta !== true){
    console.log("Meta")
    removeMetaContent();
  }
  
  if (options.tickets !== true){
    console.log("Tickets")
    removeTickets();
  }
  
  if (options.subscribe !== true){
    console.log("Subs")
    removeInteraction();
  }
  
  if (options.watchNext !== true){
    console.log("Watch Next")
    removeWatchNext();
  }
}
);




// This needs to be an export due to typescript implementation limitation of needing '--isolatedModules' tsconfig

export function removeViewCount() {
  const TAGS = [".view-count", ".short-view-count", ".yt-view-count-renderer"];
  removeNodes(TAGS);
}

export function removeComments() {
  const TAGS = ["#comments", "ytd-comments"];
  removeNodes(TAGS);
  let sponsored = document.querySelectorAll(TAGS.toString());

    sponsored.forEach(function(articleItem){
        articleItem.remove();
    })
}

export function removeMerch() {
  const TAGS = ["#merch-shelf"];
  removeNodes(TAGS);
}

export function removeMetaContent() {
  const TAGS = ["#meta-contents"];
  removeNodes(TAGS);
}

export function removeTickets() {
  const TAGS = ["#ticket-shelf"];
  removeNodes(TAGS);
}

export function removeInteraction() {
  const TAGS = ["#subscribe-button", "#notification-preference-button", "#notification-preference-toggle-button"];
  removeNodes(TAGS);
}

export function removeWatchNext() {
  const TAGS = ["ytd-watch-next-secondary-results-renderer", ".ytd-watch-next-secondary-results-renderer", "#secondary"];
  const BUTTON = [".ytp-size-button"];
  removeNodes(TAGS);
  clickButton(BUTTON);
}

export function removeNodes(nodeList) {
  window.addEventListener("scroll", (_event) => {
    let sponsored = document.querySelectorAll(nodeList.toString());

    sponsored.forEach(function(articleItem){
        articleItem.remove();
    })
  })
  let sponsored = document.querySelectorAll(nodeList.toString());

    sponsored.forEach(function(articleItem){
        articleItem.remove();
    })
}

export function clickButton(buttons) {
  window.addEventListener("load", (_event) => {
    const clickButtons = document.querySelectorAll(buttons.toString())
    
    clickButtons.forEach(function(item){
      item.click()
  })
  })
  const clickButtons = document.querySelectorAll(buttons.toString())
    
    clickButtons.forEach(function(item){
      item.click()
  })
}