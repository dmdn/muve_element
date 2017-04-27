var click = false;

document.getElementById('element').addEventListener('click', function() {
    if (click == false) {
        click = true;
        this.style.opacity='1';
        this.style.cursor='pointer';
    } else {
        click = false;
        this.style.removeProperty('opacity');
        this.style.removeProperty('cursor');
    }
})

document.addEventListener('click', function() {
    if (click == true) {
        var x = event.pageX;
        var y = event.pageY;
        console.log('x='+x+' : '+'y='+y);       
        document.getElementById('element').style.left = x +'px';
        document.getElementById('element').style.top = y +'px';
    }
})