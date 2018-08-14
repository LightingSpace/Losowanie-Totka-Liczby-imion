// Wazne funkcja w petli for 
// Jezeli wywolujemy funkcje to warto przypisac wartosc zwracana to zmiennej
// bo inaczej LIPA
window.onload = function () {

    var minLottoButton;
    var resultMin;
    
    var maxLottoButton;
    var resultMax;
    
    var multiLottoButton;
    var resultMulti;
    
    var meczButton;
    var resultOneMecz;
    var resultTwoMecz;
    
    var imieMeskieButton;
    var imieZenskieButton;
    var resultImienia;
    
    var losowaLiczbaButton;
    var resultLosowaLiczba;    
    var queNumberTwo = 0;
    
    var rzutKostkiButton;
    var resultRzutKostki;       
    
    var textMin = '';
    var arrayOneHelp = [];
    
    //Lotto spec, maximum number to choose
    var maxNumber = 42;
    // choice of lotto type
    var choice = '';
    
    
    //Mini lotek buttons and result page
    resultMin = document.querySelector(".resultMinLotto");
    minLottoButton = document.querySelector("#generujMinLotto");
    minLottoButton.addEventListener('click', runMinLotto, false);

    //Max lotek buttons and result page
    resultMax = document.querySelector(".resultMaxLotto");
    maxLottoButton = document.querySelector("#generujMaxLotto");
    maxLottoButton.addEventListener('click', runMaxLotto, false);   

    //Multi lotek buttons and result page
    resultMulti = document.querySelector(".resultMultiLotto");
    multiLottoButton = document.querySelector("#generujMultiLotto");
    multiLottoButton.addEventListener('click', runMultiLotto, false);
    
    //Wynik Meczu buttons and result page
    resultOneMecz = document.querySelector("#resultOneMecz");
    resultTwoMecz = document.querySelector("#resultTwoMecz");    
    meczButton = document.querySelector("#generujMecz");
    meczButton.addEventListener('click', runResultMecz, false);
    
    //LOSOWANIE IMION MESKICH I ZENSKICH
    resultImienia = document.querySelector(".resultImienia");
    imieMeskieButton = document.querySelector("#generujImieMeskie");
    imieZenskieButton= document.querySelector("#generujImieZenskie");    
    imieMeskieButton.addEventListener('click', runImieMeskie, false);    
    imieZenskieButton.addEventListener('click', runImieZenskie, false);
    
    //Losowa Liczba
    resultLosowaLiczba = document.querySelector(".resultLosowaLiczba");
    losowaLiczbaButton = document.querySelector("#generujLosowaLiczbe");
    losowaLiczbaButton.addEventListener('click', transitLosowa, false);
    
    //Rzut Kostki
    resultRzutKostki = document.querySelector(".resultLiczbaKostki");
    rzutKostkiButton = document.querySelector("#generujLiczbeKostki");
    rzutKostkiButton.addEventListener('click', rzutKostki, false);    
    
    //Mini lotek function with parameters
    function runMinLotto() {
        maxNumber = 42;
        choice = 1;
        runLotto(maxNumber,choice);
    }
    
    //Duzy lotek function with parameters
     function runMaxLotto() {
        maxNumber = 49;
        choice = 2;
        runLotto(maxNumber,choice);
    }   

    //Duzy lotek function with parameters
     function runMultiLotto() {
        maxNumber = 80;
        choice = 3;
        runLotto(maxNumber,choice);
    }
    
    //Run Mecz starting point
     function runResultMecz() {
        var queNumber = 0;
        
         resultOneMecz.innerHTML = runMecz(0);
         resultTwoMecz.innerHTML = runMecz(0);
        //console.log(runMecz(queNumber));
        
    }
    
    //Main Lotto function for mini lotek, big lotek ..
    function runLotto(maxNumber,choice) {
        var number = '';
        var minArray = [];
        var maxI = '';
        
        
        //if(minArray.length >= 5) { return console.log(minArray);}
       
        
        if(choice == 1) { maxI = 5; }
        if(choice == 2){ maxI = 6; }
        if(choice == 3){ maxI = 20; }
        
        for(var i = 0; i < maxI; i++) {
           number = rundomNumber(minArray,number,maxNumber);
        
            minArray.push(number);
            
                }
                arrayOneHelp = minArray.sort(function(a,b) { return a - b; });
                
                        if(choice == 1 && maxI-1) { resultMin.innerHTML = drawNumbers(arrayOneHelp); }
                        if(choice == 2 && maxI-1){ resultMax.innerHTML = drawNumbers(arrayOneHelp); }
                        if(choice == 3 && maxI-1){ resultMulti.innerHTML = drawNumbers(arrayOneHelp); }
        }
    
    
    // function that generates numbers
    function rundomNumber(minArray,number,maxNumber) {

        number = (Math.random()*100).toFixed(0);
        
        if(minArray.includes(number) || number > maxNumber || number < 1){ return rundomNumber(minArray,number,maxNumber);}
       
        maxNumber = '';
        return number;
    }
    
    //Function that draw numbers in HTML
    function drawNumbers(array) {
        textMin = '';
        for(var j = 0; j < array.length ; j++){
            if(j == 9 || j == 18) {textMin = textMin + "<br>";}
            textMin = textMin + "<span>" + " " + array[j] + " " + "</span>";
        }
        return textMin;
    }
    
    function runMecz(queNumber) {
        number = (Math.random()*100).toFixed(0);
        
        if(number >= 21) { return runMecz(queNumber); }
    
        if( number > 7 && number <= 10 && queNumber < 7 ) { queNumber++; return runMecz(queNumber); }
        if( number > 10 && number < 21 && queNumber < 12) { queNumber++; return runMecz(queNumber);}
       
        return number;
    }
    
    function runImieMeskie() {
        number = (Math.random()*1000).toFixed(0);
        
        if(number > imionaMeskie.length-1) {return runImieMeskie();}
        
        resultImienia.innerHTML = imionaMeskie[number];
        //return imionaMeskie[number];
    }
    
    function runImieZenskie() {
        number = (Math.random()*1000).toFixed(0);
        
        if(number > imionaZenskie.length-1) {return runImieZenskie();}
        
        resultImienia.innerHTML = imionaZenskie[number];
        //return imionaMeskie[number];
    }
    
    function transitLosowa() {
        runLosowaLiczba(0);
    }
    
    function runLosowaLiczba(queNumberTwo) {
        number = (Math.random()*10000).toFixed(0);
        
        if(number > 100 && queNumberTwo < 10) { queNumberTwo++; return runLosowaLiczba(queNumberTwo);}
        if(number > 1000 && queNumberTwo < 35 ) {queNumberTwo++; return runLosowaLiczba(queNumberTwo);}
        
        resultLosowaLiczba.innerHTML = number;
    }
    
    function rzutKostki() {
        number = (Math.random()*10).toFixed(0);
        
        if(number > 6 || number < 1) {return rzutKostki();}
        
        resultRzutKostki.innerHTML = number;
    }
    
}
