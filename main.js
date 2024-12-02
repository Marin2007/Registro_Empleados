// Array para almacenar los empleados
const empleados = [];

// Constructor del objeto Empleado
class Empleado {
  constructor(nombre, apellido, fechaNacimiento, cargo) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento = fechaNacimiento;
    this.cargo = cargo;
  }
}

// Función para agregar un empleado al array
function agregarEmpleado() {
  // Obtener los valores de los inputs
  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const fechaNacimiento = document.getElementById("fechaNacimiento").value;
  const cargo = document.getElementById("cargo").value.trim();

  // Validar que los campos no estén vacíos
  if (!nombre || !apellido || !fechaNacimiento || !cargo) {
    alert("Por favor, complete todos los campos.");
    return;
  }

  // Crear una nueva instancia del empleado y agregarlo al array
  const nuevoEmpleado = new Empleado(nombre, apellido, fechaNacimiento, cargo);
  empleados.push(nuevoEmpleado);

  // Limpiar los campos del formulario
  document.getElementById("employeeForm").reset();

  // Confirmación
  alert("Empleado agregado exitosamente.");
}

// Función para listar los empleados
function listarEmpleados() {
  if (empleados.length === 0) {
    alert("No hay empleados registrados.");
    return;
  }

  let lista = "Lista de empleados:\n\n";

  // Recorrer cada empleado usando un ciclo For In
  empleados.forEach((empleado, index) => {
    lista += `Empleado ${index + 1}:\n`;
    for (let propiedad in empleado) {
      lista += `${propiedad.charAt(0).toUpperCase() + propiedad.slice(1)}: ${empleado[propiedad]}\n`;
    }
    lista += "\n";
  });

  // Mostrar la lista en un alert
  alert(lista);
}
