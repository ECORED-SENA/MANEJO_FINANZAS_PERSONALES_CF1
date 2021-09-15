<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Conceptualización de presupuestos, clases, etapas y modelos
    figure.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/img1.png', style="width: auto;").m-auto
    p Un presupuesto, en pocas palabras, es un plan que se ejecuta y controla como otras operaciones y actividades de la vida diaria personal y empresarial. Para este caso, el presupuesto se basa en temas financieros, en los ingresos, gastos y ejecución de los mismos.
    p.mb-4 A continuación, se pueden observar las características que debe tener un presupuesto:
    .row
      .col-12.d-none.d-xl-block
        figure(data-aos="fade-right")
          img(src='@/assets/curso/img3.svg', style="width: auto;").m-auto
      .col-12.d-lg-block.d-xl-none
        figure(data-aos="fade-right")
          img(src='@/assets/curso/img4.svg', style="width: auto;").m-auto
      .col-12.d-lg-block.d-xl-none
        figure(data-aos="fade-right")
          img(src='@/assets/curso/img5.svg', style="width: auto;").m-auto
    .row.bg-color1.px-5
      .col-12
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img6.svg', style="width: auto;").m-auto
      .col-12
        separador.mb-5
        #t_1_1
        .titulo-segundo
          h2 1.1 Los presupuestos y la contabilidad
        .row.justify-content-center.mb-4
          .col-lg-5
            p Según Sánchez (2019), #[span.bg-color2 “un presupuesto es un plan de operaciones y recursos en una empresa, que se formula para lograr en un cierto periodo los objetivos propuestos y se expresa en términos monetarios”.] En otras palabras, un presupuesto es realizar un plan monetario en el cual se analizan diferentes factores que entran en juego al momento de conseguir una meta específica.
            .cajon.color-primario.p-4
              p Un claro ejemplo de lo anterior es cuando se realiza un viaje, primero se debe definir hacia dónde se quiere ir y cuánto tiempo se va a estar en el sitio elegido. Con dichos datos, es posible comenzar a gestionar la búsqueda de los pasajes, ya sea por tierra, por aire, por barco, etc. También se requiere considerar el lugar de hospedaje y cuantas personas utilizarán el servicio. Así, es posible contabilizar los gastos reales que se necesitan para el viaje y unos gastos extras para imprevistos.
          .col-lg-5
            figure(data-aos="flip-left")
              img(src='@/assets/curso/img7.svg', style="width: auto;").m-auto
        .dual-txt-deco
          p Después de conocer todo lo anterior, se puede saber la cantidad de dinero que se requiere ahorrar para viajar y disfrutar, sin necesidad de endeudarse.
          p.mb-0 Asimismo, el presupuesto es considerado como una herramienta que permite determinar cuáles son los ingresos reales del hogar o empresa y en qué se invierte o se gasta dicho dinero en un lapso de tiempo determinado. Ejemplo: si se requiere saber cómo organizar el sueldo mensual para pagar y cubrir las necesidades básicas del hogar, se hace por medio de un presupuesto, que arroja la información para determinar los gastos que deben hacerse, por qué razón, cuánto es el porcentaje de inversión frente a cada gasto y si hay exceso en alguno de ellos, para poder realizar los análisis y, si es el caso, hacer los ajustes en los momentos pertinentes.
    separador.mb-5
    #t_1_2
    .titulo-segundo
      h2 1.2 Objetivos de un presupuesto
    .row.justify-content-center.mb-0.mb-lg-5
      .col-lg-5.mb-5.mb-lg-0
        .tarjeta-avatar(data-aos="fade-right")
          img(src='@/assets/curso/img8.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .text-white.p-4
              p.my-5.text-white Los objetivos del presupuesto en una organización o en una familia deben cumplir algunos parámetros definidos, como políticas, parámetros, fusiones contables, entre otros, que a su vez marcan un derrotero a seguir para un equilibrio contable y presupuestal.
      .col-lg-5.mb-5.mb-lg-0
        .tarjeta-avatar(data-aos="fade-left")
          img(src='@/assets/curso/img9.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .text-white.p-4
              p.my-5.text-white Actualmente, las organizaciones han optado por asumir e implementar la metodología del #[b presupuesto base cero PBC], que permite reevaluar y mejorar, año a año, todas las ejecuciones y partidas designadas, contablemente hablando, en la organización.
    .row.justify-content-center
      .col-lg-8.mb-5
        p.mb-0 En resumen, se elabora un presupuesto, cada año, como si se realizara por primera vez, evaluándose lo asignado, lo ajustado, y definiendo la cantidad de recursos que se necesita para llevar a cabo todos los programas y planes de la organización.
      .col-10
        .titulo-sexto.color-acento-contenido
          h5 Objetivos del PBC
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img11.svg', alt='Texto que describa la imagen')
          figcaption Nota. Adaptada de Barnes (2015).
    separador.mb-5
    #t_1_3
    .titulo-segundo
      h2 1.3 Tipos de presupuestos
    p.mb-5 Según Alonso (2020), hoy en día existe una amplia variedad de tipos de presupuestos distintos, los cuales se clasifican con base en una serie de criterios que se explican a continuación:
    .tarjeta.tarjeta--azul.p-4
      SlyderA
        .row.align-items-center.justify-content-center
          .col-lg-5.mb-4.mb-md-0
            h4 En función de la entidad
            p.mb-4 Teniendo en cuenta este criterio, existen dos tipos de presupuestos:
            ul.lista-ul.ms-4
              li 
                i.fas.fa-caret-square-right(style="color: #CA4F4E")
                p #[b Públicos]: “son elaborados por los diferentes Estados y las administraciones públicas para controlar los gastos y los egresos que realizan las distintas dependencias. Este tipo de presupuestos se elabora con base en los gastos, ya que primero se hace una estimación de las erogaciones que se llevarán a cabo para satisfacer las necesidades públicas, y posteriormente se plantea cómo cubrirlas”. (Alonso, 2020)
              li 
                i.fas.fa-caret-square-right(style="color: #CA4F4E")
                p #[b Privados]: “los elaboran las empresas particulares, quienes primero estiman sus ingresos y después establecen cómo gastar”. (Alonso, 2020)
          .col-lg-5
            figure
              img(src='@/assets/curso/img2.png', style="width: auto;").m-auto
        .row.align-items-center.justify-content-center
          .col-lg-5.mb-4.mb-md-0
            h4 En función de su contenido
            p.mb-4 Teniendo en cuenta este criterio, existen dos tipos de presupuestos:
            ul.lista-ul.ms-4
              li 
                i.fas.fa-caret-square-right(style="color: #CA4F4E")
                p #[b Principales]: “Son una especie de resumen donde se establecen los puntos estructurales que componen los elementos de la empresa”. (Alonso, 2020)
              li 
                i.fas.fa-caret-square-right(style="color: #CA4F4E")
                p #[b Auxiliares]: “Se muestran las operaciones estimadas de cada uno de los departamentos de la empresa, es decir, forman parte del presupuesto principal.” (Alonso, 2020)
          .col-lg-5
            figure
              img(src='@/assets/curso/img3.png', style="width: auto;").m-auto
        .row.align-items-center.justify-content-center
          .col-lg-5.mb-4.mb-md-0
            h4 En función de su duración
            p.mb-4 Teniendo en cuenta este criterio, existen dos tipos de presupuestos:
            ul.lista-ul.ms-4
              li 
                i.fas.fa-caret-square-right(style="color: #CA4F4E")
                p #[b A corto plazo]: si abarca un año o menos.
              li 
                i.fas.fa-caret-square-right(style="color: #CA4F4E")
                p #[b A largo plazo]: si abarca más de un año.
          .col-lg-5
            figure
              img(src='@/assets/curso/img4.png', style="width: auto;").m-auto
        .row.align-items-center.justify-content-center
          .col-lg-5.mb-4.mb-md-0
            h4 En función de la técnica de elaboración
            p.mb-4 Teniendo en cuenta este criterio, existen dos tipos de presupuestos:
            ul.lista-ul.ms-4
              li 
                i.fas.fa-caret-square-right(style="color: #CA4F4E")
                p #[b Estimados]: “Son aquellos presupuestos que se elaboran con base en las experiencias del pasado, es decir, de forma empírica, por lo que existe una probabilidad, más o menos razonable, de que suceda lo que se ha estimado”. (Alonso, 2020)
              li 
                i.fas.fa-caret-square-right(style="color: #CA4F4E")
                p #[b Estándar]: “Estos presupuestos se elaboran sobre bases científicas y mediante estudios estadísticos, por lo que el porcentaje de error se reduce significativamente y representan los resultados que se deben obtener”. (Alonso, 2020)
          .col-lg-5
            figure
              img(src='@/assets/curso/img5.png', style="width: auto;").m-auto
    separador.mb-5
    #t_1_4
    .titulo-segundo
      h2 1.4 Diferencia entre presupuestos, flujos de caja y flujo de efectivo
    p.mb-5 Según Jaramillo (2021), un presupuesto, un flujo de caja y un flujo de efectivo se diferencian en lo siguiente:
    .tabla-a.color-acento-botones
      table
        caption Nota. Datos tomados de Jaramillo (2021).
        thead
          tr
            th Presupuesto
            th Flujo de caja
            th Flujo de efectivo
        tbody
          tr
            td 
              ul.lista-ul
                li 
                  i.fas.fa-caret-square-right(style="color: #CA4F4E")
                  p Es un plan dirigido a cumplir una meta prevista, que debe cumplirse en determinado tiempo y bajo ciertas condiciones.
            td
              ul.lista-ul
                li 
                  i.fas.fa-caret-square-right(style="color: #CA4F4E")
                  p El flujo de caja refleja los movimientos financieros y el balance entre ingresos y egresos, tras el análisis de un periodo determinado.
                li 
                  i.fas.fa-caret-square-right(style="color: #CA4F4E")
                  p El flujo de caja se puede hacer de manera proyectada, con base en tendencias y resultados anteriores, para prever la dinámica de ingresos en el futuro.
                li 
                  i.fas.fa-caret-square-right(style="color: #CA4F4E")
                  p El flujo de caja evalúa de manera concreta un plazo de interés, para esclarecer los resultados obtenidos durante el mismo.
            td
              ul.lista-ul
                li 
                  i.fas.fa-caret-square-right(style="color: #CA4F4E")
                  p El flujo de efectivo muestra la disponibilidad de dinero en líneas generales, mostrando el capital de trabajo concreto y actualizado de la empresa.
                li 
                  i.fas.fa-caret-square-right(style="color: #CA4F4E")
                  p El flujo de efectivo se basa en toda la información financiera (incluso en la histórica).
    separador.mb-5
    #t_1_5
    .titulo-segundo
      h2 1.5 Presupuesto público
    .row.bg-color4.px-5
      .col-12
        .row.align-items-center.mb-5
          .col-lg-6.mb-4.mb-lg-0
            figure(data-aos="flip-right")
              img(src='@/assets/curso/img13.svg', style="width: auto;").m-auto
          .col-lg-6
            p.mb-4 Según postulados de Pérez y Merino (2013), se entiende por presupuesto público aquel documento que contiene los ingresos del Estado, los cuales serán utilizados para el pueblo y deben ser controlados por medio de leyes.
            .cajon.color-primario.p-4
              p.mb-0 Se conoce como presupuesto público a la estimación de gastos de un poder estatal para un periodo determinado. Este documento menciona la cifra de gastos que el Estado prevé asumir y los ingresos que espera obtener en el ejercicio en cuestión. La elaboración del presupuesto público está regulada por una ley. De este modo, se espera que el gobierno de turno no pueda cometer abusos con el dinero público. (Pérez y Merino, 2013).
        p.mb-5 A partir de lo anterior, es posible destacar una serie de principios que se dan como parte de la aprobación del presupuesto del Estado, el cual es avalado por el Congreso y tiene los siguientes postulados:
        .row.align-items-center.mb-5
          .col-lg-6.mb-4.mb-lg-0
            .row.align-items-center
              .col-12.d-flex
                img(src='@/assets/curso/img15.svg', style="width: 16%;")
                p.ms-3.mt-3.pb-3(style="border-bottom: 1px solid gray;") #[b Principio de publicidad]: esto quiere decir que cualquier persona debe ser capaz de visualizar dicho presupuesto.
              .col-12.d-flex
                img(src='@/assets/curso/img16.svg', style="width: 14%;")
                p.ms-3.mt-3.pb-3(style="border-bottom: 1px solid gray;") #[b Principio de universalidad]: significa que debe contener la totalidad de los gastos reales del Estado.
              .col-12.d-flex
                img(src='@/assets/curso/img17.svg', style="width: 28%;")
                p.ms-3.mt-3.pb-3(style="border-bottom: 1px solid gray;") #[b Principio de competencia popular]: en este se establece que la soberanía nacional recae en todos los habitantes del país, quienes, entre otras muchas cosas, deberán determinar el pago del Estado.
              .col-12.d-flex
                img(src='@/assets/curso/img18.svg', style="width: 24%;")
                p.ms-3.mt-3.pb-3(style="border-bottom: 1px solid gray;") #[b Principio de especialidad]: este principio va encaminado a establecer que los presupuestos determinados se utilicen para los objetivos planteados y no para otros gastos.
          .col-lg-6
            figure(data-aos="flip-left")
              img(src='@/assets/curso/img14.svg', style="width: auto;").m-auto
        p.mb-0 Los recursos de capital, los ingresos corrientes y la disponibilidad inicial son los tres ejes que se delimitan en el apartado de los ingresos. Los gastos, por su parte, están conformados por una serie de elementos que permiten que este apartado funcione, los cuales son: la inversión, el funcionamiento, la operación, el servicio de deuda o la disponibilidad final. En síntesis, el presupuesto público consiste en una previsión de aquellos ingresos que hacen parte del Estado y que por ende se van a destinar a un objetivo específico, esto quiere decir que dicho presupuesto plasma los ingresos y a dónde se destinarán los mismos. Todos los recursos que se fijan por medio de leyes tributarias, como los impuestos y las tasas, hacen parte de esos ingresos previstos del presupuesto. Mientras que las inversiones y los servicios en pro de la comunidad y los habitantes son parte de aquellos gastos que se realizan con el presupuesto público.
        
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
