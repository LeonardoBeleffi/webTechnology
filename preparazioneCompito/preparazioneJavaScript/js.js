const images = Array.from(document.querySelectorAll("img"));

window.onload = function() {
    let len = images.length;
    if (len < 1)
        return;

    images[0].classList.add("current");
    images.forEach(img => {
        let i = images.indexOf(img);
        if (i >= 2)
            img.style.display = "none";
        img.onclick = click;
    });
}

function click(e) {
    let img = e.target;
    let indexOfCurrentImage = images.indexOf(img);

    if (img.classList.contains("current"))
        return;
    
    images.forEach(i => {
        if (i.classList.contains("current"))
            i.classList.remove("current");

        i.style.display = (1 >= Math.abs(images.indexOf(i) - indexOfCurrentImage) ? "inline" : "none");
    });
    img.classList.add("current");
}
