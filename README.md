# Christopher Wratils Homepage

Die Seite basiert auf den JavaScript-Frameworks [Vue](https://vuejs.org/) und [Nuxt](https://nuxtjs.org/). Die Seite wird auf [Github](https://github.com/) gehostet und wird von [Netlify](https://www.netlify.com/) bei jedem Push neu als statisches HTML und JavaScript generiert.

## Ordnerstruktur

Der Header (Logo und Links) und Footer (Kontakt, Links) werden in `layouts/default` bearbeitet.

Die Inhalte der Seiten (Home, Publications, Teaching, Data) werden in den jeweiligen Datein in `pages` bearbeitet.
Außer auf der Startseite werden die Inhalte hauptsächlich als JavaScript-Objekte weiter unten gespeichert.

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```
