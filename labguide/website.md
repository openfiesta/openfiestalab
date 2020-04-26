---
home: true
heroText: About the website
tagline: MIT Licensed | Powered by Vuepress & Vuetify
title: 
footer:  MIT Licensed | Powered by Vuepress & Vuetify | Copyright © 2019-2020 Open FIESTA

---

## OpenFIESTA Lab Platform

This website is completely open source under MIT License. Maintain by Open FIESTA Lab team and community. Powered by Vuepress and Vuetify. And collaborate with Markdown.


[https://openfiesta.space/](https://openfiesta.space/)

<br>

More info on
[https://github.com/openfiesta/openfiestalab](https://github.com/openfiesta/openfiestalab)

<br>

### Install node
Make sure you have node.js and npm installed (and updated).

* __Linux (Debian/Ubuntu):__

```
sudo apt-get update
sudo apt-get install nodejs
sudo apt-get install npm
```

* __MacOS:__

Through [Homebrew](https://brew.sh/) :beer::

```
brew install node
```

If needed, you can update npm typing **_npm install -g npm_**

---
### Clone the repository into a local directory

```
git clone https://github.com/openfiesta/openfiestalab
cd openfiestalab
```


### Install dependencies (locally)
Make sure you are at _openfiestalab_ directory.

```
npm install vuepress
npm install
```

---
### Contribution and development
Built with [Vuepress](https://vuepress.vuejs.org/).

Use [Markdown](https://guides.github.com/features/mastering-markdown/) to contribute and run a local test version:
```
npm run dev
```
Updated real-time in http://localhost:8080/

---
### Build package
```
npm run build
```
Static files generated in openfiestalab/public directory.

---

### Deployment
```
npm run deploy
```
Deploy to https://openfiesta.space/
