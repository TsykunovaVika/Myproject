function outputUpdate(vol) {
    var output = document.querySelector('#volume');
    output.value = vol;
    output.style.left = vol - 5 + 'px';
    if(output.value > 59) {
        output.style.left = vol - 15 + 'px';
    }
    if(output.value > 149) {
        output.style.left = vol - 25 + 'px';
    }
    if(output.value > 299) {
        output.style.left = vol - 30 + 'px';
    }
    if(output.value > 389) {
        output.style.left = vol - 35 + 'px';
    }

}

