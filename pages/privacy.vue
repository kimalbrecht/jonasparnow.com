<template>
  <div class="container rows">
    <section>
      <h4 class="page-title">Datenschutzerklärung</h4>
      <p>Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:</p>
      <Address />
      <h5>Ihre Betroffenenrechte</h5>
      <p>Unter den angegebenen Kontaktdaten unseres Datenschutzbeauftragten können Sie jederzeit folgende Rechte ausüben:</p>
      <ul>
        <li>Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung,</li>
        <li>Berichtigung unrichtiger personenbezogener Daten,</li>
        <li>Löschung Ihrer bei uns gespeicherten Daten,</li>
        <li>Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen,</li>
        <li>Widerspruch gegen die Verarbeitung Ihrer Daten bei uns und</li>
        <li>Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben.</li>
      </ul>
      <p>Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.</p>
      <p>Sie können sich jederzeit mit einer Beschwerde an die für Sie zuständige Aufsichtsbehörde wenden. Ihre zuständige Aufsichtsbehörde richtet sich nach dem Bundesland Ihres Wohnsitzes, Ihrer Arbeit oder der mutmaßlichen Verletzung. Eine Liste der Aufsichtsbehörden (für den nichtöffentlichen Bereich) mit Anschrift finden Sie unter: <a href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html" target="_blank" rel="noopener">www.bfdi.bund.de</a>.</p>
      <h5>Zwecke der Datenverarbeitung durch die verantwortliche Stelle und Dritte</h5>
      <p>Wir verarbeiten Ihre personenbezogenen Daten nur zu den in dieser Datenschutzerklärung genannten Zwecken. Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den genannten Zwecken findet nicht statt. Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn:</p>
      <ul>
        <li>Sie Ihre ausdrückliche Einwilligung dazu erteilt haben,</li>
        <li>die Verarbeitung zur Abwicklung eines Vertrags mit Ihnen erforderlich ist,</li>
        <li>die Verarbeitung zur Erfüllung einer rechtlichen Verpflichtung erforderlich ist,</li>
      </ul>
      <p>die Verarbeitung zur Wahrung berechtigter Interessen erforderlich ist und kein Grund zur Annahme besteht, dass Sie ein überwiegendes schutzwürdiges Interesse an der Nichtweitergabe Ihrer Daten haben.</p>
      <h5>Löschung bzw. Sperrung der Daten</h5>
      <p>Wir halten uns an die Grundsätze der Datenvermeidung und Datensparsamkeit. Wir speichern Ihre personenbezogenen Daten daher nur so lange, wie dies zur Erreichung der hier genannten Zwecke erforderlich ist oder wie es die vom Gesetzgeber vorgesehenen vielfältigen Speicherfristen vorsehen. Nach Fortfall des jeweiligen Zweckes bzw. Ablauf dieser Fristen werden die entsprechenden Daten routinemäßig und entsprechend den gesetzlichen Vorschriften gesperrt oder gelöscht.</p>
      <h5>SSL-Verschlüsselung</h5>
      <p>Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen, verwenden wir dem aktuellen Stand der Technik entsprechende Verschlüsselungsverfahren (z. B. SSL) über HTTPS.</p>
      <h5>Verwendung von Adobe Typekit</h5>
      <p>Wir setzen Adobe Typekit zur visuellen Gestaltung unserer Website ein. Typekit ist ein Dienst der Adobe Systems Software Ireland Ltd. der uns den Zugriff auf eine Schriftartenbibliothek gewährt. Zur Einbindung der von uns benutzten Schriftarten, muss Ihr Browser eine Verbindung zu einem Server von Adobe in den USA aufbauen und die für unsere Website benötigte Schriftart herunterladen. Adobe erhält hierdurch die Information, dass von Ihrer IP-Adresse unsere Website aufgerufen wurde. Weitere Informationen zu Adobe Typekit finden Sie in den Datenschutzhinweisen von Adobe, die Sie hier abrufen können: <a href="http://www.adobe.com/privacy/typekit.html" target="_blank" rel="noopener">adobe.com/privacy/typekit.html</a></p>
      <h5>Änderung unserer Datenschutzbestimmungen</h5>
      <p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.</p>
      <h5>Fragen an den Datenschutzbeauftragten</h5>
      <p>Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an die für den Datenschutz verantwortliche Person in unserer Organisation:</p>
      <Address />
    </section>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Address from '~/components/Address.vue'

  export default {
    head () {
      return {
        title: 'Privacy',
        titleTemplate: '%s – ' + this.page.title
      }
    },
    computed: {
      ...mapState([
        'page'
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
