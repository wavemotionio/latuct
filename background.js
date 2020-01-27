'use strict';

chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.local.set({ launchurl: 'http://winhplnstst133:8062/HP-UI/refs/pull/27997/merge/#/' }, function() {
        console.log('launchurl is set.');
    });

    chrome.storage.local.set({ tokenlocation: 'sessionStorage' }, function() {
        console.log('tokenlocation is set.');
    });

    chrome.storage.local.set({ tokenkey: 'currentUser' }, function() {
        console.log('tokenkey is set.');
    });

    chrome.storage.local.set({ tokendeepvalue: 'Token' }, function() {
        console.log('tokendeepvalue is set to blank.');
    });

    chrome.storage.local.set({ tokenQuerystringParam: 'token' }, function() {
        console.log('tokenQuerystringParam is set.');
    });
});
