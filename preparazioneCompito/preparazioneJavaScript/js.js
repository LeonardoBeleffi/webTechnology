const images = Array.from(document.querySelectorAll("img"));

window.onload = function() {
    // Vengano nascoste tutte le immagini, eccetto le prime due.
    // Alla prima immagine deve essere inoltre aggiunta la classe "current".

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
    // Al click su un'immagine, si dovrà controllare se l’immagine ha la classe current e nel caso non fare nulla.
    // In caso contrario, invece, bisognerà aggiungere la classe current, rimuovendola da altre immagini.
    // Successivamente, andranno opportunamente nascoste e visualizzate le immagini in modo che siano visibili:
    // l’immagine con classe current, l’eventuale immagine prima e l’eventuale immagine dopo.

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
