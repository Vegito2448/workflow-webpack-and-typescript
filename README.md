# **Entorno de trabajo de Webpack**

He notado que cuando estamos desarrollando en html, css y js. Nos vemos en la situación que tenemos mucho código o que al momento de producción por subir el mismo código en el que trabajamos en desarrollo no está comprimido para optimizar nuestra web. Y por eso hice un entorno de trabajo hecho en Webpack para que puedas tener un servidor de desarrollo y además poder optimizar tu código dándole al navegador un lenguaje comprimido.

---

## **Composicion de carpetas**

En este entorno de trabajo tendremos tres dos carpetas las cuales son:

- la configuracion de webpack
- la carpeta fuente o de desarrollo.

_En la capeta de Webpack:_

1. Webpack.Common.js
2. Webpack.dev.js
3. Webpack.prod.js

_En la carpeta src:_

1. **Assets:**
   > _Carpeta para los recursos visuales._
   1. Img.
   2. Icon.
   3. Media.
   4. Font.
2. **Partials:**
   > _importaciones de handlebars._
3. **JavaScript:**
   > _Carpetas para toda la logica de la pagina._
   1. Modules
   2. Helpers
   3. app.js
      > _El app.js es solo un archivo donde estaremos importando todos los archivos dentro de nuestra carpeta para posteriormente solamente exportar un solo archivo al index.js_
4. **Styles:**
   > _Carpeta de estylos de la pagina._
   1. Config
   2. Mixins
   3. Includes
   4. Pages
   5. styles.scss
      > _El style.scss|css es solo un archivo donde estaremos importando todos los archivos dentro de nuestra carpeta para posteriormente solamente exportar un solo archivo al index.js_
5. **Archivos globales**
   1. Index.hbs
      > _El index.hbs es el archivo donde estaremos importando nuestros partials_
   2. index.js
      > _El archivo Index.js es solo un archivo donde estaremos ubicando los archivos de nuestras carpetas assets, js, style_

---

### **Intrucciones posteriores**

Para empezar a usar el entorno solo tiene que ejecutar el:

---

```
npm install

```

---

Para iniciar el servidor de desarrollo ejecuta el:

```
npm start

```

---

Para empaquetar tu codigo ejecuta el:

```
npm build

```
