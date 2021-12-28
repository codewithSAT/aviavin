import React from 'react';

export default function Api() {
  return <Hit />;
}

let Hit = () =>
  request(
    'GET',
    'https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest?CMC_PRO_API_KEY=' +
      apikey.key
  )
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch();

let apikey = {
  key: '2e1d3389-36cd-4069-8cf7-e720e3416755',
};

function request(method, url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = resolve;
    xhr.onerror = reject;
    xhr.send();
  });
}
