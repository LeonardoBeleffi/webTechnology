const datiTabella = [{
    "Autore": "Gino Pino",
    "Email": "ginopino@blogtw.com",
    "Argomenti": "HTML, CSS, JS"
},
{
    "Autore": "Cippa Lippa",
    "Email": "cippalippa@blogtw.com",
    "Argomenti": "PHP"
}]

function stringaToID(stringa) {
    return stringa.toLowerCase().replace(/[^a-zA-Z]/g, "");
}

const section = document.querySelector("section")

function displayTable() {
    let table =
        `<table>
            <tr>
                <th id="autore">Autore</th><th id="email">Email</th><th id="argomenti">Argomenti</th>
            </tr>`;
    for (let i = 0; i < datiTabella.length; i++) {
        let autore = datiTabella[i]["Autore"];
        let email = datiTabella[i]["Email"];
        let argomenti = datiTabella[i]["Argomenti"];
        let id = email.split("@")[0];

        table += `
                <tr>
                    <th id="${id}">${autore}</th><td headers="email ${id}">${email}</td><td headers="argomenti ${id}">${argomenti}</td>
                </tr>
                `;
    }
    table += `</table>`;
    section.innerHTML += table;
}

function displayAccessibleTable() {
    let table =
        `<table>
            <tr>
                <th id="autore">Autore</th><th id="email">Email</th><th id="argomenti">Argomenti</th>
            </tr>`;
    for (let i = 0; i < datiTabella.length; i++) {
        let autore = datiTabella[i]["Autore"];
        let email = datiTabella[i]["Email"];
        let argomenti = datiTabella[i]["Argomenti"];
        let id = email.split("@")[0];

        table += `
                <tr>
                    <th id="${id}">${autore}</th><td headers="email ${id}">${email}</td><td headers="argomenti ${id}">${argomenti}</td>
                </tr>
                `;
    }
    table += `</table>`;
    section.innerHTML += table;
}

function displayFullFledgedTable() {
    let tableFields = Object.keys(datiTabella[0]);
    let table =
        `<table>
            <tr>`;
    tableFields.forEach(k => table += `<th id="${k.toLowerCase()}">${k}</th>`);
    table += `</tr>`;

    console.log(table);
    for (let i = 0; i < datiTabella.length; i++) {
        let data = datiTabella[i];
        let fields = {}; 

        Object.keys(data).forEach(k => fields[k] = data[k]);
        
        if (!("Email" in fields))  return;

        let id = fields["Email"].split("@")[0];

        table += `
                <tr>
                    <th id="${id}">${autore}</th><td headers="email ${id}">${email}</td><td headers="argomenti ${id}">${argomenti}</td>
                </tr>
                `;
    }
    table += `</table>`;
    section.innerHTML += table;
}

displayTable();
displayAccessibleTable();
displayFullFledgedTable();