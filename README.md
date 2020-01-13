# OpenFIESTA Lab Platform
https://openfiesta.space/

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

### Contribution
Built with [Vuepress](https://vuepress.vuejs.org/).\
Use [Markdown](https://guides.github.com/features/mastering-markdown/) to contribute.

### Development
```
npm run dev
```
http://localhost:8080/

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
