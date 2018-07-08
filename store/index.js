import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    page: {
      title: 'Jonas Parnow',
      description: 'Jonas Parnow works as a research associate at the Urban Complexity Lab. He co-runs the design Studio Karat and works as a free­lancer in Berlin.',
      url: 'https://jonasparnow.de',
      lang: 'en-GB'
    },
    header: {
      title: 'Jonas Parnow',
      subtitle: 'designer for information and data based in Berlin'
    },
    contact: {
      name: {
        given: 'Jonas',
        family: 'Parnow'
      },
      adr: {
        street: 'Bernhard-Lichtenberg-Straße 1',
        postal: '10407',
        city: 'Berlin',
        country: 'Germany'
      }
    }
  }
})

export default store
