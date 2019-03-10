function getExchangeDataPln() {
   let exchangeRateSpanPln = document.getElementById('pln-rate');
   let previousPricePln = parseFloat(exchangeRateSpanPln.innerText);
   let rateArrowPln = document.getElementById('pln-arrow');
   fetch('https://blockchain.info/pl/ticker')
   .then(response => response.json())
   .then(response => {
      let lastPricePln = response.PLN.last;
      
      if(lastPricePln < previousPricePln && previousPricePln !== 0){
         rateArrowPln.className = 'fas fa-arrow-down';
      }else if (lastPricePln > previousPricePln && previousPricePln !== 0){
        rateArrowPln.className = 'fas fa-arrow-up';
      }else {
         rateArrowPln.className = 'fas fa-minus';
      }
      exchangeRateSpanPln.innerText = lastPricePln;
      
   });
}
getExchangeDataPln();

setInterval(getExchangeDataPln, 5000);

function getExchangeDataUsd() {
   let exchangeRateSpanUsd = document.getElementById('usd-rate');
   let previousPriceUsd = parseFloat(exchangeRateSpanUsd.innerText);
   let rateArrowUsd = document.getElementById('usd-arrow');
   fetch('https://blockchain.info/pl/ticker')
   .then(response => response.json())
   .then(response => {
      let lastPriceUsd = response.USD.last;
      
      if(lastPriceUsd < previousPriceUsd && previousPriceUsd !== 0){
         rateArrowUsd.className = 'fas fa-arrow-down';
      }else if (lastPriceUsd > previousPriceUsd && previousPriceUsd !== 0){
        rateArrowUsd.className = 'fas fa-arrow-up';
      }else {
         rateArrowUsd.className = 'fas fa-minus';
      }
      exchangeRateSpanUsd.innerText = lastPriceUsd;
      
   });
}
getExchangeDataUsd();
setInterval(getExchangeDataUsd, 5000);

function getExchangeDataEur() {
   let exchangeRateSpanEur = document.getElementById('eur-rate');
   let previousPriceEur = parseFloat(exchangeRateSpanEur.innerText);
   let rateArrowEur = document.getElementById('eur-arrow');
   fetch('https://blockchain.info/pl/ticker')
   .then(response => response.json())
   .then(response => {
      let lastPriceEur = response.EUR.last;
      
      if(lastPriceEur < previousPriceEur && previousPriceEur !== 0){
         rateArrowEur.className = 'fas fa-arrow-down';
      }else if (lastPriceEur > previousPriceEur && previousPriceEur !== 0){
        rateArrowEur.className = 'fas fa-arrow-up';
      }else {
         rateArrowEur.className = 'fas fa-minus';
      }
      exchangeRateSpanEur.innerText = lastPriceEur;
      
   });
}
getExchangeDataEur();
setInterval(getExchangeDataEur, 5000);