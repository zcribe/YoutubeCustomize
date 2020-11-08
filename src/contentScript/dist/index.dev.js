"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeViewCount = removeViewCount;
exports.removeComments = removeComments;
exports.removeMerch = removeMerch;
exports.removeMetaContent = removeMetaContent;
exports.removeTickets = removeTickets;
exports.removeInteraction = removeInteraction;
exports.removeWatchNext = removeWatchNext;
exports.removeNodes = removeNodes;
exports.clickButton = clickButton;

/* global chrome */
// If your extension doesn't need a content script, just leave this file empty
// This is an example of a script that will run on every page. This can alter pages
// Don't forget to change `matches` in manifest.json if you want to only change specific webpages
var options;
chrome.storage.local.get(['options'], function (result) {
  options = result.options;

  if (options.views !== true) {
    console.log("Views");
    removeViewCount();
  }

  if (options.comments !== true) {
    console.log("Comments");
    removeComments();
  }

  if (options.merchandise !== true) {
    console.log("Merch");
    removeMerch();
  }

  if (options.meta !== true) {
    console.log("Meta");
    removeMetaContent();
  }

  if (options.tickets !== true) {
    console.log("Tickets");
    removeTickets();
  }

  if (options.subscribe !== true) {
    console.log("Subs");
    removeInteraction();
  }

  if (options.watchNext !== true) {
    console.log("Watch Next");
    removeWatchNext();
  }
}); // This needs to be an export due to typescript implementation limitation of needing '--isolatedModules' tsconfig

function removeViewCount() {
  var TAGS = [".view-count", ".short-view-count", ".yt-view-count-renderer"];
  removeNodes(TAGS);
}

function removeComments() {
  var TAGS = ["#comments", "ytd-comments"];
  removeNodes(TAGS);
  var sponsored = document.querySelectorAll(TAGS.toString());
  sponsored.forEach(function (articleItem) {
    articleItem.remove();
  });
}

function removeMerch() {
  var TAGS = ["#merch-shelf"];
  removeNodes(TAGS);
}

function removeMetaContent() {
  var TAGS = ["#meta-contents"];
  removeNodes(TAGS);
}

function removeTickets() {
  var TAGS = ["#ticket-shelf"];
  removeNodes(TAGS);
}

function removeInteraction() {
  var TAGS = ["#subscribe-button", "#notification-preference-button", "#notification-preference-toggle-button"];
  removeNodes(TAGS);
}

function removeWatchNext() {
  var TAGS = ["ytd-watch-next-secondary-results-renderer", ".ytd-watch-next-secondary-results-renderer", "#secondary"];
  var BUTTON = [".ytp-size-button"];
  removeNodes(TAGS);
  clickButton(BUTTON);
}

function removeNodes(nodeList) {
  window.addEventListener("scroll", function (_event) {
    var sponsored = document.querySelectorAll(nodeList.toString());
    sponsored.forEach(function (articleItem) {
      articleItem.remove();
    });
  });
  var sponsored = document.querySelectorAll(nodeList.toString());
  sponsored.forEach(function (articleItem) {
    articleItem.remove();
  });
}

function clickButton(buttons) {
  window.addEventListener("load", function (_event) {
    var clickButtons = document.querySelectorAll(buttons.toString());
    clickButtons.forEach(function (item) {
      item.click();
    });
  });
  var clickButtons = document.querySelectorAll(buttons.toString());
  clickButtons.forEach(function (item) {
    item.click();
  });
}