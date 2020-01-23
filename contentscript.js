'use strict';

const button = document.createElement("button");

button.innerText = "Launch a tab with token"
button.style = "top:0;right:0;position:absolute;background-color:#333;color:#eee;width:100%;z-index:99999;"

button.onclick = function() {
	chrome.storage.local.get(['launchurl'], function(a) {
	    chrome.storage.local.get(['tokenlocation'], function(b) {
	    	let storageType = b.tokenlocation;
	    	let currentUser = JSON.parse(window[storageType].currentUser);
	    	let session = currentUser.SessionId;
	    	let token = currentUser.Token;

	    	chrome.storage.local.get(['customkey'], function(c) {
	    		chrome.storage.local.get(['customvalue'], function(d) {
					window.open(a.launchurl + '?sessionId=' + session + '&token=' + token + '&' + c.customkey + '=' + d.customvalue);
				});
		    });
	    });
    });
}

document.body.appendChild(button);
