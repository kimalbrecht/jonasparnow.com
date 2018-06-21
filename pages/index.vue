<template>
  <div class="container rows">
    <header>
      <h3>I’m a research associate at the <a href="https://uclab.fh-potsdam.de/">Urban Complexity Lab</a> in Potsdam working on the <a href="http://senses-project.org/">visualisation of climate change scenarios</a>. I co-run the interface and information design <a href="http://karat.studio">Studio Karat</a> and work as a freelancer in Berlin. Besides, I co-organise the <a href="https://datavis.berlin">DataVis Meetup</a>.</h3>
    </header>
    <section>
      <h4>Introduction</h4>
      <p>I’m interested in trans­­forming data and information into visual struc­tures. I have a critical and open under­standing of what visuali­­sations and interfaces are. I like to create and reflection on their impact and meaning for our society. Other topics of interests include post-digital media, privacy, and environmental issues.</p>
      <p>I feel comfortable with common front-end and some back-end programming languages and a good range of graphic appli­cations. Most of my visuali­zations emerge from the combination of diverse tools ranging from scraping to data analysis and custom visuali­sation.</p>
      <p>My private life is naturally influenced by my work and vice versa. Therefore, I am interested in all kinds of design and technology appliance, especially the critical reflection on the effect new media formats have on us.</p>
      <p>Even though connected to my work, photography implies a break and recreation for me. Capturing something beautiful is a great combination of my love for aesthetics and the curiosity to explore foreign places.</p>
    </section>
    <section>
      <h4>Links</h4>
      <ul>
        <li>visualising.systems</li>
        <li>away.photos</li>
        <li>zeto.io</li>
      </ul>
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
