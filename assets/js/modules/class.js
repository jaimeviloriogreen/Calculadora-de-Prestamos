class Prestamo{
    constructor(monto, tasa, plazo){
        this.monto = monto;
        this.tasa = tasa;
        this.plazo = plazo;
    }
}


class UserInterface{
    validateBtn = false;

    constructor(thead, tbody, prestamo, btnSubmit){
        this.thead = thead;
        this.tbody = tbody;
        this.monto = prestamo.monto;
        this.tasa = prestamo.tasa;
        this.plazo = prestamo.plazo;
        this.btnSubmit = btnSubmit;
    }

    get interesMensual(){
        const i = (this.tasa / 12) / 100;
        return i;
    }
    get cuotasFija(){
        const y = (1+this.interesMensual)**this.plazo;
        const x = (1+this.interesMensual)**this.plazo - 1;
        const c = this.monto * this.interesMensual * (y / x);

        return c;
    }

    createThead(){
        if(this.validateNum){
            if(this.thead.children.length <= 0){
                this.thead.insertAdjacentHTML("beforeend", 
                `<tr>
                    <th>Cuotas</th>
                    <th>Pago Fijo</th>
                    <th>Abono Interés</th>
                    <th>Abono Capital</th>
                    <th>Capital Restante</th>
                </tr>
                `);
            }
        }
    }

    createTbody(){
        if(this.validateNum){
            if(this.tbody.children.length <= 0){
                const cuotas = this.cuotasFija;
    
                for(let i = 1; i <= this.plazo; i++){
                    let abonoInteres = this.monto * this.interesMensual;
                    let abonoCapital = cuotas - abonoInteres;
                    
                    this.monto-=abonoCapital;

                    this.tbody.insertAdjacentHTML("beforeend", 
                    `<tr>
                        <td>${i}</td>
                        <td>${cuotas.toFixed(2)}</td>
                        <td>${abonoInteres.toFixed(2)}</td>
                        <td>${abonoCapital.toFixed(2)}</td>
                        <td>${Math.abs(this.monto).toFixed(2)}</td>
                    </tr>
                    `);
               }
               this.validateBtn = true;
            }
        }
        
    }
    get validateNum(){
        if(!isNaN(this.monto) && !isNaN(this.plazo) && !isNaN(this.plazo)){
            return true;
        };
    }

    btnLimpiar(){
        if(this.validateBtn){
            if(this.btnSubmit.classList.contains("btnCalcular")){
                this.btnSubmit.classList.add("btnLimpiar");
                this.btnSubmit.value = "Limpiar";
            }
        }else{
            this.btnSubmit.classList.remove("btnLimpiar");
            this.btnSubmit.value = "Calcular";

            while(this.thead.lastElementChild){
                this.thead.removeChild(this.thead.lastElementChild);
                
                while(this.tbody.lastElementChild){
                    this.tbody.removeChild(this.tbody.lastElementChild);
                }
            }

        }
    }
}


export{Prestamo, UserInterface}