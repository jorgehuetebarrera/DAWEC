🔎#### Análisis del Problema

**Ejercicio 1: Cambio de Color con Botón**

- **Objetivo:** Crear una página web que cambie el color de fondo al hacer clic en un botón.
- **Descripción del Problema:** Diseñar una página web que contenga un botón etiquetado "Cambiar color". Al hacer clic en el botón, el color de fondo de la página debe cambiar a un color aleatorio.
- **Requisitos del Problema:**
  - Crear un botón etiquetado "Cambiar color".
  - Al hacer clic en el botón, cambiar el color de fondo de la página a un color aleatorio.

**Ejercicio 2: Calculadora de Área**

- **Objetivo:** Diseñar una página web que calcule el área de un rectángulo.
- **Descripción del Problema:** Crear una página web con dos campos de entrada para el ancho y el alto de un rectángulo. Agregar un botón etiquetado "Calcular Área". Al hacer clic en el botón, calcular el área del rectángulo y mostrar el resultado en un elemento `<p>` en la página.
- **Requisitos del Problema:**
  - Diseñar una página con campos de entrada para el ancho y el alto del rectángulo.
  - Agregar un botón etiquetado "Calcular Área".
  - Calcular el área del rectángulo al hacer clic en el botón y mostrar el resultado en un `<p>`.

**Ejercicio 3: Listado Dinámico**

- **Objetivo:** Desarrollar una página que permita al usuario agregar elementos a una lista.
- **Descripción del Problema:** Crear una página con un campo de entrada y un botón etiquetado "Añadir a la lista". Tener una lista vacía (`<ul>` o `<ol>`). Cuando el usuario escribe algo en el campo de entrada y hace clic en el botón, el contenido del campo se agrega como un nuevo ítem (`<li>`) a la lista.
- **Requisitos del Problema:**
  - Tener un campo de entrada y un botón "Añadir a la lista".
  - Agregar el contenido del campo como un nuevo ítem en una lista al hacer clic en el botón.

**Ejercicio 4: Hover y Estilo Dinámico**

- **Objetivo:** Diseñar una página con elementos div que cambian de estilo al pasar el ratón sobre ellos.
- **Descripción del Problema:** Diseñar una página con varios elementos div, cada uno con un texto diferente. Al pasar el ratón sobre un div, cambiar su color de fondo a azul y el texto a blanco. Al mover el ratón fuera del div, restaurar sus estilos originales.
- **Requisitos del Problema:**
  - Tener elementos div con texto.
  - Cambiar el color de fondo y el texto al pasar el ratón sobre un div y restaurar los estilos originales al mover el ratón fuera.

**Ejercicio 5: Detección de Clics y Generación de XPath**

- **Objetivo:** Desarrollar una página web que muestre el XPath único de un elemento al hacer clic en él.
- **Descripción del Problema:** Crear una página web que, al hacer clic en cualquier elemento, muestre el XPath único de ese elemento en un cuadro de alerta o en una sección de la página.
- **Requisitos del Problema:**
  - Agregar un evento de escucha para detectar clics en todo el documento.
  - Identificar el elemento clickeado y generar su XPath único.
  - Mostrar el XPath generado en un cuadro de alerta o en una sección de la página.

👷🏻‍♂️#### Diseño de la Propuesta de Solución del Problema

**Ejercicio 1: Cambio de Color con Botón**

- **Solución Propuesta:** Para cambiar el color de fondo al hacer clic en un botón, utilizaremos JavaScript para agregar un evento de clic al botón. Cuando el botón se clique, generaremos valores aleatorios para los componentes RGB (rojo, verde, azul) del color de fondo y los aplicaremos al fondo de la página.

**Ejercicio 2: Calculadora de Área**

- **Solución Propuesta:** Para calcular el área de un rectángulo, diseñaremos una página web con campos de entrada para el ancho y el alto del rectángulo. Al hacer clic en el botón "Calcular Área," utilizaremos JavaScript para obtener los valores ingresados, calcular el área y mostrar el resultado en un elemento `<p>` en la página.

**Ejercicio 3: Listado Dinámico**

- **Solución Propuesta:** Para permitir al usuario agregar elementos a una lista, diseñaremos una página con un campo de entrada y un botón "Añadir a la lista." Usaremos JavaScript para agregar un evento de clic al botón. Al hacer clic, obtendremos el contenido del campo y lo agregaremos como un nuevo elemento `<li>` a la lista (`<ul>` o `<ol>`).

**Ejercicio 4: Hover y Estilo Dinámico**

- **Solución Propuesta:** Para cambiar los estilos de elementos div al pasar el ratón sobre ellos, diseñaremos una página con varios elementos div. Utilizaremos JavaScript para agregar eventos de "mouseover" y "mouseout" a cada div. Al pasar el ratón sobre un div, cambiaremos el color de fondo a azul y el texto a blanco. Al mover el ratón fuera del div, restauraremos los estilos originales.
**Ejercicio 5: Detección de Clics y Generación de XPath**

- **Solución Propuesta:** Para detectar clics en cualquier elemento y mostrar su XPath único, diseñaremos una página web que agregue un evento de escucha para detectar clics en todo el documento (`document`). Al detectar un clic, utilizaremos JavaScript para determinar el elemento exacto que fue clickeado utilizando el objeto `event.target`. Una vez identificado el elemento, generaremos su XPath único y lo mostraremos en un cuadro de alerta.


**Test**


- ejercicio 1: Aqui se aprecia que al hacer click en el boton cambia el fondo 
![ejercicio1](img\ejercicio1.jpg)
![ejercicio1](gif\ejercicio1.gif )


- ejercicio 2: al introducir los numeros en los imputs calcula el area.
![ejercicio1](img\ejercicio2.jpg)
![ejercicio1](gif\ejercicio2.gif)


- ejercicio 3: al introducir un texto vemos como se añade a la lista que antes no existia 
![ejercicio1](img\ejercicio3.jpg)
![ejercicio1](gif\ejercicio3.gif)


- ejercicio 4: aqui se puede apreciar como al pasar el cursor por encima de los diferentes carteles van cambiando de color.
![ejercicio1](img\ejercicio4.jpg)
![ejercicio1](gif\ejercicio4.gif)

- ejercicio 5: aqui podemos apreciar como al pulsar en los botones de iframe y boton principal sale el XPATH  correspondiente a cada boton.
![ejercicio1](img\ejercicio5.jpg)
![ejercicio1](gif\ejercicio5.gif)
