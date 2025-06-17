# Negocios que Fluyen – Web

Este proyecto usa [Eleventy (11ty)](https://www.11ty.dev/) como generador estático y se despliega en GitHub Pages.

## 🏃‍♂️ Cómo correr localmente

```bash
npm install
npm start
```

Accede a `http://localhost:8080` para ver la web.

## 🚀 Cómo publicar en GitHub Pages

1. Haz push al branch principal (`main`).
2. En el repositorio, ve a **Settings > Pages** y selecciona la carpeta `_site` desde el branch `main` como fuente.
3. GitHub Pages generará la web automáticamente.

## 🗂️ Estructura clave

- `.eleventy.js`: configuración de 11ty
- `_includes/`: fragmentos HTML reusables (`header.njk`, `footer.njk`)
- `base.njk`: layout principal
- `.md`: contenido de cada página
- `/css/`: estilos base
- `/images/`: logos e imágenes

## 📌 Notas

- Para usar dominio propio, configura un archivo `CNAME` con tu dominio.
- Revisa que las rutas de enlaces sean relativas (`/servicios/` etc.).

---

Con 💙 por el equipo de *Negocios que Fluyen*.