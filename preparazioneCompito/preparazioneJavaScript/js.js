const images = document.querySelectorAll("img");

window.onload = function() {
    // Vengano nascoste tutte le immagini, eccetto le prime due.
    // Alla prima immagine deve essere inoltre aggiunta la classe "current".

    let len = images.length;
    if (len < 1)
        return;

    images[0].classList.add("current");
    for (let i = 0; i < len; i++) {
        if (i >= 2)
            images[i].style.display = "none";
        images[i].onclick = click;
    }
}

function click() {
    // Al click su un'immagine, si dovrà controllare se l’immagine ha la classe current e nel caso non fare nulla.
    // In caso contrario, invece, bisognerà aggiungere la classe current, rimuovendola da altre immagini.
    // Successivamente, andranno opportunamente nascoste e visualizzate le immagini in modo che siano visibili:
    // l’immagine con classe current, l’eventuale immagine prima e l’eventuale immagine dopo.


}
