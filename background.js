'use strict';

chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.local.set({ launchurl: 'https://chrome.com' }, function() {
        console.log('launchurl is set.');
    });

    chrome.storage.local.set({ tokenlocation: 'sessionStorage' }, function() {
        console.log('tokenlocation is set.');
    });

    chrome.storage.local.set({ tokenkey: 'se:fkey' }, function() {
        console.log('tokenkey is set.');
    });

    chrome.storage.local.set({ tokendeepvalue: '' }, function() {
        console.log('tokendeepvalue is set to blank.');
    });

    chrome.storage.local.set({ tokenQuerystringParam: 'token' }, function() {
        console.log('tokenQuerystringParam is set.');
    });
});
