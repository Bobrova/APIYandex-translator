export function textTranslate(text, lang,  apiKey, r_handler){
  var text = encodeURIComponent(text);
  var type = 'application/x-www-form-urlencoded';
  
  var url = 'https://translate.yandex.net/api/v1.5/tr.json/translate?' 
    + 'key=' + apiKey
    + '&text=' + text
    + '&lang=' + lang;

  var myInit = { 
    method: 'POST',
    body: text,
    headers: {'Content-Type': type}};

  request(url, myInit, 'translate', r_handler);
}

export function detect (text, apiKey, r_handler){
  var text = encodeURIComponent(text);
  var type = 'application/x-www-form-urlencoded';
  
  var url = 'https://translate.yandex.net/api/v1.5/tr.json/detect?' 
    + 'key=' + apiKey
    + '&text=' + text;

  var myInit = { 
    method: 'POST',
    body: text,
    headers: {'Content-Type': type}
  };

  request(url, myInit, 'detect', r_handler);
}

export function getLanguages(id, ui, apiKey, r_handler){
  var type = 'application/x-www-form-urlencoded';
  
  var url = 'https://translate.yandex.net/api/v1.5/tr.json/getLangs?' 
    + 'key=' + apiKey;

  var myInit = { 
    method: 'POST',
    headers: {'Content-Type': type}};

  request(url, myInit, 'getLanguages', r_handler);
}


function request(url, myInit, method, r_handler){
    fetch(url, myInit)
      .then(function(response) {
        response.text().then(function(text) {
          var data = JSON.parse(text);
            switch (method){
              case 'translate':
                r_handler(data.text[0]);
                break;
              case 'detect':
                r_handler(data.lang);
                break;
              case 'getLanguages':
                r_handler(data.dirs);
                break;
            }
          });
      });
  }


