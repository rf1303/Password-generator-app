document.addEventListener('DOMContentLoaded', function () {
    
    let numberPassword = 10;
    let passwordDates = "";
    let passwordGenerator = "";
    let includePasswords = {}
    const buttonCopied = document.querySelector('.copy__clip');
    const buttonCopiedTitle = document.querySelector('.copied__title');
    const generatorTitle = document.querySelector('.generator__title')
    const generatorInclude = document.querySelector('.generator__include'); 
    const generatorButton = document.querySelector('.button__generate');
    const inputRange = document.querySelector('.bar__range');
    const lengthNumber = document.querySelector('.length__number');
    const barsTitle = document.querySelector('.bars__title');
    const strengthBarItem = document.querySelectorAll(".bars__item");
    const barsItem01 = document.querySelector('.bars__item--1');
    const barsItem02 = document.querySelector('.bars__item--2');
    const barsItem03 = document.querySelector('.bars__item--3');
    const barsItem04 = document.querySelector('.bars__item--4');
    const includeGenerator = {
        includeUpper: "AOEUIDRTNSZVWMBXKJQPYFGGCHL",
        includeLower: "qjkxbmwvzaoeuidrtnslhcgfyp",
        includeNumber: "1234567890",
        includeSymbol: "!#$%&/()=?¡¿+*}{][.:,;-_<>"
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
    });

    generatorButton.addEventListener('click', () => {
        console.log('click: ', numberPassword, includePasswords)
        const includeButton = Object.values(includePasswords).some(value => value); 
        console.log(includeButton);
        if (numberPassword !== 0 && includeButton ) {
           includeFilter(numberPassword, includePasswords); 
        } 
    });
    
     buttonCopied.addEventListener("click", async () => {
           /* const copiedText = document.getElementById("textToCopy").value; */
        await navigator.clipboard.writeText(passwordGenerator);
        buttonCopiedTitle.classList.add('copied__title--click');
        buttonCopiedTitle.addEventListener('animationend', () => {
        buttonCopiedTitle.classList.remove('copied__title--click');
        }, { once: true });
        console.log('clipboard: ', passwordGenerator);
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
        strengthBar(passwordStrength.score);
        return passwordGenerator;
    }

    function strengthBar(strength) {
        console.log('strengthBar: ', strength);
        strengthRemoveBars();
        switch (strength) {
            case 0: 
                barsTitle.textContent = `too weak`;
                barsTitle.classList.add('bars__title--active');
                strengthAddBars(1, 'bars__item--tooweek');
                // barsItem01.classList.add('bars__item--tooweek');
                // console.log('case0: ', barsTitle.textContent); 
                break;
            case 1: 
                barsTitle.textContent = `weak`;
                barsTitle.classList.add('bars__title--active');
                strengthAddBars(2, 'bars__item--week');
                // barsItem01.classList.add('bars__item--week');
                // barsItem02.classList.add('bars__item--week');
                // console.log('case0: ', barsTitle.textContent); 
                break;
            case 3: 
                barsTitle.textContent = `medium`;
                barsTitle.classList.add('bars__title--active');
                strengthAddBars(3, 'bars__item--medium');
                // barsItem01.classList.add('bars__item--medium');
                // barsItem02.classList.add('bars__item--medium');
                // barsItem03.classList.add('bars__item--medium');
                // console.log('case0: ', barsTitle.textContent); 
                break;
            case 3: 
                barsTitle.textContent = `strong`;
                barsTitle.classList.add('bars__title--active');
                strengthAddBars(4, 'bars__item--strong');
                // barsItem01.classList.add('bars__item--strong');
                // barsItem02.classList.add('bars__item--strong');
                // barsItem03.classList.add('bars__item--strong');
                // barsItem04.classList.add('bars__item--strong');
                // console.log('case0: ', barsTitle.textContent); 
                break;

            case 4: 
                barsTitle.textContent = `strong`;
                barsTitle.classList.add('bars__title--active');
                strengthAddBars(4, 'bars__item--strong');
                // barsItem01.classList.add('bars__item--strong');
                // barsItem02.classList.add('bars__item--strong');
                // barsItem03.classList.add('bars__item--strong');
                // barsItem04.classList.add('bars__item--strong');
                // console.log('case0: ', barsTitle.textContent); 
                break;
            default:
                break;
        }

        function strengthRemoveBars() {
            barsTitle.classList.remove('bars__title--active');
            strengthBarItem.forEach(items => {
            console.log("items: ", items);
            items.classList.remove('bars__item--tooweek', 'bars__item--week', 'bars__item--medium', 'bars__item--strong')
            }); 
        }

        function strengthAddBars(number, name) {
            for (let i = 0; i < number; i++) {
                strengthBarItem[i].classList.add(name);
                console.log(name);
           } 
        }
    }
});
