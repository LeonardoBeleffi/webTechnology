function Computer(processore, disco, ram) {
    this.processore = processore;
    this.disco = disco;
    this.ram = ram;
}

Computer.prototype.infoComputerConsole = function() {
    console.log("Processore: " + this.processore + "\n" +
                "Disco: " + this.disco + "\n" +
                "Ram: " + this.ram);
}

Computer.prototype.infoComputerDOM = function(id) {
    document.getElementById(id).innerHTML = `
    <p>Processore: ${this.processore}</p>
    <p>Disco: ${this.disco}</p>
    <p>Ram: ${this.ram}</p>
    `;
}

const mioPc = new Computer("i7", "512GB", "64");

mioPc.infoComputerConsole();

mioPc.infoComputerDOM("miopc");
