const cuentas = [];

function crearCuenta() {
  let nombre = prompt("Introduce nombre titular");

  let apellido = prompt("Introducie apellido titular");

  let saldo = prompt("introduce saldo");

  cuentas.push({
    nombre,

    apellido,

    saldo,
  });

  console.log(cuentas);
}

function mostrarCuentas() {
  for (i = 0; i < cuentas.length; i++) {
    document.getElementById("lista").innerHTML +=
      "Nombre " + i + " " + JSON.stringify(cuentas) + " ";
  }
}

const buscarPersona = () => {
  let persona = document.getElementById("ingreseNombre").value;

  const busqueda = cuentas.find((comparacion) => comparacion.nombre == persona);

  document.getElementById("mostrar").innerHTML = JSON.stringify(busqueda);
};
