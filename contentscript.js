'use strict';

const button = document.createElement("button");

button.innerText = "Launch a tab with token"
button.style = "margin-top:0%;right:0%;position:absolute;"

button.onclick = function() {
	chrome.storage.local.get(['launchurl'], function(a) {
	    chrome.storage.local.get(['tokenQuerystringParam'], function(b) {
	    	chrome.storage.local.get(['tokenlocation'], function(c) {
	    		chrome.storage.local.get(['tokenkey'], function(d) {
					window.open(a.launchurl + '?' + b.tokenQuerystringParam + '=' + window[c.tokenlocation][d.tokenkey]);
				});
		    });
	    });
    });
}

document.body.appendChild(button);
