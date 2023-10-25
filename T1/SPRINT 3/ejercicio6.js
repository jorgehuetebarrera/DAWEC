const estudiantes = [
    { nombre: "Juan", ciudad: "Madrid", beca: false, edad: 21, calificaciones: { matematicas: 5, fisica: 7, historia: 6 } },
    { nombre: "Ana", ciudad: "Barcelona", beca: true, edad: 20, calificaciones: { matematicas: 9, fisica: 6, historia: 8 } },
    { nombre: "Pedro", ciudad: "Madrid", beca: false, edad: 23, calificaciones: { matematicas: 4, fisica: 5, historia: 7 } },
    { nombre: "Maria", ciudad: "Sevilla", beca: true, edad: 19, calificaciones: { matematicas: 8, fisica: 7, historia: 9 } },
    { nombre: "Jose", ciudad: "Madrid", beca: false, edad: 22, calificaciones: { matematicas: 6, fisica: 7, historia: 5 } },
    { nombre: "Isabel", ciudad: "Valencia", beca: true, edad: 20, calificaciones: { matematicas: 5, fisica: 8, historia: 7 } },
    { nombre: "David", ciudad: "Bilbao", beca: false, edad: 24, calificaciones: { matematicas: 7, fisica: 6, historia: 8 } },
    { nombre: "Laura", ciudad: "Barcelona", beca: true, edad: 19, calificaciones: { matematicas: 6, fisica: 8, historia: 7 } },
    { nombre: "Miguel", ciudad: "Sevilla", beca: false, edad: 21, calificaciones: { matematicas: 7, fisica: 7, historia: 8 } },
    { nombre: "Sara", ciudad: "Madrid", beca: true, edad: 20, calificaciones: { matematicas: 6, fisica: 5, historia: 9 } },
    { nombre: "Daniela", ciudad: "Valencia", beca: false, edad: 22, calificaciones: { matematicas: 8, fisica: 9, historia: 6 } },
    { nombre: "Alberto", ciudad: "Bilbao", beca: true, edad: 23, calificaciones: { matematicas: 5, fisica: 8, historia: 6 } },
    { nombre: "Gabriel", ciudad: "Sevilla", beca: false, edad: 19, calificaciones: { matematicas: 8, fisica: 5, historia: 7 } },
    { nombre: "Carmen", ciudad: "Barcelona", beca: true, edad: 24, calificaciones: { matematicas: 9, fisica: 9, historia: 9 } },
    { nombre: "Roberto", ciudad: "Madrid", beca: false, edad: 20, calificaciones: { matematicas: 4, fisica: 5, historia: 5 } },
    { nombre: "Carolina", ciudad: "Valencia", beca: true, edad: 22, calificaciones: { matematicas: 5, fisica: 7, historia: 6 } },
    { nombre: "Alejandro", ciudad: "Bilbao", beca: false, edad: 23, calificaciones: { matematicas: 9, fisica: 8, historia: 8 } },
    { nombre: "Lucia", ciudad: "Barcelona", beca: true, edad: 21, calificaciones: { matematicas: 7, fisica: 7, historia: 7 } },
    { nombre: "Ricardo", ciudad: "Sevilla", beca: false, edad: 19, calificaciones: { matematicas: 6, fisica: 5, historia: 6 } },
    { nombre: "Marina", ciudad: "Madrid", beca: true, edad: 20, calificaciones: { matematicas: 5, fisica: 9, historia: 8 } }
];

function estudiantesDestacadosPorAsignatura(asignatura) {
    // Filtrar y ordenar a los estudiantes por las notas de la asignatura
    const estudiantesFiltrados = estudiantes.filter(estudiante => asignatura in estudiante.calificaciones);
    
    estudiantesFiltrados.sort((a, b) => b.calificaciones[asignatura] - a.calificaciones[asignatura]);

    // Tomar los 3 primeros estudiantes con las mejores notas
    const mejoresEstudiantes = estudiantesFiltrados.slice(0, 3);

    // Devolver los resultados
    return mejoresEstudiantes;
}
function mostrarMejoresEstudiantesMatematicas() {
    const asignatura = "matematicas";
    const mejoresEstudiantesMatematicas = estudiantesDestacadosPorAsignatura(asignatura);
    console.log("Mejores estudiantes en Matemáticas:", mejoresEstudiantesMatematicas);
}
function mostrarMejoresEstudiantesFisica() {
    const asignatura = "fisica";
    const mejoresEstudiantesFisica = estudiantesDestacadosPorAsignatura(asignatura);
    console.log("Mejores estudiantes en Física:", mejoresEstudiantesFisica);
}
function mostrarMejorEstudianteHistoria() {
    const asignatura = "historia";
    const mejoresEstudiantesHistoria = estudiantesDestacadosPorAsignatura(asignatura);
    console.log("Mejor estudiante en Historia:", mejoresEstudiantesHistoria[0]);
}
function mostrarMejoresEstudiantesBeca() {
    const estudiantesConBeca = estudiantes.filter(estudiante => estudiante.beca);
    const mejoresEstudiantesBeca = mejoresEstudiantes(estudiantesConBeca);
    console.log("Mejores estudiantes con beca:", mejoresEstudiantesBeca);
}
function mostrarEstudiantesMadridMatematicas() {
    const ciudad = "Madrid";
    const asignatura = "matematicas";
    const estudiantesDestacados = filtrarPorCiudadYAsignatura(ciudad, asignatura);
    console.log("Estudiantes de Madrid destacados en Matemáticas:", estudiantesDestacados);
}
function asignaturaMenorRendimiento() {
    // Crear un objeto para almacenar el promedio de calificaciones por asignatura
    const promediosPorAsignatura = {};

    // Calcular el promedio de calificaciones por asignatura
    for (const estudiante of estudiantes) {
        for (const asignatura in estudiante.calificaciones) {
            if (!promediosPorAsignatura[asignatura]) {
                promediosPorAsignatura[asignatura] = [];
            }
            promediosPorAsignatura[asignatura].push(estudiante.calificaciones[asignatura]);
        }
    }

    // Calcular el promedio de cada asignatura
    for (const asignatura in promediosPorAsignatura) {
        const calificaciones = promediosPorAsignatura[asignatura];
        const promedio = calificaciones.reduce((acc, nota) => acc + nota, 0) / calificaciones.length;
        promediosPorAsignatura[asignatura] = promedio;
    }

    // Encontrar la asignatura con el promedio más bajo
    let asignaturaMinRendimiento = null;
    let minPromedio = Infinity;

    for (const asignatura in promediosPorAsignatura) {
        if (promediosPorAsignatura[asignatura] < minPromedio) {
            minPromedio = promediosPorAsignatura[asignatura];
            asignaturaMinRendimiento = asignatura;
        }
    }

    return asignaturaMinRendimiento;
}

