# Sitio Web Institucional: Que No Nos Callen (QNNC)

> **"En una sociedad libre, las ideas se desafían con ideas, no con censura."**

Sitio web institucional oficial, moderno, responsive y de alto rendimiento para el **Movimiento Ciudadano "Que No Nos Callen ¡depende de ti!" (QNNC)**, plataforma cívica pro vida y pro familia en el Perú.

---

## 🌟 Características Principales

- **Diseño de Vanguardia e Identidad Propia**: Construido respetando rigurosamente el *Brand Book oficial de Rebranding* (colores institucionales, isotipo, tipografía, lemas y proporciones).
- **Benchmark UX/UI**: Inspirado en los mejores patrones de navegación, jerarquía visual y accesibilidad del sitio de referencia (*Una Voz Diferente*), adaptado con autenticidad a la realidad institucional de QNNC.
- **Fidelidad Documental**: 100% basado en los insumos oficiales provistos (`Info para el web site`, `Misión y visión`, `Rebranding`). No inventa información.
- **Optimización Integral de Imágenes**: Formatos modernos **WebP** con fallback en **JPEG**, corrección de orientación EXIF, dimensiones proporcionales y carga diferida (`loading="lazy"`).
- **Galería Multimedia Interactiva**: Sistema de filtrado por categorías (Congreso y Ley, Cumbres y Foros, Medios, Acción Social) y visor *Lightbox* accesible.
- **Formulario Cívico Seguro**: Validación en tiempo real, sanitización contra XSS, trampa anti-spam *honeypot* y arquitectura lista para Supabase / API REST / Webhooks.
- **SEO y Accesibilidad (WCAG AA)**: Metadatos Open Graph, Twitter Cards, JSON-LD Schema.org, navegación por teclado, soporte `prefers-reduced-motion`, `sitemap.xml` y `robots.txt`.

---

## 📁 Estructura del Proyecto

```text
WEB V1/
│
├── index.html                   # Documento principal HTML5 semántico
│
├── css/
│   └── styles.css               # Sistema de diseño, tokens CSS, componentes y responsive
│
├── js/
│   └── app.js                   # Controlador interactivo en vanilla JS (sin librerías pesadas)
│
├── assets/
│   ├── images/                  # Imágenes curadas y optimizadas en WebP y JPG
│   ├── logo/                    # Logotipo oficial, variantes transparente/blanco y favicons
│   ├── icons/                   # Recursos iconográficos
│   └── fonts/                   # Referencias y fuentes tipográficas
│
├── docs/
│   ├── documentacion.md         # Documentación técnica, arquitectura y mantenimiento
│   ├── cambios-version.md       # Comparativa de insumos vs. sitio desarrollado
│   └── Presentacion_Web_V1.pptx # Presentación ejecutiva en PowerPoint para directivos
│
├── seo/
│   ├── robots.txt               # Directivas para rastreadores de motores de búsqueda
│   └── sitemap.xml              # Mapa del sitio XML para indexación
│
└── README.md                    # Este archivo
```

---

## 🚀 Ejecución en Local

El sitio está desarrollado con tecnologías web estándar puras (**HTML5, CSS3, JavaScript Vanilla**), por lo que **no requiere instalación de frameworks pesados**.

### Opción 1: Abrir directamente en el navegador
Haga doble clic en el archivo `WEB V1/index.html` o ábralo desde su navegador preferido (Chrome, Edge, Firefox, Safari).

### Opción 2: Con servidor HTTP local (Recomendado para testing de módulos)
Desde PowerShell o terminal:

```bash
# Con Python
cd "c:\Users\Usuario\Documents\Danny 2026\Olga\QNNC WEB\WEB V1"
python -m http.server 8080

# Luego abrir en el navegador:
# http://localhost:8080
```

```bash
# Con Node.js (npx serve)
npx serve "WEB V1"
```

---

## 🔌 Configuración e Integración de Backend

El formulario de contacto institucional cuenta con una capa de frontend completa y validada. Para conectar el envío a una base de datos o servicio de notificaciones:

### Integración con Supabase
1. Cree una tabla `contactos_qnnc` en Supabase con las columnas: `nombre`, `email`, `telefono`, `motivo`, `mensaje`, `created_at`.
2. En `WEB V1/js/app.js`, descomente y agregue sus claves públicas en el manejador del formulario:
   ```javascript
   // Ejemplo con Supabase JS Client:
   const { data, error } = await supabase
     .from('contactos_qnnc')
     .insert([formDataPayload]);
   ```

### Integración con Webhooks (Make / Zapier / WhatsApp API)
En `app.js`, puede enviar un `fetch(POST)` al endpoint de su webhook con el objeto `formDataPayload` para recibir notificaciones inmediatas en Telegram o correo.

---

## 🌐 Opciones de Despliegue

El sitio puede desplegarse en segundos en cualquier proveedor de hosting estático:
- **Cloudflare Pages / Vercel / Netlify**: Conectar el repositorio de GitHub y seleccionar la carpeta `WEB V1`.
- **GitHub Pages**: Configurar la rama principal apuntando a la carpeta de publicación.
- **Hosting Tradicional (cPanel / Apache / Nginx)**: Subir todo el contenido de `WEB V1/` a la carpeta `public_html`.

---

## 🛡️ Seguridad y Buenas Prácticas

- Sin claves privadas expuestas en el código cliente.
- Protección básica anti-bots con campo trampa *honeypot*.
- Sanitización de strings antes de procesar el DOM.
- Certificado SSL obligatorio en producción.

---

## 📞 Canales Oficiales del Movimiento

- **Teléfono / WhatsApp**: [+51 913 227 935](https://wa.me/51913227935)
- **Correo Electrónico**: `quenonoscallenperu@gmail.com`
- **Redes Sociales**: `@quenonoscallenperu` (Instagram, Facebook, YouTube, TikTok)

---
*Movimiento Ciudadano Que No Nos Callen — ¡depende de ti!*
