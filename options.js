'use strict';

function initOptions() {
    let savebtn = document.getElementById('savesettings');
    let launchurl = document.getElementById('launch-url');
    let tokenlocation = document.getElementById('token-location');
    let tokenkey = document.getElementById('token-key');
    let tokenQuerystringParam = document.getElementById('token-querystring-param');

    chrome.storage.local.get(['launchurl'], function(val) {
        launchurl.setAttribute('value', val.launchurl);
    });

    chrome.storage.local.get(['tokenlocation'], function(val) {
        tokenlocation.value = val.tokenlocation;
    });

    chrome.storage.local.get(['tokenkey'], function(val) {
        tokenkey.setAttribute('value', val.tokenkey);
    });

    chrome.storage.local.get(['tokenQuerystringParam'], function(val) {
        tokenQuerystringParam.setAttribute('value', val.tokenQuerystringParam);
    });

    savebtn.addEventListener('click', function() {
        chrome.storage.local.set({launchurl: launchurl.value}, function() {
            console.log('launchurl is saved by click.');
        });

        chrome.storage.local.set({tokenlocation: tokenlocation.value}, function() {
            console.log('tokenlocation is saved by click.');
        });

        chrome.storage.local.set({tokenkey: tokenkey.value}, function() {
            console.log('tokenkey is saved by click.');
        });

        chrome.storage.local.set({tokenQuerystringParam: tokenQuerystringParam.value}, function() {
            console.log('tokenQuerystringParam is saved by click.');
        });
    });
}

initOptions();
