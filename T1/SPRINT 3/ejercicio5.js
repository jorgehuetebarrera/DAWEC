function ordenarTabla(columna) {
    var tabla = document.getElementById("tablaPersonas");
    var filas = tabla.getElementsByTagName("tbody")[0].getElementsByTagName("tr");

    var filasArray = Array.from(filas);

    var ordenAscendente = tabla.getAttribute("data-orden") === "ascendente";

    tabla.setAttribute("data-orden", ordenAscendente ? "descendente" : "ascendente");

    filasArray.sort(function(a, b) {
        var valorA = a.querySelector("td[data-column='" + columna + "']").textContent;
        var valorB = b.querySelector("td[data-column='" + columna + "']").textContent;

        if (columna === "Fecha de nacimiento") {
            // Convertir las fechas al formato "YYYY/MM/DD" para la comparación
            valorA = valorA.split("/").reverse().join("/");
            valorB = valorB.split("/").reverse().join("/");
        }

        if (ordenAscendente) {
            return valorA.localeCompare(valorB);
        } else {
            return valorB.localeCompare(valorA);
        }
    });

    var tbody = tabla.getElementsByTagName("tbody")[0];
    filasArray.forEach(function(fila) {
        tbody.appendChild(fila);
    });
}
// Datos de la tabla
var tabla = [
    {
        Nombre: "Ana",
        Edad: 25,
        DNI: "45678912B",
        "Tiene/No tiene hijos": "Tiene",
        "Fecha de nacimiento": "12/05/1998"
    },
    {
        Nombre: "Carlos",
        Edad: 30,
        DNI: "12345678A",
        "Tiene/No tiene hijos": "No tiene",
        "Fecha de nacimiento": "05/02/1993"
    },
    {
        Nombre: "Berta",
        Edad: 28,
        DNI: "98765432C",
        "Tiene/No tiene hijos": "Tiene",
        "Fecha de nacimiento": "20/03/1995"
    },
    {
        Nombre: "David",
        Edad: 31,
        DNI: "11223344D",
        "Tiene/No tiene hijos": "Tiene",
        "Fecha de nacimiento": "18/08/1992"
    },
    {
        Nombre: "Elena",
        Edad: 22,
        DNI: "56789012E",
        "Tiene/No tiene hijos": "No tiene",
        "Fecha de nacimiento": "30/11/2001"
    },
    {
        Nombre: "Fernando",
        Edad: 35,
        DNI: "23456789F",
        "Tiene/No tiene hijos": "Tiene",
        "Fecha de nacimiento": "15/07/1988"
    },
    {
        Nombre: "Gloria",
        Edad: 40,
        DNI: "87654321G",
        "Tiene/No tiene hijos": "No tiene",
        "Fecha de nacimiento": "03/04/1983"
    },
    {
        Nombre: "Hector",
        Edad: 27,
        DNI: "34567890H",
        "Tiene/No tiene hijos": "Tiene",
        "Fecha de nacimiento": "24/09/1996"
    },
    {
        Nombre: "Isabel",
        Edad: 29,
        DNI: "65432109I",
        "Tiene/No tiene hijos": "Tiene",
        "Fecha de nacimiento": "14/06/1994"
    },
    {
        Nombre: "Juan",
        Edad: 33,
        DNI: "12345678J",
        "Tiene/No tiene hijos": "No tiene",
        "Fecha de nacimiento": "08/02/1989"
    },
    {
        Nombre: "Laura",
        Edad: 26,
        DNI: "23456789K",
        "Tiene/No tiene hijos": "Tiene",
        "Fecha de nacimiento": "02/12/1996"
    },
    {
        Nombre: "Manuel",
        Edad: 41,
        DNI: "98765432L",
        "Tiene/No tiene hijos": "Tiene",
        "Fecha de nacimiento": "22/10/1981"
    },
    {
        Nombre: "Natalia",
        Edad: 24,
        DNI: "54321098M",
        "Tiene/No tiene hijos": "No tiene",
        "Fecha de nacimiento": "17/03/1999"
    },
    {
        Nombre: "Óscar",
        Edad: 32,
        DNI: "87654321N",
        "Tiene/No tiene hijos": "Tiene",
        "Fecha de nacimiento": "11/01/1991"
    },
    {
        Nombre: "Patricia",
        Edad: 36,
        DNI: "23456789O",
        "Tiene/No tiene hijos": "Tiene",
        "Fecha de nacimiento": "25/06/1987"
    },
    {
        Nombre: "Quim",
        Edad: 23,
        DNI: "65432109P",
        "Tiene/No tiene hijos": "No tiene",
        "Fecha de nacimiento": "09/04/2000"
    }
];

var tbody = document.querySelector("tbody");
for (var i = 0; i < tabla.length; i++) {
    var fila = document.createElement("tr");
    for (var clave in tabla[i]) {
        var celda = document.createElement("td");
        celda.setAttribute("data-column", clave);
        celda.textContent = tabla[i][clave];
        fila.appendChild(celda);
    }
    tbody.appendChild(fila);
}