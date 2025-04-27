document.addEventListener('DOMContentLoaded', function () {
    
    let numberPassword = 10;
    let passwordDates = "";
    let passwordGenerator = "";
    let includePasswords = {}
    const generatorTitle = document.querySelector('.generator__title')
    const generatorInclude = document.querySelector('.generator__include'); 
    const generatorButton = document.querySelector('.button__generate');
    const inputRange = document.querySelector('.bar__range');
    const lengthNumber = document.querySelector('.length__number');
    const includeGenerator = {
        includeUpper: "AOEUIDRTNSZVWMBXKJQPYFGGCHL",
        includeLower: "qjkxbmwvzaoeuidrtnslhcgfyp",
        includeNumber: "1234567890",
        includeSymbol: "!#$%&/()=?¡¿+*}{][.:,;-_<>"
    };
    const includeregex = {
                          uppers: /[A-Z]/,
                          lowers: /[a-z]/,
                          numbers: /[0-9]/,
                          symbols: /[|°!#$%&/()=?¡*+}{[]-_<>,;.:¿]/
                         };


    inputRange.addEventListener('input', () => {
        numberPassword = inputRange.value;
        const trackValue = (numberPassword / 20) * 100;
        inputRange.style.setProperty('--track-position', `${trackValue}%`);
        lengthNumber.textContent = `${numberPassword}`;
        console.log('nro passwd: ', numberPassword);
    });

    generatorInclude.addEventListener('change', (e) => {
        console.log('generatorInclude: ', e.target.type);
        includePasswords = {  
            includeUpper: document.getElementById('upper').checked,
            includeLower: document.getElementById('lower').checked,
            includeNumber:  document.getElementById('incNum').checked,
            includeSymbol:  document.getElementById('incSym').checked,
        }
            console.log( includePasswords.includeUpper, includePasswords.includeLower, includePasswords.includeNumber, includePasswords.includeSymbol);
        console.log(passwordGenerator);
    });

    generatorButton.addEventListener('click', () => {
        console.log('click: ', numberPassword, includePasswords)
        const includeButton = Object.values(includePasswords).some(value => value); 
        console.log(includeButton);
        if (numberPassword !== 0 && includeButton ) {
           includeFilter(numberPassword, includePasswords); 
        } 
    });


    function includeFilter(number, includes) {
        passwordGenerator = "";
        //obtiene los indices de includePasswords los filtra y +includeGenerator
       passwordDates = Object.keys(includes) 
                    .filter(include => includes[include])
                    .map(include => includeGenerator[include])
                    .join('')
        console.log('passwordDates: ',passwordDates);
        for (let i = 0; i < number; i++) {
            const randomPasswd = Math.floor(Math.random() * passwordDates.length);
            passwordGenerator += passwordDates[randomPasswd]; 
        }
        console.log('includeFilter: ', passwordGenerator);
        generatorTitle.textContent = `${passwordGenerator}`;
        const passwordStrength = zxcvbn(passwordGenerator);
        console.log(passwordStrength.score);
        return passwordGenerator;
    }

});
