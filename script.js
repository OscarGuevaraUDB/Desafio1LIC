const date = new Date();
const month = date.toLocaleString('default', { month: 'long' }); // Get full month name
const year = date.getFullYear();
document.getElementById("fechaActual").innerHTML = `${month} ${year}`.toUpperCase();
const listaIngresos = [];
const listaEgresos = [];
const lista = document.getElementById("lista");
const formulario = document.getElementById("transaccion");

formulario.addEventListener('submit', agregarTransaccion)
function desplegarLista() {
    lista.innerHTML = "";
    listaIngresos.forEach((ingreso) => {
        const li = document.createElement("li");
        li.innerHTML = `
        <div class="descripcion">
            <h4>${ingreso.descripcion}</h4>
        </div>
        <div class="monto">
            <p>${"$".concat(ingreso.monto.toFixed(2))}</p>
        </div>
        `;
        lista.appendChild(li);
    })
}
desplegarLista();


function agregarTransaccion(e) {
    e.preventDefault();
    const infoFormulario = new FormData(this)
    console.log(infoFormulario.get("tipoTransaccion"));
    if (infoFormulario.get("tipoTransaccion") === "option1") {
        listaIngresos.push(
            {
                "descripcion": infoFormulario.get("descripcionInput"),
                "monto": parseFloat(infoFormulario.get("monto"))
            }
        )
    } else {
        listaEgresos.push(
            {
                "descripcion": infoFormulario.get("descripcionInput"),
                "monto": parseFloat(infoFormulario.get("monto"))
            }
        )
    };
    this.reset();
    desplegarLista();
}