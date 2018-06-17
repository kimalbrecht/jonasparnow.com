import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    page: {
      title: 'Jonas Parnow',
      description: 'I’m a research associate at the Urban Complexity Lab in Potsdam working on the visualisation of climate change scenarios. I co-run the interface and information design Studio Karat and work as a freelancer in Berlin. Besides, I co-organise the DataVis Meetup.',
      url: 'https://jonasparnow.de',
      verification: {
        google: 'xxx'
      },
      lang: 'en_US'
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
      },
      tel: {
        value: '00492214705067',
        label: '+49 221 470-5067'
      },
      mail: {
        name: 'C.Wratil',
        host: 'uni-koeln.de'
      },
      social: {
        twitter: false,
        github: false,
        facebook: false
      }
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  }
})

export default store