function mejoraNotasBeca() {
    for (const estudiante of estudiantes) {
        if (estudiante.beca) {
            for (const asignatura in estudiante.calificaciones) {
                // Aumentar la calificación en un 10%, sin superar 10
                estudiante.calificaciones[asignatura] = Math.min(10, estudiante.calificaciones[asignatura] * 1.1);
            }
        }
    }
}

function filtrarPorCiudadYAsignatura(ciudad, asignatura) {
    // Filtrar estudiantes por ciudad
    const estudiantesCiudad = estudiantes.filter(estudiante => estudiante.ciudad === ciudad);

    // Filtrar estudiantes que tengan la asignatura y crear un array con sus calificaciones en esa asignatura
    const estudiantesConAsignatura = estudiantesCiudad.filter(estudiante => asignatura in estudiante.calificaciones);

    // Ordenar estudiantes por la nota en la asignatura de forma descendente
    estudiantesConAsignatura.sort((a, b) => b.calificaciones[asignatura] - a.calificaciones[asignatura]);

    // Devolver la lista de estudiantes
    return estudiantesConAsignatura;
}

function estudiantesSinBecaPorCiudad(ciudad) {
    // Filtrar estudiantes por ciudad y sin beca, y contar su número
    const estudiantesCiudadSinBeca = estudiantes.filter(estudiante => estudiante.ciudad === ciudad && !estudiante.beca);
    const cantidadEstudiantesSinBeca = estudiantesCiudadSinBeca.length;
    
    return cantidadEstudiantesSinBeca;
}

function promedioEdadEstudiantesConBeca() {
    // Filtrar estudiantes con beca y calcular el promedio de edad
    const estudiantesConBeca = estudiantes.filter(estudiante => estudiante.beca);
    
    if (estudiantesConBeca.length === 0) {
        return 0; // En caso de que no haya estudiantes con beca, devolver 0.
    }

    const sumaEdades = estudiantesConBeca.reduce((total, estudiante) => total + estudiante.edad, 0);
    const promedio = sumaEdades / estudiantesConBeca.length;
    
    return promedio;
}

function mejoresEstudiantes() {
    // Clonar el array de estudiantes para no modificar el original
    const estudiantesClon = [...estudiantes];

    // Calcular el promedio general para cada estudiante
    estudiantesClon.forEach(estudiante => {
        const calificaciones = Object.values(estudiante.calificaciones);
        const promedioGeneral = calificaciones.reduce((acc, nota) => acc + nota, 0) / calificaciones.length;
        estudiante.promedioGeneral = promedioGeneral;
    });

    // Ordenar estudiantes por promedio general de forma descendente
    estudiantesClon.sort((a, b) => b.promedioGeneral - a.promedioGeneral);

    // Tomar los 2 primeros estudiantes con el mejor promedio general
    const mejoresDosEstudiantes = estudiantesClon.slice(0, 2);

    // Devolver los resultados
    return mejoresDosEstudiantes;
}

function estudiantesAprobados() {
    // Filtrar estudiantes que han aprobado todas las materias (calificación mayor o igual a 5)
    const estudiantesAprobados = estudiantes.filter(estudiante => {
        const calificaciones = Object.values(estudiante.calificaciones);
        return calificaciones.every(nota => nota >= 5);
    });

    // Obtener los nombres de los estudiantes aprobados
    const nombresAprobados = estudiantesAprobados.map(estudiante => estudiante.nombre);

    return nombresAprobados;
}
function mostrarMensajePrompt(asignatura) {
    const mensaje = `Ingresa el valor de filtrado para la asignatura ${asignatura}:`;
    const valorFiltrado = prompt(mensaje);
    if (valorFiltrado !== null) {
        const resultado = estudiantesDestacadosPorAsignatura(asignatura, parseFloat(valorFiltrado));
        console.log(resultado);
    }
}