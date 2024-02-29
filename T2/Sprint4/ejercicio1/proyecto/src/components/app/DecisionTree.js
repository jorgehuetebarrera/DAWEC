const generarArbolDeDecisiones = () => {
   const DecisionTree ={
    1:{
      texto: "Rafael Cruz, un detective de la ciudad de Arcadia, se encuentra en medio de una investigación sobre una serie de asesinatos en la ciudad. Mientras sigue las pistas, descubre un oscuro complot que amenaza con sumir a Arcadia en el caos.",
      opciones: [
        { texto: "Continuar con la investigación y descubrir la verdad detrás de los asesinatos.", destino: 2 },
        { texto: "Dejar la investigación y evitar involucrarse en el peligroso complot.", destino: 3 },
      ],
    },
    2: {
      texto: "A medida que Cruz profundiza en la investigación, se da cuenta de que está en peligro. Los asesinos comienzan a seguirlo y su vida corre peligro. Sin embargo, también se acerca cada vez más a descubrir la verdad detrás del complot.",
      opciones: [
        { texto: "Continuar investigando a pesar del peligro.", destino: 4 },
        { texto: "Poner fin a la investigación para proteger su propia seguridad.", destino: 5 },
      ],
    },
    3: {
      texto: "Al retirarse de la investigación, Cruz evade el peligro inmediato pero se siente culpable por abandonar su deber como detective. Sin embargo, también evita la posibilidad de ser arrastrado más profundamente en el peligroso complot.",
      opciones: [
        { texto: "Regresar a la investigación y enfrentar los peligros.", destino: 4 },
        { texto: "Aceptar su decisión y alejarse del complot.", destino: 5 },
      ],
    },
    4: {
      texto: "Cruz se enfrenta a un dilema moral: ¿debería continuar arriesgando su vida en la búsqueda de la verdad, o debería retirarse para proteger su seguridad y la de sus seres queridos? La decisión no es fácil, pero su determinación lo impulsa a seguir adelante.",
      opciones: [
        { texto: "Continuar la investigación a pesar de los peligros.", destino: 6 },
        { texto: "Poner fin a la investigación y buscar seguridad.", destino: 7 },
      ],
    },
    5: {
      texto: "Al retirarse de la investigación, Cruz evita el peligro inmediato pero se siente atormentado por no haber completado su misión. Sin embargo, también se asegura de proteger su seguridad y la de sus seres queridos.",
      opciones: [
        { texto: "Regresar a la investigación y enfrentar los peligros.", destino: 6 },
        { texto: "Aceptar su decisión y alejarse del complot.", destino: 7 },
      ],
    },
    6: {
      texto: "Decidido a descubrir la verdad, Cruz sigue adelante con la investigación a pesar de los crecientes peligros. Se enfrenta a obstáculos cada vez mayores, pero su determinación no vacila.",
      opciones: [
        { texto: "Buscar la ayuda de sus aliados para enfrentar los desafíos.", destino: 8 },
        { texto: "Continuar la investigación en solitario para proteger a sus seres queridos.", destino: 9 },
      ],
    },
    7: {
      texto: "Al optar por retirarse de la investigación, Cruz elige priorizar la seguridad sobre la verdad. Aunque se siente aliviado por evitar los peligros inminentes, también se atormenta por no haber completado su misión.",
      opciones: [
        { texto: "Regresar a la investigación y enfrentar los peligros.", destino: 8 },
        { texto: "Aceptar su decisión y alejarse del complot.", destino: 9 },
      ],
    },
    8: {
      texto: "Con la ayuda de sus aliados, Cruz logra superar los desafíos más difíciles de la investigación. Juntos, descubren pistas cruciales que los acercan cada vez más a la verdad.",
      opciones: [
        { texto: "Seguir adelante con renovada determinación.", destino: 10 },
        { texto: "Considerar detenerse para evaluar los riesgos.", destino: 11 },
      ],
    },
    9: {
      texto: "Al continuar la investigación en solitario, Cruz enfrenta desafíos aún mayores sin el apoyo de sus aliados. A pesar de los riesgos, se niega a renunciar a su búsqueda de la verdad.",
      opciones: [
        { texto: "Persistir en su camino con valentía.", destino: 10 },
        { texto: "Reconsiderar su enfoque y buscar ayuda.", destino: 11 },
      ],
    },
    10: {
      texto: "Cruz se encuentra cada vez más cerca de la verdad mientras sigue las pistas descubiertas. Sin embargo, también se da cuenta de que está atrayendo la atención de poderosos enemigos que harán todo lo posible para detenerlo.",
      opciones: [
        { texto: "Continuar con determinación a pesar de los riesgos.", destino: 12 },
        { texto: "Pausar la investigación para evaluar los peligros.", destino: 13 },
      ],
    },
    11: {
      texto: "Al detenerse para evaluar los riesgos, Cruz se da cuenta de que la situación es más peligrosa de lo que imaginaba. Sin embargo, también comprende que detenerse ahora podría significar perder pistas vitales para resolver el caso.",
      opciones: [
        { texto: "Continuar la investigación a pesar de los riesgos.", destino: 12 },
        { texto: "Tomar un descanso para reevaluar la estrategia.", destino: 13 },
      ],
    },
    12: {
      texto: "Cruz elige continuar con su investigación, sabiendo que cada paso lo acerca más a la verdad. Aunque enfrenta obstáculos cada vez mayores, su determinación no vacila mientras se enfrenta a la oscuridad que rodea a Arcadia.",
      opciones: [
        { texto: "Persistir en su búsqueda con valentía.", destino: 14 },
        { texto: "Considerar pedir ayuda para enfrentar los desafíos.", destino: 15 },
      ],
    },
    13: {
      texto: "Al tomar un descanso para reevaluar la estrategia, Cruz gana una nueva perspectiva sobre la situación. Aprovecha este tiempo para fortalecer sus lazos con sus aliados y planificar su próximo movimiento con más cuidado.",
      opciones: [
        { texto: "Reanudar la investigación con una nueva estrategia.", destino: 14 },
        { texto: "Explorar nuevas pistas con la ayuda de sus aliados.", destino: 15 },
      ],
    },
    14: {
      texto: "Cruz se encuentra cada vez más cerca de desentrañar el complot mientras sigue las nuevas pistas descubiertas. Sin embargo, también se da cuenta de que está en una carrera contra el tiempo y que sus enemigos harán todo lo posible para detenerlo.",
      opciones: [
        { texto: "Continuar con determinación a pesar de las dificultades.", destino: 16 },
        { texto: "Reconsiderar su enfoque y buscar aliados adicionales.", destino: 17 },
      ],
    },
    15: {
      texto: "Al pedir ayuda para enfrentar los desafíos, Cruz fortalece su equipo y se prepara para enfrentar cualquier obstáculo que se interponga en su camino. Juntos, están decididos a desentrañar la verdad y exponer la oscuridad que acecha en Arcadia.",
      opciones: [
        { texto: "Seguir adelante con renovada fuerza y ​​determinación.", destino: 16 },
        { texto: "Explorar nuevas pistas con la ayuda de sus aliados.", destino: 17 },
      ],
    },
    16: {
      texto: "Con cada obstáculo que supera, Cruz se acerca cada vez más a la verdad. Sin embargo, también se enfrenta a decisiones difíciles que podrían cambiar el curso de su investigación.",
      opciones: [
        { texto: "Seguir adelante con valentía, sin importar el costo.", destino: 18 },
        { texto: "Detenerse y considerar las posibles consecuencias antes de continuar.", destino: 19 },
      ],
    },
    17: {
      texto: "Explorar nuevas pistas con la ayuda de sus aliados lleva a Cruz a descubrir información crucial que podría cambiar el rumbo de la investigación. Sin embargo, también se enfrenta a la posibilidad de que revelar demasiado demasiado pronto pueda poner en peligro a todos los involucrados.",
      opciones: [
        { texto: "Continuar investigando, confiando en la información recién descubierta.", destino: 20 },
        { texto: "Tomarse un tiempo para analizar la situación antes de seguir adelante.", destino: 21 },
      ],
    },
    18: {
      texto: "A medida que Cruz avanza con valentía, se encuentra cada vez más cerca de la verdad. Sin embargo, también corre el riesgo de poner en peligro su propia seguridad al enfrentarse directamente a aquellos que buscan ocultar la verdad.",
      opciones: [
        { texto: "Persistir en su búsqueda a pesar de los peligros.", destino: 22 },
        { texto: "Considerar la posibilidad de buscar ayuda externa para enfrentar a sus enemigos.", destino: 23 },
      ],
    },
    19: {
      texto: "Al detenerse para considerar las posibles consecuencias, Cruz demuestra su sabiduría al evaluar cuidadosamente cada paso antes de avanzar. Esta pausa estratégica le permite evitar trampas potenciales y seguir adelante con mayor precaución.",
      opciones: [
        { texto: "Continuar con su investigación de manera más cautelosa.", destino: 22 },
        { texto: "Reanudar la búsqueda con una nueva estrategia para minimizar los riesgos.", destino: 23 },
      ],
    },
    20: {
      texto: "La investigación revela secretos oscuros que sacuden a Cruz y a su equipo. Ahora, más que nunca, están decididos a exponer la verdad, incluso si eso significa enfrentarse a enemigos poderosos que harán cualquier cosa para proteger sus secretos.",
      opciones: [
        { texto: "Persistir en su búsqueda, sin importar las consecuencias.", destino: 24 },
        { texto: "Considerar la posibilidad de aliarse con figuras influyentes para obtener apoyo adicional.", destino: 25 },
      ],
    },
    21: {
      texto: "Después de un encuentro peligroso con un informante, Cruz obtiene una pista crucial que lo lleva a un callejón oscuro en el corazón de la ciudad. Allí se encuentra con una figura misteriosa que parece tener respuestas a sus preguntas, pero también plantea nuevas incógnitas.",
      opciones: [
        { texto: "Confiar en la figura misteriosa y seguir sus indicaciones para obtener más información.", destino: 26 },
        { texto: "Desconfiar de las intenciones de la figura misteriosa y buscar respuestas por su cuenta.", destino: 27 },
      ],
    },
    22: {
      texto: "Cruz decide persistir en su búsqueda a pesar de los peligros que enfrenta. Su valentía y determinación lo llevan a descubrir nuevas pistas que lo acercan aún más a la verdad, pero también lo exponen a mayores riesgos.",
      opciones: [
        { texto: "Continuar investigando por su cuenta, confiando en su instinto y habilidades.", destino: 26 },
        { texto: "Buscar la ayuda de sus aliados y trabajar juntos para enfrentar los desafíos.", destino: 27 },
      ],
    },
    23: {
      texto: "Cruz considera la posibilidad de buscar ayuda externa para enfrentar a sus enemigos. Esta decisión lo lleva a evaluar cuidadosamente a posibles aliados y a sopesar los beneficios y riesgos de confiar en otros.",
      opciones: [
        { texto: "Buscar el apoyo de figuras influyentes dentro de la ciudad.", destino: 28 },
        { texto: "Depender de sus propias habilidades y recursos para continuar la investigación.", destino: 29 },
      ],
    },
    24: {
      texto: "A pesar de las amenazas y los peligros que enfrenta, Cruz sigue adelante con determinación. Su valentía inspira a otros a unirse a su causa, fortaleciendo su posición y aumentando su influencia en la lucha por la verdad.",
      opciones: [
        { texto: "Continuar liderando la investigación con coraje y convicción.", destino: 30 },
        { texto: "Delegar responsabilidades y formar un equipo para compartir la carga.", destino: 31 },
      ],
    },
    25: {
      texto: "Aliarse con figuras influyentes le brinda a Cruz acceso a recursos y protección adicional, pero también lo expone a la influencia y agenda de sus nuevos aliados. Ahora debe decidir cómo equilibrar sus propios objetivos con los de aquellos que lo respaldan.",
      opciones: [
        { texto: "Utilizar la influencia y recursos proporcionados por sus aliados para avanzar en la investigación.", destino: 32 },
        { texto: "Mantener su independencia y continuar con su investigación sin comprometer sus principios.", destino: 33 },
      ],
    },
    26: {
      texto: "Cruz continúa investigando por su cuenta, confiando en su instinto y habilidades para desentrañar la verdad oculta. Su enfoque individual le permite mantener el control total sobre su investigación, pero también lo expone a mayores riesgos y desafíos.",
      opciones: [
        { texto: "Persistir en su búsqueda solitaria, decidido a enfrentar cualquier obstáculo que se interponga en su camino.", destino: 34 },
        { texto: "Reconsiderar su enfoque y buscar la colaboración de sus aliados para compartir la carga y minimizar los riesgos.", destino: 35 },
      ],
    },
    27: {
      texto: "Decides desconfiar de las intenciones de la figura misteriosa y buscar respuestas por tu cuenta. Investigas en solitario, pero te encuentras con obstáculos y peligros en cada paso que das. Sin embargo, tu determinación te lleva a descubrir una conspiración aún más profunda de lo que imaginabas.",
      opciones: [
        { texto: "Seguir adelante con tu investigación a pesar de los riesgos.", destino: 31 },
        { texto: "Dejar de lado la investigación y buscar ayuda para enfrentar la conspiración.", destino: 32 },
      ],
    },
  28: {
      texto: "Decides confiar en la figura misteriosa y seguir sus indicaciones para obtener más información. Te lleva a un lugar oculto donde descubres pruebas contundentes que apuntan hacia una conspiración a gran escala en la ciudad. Sin embargo, también te das cuenta de que estás siendo vigilado.",
      opciones: [
        { texto: "Continuar recopilando pruebas y arriesgarte a ser descubierto.", destino: 33 },
        { texto: "Dejar de investigar para protegerte y evitar ser atrapado.", destino: 34 },
      ],
    },
  29: {
      texto: "Después de una intensa investigación, descubres que la figura misteriosa es en realidad un aliado de confianza que ha estado luchando en las sombras contra la corrupción en la ciudad. Juntos, planean exponer la verdad y derrotar a los responsables de la conspiración.",
      opciones: [
        { texto: "Unir fuerzas con tu nuevo aliado y seguir adelante con el plan para exponer la verdad.", destino: 35 },
        { texto: "Dudar de las intenciones de tu aliado y continuar la investigación por tu cuenta.", destino: 36 },
      ],
    },
  30: {
      texto: "La figura misteriosa revela ser un agente doble que trabaja para una facción oscura dentro de la ciudad. Te lleva a una trampa mortal donde te encuentras rodeado de enemigos. Tus opciones se reducen a luchar o rendirte.",
      opciones: [
        { texto: "Luchar contra tus enemigos y tratar de escapar con vida.", destino: 37 },
        { texto: "Rendirte y esperar una oportunidad para escapar más tarde.", destino: 38 },
      ],
    },
  31: {
      texto: "A pesar de los riesgos, decides seguir adelante con tu investigación. Descubres pistas que te llevan a un antiguo edificio abandonado donde encuentras documentos secretos que revelan la verdad sobre la conspiración. Sin embargo, te das cuenta de que has sido seguido y estás en peligro.",
      opciones: [
        { texto: "Intentar escapar con los documentos y enfrentarte a tus perseguidores.", destino: 39 },
        { texto: "Dejar los documentos y buscar una salida segura para evitar ser atrapado.", destino: 40 },
      ],
    },
    32: {
      texto: "Decides dejar de lado la investigación y buscar ayuda para enfrentar la conspiración. Te pones en contacto con un grupo de activistas que han estado luchando contra la corrupción en la ciudad. Juntos, planean revelar la verdad al público y derrotar a los responsables.",
      opciones: [
        { texto: "Seguir adelante con el plan y trabajar en equipo para exponer la conspiración.", destino: 41 },
        { texto: "Dudar de la efectividad del grupo y buscar otra forma de abordar la situación.", destino: 42 },
      ],
    },
  33: {
      texto: "Decides continuar recopilando pruebas a pesar del riesgo de ser descubierto. Descubres información vital que confirma tus sospechas sobre la conspiración, pero también atraes la atención de tus enemigos. Ahora estás en una carrera contra el tiempo para exponer la verdad antes de que sea demasiado tarde.",
      opciones: [
        { texto: "Utilizar las pruebas para alertar al público y ganar apoyo contra la conspiración.", destino: 43 },
        { texto: "Mantener las pruebas en secreto y buscar un plan para enfrentarte a tus enemigos directamente.", destino: 44 },
      ],
    },
  34: {
      texto: "Decides dejar de investigar para protegerte y evitar ser atrapado. Sin embargo, no puedes ignorar lo que has descubierto y la sensación de que estás huyendo de la verdad te persigue constantemente. Te enfrentas a una difícil decisión entre seguir adelante o volver a sumergirte en la investigación.",
      opciones: [
        { texto: "Dejar de lado tus miedos y volver a la investigación para enfrentar la verdad.", destino: 45 },
        { texto: "Aceptar tu decisión y seguir adelante con tu vida, dejando la investigación en el pasado.", destino: 46 },
      ],
    },
  35: {
      texto: "Decides unir fuerzas con tu nuevo aliado y seguir adelante con el plan para exponer la verdad. Juntos, trabajan en secreto para reunir pruebas contundentes que confirmen la existencia de la conspiración. Sin embargo, cada paso que dan está lleno de peligros y desafíos.",
      opciones: [
        { texto: "Continuar luchando juntos a pesar de los obstáculos y los riesgos.", destino: 47 },
        { texto: "Considerar abandonar la misión debido a la peligrosidad de la situación.", destino: 48 },
      ],
    },
  36: {
      texto: "Decides dudar de las intenciones de tu aliado y continuar la investigación por tu cuenta. A medida que profundizas en el caso, descubres que tu aliado te ha estado manipulando para su propio beneficio. Te enfrentas a la difícil tarea de confrontarlo y decidir tu próximo movimiento.",
      opciones: [
        { texto: "Enfrentarte a tu aliado y exigir respuestas sobre su traición.", destino: 49 },
        { texto: "Ignorar las acciones de tu aliado y seguir adelante con la investigación por tu cuenta.", destino: 50 },
      ],
    },
    37: {
      texto: "Decides confiar en tu aliado y seguir adelante con el plan para exponer la verdad. Trabajas juntos para recopilar pruebas y descubrir más información sobre la conspiración. A medida que avanzas, te das cuenta de que la situación es aún más peligrosa de lo que imaginabas.",
      opciones: [
        { texto: "Continuar con cautela, confiando en tu aliado y enfrentando los desafíos juntos.", destino: 51 },
        { texto: "Detener la investigación debido a los riesgos y buscar otra forma de abordar la situación.", destino: 52 },
      ],
    },
  38: {
      texto: "Decides tomar un enfoque más agresivo y confrontar directamente a tus enemigos. Utilizas las pruebas que has recopilado para amenazar a los conspiradores y presionarlos para que revelen la verdad. Sin embargo, tus acciones tienen consecuencias inesperadas y te encuentras en una situación aún más peligrosa.",
      opciones: [
        { texto: "Continuar presionando a los conspiradores y arriesgarte por la verdad.", destino: 53 },
        { texto: "Retirarte y buscar ayuda para protegerte de las represalias de tus enemigos.", destino: 54 },
      ],
    },
  39: {
      texto: "Decides buscar la ayuda de un periodista para exponer la verdad al público. Juntos, trabajan en un artículo de investigación que revela los detalles de la conspiración y pone al descubierto a los responsables. Sin embargo, tu decisión de buscar ayuda externa también atrae la atención no deseada de tus enemigos.",
      opciones: [
        { texto: "Continuar adelante con el plan y enfrentarte a los desafíos que se presenten.", destino: 55 },
        { texto: "Retirarte y buscar una forma más segura de abordar la situación.", destino: 56 },
      ],
    },
  40: {
      texto: "Decides enfrentarte a tus enemigos directamente y confrontarlos con las pruebas que has recopilado. Sin embargo, tus acciones provocan represalias inmediatas y te encuentras en una situación peligrosa. Ahora debes tomar decisiones rápidas para protegerte y mantener la lucha por la verdad.",
      opciones: [
        { texto: "Continuar luchando contra los conspiradores a pesar de los riesgos.", destino: 57 },
        { texto: "Retirarte y buscar ayuda para protegerte de las amenazas de tus enemigos.", destino: 58 },
      ],
    },
  41: {
      texto: "Decides seguir adelante con el plan y trabajar en equipo para exponer la conspiración. Utilizas tus habilidades de investigación y la ayuda de tus aliados para recopilar pruebas sólidas que confirmen la existencia de la conspiración. Sin embargo, cada paso que dan está lleno de peligros y desafíos.",
      opciones: [
        { texto: "Continuar luchando juntos a pesar de los obstáculos y los riesgos.", destino: 59 },
        { texto: "Considerar abandonar la misión debido a la peligrosidad de la situación.", destino: 60 },
      ],
    },
    42: {
      texto: "Decides actuar con cautela y continuar recopilando información sobre la conspiración antes de tomar medidas. Te sumerges en la investigación, descubriendo pistas intrigantes pero también enfrentando obstáculos y peligros inesperados.",
      opciones: [
        { texto: "Persistir en tu investigación y buscar más pruebas antes de actuar.", destino: 61 },
        { texto: "Detener temporalmente la investigación para evaluar mejor la situación.", destino: 62 },
      ],
    },
  43: {
      texto: "Decides buscar la ayuda de un informante dentro de la organización para obtener información privilegiada sobre la conspiración. Te arriesgas al confiar en alguien dentro del círculo de tus enemigos, pero las pistas que recibes podrían ser clave para exponer la verdad.",
      opciones: [
        { texto: "Continuar trabajando con el informante y seguir las pistas que te proporciona.", destino: 63 },
        { texto: "Alejarte del informante por temor a las represalias y buscar otra estrategia.", destino: 64 },
      ],
    },
  44: {
      texto: "Decides tomar un enfoque más sigiloso y trabajar solo para evitar alertar a tus enemigos. Te sumerges en la investigación en solitario, evitando la ayuda de tus aliados pero también corriendo mayores riesgos. Cada movimiento que haces es crucial para tu seguridad y el éxito de tu misión.",
      opciones: [
        { texto: "Continuar investigando en secreto y evitar a tus enemigos.", destino: 65 },
        { texto: "Reconsiderar tu estrategia y buscar ayuda de tus aliados para mayor seguridad.", destino: 66 },
      ],
    },
  45: {
      texto: "Decides enfrentar a tus enemigos directamente y confrontarlos con las pruebas que has recopilado. Utilizas tus habilidades de persuasión y tu determinación para presionar a los conspiradores y obtener respuestas. Sin embargo, tus acciones también desencadenan represalias inmediatas y te encuentras en una situación peligrosa.",
      opciones: [
        { texto: "Persistir en tu confrontación y luchar por la verdad a pesar de los riesgos.", destino: 67 },
        { texto: "Retirarte y buscar ayuda para protegerte de las amenazas de tus enemigos.", destino: 68 },
      ],
    },
  46: {
      texto: "Decides buscar la ayuda de tus aliados y trabajar en equipo para exponer la verdad. Utilizas tus conexiones y recursos para coordinar un esfuerzo conjunto para investigar la conspiración. Aunque te enfrentas a desafíos y obstáculos en el camino, la fuerza de tu unidad es tu mayor fortaleza.",
      opciones: [
        { texto: "Continuar trabajando juntos y enfrentando los desafíos como equipo.", destino: 69 },
        { texto: "Considerar abandonar la misión debido a los riesgos involucrados.", destino: 70 },
      ],
    },
    47: {
      texto: "Decides buscar pruebas contundentes para exponer la conspiración de una vez por todas. Te sumerges en la investigación, explorando lugares oscuros y peligrosos en busca de evidencia. A medida que te acercas a la verdad, te enfrentas a desafíos cada vez mayores y pones en riesgo tu propia seguridad.",
      opciones: [
        { texto: "Persistir en tu búsqueda de pruebas y enfrentarte a los peligros que encuentres.", destino: 71 },
        { texto: "Detener la búsqueda de pruebas por temor a las consecuencias.", destino: 72 },
      ],
    },
  48: {
      texto: "Decides jugar un juego de infiltración y engaño para obtener información sobre la conspiración desde adentro. Te sumerges en el mundo de tus enemigos, adoptando una identidad falsa y enfrentándote a situaciones peligrosas. Cada paso que das es arriesgado, pero las pistas que descubres podrían ser vitales para exponer la verdad.",
      opciones: [
        { texto: "Continuar tu infiltración y arriesgarte por la causa.", destino: 73 },
        { texto: "Retirarte de la infiltración por temor a ser descubierto.", destino: 74 },
      ],
    },
  49: {
      texto: "Decides buscar la ayuda de un hacker experto para acceder a información confidencial y desenterrar la verdad oculta. Te sumerges en el mundo digital, enfrentándote a desafíos cibernéticos y peligros virtuales. A medida que exploras los rincones oscuros de la red, descubres pistas que podrían cambiar el curso de tu investigación.",
      opciones: [
        { texto: "Continuar trabajando con el hacker y seguir las pistas que descubres.", destino: 75 },
        { texto: "Alejarte del hacker por temor a las repercusiones legales.", destino: 76 },
      ],
    },
  50: {
      texto: "Decides confiar en tus instintos y seguir tu propio camino en la búsqueda de la verdad. Te guías por tu intuición y tu experiencia, enfrentándote a desafíos y peligros con valentía. Aunque te encuentras solo en tu búsqueda, confías en que tus decisiones te llevarán más cerca de la verdad.",
      opciones: [
        { texto: "Continuar confiando en tus instintos y seguir tu propio camino.", destino: 77 },
        { texto: "Buscar ayuda de tus aliados para enfrentar los desafíos juntos.", destino: 78 },
      ],
    },
  51: {
      texto: "Decides actuar con cautela y reunir a tus aliados para planificar tu próximo movimiento. Te reúnes con tus compañeros más confiables, compartiendo información y estrategias para enfrentar la conspiración juntos. Aunque tus acciones son metódicas y calculadas, te enfrentas a la presión de tomar decisiones difíciles que afectarán el resultado de tu misión.",
      opciones: [
        { texto: "Persistir en tu planificación y confiar en tu equipo para el éxito.", destino: 79 },
        { texto: "Detener la planificación por temor a poner en peligro a tus aliados.", destino: 80 },
      ],
    },
    52: {
      texto: "Decides confrontar directamente a uno de los líderes de la conspiración en un encuentro clandestino. Te preparas mentalmente para el enfrentamiento, sabiendo que cada palabra y movimiento cuenta. A medida que te acercas al corazón de la conspiración, te enfrentas al riesgo de ser descubierto y a las consecuencias que eso conlleva.",
      opciones: [
        { texto: "Continuar con la confrontación y arriesgarte por la verdad.", destino: 81 },
        { texto: "Retirarte de la confrontación por temor a las represalias.", destino: 82 },
      ],
    },
  53: {
      texto: "Decides tomar un enfoque más diplomático y buscar una alianza con un miembro clave de la conspiración. Te sumerges en las negociaciones, tratando de ganarte la confianza de tu adversario y encontrar un terreno común. Aunque el camino de la diplomacia es menos peligroso, te enfrentas al desafío de convencer a tus enemigos de que trabajen contigo.",
      opciones: [
        { texto: "Persistir en las negociaciones y buscar una alianza.", destino: 83 },
        { texto: "Abandonar las negociaciones por temor a la traición.", destino: 84 },
      ],
    },
  54: {
      texto: "Decides buscar el apoyo del público y exponer la conspiración a través de los medios de comunicación. Te embarcas en una campaña de concienciación pública, utilizando tu influencia y tus recursos para difundir la verdad. Aunque enfrentas el riesgo de represalias y desacreditación, confías en el poder de la opinión pública para provocar un cambio.",
      opciones: [
        { texto: "Continuar con la campaña mediática y arriesgarte por la exposición.", destino: 85 },
        { texto: "Detener la campaña por temor a las consecuencias negativas.", destino: 86 },
      ],
    },
  55: {
      texto: "Decides buscar respuestas en lugares inesperados y explorar teorías alternativas sobre la conspiración. Te adentras en territorio desconocido, investigando rumores y leyendas urbanas que podrían contener la clave para desentrañar la verdad. Aunque te enfrentas al escepticismo y la ridiculez, sigues adelante con la esperanza de encontrar respuestas ocultas.",
      opciones: [
        { texto: "Persistir en tu búsqueda de respuestas inusuales y seguir pistas poco convencionales.", destino: 87 },
        { texto: "Abandonar la búsqueda por temor a perder tiempo y recursos.", destino: 88 },
      ],
    },
  56: {
      texto: "Decides confrontar tus propias dudas y miedos internos antes de continuar con tu búsqueda. Te tomas un tiempo para reflexionar y evaluar tus motivaciones, enfrentándote a tus propias inseguridades y conflictos internos. Aunque el camino hacia la autodescubrimiento es desafiante, sabes que es necesario para seguir adelante con determinación.",
      opciones: [
        { texto: "Continuar con tu búsqueda con renovada determinación y confianza en ti mismo.", destino: 89 },
        { texto: "Detener temporalmente tu búsqueda para resolver tus propias dudas internas.", destino: 90 },
      ],
    },
    57: {
      texto: "Decides formar una coalición de aliados confiables para enfrentar la conspiración juntos. Reúnes a un grupo diverso de personas con habilidades y recursos únicos, creando una fuerza unida para desafiar a tus enemigos. Aunque enfrentas el desafío de coordinar a un equipo diverso, confías en la fuerza de la unidad para superar cualquier obstáculo.",
      opciones: [
        { texto: "Continuar con la formación de la coalición y trabajar juntos para enfrentar la conspiración.", destino: 91 },
        { texto: "Abandonar la idea de la coalición por temor a la falta de cooperación y conflictos internos.", destino: 92 },
      ],
    },
  58: {
      texto: "Decides adoptar un enfoque más sigiloso y clandestino para desentrañar la conspiración. Te sumerges en el mundo de la clandestinidad, utilizando tácticas encubiertas y contactos secretos para recopilar información. Aunque te enfrentas al riesgo de ser descubierto y aislado, confías en tu astucia y habilidades para superar cualquier obstáculo.",
      opciones: [
        { texto: "Continuar con las operaciones encubiertas y arriesgarte por la exposición de la verdad.", destino: 93 },
        { texto: "Abandonar las operaciones encubiertas por temor a las represalias y la exposición.", destino: 94 },
      ],
    },
  59: {
      texto: "Decides buscar la ayuda de una figura misteriosa y enigmática que afirma tener conocimiento sobre la conspiración. Te adentras en el mundo de lo desconocido, confiando en la experiencia y la sabiduría de esta figura misteriosa. Aunque te enfrentas al riesgo de ser engañado o traicionado, confías en tu instinto para discernir la verdad.",
      opciones: [
        { texto: "Continuar con la búsqueda de la ayuda de la figura misteriosa y seguir sus indicaciones.", destino: 95 },
        { texto: "Abandonar la búsqueda de ayuda por temor a los riesgos desconocidos involucrados.", destino: 96 },
      ],
    },
  60: {
      texto: "Decides desafiar directamente a uno de los líderes de la conspiración en un enfrentamiento físico. Te preparas para un enfrentamiento épico, confiando en tus habilidades de combate y tu determinación para enfrentar a tu enemigo cara a cara. Aunque te enfrentas al peligro de la confrontación directa, confías en tu fuerza y valentía para superar cualquier desafío.",
      opciones: [
        { texto: "Continuar con el enfrentamiento físico y arriesgarte por la victoria.", destino: 97 },
        { texto: "Retirarte del enfrentamiento físico por temor a las consecuencias mortales.", destino: 98 },
      ],
    },
  61: {
      texto: "Decides recurrir a la infiltración y el espionaje para obtener información sobre la conspiración desde adentro. Te sumerges en el mundo de la intriga y la clandestinidad, utilizando tu astucia y tus habilidades para recopilar información vital. Aunque te enfrentas al peligro de ser descubierto y traicionado, confías en tu capacidad para operar en las sombras.",
      opciones: [
        { texto: "Continuar con las operaciones de infiltración y arriesgarte por la revelación de la verdad.", destino: 99 },
        { texto: "Abandonar las operaciones de infiltración por temor a la exposición y la traición.", destino: 100 },
      ],
    },
    62: {
      texto: "Después de una serie de confrontaciones intensas y desafíos peligrosos, te das cuenta de que la conspiración es mucho más grande y complicada de lo que imaginabas. Te enfrentas al dilema de seguir adelante con la investigación, sabiendo que cada paso te acerca más a la verdad, pero también te expone a mayores riesgos y peligros.",
      opciones: [
        { texto: "Continuar con la investigación a pesar de los riesgos y desafíos.", destino: 101 },
        { texto: "Abandonar la investigación por temor a las consecuencias personales y la seguridad.", destino: 102 },
      ],
    },
    63: {
      texto: "Después de descubrir un nuevo giro en la conspiración, te das cuenta de que estás en una encrucijada crucial. Tienes la opción de buscar justicia a cualquier costo, incluso si eso significa sacrificar todo lo que valoras, o renunciar a la lucha y proteger lo que tienes. Te enfrentas al dilema de decidir entre la integridad personal y el bien común.",
      opciones: [
        { texto: "Continuar la lucha por la justicia a pesar de los sacrificios personales involucrados.", destino: 103 },
        { texto: "Renunciar a la lucha por la justicia para proteger lo que tienes y a quienes amas.", destino: 104 },
      ],
    },
    64: {
      texto: "Después de un encuentro sorprendente con un aliado inesperado, te encuentras en una posición de fuerza renovada. Tienes la oportunidad de unir fuerzas con este nuevo aliado y aumentar tu influencia y poder en la lucha contra la conspiración, pero también te enfrentas al riesgo de confiar en alguien cuyas verdaderas intenciones podrían ser desconocidas.",
      opciones: [
        { texto: "Aliarte con el nuevo aliado y aprovechar su apoyo en la lucha contra la conspiración.", destino: 105 },
        { texto: "Rechazar la oferta de alianza por temor a la traición y la manipulación.", destino: 106 },
      ],
    },
    65: {
      texto: "Después de enfrentarte a una serie de obstáculos aparentemente insuperables, te encuentras en un punto de quiebre. Tienes la opción de rendirte y abandonar la lucha, aceptando la derrota y resignándote a un destino incierto, o reunir toda tu determinación y coraje para seguir adelante, enfrentando los desafíos con renovada fuerza y ​​determinación.",
      opciones: [
        { texto: "Seguir adelante con determinación y coraje, enfrentando los desafíos con renovada fuerza.", destino: 107 },
        { texto: "Rendirte y abandonar la lucha, aceptando la derrota y resignándote a un destino incierto.", destino: 108 },
      ],
    },
    66: {
      texto: "Después de una serie de traiciones y decepciones, te encuentras en una encrucijada crucial. Tienes la opción de perdonar a aquellos que te han fallado y seguir adelante, manteniendo viva la esperanza de un futuro mejor, o sucumbir al resentimiento y la desconfianza, cerrando tu corazón a la posibilidad de redención y reconciliación.",
      opciones: [
        { texto: "Perdonar a aquellos que te han fallado y seguir adelante con esperanza y determinación.", destino: 109 },
        { texto: "Sucumbir al resentimiento y la desconfianza, cerrando tu corazón a la posibilidad de redención y reconciliación.", destino: 110 },
      ],
    },
    67: {
      texto: "Después de un enfrentamiento intenso con el líder de la conspiración, te encuentras en una posición vulnerable. Tienes la opción de confiar en tus habilidades y seguir adelante con determinación, enfrentando al enemigo con valentía y resolución, o ceder ante el miedo y la duda, poniendo en peligro todo lo que has luchado por lograr.",
      opciones: [
        { texto: "Seguir adelante con determinación y enfrentar al enemigo con valentía y resolución.", destino: 110 },
        { texto: "Ceder ante el miedo y la duda, poniendo en peligro todo lo que has luchado por lograr.", destino: 111 },
      ],
    },
    68: {
      texto: "Después de descubrir la verdadera naturaleza de la conspiración, te enfrentas a una decisión que cambiará el curso de tu vida para siempre. Tienes la opción de sacrificar tu propia libertad y seguridad en aras de un bien mayor, o proteger tus intereses personales y abandonar la lucha por la verdad y la justicia.",
      opciones: [
        { texto: "Sacrificar tu propia libertad y seguridad en aras de un bien mayor.", destino: 112 },
        { texto: "Proteger tus intereses personales y abandonar la lucha por la verdad y la justicia.", destino: 113 },
      ],
    },
    69: {
      texto: "Después de una serie de revelaciones impactantes, te encuentras en una encrucijada crucial. Tienes la opción de seguir adelante con la investigación, arriesgándote a enfrentarte a verdades aún más perturbadoras, o abandonar la búsqueda de respuestas y mantener tu propia seguridad y estabilidad emocional.",
      opciones: [
        { texto: "Seguir adelante con la investigación, arriesgándote a enfrentarte a verdades aún más perturbadoras.", destino: 114 },
        { texto: "Abandonar la búsqueda de respuestas y mantener tu propia seguridad y estabilidad emocional.", destino: 115 },
      ],
    },
    70: {
      texto: "Después de una serie de desafíos y adversidades, te encuentras en un punto crítico de inflexión. Tienes la opción de rendirte ante la adversidad y aceptar la derrota, o reunir toda tu fuerza y coraje para seguir adelante, luchando por un futuro mejor a pesar de las dificultades.",
      opciones: [
        { texto: "Rendirte ante la adversidad y aceptar la derrota.", destino: 116 },
        { texto: "Reunir toda tu fuerza y coraje para seguir adelante, luchando por un futuro mejor a pesar de las dificultades.", destino: 117 },
      ],
    },
    71: {
      texto: "Después de una serie de revelaciones impactantes, te enfrentas a una decisión difícil. Tienes la opción de seguir adelante con la lucha por la justicia, enfrentando obstáculos aparentemente insuperables, o retirarte y buscar seguridad y estabilidad en una vida alejada del peligro y la incertidumbre.",
      opciones: [
        { texto: "Seguir adelante con la lucha por la justicia, enfrentando obstáculos aparentemente insuperables.", destino: 118 },
        { texto: "Retirarte y buscar seguridad y estabilidad en una vida alejada del peligro y la incertidumbre.", destino: 119 },
      ],
    },
    72: {
      texto: "¡Enhorabuena! Has llegado al final de esta emocionante aventura. Tu valentía y determinación han llevado la verdad a la luz y has luchado incansablemente por la justicia. Ahora, mientras te adentras en el horizonte, puedes estar orgulloso del impacto que has tenido en el mundo que te rodea. ¡Gracias por jugar y por ser parte de esta historia inolvidable!",
      siguiente: "¡Enhorabuena! Has terminado el juego.",
  },
  };
return DecisionTree;
};
  export default generarArbolDeDecisiones;