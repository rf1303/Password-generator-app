document.addEventListener('DOMContentLoaded', function () {
    
    const generatorBar = document.querySelector('.generator__bar');
    const inputRange = document.querySelector('.bar__range');
    const lengthNumber = document.querySelector('.length__number');
    let generatorBarWidth = generatorBar.offsetWidth;
         

    const trackWidth = new ResizeObserver(entries => {
        for(let entry of entries) {
            generatorBarWidth = entry.contentRect.width;
            console.log(`Ancho de .generator__bar: ${generatorBarWidth}px`);
            /* colorTrack(); */
        }
    });

    trackWidth.observe(generatorBar);
    console.log("el width", trackWidth);

    inputRange.addEventListener('input', () => {
        const value = inputRange.value;
        /* const track = (value - min) / (max - min) * 100; */
        const trackValue = (value / 20) * 100;
        console.log("trackValue: ", trackValue);
        console.log("inputRange: ", value);
        document.body.style.setProperty('--track-position', `${trackValue}%`);
        lengthNumber.textContent = `${value}`;
    });

});
