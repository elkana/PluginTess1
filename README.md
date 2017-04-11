PluginTess1
=============

This cordova plugin use [tesseract.js](http://tesseract.projectnaptha.com/) to scan text

Installation
------------
```
cordova plugin add https://github.com/elkana/PluginTess1
```

Usage
-----

```javascript
            cordova.plugins.PluginTess1.recognizeText(document.getElementById('gambar1'), 	
                'eng',
                function (msg) {                    
                       alert(msg.text);
                },
                function (err) {
                       console.log(err);
                },
		function (progress) {
                    console.log(progress.status + "(" + (progress.progress * 100) + ")");
		});
```
