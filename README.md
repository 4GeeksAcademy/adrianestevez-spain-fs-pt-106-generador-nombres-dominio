### Antes de empezar

- `npm install`
- `npm run dev`

### No veo mis cambios...

Cada vez que cambies cualquier archivo dentro de la carpeta `./src`, la URL pública del sitio web se actualizará automáticamente (es un proceso llamado hot deploy). Recuerda también actualizar limpiando la caché (`command+shift+r` en Mac, `control+shift+r` en PC y Linux).

### ¿Cómo incluyo más imágenes en mi proyecto?

Agrégalas dentro de la carpeta `./src/assets/img` y luego impórtalas desde cualquiera de tus archivos JS. Ejemplo: `import "../assets/img/rigo-baby.jpg";`.

### ¿Cómo incluyo más archivos JS?

Simplemente agrega los archivos en la carpeta src e importa los archivos/variables en tu app.js. Ejemplo: `import myVar from "./file2.js"`.

### ¿Cómo publico el sitio web?

Esta plantilla es 100% compatible con el alojamiento gratuito de GitHub Pages. Publica tu sitio web ejecutando:

```bash
$ npm run deploy
```
