<template>
  <div class="container rows">
    <header>
      <h3>I’m working on the <a href="http://senses-project.org/">visualisation of climate change scenarios</a> as a research associate at the <a href="https://uclab.fh-potsdam.de/">Urban Complexity Lab</a>. I&nbsp;co-run the interface and information design <a href="http://karat.studio">Studio Karat</a> and work as a free&shy;lancer in Berlin. Besides, I&nbsp;co-organise the <a href="https://datavis.berlin">DataVis Meetup</a>.</h3>
    </header>
    <section>
      <h4>Introduction</h4>
      <p>I’m interested in trans­­forming data and information into <em>visual struc­tures</em>. I have a critical and open under­standing of what visuali­­sations and interfaces are and reflect on their impact and meaning for our society. Other topics of interests include <em>post-digital media</em>, <em>privacy</em>, and <em>environmental issues</em>.</p>
      <p>I prefer to work for organisations, foundations, universities, journalists, and activists with open source licenses. I also give talks and teach at universities.</p>
      <p>I feel comfortable with common front-end, some back-end programming languages and a good range of graphic appli­cations. Most of my visuali­zations emerge from the combination of diverse tools ranging from data collection and analysis to custom visuali­sation.</p>
      <p>My private life is naturally influenced by my work and vice versa. Therefore, I am interested in all kinds of design, culture and technology, especially how we can use these tools to create a diverse, equal and fair world.</p>
      <p>Even though connected to my work, photography implies a break and recreation for me. Capturing something beautiful is a great combination of my love for aesthetics and the curiosity to explore foreign places.</p>
    </section>
    <section>
      <h4>Links</h4>
      <p>As my work and the projects I work on cover different diciplines and topics I like to keep them in seperate places:</p>
      <ul class="list">
        <li><a href="#">visualising.systems</a><br />My recent data visualisation and information design works</li>
        <li><a href="#">away.photos</a><br />A collection of my favourite photography projects</li>
        <li><a href="#">karat.studio</a><br />The interface and information studio I co-run</p></li>
        <li><a href="#">datavis.berlin</a><br />A collection of data visualisation links I build for the data vis Meetup</li>
        <li><a href="#">zeto.io</a><br />Some online tools I build over the last years</li>
      </ul>
    </section>
    <section>
      <h4>Vita</h4>
      <p>Jonas Parnow is a designer for information and data. After his media design Bachelor of Arts from the <a href="">RFH Cologne</a> in 2012 he started at the infographic agency <a href="">Infographics Group</a>. Besides that, he finished his design Master of Arts at the <a href="">FH Potsdam</a>. Since 2017, he works as a part-time research associate at the <a href="https://uclab.fh-potsdam.de/">Urban Complexity Lab</a> and works in a EU-funded research project on the visualisation of climate change scenarios. He is also working at the interface and information design <a href="http://karat.studio">Studio Karat</a> that he co-founded. He also co-organises the <a href="https://datavis.berlin">data visualisation meetup</a> in Berlin.</p>
    </section>
    <section lang="de">
      <h4>Lebenslauf</h4>
      <p>Jonas Parnow ist Designer für Informationen und Daten. Nach dem Mediendesign Bachelor an der <a href="">RFH Köln</a> hat er 2012 bei der Infografik-Agentur <a href="">Infographics Group</a> angefangen. Parallel zu seiner Arbeit dort hat er 2015 an der <a href="">FH Potsdam</a> einen Master in Interface Design abgeschlossen. Seit 2017 arbeitet er als wissenschaftlicher Mitarbeiter im <a href="https://uclab.fh-potsdam.de/">Urban Complexity Lab</a> und beschäftigt sich dort in einem EU-weiten Forschungsprojekt mit der Visualisierung von Klimawandel-Szenarien. Schon während seiner Arbeit in der Agentur hat er <a href="http://karat.studio">Studio Karat</a> gegründet – ein Interface- und Informationsdesign-Studio. Er co-organisiert außerdem das <a href="https://datavis.berlin">Daten Visualisierung Meetup</a> in Berlin.</p>
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
