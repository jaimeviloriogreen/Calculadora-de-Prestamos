const form = document.mainForm;
const montoPrestamo = form.montoPrestamo;
const tasaAnual = form.tasaAnual;
const plazoPago = form.plazoPago;
const btnSubmit = form.btnSubmit;
// Table
const table = document.querySelector("#mainTable");
// Table Head
const thead = document.createElement("thead");
thead.classList.add("tableHead");
// Table Body
const tbody = document.createElement("tbody");
tbody.classList.add("tableBody");

table.prepend(thead);
table.append(tbody);

export{form, montoPrestamo, tasaAnual, plazoPago, thead, tbody, btnSubmit}
