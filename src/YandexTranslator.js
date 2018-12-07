  export function textTranslate(text, lang,  apiKey, r_handler){
    var text = encodeURIComponent(text);
    var type = "application/x-www-form-urlencoded";
    
    var url = "https://translate.yandex.net/api/v1.5/tr.json/translate?" 
            + "key=" + apiKey
            + "&text=" + text
            + "&lang=" + lang;

    var myInit = { method: 'POST',
                   body: text,
                   headers: {"Content-Type": type}};

    fetch(url, myInit)
    .then(function(response) {
      response.text().then(function(text) {
        var data = JSON.parse(text);
        //console.log(data.text[0]);
        r_handler(data.text[0]);
      });
    });
  }

 export function identifyLanguage (text, apiKey, r_handler){
    var text = encodeURIComponent(text);
    var type = "application/x-www-form-urlencoded";
    
    var url = "https://translate.yandex.net/api/v1.5/tr.json/detect?" 
            + "key=" + apiKey
            + "&text=" + text;

    var myInit = { method: 'POST',
                   body: text,
                   headers: {"Content-Type": type}};

    fetch(url, myInit)
    .then(function(response) {
      response.text().then(function(text) {
      var data = JSON.parse(text);
      r_handler(data.lang);
      });
    });
  }

 export function getLanguages(id, ui, apiKey, r_handler){
    var type = "application/x-www-form-urlencoded";
    
    var url = "https://translate.yandex.net/api/v1.5/tr.json/getLangs?" 
            + "key=" + apiKey;

    var myInit = { method: 'POST',
                 headers: {"Content-Type": type}};

    fetch(url, myInit)
    .then(function(response) {
      response.text().then(function(text) {
      var data = JSON.parse(text);
      r_handler(data.dirs);
      });
    });
  }



