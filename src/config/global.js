export default {
  global: {
    componenteFormativo:
      'Fundamentos básicos en presupuestos, ingresos y gastos',
    descripcionCurso:
      'La economía colombiana no escapa de todo lo que se conoce como globalización contable, más aún, de toda carga impositiva que se genera para impulsar el sector empresarial del país.<br><br>Es por ello que los presupuestos son herramientas fundamentales e importantes para el buen manejo de las finanzas personales y empresariales, pues nos llevan a tomar decisiones acertadas o, en ocasiones, no, con base en las cifras y en la ejecución de las mismas.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Conceptualización de presupuestos, clases, etapas y modelos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Los presupuestos y la contabilidad',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Objetivos de un presupuesto',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Tipos de presupuestos',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo:
              'Diferencia entre presupuestos, flujos de caja y flujo de efectivo',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Presupuesto público ',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Conceptualización de ingresos, gastos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Ingresos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Gastos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Costos y clases',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Normatividad general',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Normas NIIF',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Pasos para implementar las NIIF',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      //{
      //  nombreRuta: 'actividad',
      //  icono: 'far fa-question-circle',
      //  titulo: 'Actividad didáctica',
      //  desarrolloContenidos: true,
      //},
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Alonso, M. (2020). ¿Qué es un presupuesto? Conoce los tipos de presupuesto y ejemplos para su cálculo. Gestion.org. ',
      link: 'https://www.gestion.org/que-es-un-presupuesto/',
    },
    {
      referencia:
        'Banco Central del Paraguay. (2015, 20 marzo). Qué es un presupuesto y cómo se elabora [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=urfwMXPDJVo',
    },
    {
      referencia:
        'Barnes, G. (2015). Presupuesto base cero. Metodología. Centro de Estudios de las Finanzas Públicas. ',
      link:
        'http://www.cefp.gob.mx/difusion/evento/2015/forobasecero/presentaciones/p202.pdf',
    },
    {
      referencia:
        'Cámara de Comercio de Bogotá. (2014, 14 febrero). Normas Internacionales de Contabilidad y de Información Financiera (NIIF) [Video]. YouTube. ',
      link: 'https://youtu.be/LvBRWBLmwMo',
    },
    {
      referencia:
        'Gonzalo, J. (2003). Principales cambios que suponen las Normas Internacionales de Información Financiera (NIIF) respecto al Plan General de Contabilidad. Universidad de Alcalá. ',
    },
    {
      referencia:
        'Jaramillo, M. (2021). Flujo de efectivo versus flujo de caja: ¿Cuál es la diferencia? Nubox. ',
      link:
        'https://blog.nubox.com/empresas/flujo-de-efectivo-vs-flujo-de-caja',
    },
    {
      referencia:
        'Martinez, J. (2016). El Presupuesto personal o familiar. Tipos de ingresos. inbestMe. ',
      link: 'https://www.inbestme.com/blog/el-presupuesto-ingresos/',
    },
    {
      referencia:
        'Pérez, J. y Merino, M. (2013). Definición de presupuesto público. Definición.de. ',
      link: 'https://definicion.de/presupuesto-publico/',
    },
    {
      referencia: 'Rus, E. (2020). Investigación científica. Economipedia. ',
      link:
        'https://economipedia.com/definiciones/investigacion-cientifica.html',
    },
    {
      referencia: 'Sánchez, L. (2021). ¿Qué es un presupuesto? Emprende Pyme. ',
      link: 'https://www.emprendepyme.net/que-es-un-presupuesto.html',
    },
    {
      referencia:
        'Superintendencia de Bancos Guatemala. (2014, 11 septiembre). El presupuesto [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=PmTaaLFSMVg',
    },
    {
      referencia:
        'Varón, L. (2013). Conjunto completo de Estados Financieros. Gerencie.com. ',
      link:
        'https://www.gerencie.com/conjunto-completo-de-estados-financieros.html',
    },
  ],
  glosario: [
    {
      termino: 'Contabilidad',
      significado:
        'sistema de control y registro de los gastos e ingresos y demás operaciones económicas que realiza una empresa o entidad.',
    },
    {
      termino: 'Conjunto de estados financieros',
      significado:
        'Según Leonardo Varón (2013), los estados financieros que conforman el conjunto completo, de acuerdo con las NIIF, es decir, la totalidad de estados financieros que se deben elaborar y presentar bajo NIIF, y se clasifican en:<br>Estado de Situación Financiera al final del periodo<br>Estado de Resultado Integral del periodo<br>Estado de Cambios en el Patrimonio del periodo<br>Estado de Flujo de Efectivo del periodo<br>Estado de Revelaciones del periodo',
    },
    {
      termino: 'Devengo',
      significado:
        'principio contable y financiero que establece que los hechos económicos deben reconocerse en el momento en que ocurren, independientemente de su pago.',
    },
    {
      termino: 'Estados financieros',
      significado:
        'representación estructurada de la situación financiera, el rendimiento financiero y los flujos de efectivo de la Compañía',
    },
    {
      termino: 'Estimación',
      significado:
        'Son partidas de los estados financieros que no pueden ser cuantificadas con precisión; corresponde a la valoración de activos y pasivos que se produce tras la evaluación de la situación actual del elemento, así como de los beneficios futuros esperados y de las obligaciones asociadas con los activos y pasivos correspondientes. Los cambios y las estimaciones contables son el resultado de una nueva información o de un nuevo acontecimiento, en consecuencia, no son corrección de errores. El efecto de una estimación contable será reconocido respectivamente incluyéndose en el resultado:<br>Del periodo en que tiene lugar el cambio, si este afecta solo ese periodo.<br>Del periodo del cambio y periodos futuros, si el cambio afecta a todos ellos.',
    },
    {
      termino: 'Gastos',
      significado:
        'decrementos en los beneficios económicos producidos a lo largo del periodo contable, en forma de salidas o disminuciones del valor de los activos, o bien por la generación o aumento de los pasivos que dan como resultado decrementos en el patrimonio.',
    },
    {
      termino: 'Impuesto a las ganancias',
      significado:
        'comprende todos los tributos basados en ganancias fiscales.',
    },
    {
      termino: 'Impuesto corriente',
      significado:
        'es el valor a pagar (recuperar) por el impuesto sobre las ganancias, relativo a la ganancia (pérdida) fiscal de periodos futuros.',
    },
    {
      termino: 'Impuesto diferido',
      significado:
        'es el valor a pagar (recuperar) por el impuesto sobre las ganancias, relativo a la ganancia (pérdida) fiscal del ejercicio.',
    },
    {
      termino: 'Ingreso',
      significado:
        'incremento en los beneficios económicos producidos a lo largo del periodo sobre el que se informa, que da como resultado aumento del patrimonio. No está relacionado con los aportes de los socios.',
    },
    {
      termino: 'Pasivo',
      significado:
        'obligación presente de la compañía, surgida a raíz de sucesos pasados, a cuyo vencimiento y para cancelarla se espera desprenderse de recursos que conllevan beneficios económicos.',
    },
    {
      termino: 'Patrimonio',
      significado:
        'Participación residual en los activos de la compañía, una vez deducidos todos los pasivos.  El patrimonio está formado por el conjunto de bienes, derechos y obligaciones pertenecientes a la Compañía, y que constituyen los medios económicos y financieros a través de los cuales esta puede cumplir con sus fines sociales.',
    },
    {
      termino: 'Valor razonable',
      significado:
        'Significa el precio por el que puede ser adquirido un activo o pagado un pasivo, entre partes interesadas, debidamente informadas, en una transacción en condiciones de libre competencia. Es preferiblemente calculado en referencia a un mercado activo fiable; el precio de cotización en un mercado activo es la mejor referencia del valor razonable.',
    },
    {
      termino: 'Valor realizable',
      significado:
        'Los activos se registran al valor presente descontando las entradas de efectivo netas futuras que se espera genere la partida en el curso normal de la operación. Los pasivos se registran al valor presente, descontando las salidas netas de efectivo que se espera necesitar para pagar el pasivo, en el curso normal de las operaciones.',
    },
  ],
  complementario: [
    {
      texto:
        'Banco Central del Paraguay. (2015, 20 marzo). Qué es un presupuesto y cómo se elabora [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=urfwMXPDJVo',
    },
    {
      texto:
        'Superintendencia de Bancos Guatemala. (2014, 11 septiembre). El presupuesto [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=PmTaaLFSMVg',
    },
    {
      texto:
        'Cámara de Comercio de Bogotá. (2014, 14 febrero). Normas Internacionales de Contabilidad y de Información Financiera (NIIF) [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/LvBRWBLmwMo',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Villamizar Mora',
        cargo: 'Experto temático',
        centro: 'Centro de la Industria, la Empresa y los Servicios. CIES.',
      },
      {
        nombre: 'Claudia Milena Hernández Naranjo',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Evaluadora instruccional',
        centro: 'Centro de gestión industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Sandra Carolina Duran Lopez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Daniela Muñoz Bedoya',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Urueta Alvarez',
        cargo: 'Desarrollo Front-End',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
