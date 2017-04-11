
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
