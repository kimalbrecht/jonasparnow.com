<template>
  <div class="container rows">
    <header>
      <h3>I’m a research associate at the Urban Complexity Lab in Potsdam working on the visualisation of climate change scenarios. I co-run the interface and information design <a href="http://karat.studio">Studio Karat</a> and work as a freelancer in Berlin. Besides, I co-organise the DataVis Meetup.</h3>
    </header>
    <section>
      <h4>Introduction</h4>
      <p>Jonas Parnow ist Designer für Informationen und Daten. Nach dem Mediendesign Bachelor an der RFH Köln hat er 2012 bei der Infografik-Agentur »Golden Section Graphics« angefangen. Parallel zu seiner Arbeit dort hat er 2015 an der FH Potsdam einen Master in Interface Design abgeschlossen. Seit 2017 arbeitet er als wissenschaftlicher Mitarbeiter im »Urban Complexity Lab« und beschäftigt sich dort in einem EU-weiten Forschungsprojekt mit der Visualisierung von Klimawandel-Szenarien. Schon während seiner Arbeit in der Agentur hat er <a href="http://karat.studio">Studio Karat</a> gegründet – ein Interface- und Informationsdesign-Studio. Er co-organisiert außerdem das Daten Visualisierung Meetup in Berlin.</p>
    </section>
    <section>
      <h4>Links</h4>
      <p>Jonas Parnow ist Designer für Informationen und Daten. Nach dem Mediendesign Bachelor an der RFH Köln hat er 2012 bei der Infografik-Agentur »Golden Section Graphics« angefangen. Parallel zu seiner Arbeit dort hat er 2015 an der FH Potsdam einen Master in Interface Design abgeschlossen. Seit 2017 arbeitet er als wissenschaftlicher Mitarbeiter im »Urban Complexity Lab« und beschäftigt sich dort in einem EU-weiten Forschungsprojekt mit der Visualisierung von Klimawandel-Szenarien. Schon während seiner Arbeit in der Agentur hat er Studio Karat gegründet – ein Interface- und Informationsdesign-Studio. Er co-organisiert außerdem das Daten Visualisierung Meetup in Berlin.</p>
    </section>
    <section>
      <h4>Lebenslauf</h4>
      <p>Jonas Parnow ist Designer für Informationen und Daten. Nach dem Mediendesign Bachelor an der RFH Köln hat er 2012 bei der Infografik-Agentur »Golden Section Graphics« angefangen. Parallel zu seiner Arbeit dort hat er 2015 an der FH Potsdam einen Master in Interface Design abgeschlossen. Seit 2017 arbeitet er als wissenschaftlicher Mitarbeiter im »Urban Complexity Lab« und beschäftigt sich dort in einem EU-weiten Forschungsprojekt mit der Visualisierung von Klimawandel-Szenarien. Schon während seiner Arbeit in der Agentur hat er Studio Karat gegründet – ein Interface- und Informationsdesign-Studio. Er co-organisiert außerdem das Daten Visualisierung Meetup in Berlin.</p>
    </section>
  </div>
</template>

<script>
  export default {
    computed: {
    },
    methods: {
    },
    directives: {
    },
    components: {
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/variables";

  header {
    // background-color: orange;

    @include media-query($on-laptop) {
      & {
        height: calc(100vh - 1rem);
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
</style>
