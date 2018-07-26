<template>
  <div class="container rows">
    <section>
      <h4 class="page-title">Impressum</h4>
      <p>Verantwortlich für diese Homepage (Diensteanbieter) nach § 6 des Telemediengesetzes ist {{ contact.name.given }} {{ contact.name.family }}.</p>
      <Address />
    </section>
    <section>
      <h4>Gewährleistungsausschluss</h4>
      <p>Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.</p>
      <p>Die Autoren übernehmen keinerlei Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder Qualität der bereitgestellten Informationen. Haftungsansprüche gegen die Autoren, welche sich auf Schäden materieller oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung der dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und unvollständiger Informationen verursacht wurden, sind grundsätzlich ausgeschlossen, sofern seitens der Autoren kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt.</p>
      <p>Alle Angebote sind freibleibend und unverbindlich. Die Autoren behalten es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.</p>
      <p>Dieser Haftungsausschluss ist als Teil des Internetangebotes zu betrachten, von dem aus auf diese Seite verwiesen wurde. Sofern Teile oder einzelne Formulierungen dieses Textes der geltenden Rechtslage nicht, nicht mehr oder nicht vollständig entsprechen sollten, bleiben die übrigen Teile des Dokumentes in ihrem Inhalt und ihrer Gültigkeit davon unberührt.</p>
    </section>
    <section>
      <h4>Urheberrechtshinweise</h4>
      <p>Alle Teile dieser Webseite, insbesondere Grafiken, Fotos und Texte sind urheberrechtlich geschützt. Jegliche Verwertung von Inhalten dieser Seite, auch auszugsweise, bedarf der ausdrücklichen Zustimmung des Betreibers.</p>
      <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
    </section>
    <section>
      <h4>Externe Links</h4>
      <p>Jonas Parnow betont ausdrücklich, für den Inhalt externer Links nicht verantwortlich zu sein. Sie hat keinen Einfluss auf Inhalte und Gestaltung verlinkter Seiten und distanziert sich ausdrücklich von allen Links. Dies betrifft die Homepage und alle Unterseiten.</p>
    </section>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Address from '~/components/Address.vue'

  export default {
    head () {
      return {
        title: 'Imprint',
        titleTemplate: '%s – ' + this.page.title.main
      }
    },
    computed: {
      ...mapState([
        'page',
        'contact'
      ])
    },
    methods: {
    },
    directives: {
    },
    components: {
      Address
    }
  }
</script>

<style lang="scss" scoped>

</style>
