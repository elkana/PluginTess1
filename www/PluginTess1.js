var exec = require('cordova/exec');
var tess = cordova.require('cordova-plugin-tess1.tesseract');

exports.echo = function(arg0, success, error) {
    exec(success, error, "PluginTess1", "echo", [arg0]);
};

exports.hitung = function(arg0, success, error) {
    exec(success, error, "PluginTess1", "hitung", [arg0]);
};

exports.recognizeText = function (image, language, successCallback, errorCallback, progressCallback) {    
//    console.log(typeof tess);
//    console.log(typeof tess.recognize);
//https://github.com/naptha/tesseract.js#simple-example

    tess.recognize(image, {lang: 'eng'})
        .then(successCallback)
        .catch(errorCallback)
        .progress(typeof progressCallback === 'undefined' ? function(){} : progressCallback);

    //exec(successCallback, errorCallback, "PluginTess1", "recognizeText", [language, image]);
};

exports.recognizeTextOffline = function (image, language, successCallback, errorCallback, progressCallback) {    
//    console.log(typeof tess);
//    console.log(typeof tess.recognize);
//https://github.com/naptha/tesseract.js#simple-example

    tess.recognize(image, {lang: 'eng'})
        .then(successCallback)
        .catch(errorCallback)
        .progress(progressCallback);

    //exec(successCallback, errorCallback, "PluginTess1", "recognizeText", [language, image]);
};

exports.loadLanguage = function (language, successCallback, errorCallback) {
    exec(successCallback, errorCallback, "PluginTess1", "loadLanguage", [language]);
};

