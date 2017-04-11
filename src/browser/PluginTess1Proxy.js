/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function echo(success, error, opts) {
    var toast = undefined,
        toastId = undefined;

    if (opts && typeof(opts[0]) === 'string' && opts[0].length > 0) {
        toastId = 'toast' + Date.now();
        toast = document.createElement('div');
        toast.appendChild(document.createTextNode(opts[0]));
        toast.id = toastId;
        toast.style.width = '30%';
        toast.style.borderStyle = 'solid';
        toast.style.borderColor = '#777777';
        toast.style.borderRadius = '5px';
        toast.style.borderWidth = '2px';
        toast.style.margin = '0 auto';
        toast.style.marginTop = '30px';
        toast.style.backgroundColor = '#999999';
        toast.style.padding = '5px';
        toast.style.fontSize = '1.5em';
        toast.style.fontWeight = 'bold';
        toast.style.textAlign = 'center';
        toast.style.zIndex = 2147483647;

        document.body.appendChild(toast);

        setTimeout(function() {
            document.body.removeChild(document.getElementById(toastId));
        }, 3000);

        success(opts[0]);
    } else {
        error('Empty message!');
    }
}

function hitung(success, error, opts){
    var rslt;
    console.log(typeof(opts[0]));
    //if (opts && typeof(opts[0]) === 'string' && opts[0].length > 0)
    console.log(typeof Tesseract.recognize);

    rslt = opts[0] * 2;
    success(rslt);
}

function recognizeText(success, error, opts){
    var rslt;
    console.log(typeof(opts[0]));
    //if (opts && typeof(opts[0]) === 'string' && opts[0].length > 0)

    rslt = opts[0] * 2;
    success(rslt);
}

module.exports = {
    echo: echo,
    hitung: hitung,
    recognizeText: recognizeText
};

require('cordova/exec/proxy').add('PluginTess1', module.exports);
