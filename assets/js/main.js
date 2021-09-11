import {form, montoPrestamo, tasaAnual, plazoPago, thead, tbody, btnSubmit} from "./modules/dom.js";

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const monto = montoPrestamo.valueAsNumber;
    const tasa = tasaAnual.valueAsNumber;
    const plaza = plazoPago.valueAsNumber;

    import("./modules/class.js").then(({Prestamo, UserInterface})=>{
        
        const prestamo = new Prestamo(monto, tasa, plaza);
        const ui = new UserInterface(thead, tbody, prestamo, btnSubmit);
        
        ui.createThead();
        ui.createTbody();
        ui.btnLimpiar();

    }).catch(e=>console.error(`Error: ${e.message}`));

    form.reset();
});