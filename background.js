'use strict';

chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.local.set({ launchurl: 'https://chrome.com' }, function() {
        console.log('launchurl is set.');
    });

    chrome.storage.local.set({ tokenlocation: 'sessionStorage' }, function() {
        console.log('tokenlocation is set.');
    });

    chrome.storage.local.set({ customkey: 'enrolleeKey' }, function() {
        console.log('customkey is set.');
    });

    chrome.storage.local.set({ customvalue: '123456' }, function() {
        console.log('customvalue is set.');
    });
});
