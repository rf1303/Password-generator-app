document.addEventListener('DOMContentLoaded', function () {
    
    const generatorBar = document.querySelector('.generator__bar');
    const inputRange = document.querySelector('.bar__range');

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
        console.log("inputRange: ", value);
        document.body.style.setProperty('--track-position', `${value}%`);
        /* colorRange(inputRange); */
    });
    
    // function colorTrack() {
    //     const range = +inputRange.value;
    //     console.log('colorTrack : ', range)
    //     /* const trackPos = (range / 100) * generatorBarWidth; */
    //
    //     /* inputRange.style.background = `linear-gradient(90deg, #a4ffaf ${trackpos}px, transparent 0)`; */
    //      
    // }

});
