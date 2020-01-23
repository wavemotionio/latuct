'use strict';

const button = document.createElement("button");

button.innerText = "Launch a tab with token"
button.style = "margin-top:0%;right:0%;position:absolute;"

button.onclick = function() {
	chrome.storage.local.get(['launchurl'], function(a) {
	    chrome.storage.local.get(['tokenlocation'], function(b) {
	    	let storageType = b.tokenlocation;
	    	let currentUser = window[storageType].currentUser;

	    	chrome.storage.local.get(['customkey'], function(c) {
	    		chrome.storage.local.get(['customvalue'], function(d) {
					window.open(a.launchurl + '?sessionId=' + currentUser.SessionId + '&token=' + currentUser.Token + '&' + c.customkey + '=' + d.customvalue);
				});
		    });
	    });
    });
}

document.body.appendChild(button);
