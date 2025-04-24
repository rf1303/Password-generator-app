document.addEventListener('DOMContentLoaded', function () {
  
    const inputRange = document.querySelector('.bar__range');

    inputRange.addEventListener('input', (e) => {
        console.log("range");
        const value = `${e.target.value}%`;
        document.body.style.setProperty('--colorRange', value);
        /* colorRange(inputRange); */
    });

    function colorRange(slider) {
      const value = (slider.value - slider.min) / (slider.max - slider.min) * 100;
      slider.style.background = `linear-gradient(to right, #a4ffaf ${value}%, #2a2a2a ${value}%)`;
    }

     colorRange(inputRange);
    
});
