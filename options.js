'use strict';

function initOptions() {
    let savebtn = document.getElementById('savesettings');
    let launchurl = document.getElementById('launch-url');
    let tokenlocation = document.getElementById('token-location');
    let customkey = document.getElementById('custom-key');
    let customvalue = document.getElementById('custom-value');

    chrome.storage.local.get(['launchurl'], function(val) {
        launchurl.setAttribute('value', val.launchurl);
    });

    chrome.storage.local.get(['tokenlocation'], function(val) {
        tokenlocation.value = val.tokenlocation;
    });

    chrome.storage.local.get(['customkey'], function(val) {
        customkey.setAttribute('value', val.customkey);
    });

    chrome.storage.local.get(['customvalue'], function(val) {
        customvalue.setAttribute('value', val.customvalue);
    });

    savebtn.addEventListener('click', function() {
        chrome.storage.local.set({launchurl: launchurl.value}, function() {
            console.log('launchurl is saved by click.');
        });

        chrome.storage.local.set({tokenlocation: tokenlocation.value}, function() {
            console.log('tokenlocation is saved by click.');
        });

        chrome.storage.local.set({customkey: customkey.value}, function() {
            console.log('customkey is saved by click.');
        });

        chrome.storage.local.set({customvalue: customvalue.value}, function() {
            console.log('customvalue is saved by click.');
        });
    });
}

initOptions();
