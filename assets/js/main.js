document.addEventListener('DOMContentLoaded', function () {
  
    const inputRange = document.querySelector('.bar__range');

    inputRange.addEventListener('input', () => {
        console.log("range");
        const value = inputRange.value;
        document.body.style.setProperty('--track-position', `${value}%`);
        /* colorRange(inputRange); */
    });

    // function colorRange(slider) {
    //   const value = (slider.value - slider.min) / (slider.max - slider.min) * 100;
    //   slider.style.background = `linear-gradient(to right, #a4ffaf ${value}%, #2a2a2a ${value}%)`;
    // }

     /* colorRange(inputRange); */
    
});
