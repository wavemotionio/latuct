'use strict';

function deepFind(obj, path) {
  var paths = path.split('.')
    , current = obj
    , i;

  for (i = 0; i < paths.length; ++i) {
    if (current[paths[i]] == undefined) {
      return undefined;
    } else {
      current = current[paths[i]];
    }
  }
  return current;
}

const button = document.createElement("button");

button.innerText = "Launch a tab with token"
button.style = "top:0;right:0;position:absolute;background-color:#333;color:#eee;width:100%;z-index:99999;"

button.onclick = function() {
	chrome.storage.local.get(['launchurl'], function(a) {
	    chrome.storage.local.get(['tokenQuerystringParam'], function(b) {
	    	chrome.storage.local.get(['tokenlocation'], function(c) {
	    		chrome.storage.local.get(['tokenkey'], function(d) {
	    			chrome.storage.local.get(['tokendeepvalue'], function(e) {

                        const storedToken = JSON.parse(window[c.tokenlocation][d.tokenkey]);

                        if (storedToken) {

		    				if (e.tokendeepvalue.length > 0) {

                                let tokenValue = deepFind(storedToken, e.tokendeepvalue);

		    					if (tokenValue) {
                                    let redirectLocation = a.launchurl + '?' + b.tokenQuerystringParam + '=' + tokenValue;

		    						window.open(redirectLocation);
		    					} else {
		    						console.log('ERROR: ' + c.tokenlocation + '/' + d.tokenkey + '.' + e.tokendeepvalue + ' not found.');
		    					}

		    				} else {
								window.open(a.launchurl + '?' + b.tokenQuerystringParam + '=' + storedToken);
							}

						} else {
							console.log('ERROR: ' + c.tokenlocation + '/' + d.tokenkey + ' not found.');
						}
					});
				});
		    });
	    });
    });
}

document.body.appendChild(button);
