# APIYandex-translator
Yandex.Translate API client

Please use [API key request](https://tech.yandex.com/keys/get/?service=trnsl) form to obtain key.

## Installation
```
npm install apiyandex-translator
```
# How to use it

Use the function "textTranslate" to translate text.

```javascript
    var str = "Hello world!";
        key = "Your api key";
        lang = "ru"; // or "en-ru"
        
    textTranslate(str, lang, key, function(res, err) {
      console.log(res); //Всем привет!
    });

```
Use the function "identifyLanguage" to determine the language of the text.

```javascript
    var str = "Hello world!";
        key = "Your api key";
        
    identifyLanguage(str, key, function(res, err) {
       console.log(res); //en
    });
```
