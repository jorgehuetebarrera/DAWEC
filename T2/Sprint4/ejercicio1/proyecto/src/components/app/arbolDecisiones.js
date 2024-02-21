import React, { useState } from 'react';


const decisionTree = {
  descubrimientoCuerpoIsabellaMontenegro: {
    pregunta: 'Descubres el cuerpo de Isabella Montenegro en su lujoso penthouse. ¿Qué haces?',
    opciones: [
      { texto: 'Examinar la escena del crimen en busca de pistas', destino: 'examinarEscenaCrimen' },
      { texto: 'Notificar a las autoridades y dejar que se encarguen de la investigación', destino: 'notificarAutoridadesInvestigacion' },
    ],
  },
  examinarEscenaCrimen: {
    pregunta: 'Examinas la escena del crimen en busca de pistas. ¿Qué encuentras?',
    opciones: [
      { texto: 'Marcas de estrangulamiento y objetos personales que podrían contener evidencia', destino: 'marcasEstrangulamientoObjetosPersonales' },
      { texto: 'Documentos y registros que sugieren una posible conspiración', destino: 'documentosRegistrosPosibleConspiracion' },
    ],
  },
  notificarAutoridadesInvestigacion: {
    pregunta: 'Notificas a las autoridades y dejas que se encarguen de la investigación. ¿Cómo procedes?',
    opciones: [
      { texto: 'Cooperar con la policía y proporcionar cualquier información adicional que puedas tener', destino: 'cooperarPoliciaProporcionarInformacionAdicional' },
      { texto: 'Seguir tu propia investigación paralela mientras la policía lleva a cabo su trabajo', destino: 'seguirPropiaInvestigacionParalela' },
    ],
  },
  marcasEstrangulamientoObjetosPersonales: {
    pregunta: 'Encuentras marcas de estrangulamiento y objetos personales que podrían contener evidencia. ¿Qué haces?',
    opciones: [
      { texto: 'Recoger las pistas y llevarlas a la estación de policía para su análisis', destino: 'recogerPistasLlevarEstacionPolicia' },
      { texto: 'Continuar investigando en busca de más pistas antes de informar a las autoridades', destino: 'continuarInvestigandoBuscaMasPistas' },
    ],
  },
  documentosRegistrosPosibleConspiracion: {
    pregunta: 'Encuentras documentos y registros que sugieren una posible conspiración. ¿Qué haces?',
    opciones: [
      { texto: 'Investigar más a fondo la posible conspiración antes de informar a las autoridades', destino: 'cooperarPoliciaProporcionarInformacionAdicional' },
      { texto: 'Notificar de inmediato a las autoridades sobre la posible conspiración', destino: 'notificarInmediatoAutoridadesPosibleConspiracion' },
    ],
  },
  cooperarPoliciaProporcionarInformacionAdicional: {
    pregunta: 'Decides cooperar con la policía y proporcionar cualquier información adicional que puedas tener. ¿Cómo procedes?',
    opciones: [
      { texto: 'Responder a las preguntas de los investigadores y ofrecer tu colaboración continua', destino: 'responderPreguntasInvestigadoresOfrecerColaboracion' },
      { texto: 'Retener cierta información sensible para evitar poner en peligro tus propias investigaciones', destino: 'retenerInformacionSensibleEvitarPonerPeligro' },
    ],
  },
  seguirPropiaInvestigacionParalela: {
    pregunta: 'Decides seguir tu propia investigación paralela mientras la policía lleva a cabo su trabajo. ¿Qué haces primero?',
    opciones: [
      { texto: 'Buscar posibles testigos o informantes que puedan tener información adicional', destino: 'buscarTestigosInformantesInformacionAdicional' },
      { texto: 'Revisar los antecedentes de Isabella Montenegro en busca de conexiones o enemigos potenciales', destino: 'revisarAntecedentesIsabellaMontenegroConexionesEnemigosPotenciales' },
    ],
  },
  recogerPistasLlevarEstacionPolicia: {
    pregunta: 'Decides recoger las pistas y llevarlas a la estación de policía para su análisis. ¿Cómo procedes después?',
    opciones: [
      { texto: 'Entregar las pistas directamente a la policía y cooperar plenamente con la investigación', destino: 'entregarPistasDirectamenteCooperarPlenamente' },
      { texto: 'Analizar las pistas por tu cuenta antes de compartir la información con la policía', destino: 'analizarPistasPorCuentaAntesCompartirConPolicia' },
    ],
  },
  continuarInvestigandoBuscaMasPistas: {
    pregunta: 'Decides continuar investigando en busca de más pistas antes de informar a las autoridades. ¿Qué área investigas a continuación?',
    opciones: [
      { texto: 'Interrogar a posibles testigos o personas cercanas a Isabella Montenegro', destino: 'interrogarPosiblesTestigosPersonasCercanas' },
      { texto: 'Investigar los lugares frecuentados por Isabella en busca de pistas adicionales', destino: 'investigarLugaresFrecuentadosIsabellaPistasAdicionales' },
    ],
  },
  investigarConspiracionAntesInformarAutoridades: {
    pregunta: 'Decides investigar más a fondo la posible conspiración antes de informar a las autoridades. ¿Cuál es tu siguiente paso?',
    opciones: [
      { texto: 'Reunir pruebas sólidas que respalden tus sospechas antes de actuar', destino: 'reunirPruebasSolidasSospechasAntesActuar' },
      { texto: 'Compartir tus sospechas con un aliado de confianza para obtener más información', destino: 'compartirSospechasAliadoConfianzaObtenerInformacion' },
    ],
  },
  notificarInmediatoAutoridadesPosibleConspiracion: {
    pregunta: 'Decides notificar de inmediato a las autoridades sobre la posible conspiración. ¿Cómo procedes después?',
    opciones: [
      { texto: 'Proporcionar a la policía toda la información relevante que has descubierto', destino: 'proporcionarPoliciaInformacionRelevanteDescubierto' },
      { texto: 'Investigar por tu cuenta mientras esperas la respuesta de la policía', destino: 'investigarPorCuentaEsperasRespuestaPolicia' },
    ],
  },
  responderPreguntasInvestigadoresOfrecerColaboracion: {
    pregunta: 'Decides responder a las preguntas de los investigadores y ofrecer tu colaboración continua. ¿Cómo procedes?',
    opciones: [
      { texto: 'Proporcionar información detallada sobre tus descubrimientos y seguir las órdenes de la policía', destino: 'informacionDetalladaSeguirOrdenesPolicia' },
      { texto: 'Mantener cierta información confidencial para proteger tus propias investigaciones', destino: 'mantenerInformacionConfidencialProtegerPropiasInvestigaciones' },
    ],
  },
  retenerInformacionSensibleEvitarPonerPeligro: {
    pregunta: 'Decides retener cierta información sensible para evitar poner en peligro tus propias investigaciones. ¿Qué haces con la información?',
    opciones: [
      { texto: 'Guardarla en un lugar seguro y continuar tu investigación de manera discreta', destino: 'guardarInformacionSeguroContinuarInvestigacionDiscreta' },
      { texto: 'Compartirla con un aliado de confianza para obtener más perspectiva y apoyo', destino: 'compartirInformacionAliadoConfianzaObtenerPerspectivaApoyo' },
    ],
  },
  buscarTestigosInformantesInformacionAdicional: {
    pregunta: 'Decides buscar posibles testigos o informantes que puedan tener información adicional. ¿Dónde comienzas tu búsqueda?',
    opciones: [
      { texto: 'Bares y clubes nocturnos frecuentados por la élite de la ciudad', destino: 'buscarBaresClubesNocturnosEliteCiudad' },
      { texto: 'Áreas residenciales donde podrías encontrar personas cercanas a las víctimas', destino: 'buscarAreasResidencialesPersonasCercanasVictimas' },
    ],
  },
  revisarAntecedentesIsabellaMontenegroConexionesEnemigosPotenciales: {
    pregunta: 'Decides revisar los antecedentes de Isabella Montenegro en busca de conexiones o enemigos potenciales. ¿Qué descubres?',
    opciones: [
      { texto: 'Vínculos con individuos de dudosa reputación o actividades ilegales', destino: 'vinculosIndividuosDudosaReputacionActividadesIlegales' },
      { texto: 'Posibles conflictos con figuras prominentes de la ciudad', destino: 'posiblesConflictosFigurasProminentesCiudad' },
    ],
  },
  entregarPistasDirectamenteCooperarPlenamente: {
    pregunta: 'Decides entregar las pistas directamente a la policía y cooperar plenamente con la investigación. ¿Cómo procedes después?',
    opciones: [
      { texto: 'Colaborar estrechamente con los investigadores y seguir todas las directivas policiales', destino: 'colaborarEstrechamenteInvestigadoresSeguirDirectivasPoliciales' },
      { texto: 'Investigar por tu cuenta mientras esperas avances en la investigación policial', destino: 'investigarPorCuentaEsperarAvancesInvestigacionPolicial' },
    ],
  },
  analizarPistasPorCuentaAntesCompartirConPolicia: {
    pregunta: 'Decides analizar las pistas por tu cuenta antes de compartir la información con la policía. ¿Qué descubres?',
    opciones: [
      { texto: 'Información que sugiere una conexión más amplia con el club "Las Sombras"', destino: 'informacionConexionAmpliaConLasSombras' },
      { texto: 'Evidencia que apunta hacia un individuo específico como posible sospechoso', destino: 'evidenciaIndividuoEspecificoPosibleSospechoso' },
    ],
  },
  reunirPruebasSolidasSospechasAntesActuar: {
    pregunta: 'Decides reunir pruebas sólidas que respalden tus sospechas antes de actuar. ¿Cómo procedes?',
    opciones: [
      { texto: 'Investigar a fondo a los posibles implicados y recopilar evidencia incriminatoria', destino: 'investigarFondoPosiblesImplicadosRecopilarEvidenciaIncriminatoria' },
      { texto: 'Consultar con aliados de confianza para validar tus hallazgos y obtener apoyo', destino: 'consultarAliadosConfianzaValidarHallazgosObtenerApoyo' },
    ],
  },
  compartirSospechasAliadoConfianzaObtenerInformacion: {
    pregunta: 'Decides compartir tus sospechas con un aliado de confianza para obtener más información. ¿Qué hace tu aliado?',
    opciones: [
      { texto: 'Ofrecer su ayuda y recursos para investigar más a fondo las sospechas', destino: 'ofrecerAyudaRecursosInvestigarFondoSospechas' },
      { texto: 'Aconsejarte que procedas con cautela y verifiques la información antes de actuar', destino: 'aconsejarProcederCautelaVerificarInformacionAntesActuar' },
    ],
  },
  informacionDetalladaSeguirOrdenesPolicia: {
    pregunta: 'Decides proporcionar información detallada sobre tus descubrimientos y seguir las órdenes de la policía. ¿Cómo procedes después?',
    opciones: [
      { texto: 'Trabajar estrechamente con la policía para arrestar al sospechoso principal', destino: 'trabajarEstrechamentePoliciaArrestarSospechosoPrincipal' },
      { texto: 'Investigar por tu cuenta para asegurarte de que no se escape ningún detalle importante', destino: 'investigarPorCuentaAsegurarteNoEscaparDetallesImportantes' },
    ],
  },
  mantenerInformacionConfidencialProtegerPropiasInvestigaciones: {
    pregunta: 'Decides mantener cierta información confidencial para proteger tus propias investigaciones. ¿Cómo procedes?',
    opciones: [
      { texto: 'Utilizar la información confidencial como cebo para atraer al verdadero asesino', destino: 'utilizarInformacionConfidencialCeboAtraerVerdaderoAsesino' },
      { texto: 'Compartir selectivamente la información confidencial con aliados estratégicos', destino: 'compartirInformacionConfidencialAliadosEstrategicos' },
    ],
  },
  investigarPorCuentaEsperarAvancesInvestigacionPolicial: {
    pregunta: 'Decides investigar por tu cuenta mientras esperas avances en la investigación policial. ¿Qué área investigas a continuación?',
    opciones: [
      { texto: 'Seguir una pista reciente que podría conducir al paradero del asesino', destino: 'seguirPistaRecienteConducirParaderoAsesino' },
      { texto: 'Profundizar en el pasado oscuro de la ciudad en busca de conexiones', destino: 'profundizarPasadoOscuroCiudadBuscaConexiones' },
    ],
  },
  investigarFondoPosiblesImplicadosRecopilarEvidenciaIncriminatoria: {
    pregunta: 'Decides investigar a fondo a los posibles implicados y recopilar evidencia incriminatoria. ¿Cómo procedes?',
    opciones: [
      { texto: 'Realizar vigilancia encubierta para obtener pruebas directas de actividad criminal', destino: 'vigilanciaEncubiertaObtenerPruebasDirectasActividadCriminal' },
      { texto: 'Buscar la colaboración de informantes dentro de la organización criminal', destino: 'buscarColaboracionInformantesOrganizacionCriminal' },
    ],
  },
  consultarAliadosConfianzaValidarHallazgosObtenerApoyo: {
    pregunta: 'Decides consultar con aliados de confianza para validar tus hallazgos y obtener apoyo. ¿Qué hacen tus aliados?',
    opciones: [
      { texto: 'Ofrecer recursos adicionales y apoyo táctico para enfrentar a los sospechosos', destino: 'ofrecerRecursosApoyoTacticoEnfrentarSospechosos' },
      { texto: 'Proporcionar consejos estratégicos y sugerencias para mejorar tus tácticas de investigación', destino: 'proporcionarConsejosEstrategicosSugerenciasMejorarTacticasInvestigacion' },
    ],
  },
  ofrecerAyudaRecursosInvestigarFondoSospechas: {
    pregunta: 'Tu aliado decide ofrecer su ayuda y recursos para investigar más a fondo las sospechas. ¿Cómo procedes?',
    opciones: [
      { texto: 'Formar un equipo conjunto para llevar a cabo una operación encubierta', destino: 'formarEquipoOperacionEncubierta' },
      { texto: 'Continuar trabajando en paralelo, compartiendo información y recursos según sea necesario', destino: 'trabajarParaleloCompartirInformacionRecursosSegunNecesario' },
    ],
  },
  aconsejarProcederCautelaVerificarInformacionAntesActuar: {
    pregunta: 'Tu aliado te aconseja que procedas con cautela y verifiques la información antes de actuar. ¿Qué haces?',
    opciones: [
      { texto: 'Realizar una investigación adicional para confirmar tus sospechas antes de tomar medidas', destino: 'investigacionAdicionalConfirmarSospechasAntesTomarMedidas' },
      { texto: 'Buscar una segunda opinión de otro aliado de confianza antes de proceder', destino: 'buscarSegundaOpinionOtroAliadoConfianzaAntesProceder' },
    ],
  },
  seguirPistaRecienteConducirParaderoAsesino: {
    pregunta: 'Decides seguir una pista reciente que podría conducir al paradero del asesino. ¿Qué descubres?',
    opciones: [
      { texto: 'Una dirección sospechosa que podría ser el escondite del asesino', destino: 'direccionSospechosaPosibleEsconditeAsesino' },
      { texto: 'Un testigo clave que puede proporcionar información crucial sobre el paradero del asesino', destino: 'testigoClaveInformacionCrucialParaderoAsesino' },
    ],
  },
  profundizarPasadoOscuroCiudadBuscaConexiones: {
    pregunta: 'Decides profundizar en el pasado oscuro de la ciudad en busca de conexiones. ¿Qué descubres?',
    opciones: [
      { texto: 'Vínculos entre antiguos miembros del club "Las Sombras" y figuras prominentes de la ciudad', destino: 'vinculosAntiguosMiembrosLasSombrasFigurasProminentesCiudad' },
      { texto: 'Secretos enterrados relacionados con experimentos científicos clandestinos', destino: 'secretosEnterradosExperimentosCientificosClandestinos' },
    ],
  },
  vigilanciaEncubiertaObtenerPruebasDirectasActividadCriminal: {
    pregunta: 'Decides realizar vigilancia encubierta para obtener pruebas directas de actividad criminal. ¿Qué encuentras?',
    opciones: [
      { texto: 'Grabaciones de conversaciones incriminatorias entre los sospechosos', destino: 'grabacionesConversacionesIncriminatoriasSospechosos' },
      { texto: 'Documentos que vinculan a los sospechosos con crímenes pasados y presentes', destino: 'documentosVinculanSospechososCrimenesPasadosPresentes' },
    ],
  },
  buscarColaboracionInformantesOrganizacionCriminal: {
    pregunta: 'Decides buscar la colaboración de informantes dentro de la organización criminal. ¿Qué te dicen los informantes?',
    opciones: [
      { texto: 'Información sobre la ubicación del escondite del líder de la organización', destino: 'informacionUbicacionEsconditeLiderOrganizacion' },
      { texto: 'Detalles sobre los planes futuros de la organización, incluidos posibles ataques', destino: 'detallesPlanesFuturosOrganizacionPosiblesAtaques' },
    ],
  },
  investigacionAdicionalConfirmarSospechasAntesTomarMedidas: {
    pregunta: 'Decides realizar una investigación adicional para confirmar tus sospechas antes de tomar medidas. ¿Qué descubres?',
    opciones: [
      { texto: 'Una pista que apunta directamente al líder de la organización criminal', destino: 'pistaApuntaDirectamenteLiderOrganizacionCriminal' },
      { texto: 'Una conspiración más profunda de lo que esperabas, con vínculos a figuras influyentes', destino: 'conspiracionMasProfundaVinculosFigurasInfluyentes' },
    ],
  },
  buscarSegundaOpinionOtroAliadoConfianzaAntesProceder: {
    pregunta: 'Decides buscar una segunda opinión de otro aliado de confianza antes de proceder. ¿Qué te aconseja tu aliado?',
    opciones: [
      { texto: 'Avanzar con cautela y preparar un plan sólido antes de actuar', destino: 'avanzarCautelaPrepararPlanSolidoAntesActuar' },
      { texto: 'Buscar más pruebas para respaldar tus acusaciones antes de enfrentarte a los sospechosos', destino: 'buscarMasPruebasRespaldarAcusacionesAntesEnfrentarteSospechosos' },
    ],
  },
  direccionSospechosaPosibleEsconditeAsesino: {
    pregunta: 'Encuentras una dirección sospechosa que podría ser el escondite del asesino. ¿Qué haces a continuación?',
    opciones: [
      { texto: 'Investigar la dirección por tu cuenta para confirmar si el asesino está dentro', destino: 'investigarDireccionConfirmarAsesinoDentro' },
      { texto: 'Informar a la policía y coordinar un operativo conjunto para rodear la ubicación', destino: 'informarPoliciaCoordinarOperativoConjuntoRodearUbicacion' },
    ],
  },
  testigoClaveInformacionCrucialParaderoAsesino: {
    pregunta: 'Encuentras un testigo clave que puede proporcionar información crucial sobre el paradero del asesino. ¿Qué haces con el testigo?',
    opciones: [
      { texto: 'Proteger al testigo y llevarlo a un lugar seguro antes de interrogarlo', destino: 'protegerTestigoLlevarloLugarSeguroInterrogarlo' },
      { texto: 'Utilizar al testigo como cebo para atraer al asesino y capturarlo', destino: 'utilizarTestigoCeboAtraerAsesinoCapturarlo' },
    ],
  },
  pistaApuntaDirectamenteLiderOrganizacionCriminal: {
    pregunta: 'Encuentras una pista que apunta directamente al líder de la organización criminal. ¿Cómo procedes?',
    opciones: [
      { texto: 'Revelar la información públicamente y enfrentar al líder con pruebas contundentes', destino: 'revelarInformacionPublicamenteEnfrentarLiderPruebasContundentes' },
      { texto: 'Utilizar la información como moneda de cambio para obtener el apoyo de otros líderes', destino: 'utilizarInformacionMonedaCambioObtenerApoyoOtrosLideres' },
    ],
  },
  conspiracionMasProfundaVinculosFigurasInfluyentes: {
    pregunta: 'Descubres una conspiración más profunda de lo que esperabas, con vínculos a figuras influyentes. ¿Qué haces con esta información?',
    opciones: [
      { texto: 'Investigar más a fondo para obtener pruebas irrefutables antes de revelar la conspiración', destino: 'investigarMasFondoObtenerPruebasIrrefutablesRevelarConspiracion' },
      { texto: 'Revelar la información de inmediato y arriesgarte a enfrentarte a los conspiradores', destino: 'revelarInformacionInmediatoArriesgarteEnfrentarteConspiradores' },
    ],
  },
  avanzarCautelaPrepararPlanSolidoAntesActuar: {
    pregunta: 'Decides avanzar con cautela y preparar un plan sólido antes de actuar. ¿Qué incluye tu plan?',
    opciones: [
      { texto: 'Coordinar un equipo táctico y asegurar una ruta de escape antes de la confrontación', destino: 'coordinarEquipoTacticoAsegurarRutaEscapeAntesConfrontacion' },
      { texto: 'Investigar los puntos débiles de tus oponentes y utilizarlos a tu favor durante el enfrentamiento', destino: 'investigarPuntosDebilesOponentesUtilizarlosFavorEnfrentamiento' },
    ],
  },
  buscarMasPruebasRespaldarAcusacionesAntesEnfrentarteSospechosos: {
    pregunta: 'Decides buscar más pruebas para respaldar tus acusaciones antes de enfrentarte a los sospechosos. ¿Qué tipo de pruebas buscas?',
    opciones: [
      { texto: 'Documentos que demuestren la participación directa de los sospechosos en actividades criminales', destino: 'documentosDemuestrenParticipacionDirectaSospechososActividadesCriminales' },
      { texto: 'Testimonios de testigos presenciales que puedan confirmar la culpabilidad de los sospechosos', destino: 'testimoniosTestigosPresencialesConfirmarCulpabilidadSospechosos' },
    ],
  },
  revelarInformacionPublicamenteEnfrentarLiderPruebasContundentes: {
    pregunta: 'Decides revelar la información públicamente y enfrentar al líder con pruebas contundentes. ¿Cómo reacciona el líder?',
    opciones: [
      { texto: 'Intenta escapar y desatar el caos en la ciudad para cubrir sus huellas', destino: 'intentaEscaparDesatarCaosCiudadCubrirHuellas' },
      { texto: 'Acepta su derrota y se rinde ante la evidencia abrumadora en su contra', destino: 'aceptaDerrotaRindeEvidenciaAbrumadoraContra' },
    ],
  },
  utilizarInformacionMonedaCambioObtenerApoyoOtrosLideres: {
    pregunta: 'Decides utilizar la información como moneda de cambio para obtener el apoyo de otros líderes. ¿Cómo responden los otros líderes?',
    opciones: [
      { texto: 'Se unen a tu causa y forman una coalición para derrocar al líder corrupto', destino: 'unenCausaFormanCoalicionDerrocarLiderCorrupto' },
      { texto: 'Rechazan tu oferta y optan por proteger sus propios intereses', destino: 'rechazanOfertaOptanProtegerPropiosIntereses' },
    ],
  },
  coordinarEquipoTacticoAsegurarRutaEscapeAntesConfrontacion: {
    pregunta: 'Coordinas un equipo táctico y aseguras una ruta de escape antes de la confrontación final. ¿Cómo se desarrolla el enfrentamiento?',
    opciones: [
      { texto: 'El enfrentamiento es intenso pero logras capturar al líder y a sus cómplices', destino: 'enfrentamientoIntensoLograsCapturarLiderComplices' },
      { texto: 'El líder logra escapar, pero sus cómplices son capturados y la verdad sale a la luz', destino: 'liderLograEscaparComplicesCapturadosVerdadSaleLuz' },
    ],
  },
  investigarMasFondoObtenerPruebasIrrefutablesRevelarConspiracion: {
    pregunta: 'Decides investigar más a fondo para obtener pruebas irrefutables antes de revelar la conspiración. ¿Qué encuentras en tu investigación?',
    opciones: [
      { texto: 'Documentos que vinculan a figuras poderosas con la conspiración y revelan sus verdaderas intenciones', destino: 'documentosVinculanFigurasPoderosasConspiracionRevelanVerdaderasIntenciones' },
      { texto: 'Testimonios de testigos protegidos que confirman la existencia de la conspiración y sus participantes', destino: 'testimoniosTestigosProtegidosConfirmanExistenciaConspiracionParticipantes' },
    ],
  },
};

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