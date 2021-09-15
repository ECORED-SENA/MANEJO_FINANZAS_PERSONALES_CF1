<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    figure.mb-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.bg-color1.px-5
      .col-12
        .row.align-items-center.mb-4
          .col-lg-6
            p Los presupuestos son conocidos como aquellas herramientas fundamentales que ayudan para la toma de decisiones de cualquier empresa, puesto que con estos se lleva a cabo una efectiva planeación, ejecución, ajuste y mejora de la economía empresarial. Además, permiten y facilitan las compras de nuevos insumos, pagos de aliados y pago del personal que se encuentra vinculado a las entidades. Asimismo, en el ámbito de lo familiar, los presupuestos no se escapan de convertirse en un tema importante, ya que dentro de las dinámicas de un hogar también es necesario ser capaces de medir los gastos que implican mantener una familia y tener bien fundamentadas las bases de los ingresos y sus fuentes, para lograr un equilibrio básico entre lo que se recibe y lo que se invierte en los gastos.
            p Hoy día, para el bienestar financiero, es necesario presupuestar los gastos y, a su vez, presupuestar los ingresos y adaptarlos a lo que se puede asumir como pérdida o desgaste financiero.
            .cajon.color-primario.p-4.mb-4
              p Es importante tener en cuenta que, si en la vida personal se lleva una salud financiera presupuestando, ejecutando y tomando acciones de mejora, será posible crecer integralmente y mejorar nuestra calidad de vida.
          .col-lg-6
            figure(data-aos="flip-right")
              img(src='@/assets/curso/img1.svg', style="width: auto;").m-auto
        p.mb-0 Para la elaboración de este componente, se abordaron varios autores conocidos en presupuestos, ingresos y gastos, de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos aquellos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos de la elaboración del presupuesto para el manejo de las finanzas personales.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
