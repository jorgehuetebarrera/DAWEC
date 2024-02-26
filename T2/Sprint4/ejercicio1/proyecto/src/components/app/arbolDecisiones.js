import React, { useState } from 'react';


const decisionTree = {
  1: {
    text: "Descubres el cuerpo de Isabella Montenegro en su lujoso penthouse. ¿Qué haces?",
    options: [
      { id: 2, text: "Cooperar con la policía y notificar de inmediato a las autoridades sobre la posible conspiración." },
      { id: 3, text: "Decides investigar por tu cuenta mientras esperas avances en la investigación policial." },
      { id: 4, text: "Notificar a las autoridades y seguir tu propia investigación paralela." },
      { id: 5, text: "Decides retener cierta información sensible para evitar poner en peligro tus propias investigaciones." },
      { id: 6, text: "Decides seguir una pista reciente que podría conducir al paradero del asesino." }
    ]
  },
  2: {
    text: "Decides notificar de inmediato a las autoridades sobre la posible conspiración. ¿Cómo procedes después?",
    options: [
      { id: 7, text: "Proporcionar a la policía información relevante sobre lo descubierto." },
      { id: 8, text: "Investigar por tu cuenta mientras esperas la respuesta de la policía." }
    ]
  },
  3: {
    text: "Decides seguir tu propia investigación paralela mientras la policía lleva a cabo su trabajo. ¿Qué haces primero?",
    options: [
      { id: 9, text: "Buscar posibles testigos o informantes que puedan tener información adicional." },
      { id: 10, text: "Revisar los antecedentes de Isabella Montenegro en busca de conexiones o enemigos potenciales." }
    ]
  },
  4: {
    text: "Decides recoger las pistas y llevarlas a la estación de policía para su análisis. ¿Cómo procedes después?",
    options: [
      { id: 11, text: "Colaborar estrechamente con los investigadores y seguir sus directivas policiales." },
      { id: 12, text: "Investigar por tu cuenta mientras esperas avances en la investigación policial." }
    ]
  },
  5: {
    text: "Decides continuar investigando en busca de más pistas antes de informar a las autoridades. ¿Qué área investigas a continuación?",
    options: [
      { id: 13, text: "Interrogar posibles testigos o personas cercanas." },
      { id: 14, text: "Investigar lugares frecuentados por Isabella en busca de pistas adicionales." }
    ]
  },
  6: {
    text: "Decides seguir una pista reciente que podría conducir al paradero del asesino. ¿Qué descubres?",
    options: [
      { id: 15, text: "Encuentras una dirección sospechosa que podría ser el escondite del asesino." },
      { id: 16, text: "Encuentras un testigo clave que puede proporcionar información crucial sobre el paradero del asesino." }
    ]
  },
  7: {
    text: "Decides proporcionar a la policía información relevante sobre lo descubierto. ¿Cómo procedes después?",
    options: [
      { id: 17, text: "Colaborar estrechamente con los investigadores y seguir sus directivas policiales." },
      { id: 18, text: "Investigar por tu cuenta mientras esperas avances en la investigación policial." }
    ]
  },
  8: {
    text: "Decides investigar por tu cuenta mientras esperas la respuesta de la policía. ¿Qué haces primero?",
    options: [
      { id: 19, text: "Buscar posibles testigos o informantes que puedan tener información adicional." },
      { id: 20, text: "Revisar los antecedentes de Isabella Montenegro en busca de conexiones o enemigos potenciales." }
    ]
  },
  9: {
    text: "Decides buscar posibles testigos o informantes que puedan tener información adicional. ¿Dónde comienzas tu búsqueda?",
    options: [
      { id: 21, text: "Buscar en bares y clubes nocturnos frecuentados por la élite de la ciudad." },
      { id: 22, text: "Buscar en áreas residenciales y entre personas cercanas a las víctimas." }
    ]
  },
  10: {
    text: "Decides revisar los antecedentes de Isabella Montenegro en busca de conexiones o enemigos potenciales. ¿Qué descubres?",
    options: [
      { id: 23, text: "Encuentras vínculos con individuos de dudosa reputación y actividades ilegales." },
      { id: 24, text: "Descubres posibles conflictos con figuras prominentes de la ciudad." }
    ]
  },
  11: {
    text: "Decides reunir pruebas sólidas que respalden tus sospechas antes de actuar. ¿Cómo procedes?",
    options: [
      { id: 25, text: "Reunir más información sobre la posible conspiración antes de informar a las autoridades." },
      { id: 26, text: "Compartir tus sospechas con un aliado de confianza para obtener más información." }
    ]
  },
  12: {
    text: "Tu aliado decide ofrecer su ayuda y recursos para investigar más a fondo las sospechas. ¿Cómo procedes?",
    options: [
      { id: 27, text: "Aceptas la ayuda y los recursos para enfrentarte a los sospechosos." },
      { id: 28, text: "Le das consejos estratégicos y sugerencias para mejorar las tácticas de investigación." }
    ]
  },
  13: {
    text: "Tu aliado te aconseja que procedas con cautela y verifiques la información antes de actuar. ¿Qué haces?",
    options: [
      { id: 29, text: "Formas un equipo para llevar a cabo una operación encubierta." },
      { id: 30, text: "Trabajas en paralelo y compartes información y recursos según sea necesario." }
    ]
  },
  14: {
    text: "Decides seguir una pista reciente que podría conducir al paradero del asesino. ¿Qué descubres?",
    options: [
      { id: 31, text: "Encuentras una dirección sospechosa que podría ser el escondite del asesino." },
      { id: 32, text: "Encuentras un testigo clave que puede proporcionar información crucial sobre el paradero del asesino." }
    ]
  },
  15: {
    text: "Decides investigar más a fondo la posible conspiración antes de informar a las autoridades. ¿Cuál es tu siguiente paso?",
    options: [
      { id: 33, text: "Buscar pruebas sólidas que respalden tus sospechas antes de actuar." },
      { id: 34, text: "Compartir tus sospechas con un aliado de confianza para obtener más información." }
    ]
  },
  16: {
    text: "Decides proporcionar información detallada sobre tus descubrimientos y seguir las órdenes de la policía. ¿Cómo procedes después?",
    options: [
      { id: 35, text: "Ofreces tu ayuda y recursos para investigar más a fondo las sospechas." },
      { id: 36, text: "Aconsejas proceder con cautela y verificar la información antes de actuar." }
    ]
  },
  17: {
    text: "Decides mantener cierta información confidencial para proteger tus propias investigaciones. ¿Cómo procedes?",
    options: [
      { id: 37, text: "Trabajas estrechamente con la policía para arrestar al sospechoso principal." },
      { id: 38, text: "Investigas por tu cuenta para asegurarte de que no se escapen detalles importantes." }
    ]
  },
  18: {
    text: "Decides investigar por tu cuenta mientras esperas avances en la investigación policial. ¿Qué área investigas a continuación?",
    options: [
      { id: 39, text: "Utilizas información confidencial como cebo para atraer al verdadero asesino." },
      { id: 40, text: "Compartes información confidencial con aliados estratégicos." }
    ]
  },
  19: {
    text: "Decides investigar a fondo a los posibles implicados y recopilar evidencia incriminatoria. ¿Cómo procedes?",
    options: [
      { id: 41, text: "Sigues una pista reciente que podría conducir al paradero del asesino." },
      { id: 42, text: "Profundizas en el pasado oscuro de la ciudad en busca de conexiones." }
    ]
  },
  20: {
    text: "Decides consultar con aliados de confianza para validar tus hallazgos y obtener apoyo. ¿Qué hacen tus aliados?",
    options: [
      { id: 43, text: "Realizan vigilancia encubierta para obtener pruebas directas de actividad criminal." },
      { id: 44, text: "Buscan colaboración de informantes dentro de la organización criminal." }
    ]
  },
  21: {
    text: "Decides ofrecer tu ayuda y recursos para investigar más a fondo las sospechas. ¿Cómo procedes?",
    options: [
      { id: 45, text: "Ofreces recursos y apoyo táctico para enfrentar a los sospechosos." },
      { id: 46, text: "Proporcionas consejos estratégicos y sugerencias para mejorar las tácticas de investigación." }
    ]
  },
  22: {
    text: "Decides aconsejar proceder con cautela y verificar la información antes de actuar. ¿Qué haces?",
    options: [
      { id: 47, text: "Formas un equipo para una operación encubierta." },
      { id: 48, text: "Trabajas en paralelo y compartes información y recursos según sea necesario." }
    ]
  },
  23: {
    text: "Decides utilizar información confidencial como cebo para atraer al verdadero asesino. ¿Qué descubres?",
    options: [
      { id: 49, text: "Sigues una pista reciente que podría conducir al paradero del asesino." },
      { id: 50, text: "Encuentras una dirección sospechosa que podría ser el escondite del asesino." }
    ]
  },
  24: {
    text: "Decides profundizar en el pasado oscuro de la ciudad en busca de conexiones. ¿Qué descubres?",
    options: [
      { id: 51, text: "Encuentras una pista que apunta directamente al líder de la organización criminal." },
      { id: 52, text: "Descubres una conspiración más profunda de lo que esperabas, con vínculos a figuras influyentes." }
    ]
  },
  25: {
    text: "Decides realizar vigilancia encubierta para obtener pruebas directas de actividad criminal. ¿Qué encuentras?",
    options: [
      { id: 53, text: "Encuentras grabaciones de conversaciones incriminatorias entre los sospechosos." },
      { id: 54, text: "Encuentras documentos que vinculan a los sospechosos con crímenes pasados y presentes." }
    ]
  },
  26: {
    text: "Tu aliado decide ofrecer su ayuda y recursos para investigar más a fondo las sospechas. ¿Cómo procedes?",
    options: [
      { id: 55, text: "Ofreces recursos y apoyo táctico para enfrentar a los sospechosos." },
      { id: 56, text: "Proporcionas consejos estratégicos y sugerencias para mejorar las tácticas de investigación." }
    ]
  },
  27: {
    text: "Tu aliado te aconseja que procedas con cautela y verifiques la información antes de actuar. ¿Qué haces?",
    options: [
      { id: 57, text: "Formas un equipo para una operación encubierta." },
      { id: 58, text: "Trabajas en paralelo y compartes información y recursos según sea necesario." }
    ]
  },
  28: {
    text: "Decides seguir una pista reciente que podría conducir al paradero del asesino. ¿Qué descubres?",
    options: [
      { id: 59, text: "Realizas investigación adicional para confirmar tus sospechas antes de tomar medidas." },
      { id: 60, text: "Buscas una segunda opinión de otro aliado de confianza antes de proceder." }
    ]
  },
  29: {
    text: "Decides profundizar en el pasado oscuro de la ciudad en busca de conexiones. ¿Qué descubres?",
    options: [
      { id: 61, text: "Encuentras una dirección sospechosa que podría ser el escondite del asesino." },
      { id: 62, text: "Encuentras un testigo clave que puede proporcionar información crucial sobre el paradero del asesino." }
    ]
  },
  30: {
    text: "Decides realizar vigilancia encubierta para obtener pruebas directas de actividad criminal. ¿Qué encuentras?",
    options: [
      { id: 63, text: "Encuentras vínculos entre antiguos miembros de Las Sombras y figuras prominentes de la ciudad." },
      { id: 64, text: "Descubres secretos enterrados y experimentos científicos clandestinos." }
    ]
  },
  31: {
    text: "Decides buscar la colaboración de informantes dentro de la organización criminal. ¿Qué te dicen los informantes?",
    options: [
      { id: 65, text: "Obtienes grabaciones de conversaciones incriminatorias entre los sospechosos." },
      { id: 66, text: "Encuentras documentos que vinculan a los sospechosos con crímenes pasados y presentes." }
    ]
  },
  32: {
    text: "Decides realizar una investigación adicional para confirmar tus sospechas antes de tomar medidas. ¿Qué descubres?",
    options: [
      { id: 67, text: "Encuentras información sobre la ubicación del escondite del líder de la organización." },
      { id: 68, text: "Descubres detalles sobre los planes futuros de la organización y posibles ataques." }
    ]
  },
  33: {
    text: "Decides buscar una segunda opinión de otro aliado de confianza antes de proceder. ¿Qué te aconseja tu aliado?",
    options: [
      { id: 69, text: "Te señala una pista que apunta directamente al líder de la organización criminal." },
      { id: 70, text: "Te advierte sobre una conspiración más profunda con vínculos a figuras influyentes." }
    ]
  },
  34: {
    text: "Encuentras una dirección sospechosa que podría ser el escondite del asesino. ¿Qué haces a continuación?",
    options: [
      { id: 71, text: "Avanzas con cautela y preparas un plan sólido antes de actuar." },
      { id: 72, text: "Buscas más pruebas para respaldar tus acusaciones antes de enfrentarte a los sospechosos." }
    ]
  },
  35: {
    text: "Encuentras un testigo clave que puede proporcionar información crucial sobre el paradero del asesino. ¿Qué haces con el testigo?",
    options: [
      { id: 73, text: "Investigas la dirección para confirmar si el asesino está dentro." },
      { id: 74, text: "Informas a la policía y coordinas un operativo conjunto para rodear la ubicación." }
    ]
  },


const ArbolDecisiones = () => {
  const [nodoActual, setNodoActual] = useState('descubrimientoCuerpoIsabellaMontenegro');

  const handleDecision = (opcion) => {
    setNodoActual(opcion.destino);
  };

  const renderDecision = (nodo) => {
    if (!decisionTree[nodo]) {
      return <div>Error: Nodo no definido</div>;
    }
  
    return (
      <div>
        <p>{decisionTree[nodo].pregunta}</p>
        <ul>
          {decisionTree[nodo].opciones.map((opcion, index) => (
            <li key={index}>
              <button onClick={() => handleDecision(opcion)}>
                {opcion.texto}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  return (
    <div className="arbol-de-decisiones">
      {renderDecision(nodoActual)}
    </div>
  );
};

export default ArbolDecisiones;