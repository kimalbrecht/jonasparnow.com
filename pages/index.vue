<template>
  <div class="container rows">
    <header>
      <h3>Jonas Parnow works on the <a href="http://senses-project.org/">vi&shy;su&shy;al&shy;iza&shy;tion of climate change scenarios</a> as a research associate at the <a href="https://uclab.fh-potsdam.de/">Urban Complexity Lab</a>. He&nbsp;co-runs the inter&shy;face and in&shy;for&shy;ma&shy;tion design <a href="http://karat.studio">Studio Karat</a> and works as a free&shy;lancer in Berlin.</h3>
    </header>
    <section>
      <h4>Introduction</h4>
      <p>I’m interested in trans­­forming data and in&shy;for&shy;ma&shy;tion into <em>visual struc­tures</em>. I have a critical and open under­standing of what vi&shy;su&shy;al&shy;iza&shy;tion and inter&shy;faces are and reflect on their impact and meaning for our society. Other topics of interests include <em>post-digital media</em>, <em>privacy</em>, and <em>en&shy;vi&shy;ron&shy;men&shy;tal issues</em>.</p>
      <p>I prefer to work for organisations, foundations, universities, journalists, and activists with open source licenses. I also give talks and teach at universities.</p>
      <p>I feel comfortable with common front-end, some back-end programming languages and a good range of graphic appli­cations. Most of my vi&shy;su&shy;al&shy;iza&shy;tions emerge from the combination of diverse tools ranging from data collection and analysis to custom vi&shy;su&shy;al&shy;iza&shy;tion.</p>
      <p>My private life is naturally influenced by my work and vice versa. Therefore, I am interested in all kinds of <em>design</em>, <em>culture</em> and <em>technology</em>, especially how we can use these tools to create a diverse, equal and fair world.</p>
      <p>Even though connected to my work, photography implies a break and recreation for me. Capturing something beautiful is a great combination of my love for aesthetics and the curiosity to explore foreign places.</p>
    </section>
    <section>
      <h4>Links</h4>
      <p>As my work and the projects I work on cover different diciplines and topics I like to keep them in seperate places:</p>
      <ul class="list">
        <li><a href="http://visualising.systems">visualising.systems</a><br />My recent data vi&shy;su&shy;al&shy;iza&shy;tion and in&shy;for&shy;ma&shy;tion design works</li>
        <li><a href="https://away.photos">away.photos</a><br />A collection of my favourite photography projects</li>
        <li><a href="http://karat.studio">karat.studio</a><br />The inter&shy;face and in&shy;for&shy;ma&shy;tion studio I co-run</p></li>
        <li><a href="https://datavis.berlin">datavis.berlin</a><br />A collection of data vi&shy;su&shy;al&shy;iza&shy;tion links I build for the data vis Meetup</li>
        <li><a href="http://zeto.io">zeto.io</a><br />Some online tools I build over the last years</li>
      </ul>
    </section>
    <section>
      <h4>Vita</h4>
      <p>Jonas Parnow is a designer for in&shy;for&shy;ma&shy;tion and data. After his media design Bachelor of Arts from the <a href="https://www.rfh-koeln.de/">RFH Cologne</a> in 2012 he started at the info&shy;graphic agency <a href="https://infographics.group/">Infographics Group</a>. Besides that, he finished his design Master of Arts at the <a href="https://www.fh-potsdam.de/studieren/fachbereiche/design/">FH Potsdam</a>. Since 2017, he works as a part-time research associate at the <a href="https://uclab.fh-potsdam.de/">Urban Complexity Lab</a> and works in a EU-funded research project on the vi&shy;su&shy;al&shy;iza&shy;tion of climate change scenarios. He is also working at the inter&shy;face and in&shy;for&shy;ma&shy;tion design <a href="http://karat.studio">Studio Karat</a> that he co-founded. He also co-organises the <a href="https://datavis.berlin">data vi&shy;su&shy;al&shy;iza&shy;tion meetup</a> in Berlin.</p>
    </section>
    <section lang="de">
      <h4>Lebenslauf</h4>
      <p>Jonas Parnow ist Designer für Informationen und Daten. Nach dem Mediendesign Bachelor an der <a href="https://www.rfh-koeln.de/">RFH Köln</a> hat er 2012 bei der Infografik-Agentur <a href="https://infographics.group/">Infographics Group</a> angefangen. Parallel zu seiner Arbeit dort hat er 2015 an der <a href="https://www.fh-potsdam.de/studieren/fachbereiche/design/">FH Potsdam</a> einen Master in Interface Design abgeschlossen. Seit 2017 arbeitet er als wissen&shy;schaftlicher Mitarbeiter im <a href="https://uclab.fh-potsdam.de/">Urban Complexity Lab</a> und beschäftigt sich dort in einem EU-weiten Forschungs&shy;projekt mit der Visualisierung von Klimawandel-Szenarien. Schon während seiner Arbeit in der Agentur hat er <a href="http://karat.studio">Studio Karat</a> gegründet – ein Interface- und Informations&shy;design-Studio. Er co-organisiert außerdem das <a href="https://datavis.berlin">Daten Visualisierung Meetup</a> in Berlin.</p>
    </section>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    head () {
      return {
        title: this.header.title + ' – ' + this.header.subtitle
      }
    },
    computed: {
      ...mapState([
        'header'
      ])
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/variables";

  header {
    margin: $spacing 0;

    @include media-query($on-laptop) {
      & {
        margin: 0;
        height: calc(88vh - 1rem);
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
</style>
