const risultato = document.querySelector("div");

document.querySelector("input").addEventListener("click", function () {
    risultato.innerHTML =
        risultato.innerHTML.toUpperCase();
});

document.querySelectorAll("input")[1].addEventListener("click", function () {
    risultato.innerHTML =
        risultato.innerHTML.toLowerCase();
});

document.querySelectorAll("input")[2].addEventListener("click", function () {
    /*
            -- This "doesn't work" on the first click --
    */
    risultato.innerHTML = 
        risultato.innerHTML.substring(5) +
        risultato.innerHTML.substring(0, 5);

    /*
            -- This deletes trailing spaces --
    risultato.innerText = 
        risultato.innerText.substring(5) +
        risultato.innerText.substring(0, 5);
    */
});