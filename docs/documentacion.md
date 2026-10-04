# Documentación Técnica y Arquitectura del Sitio Web Institucional

**Movimiento Ciudadano: "Que No Nos Callen — ¡depende de ti!" (QNNC)**  
*Documento de Arquitectura de Software, UX/UI y Manual de Mantenimiento*  
*Fecha: Octubre 2026 | Versión: 1.0.0*

---

## 1. Objetivo del Proyecto

El objetivo principal de este desarrollo ha sido diseñar y construir desde cero la plataforma web oficial para el movimiento cívico peruano **"Que No Nos Callen" (QNNC)**. La solución web busca:
1. **Consolidar la Presencia Digital**: Dotar a la organización de un portal moderno, confiable y oficial que refleje el nuevo posicionamiento tras el proceso de rebranding institucional.
2. **Difundir la Verdad de los Hechos**: Exponer con claridad y veracidad el origen del movimiento (2024), la defensa jurídica respaldada por ADF International y la victoria legislativa de 2025 que restableció el uso de los baños públicos conforme al sexo biológico en el Perú.
3. **Fomentar la Participación y Adhesión Cívica**: Facilitar canales de contacto directos (WhatsApp institucional, correo y formulario validado) para sumar voluntarios, líderes comunitarios y ciudadanos comprometidos con la defensa de la vida y la familia.

---

## 2. Arquitectura del Sistema

La web ha sido diseñada bajo una arquitectura **JAMstack Estática Moderna (HTML5 Semántico + CSS3 con Tokens + JavaScript Vanilla)**, priorizando:
- **Zero-Dependency Core**: No depende de frameworks pesados como React o Angular para renderizado básico, lo que garantiza tiempos de carga casi instantáneos (Time to First Meaningful Paint < 0.6s).
- **Diseño Orientado a Componentes CSS**: Utilización de metodología modular basada en Custom Properties (Variables CSS) que facilita la tematización y el mantenimiento.
- **Capas Desacopladas**:
  - *Capa de Presentación*: HTML5 accesible y semántico (`<header>`, `<main>`, `<section>`, `<article>`, `<figure>`, `<footer>`).
  - *Capa de Estilos*: Hoja de estilo unificada con tokens de diseño del Brand Book oficial.
  - *Capa de Comportamiento*: Módulo `app.js` encapsulado con event delegation, IntersectionObserver para scroll reveal y gestor de estados para formularios y galería lightbox.

---

## 3. Estructura de Directorios

```text
WEB V1/
│
├── index.html                   # Entrada principal de la aplicación web
│
├── css/
│   └── styles.css               # Sistema de diseño, tokens, layouts y responsive
│
├── js/
│   └── app.js                   # Interactividad, validaciones, lightbox y animaciones
│
├── assets/
│   ├── images/                  # 19 imágenes seleccionadas y optimizadas en WebP y JPG
│   ├── logo/                    # Variantes del logotipo (original, transparente, blanco, favicons)
│   ├── icons/                   # Recursos iconográficos
│   └── fonts/                   # Referencias tipográficas
│
├── docs/
│   ├── documentacion.md         # Este documento técnico exhaustivo
│   ├── cambios-version.md       # Bitácora comparativa insumos iniciales vs. entrega final
│   └── Presentacion_Web_V1.pptx # Presentación ejecutiva en diapositivas
│
├── seo/
│   ├── robots.txt               # Directivas para crawlers
│   └── sitemap.xml              # Índice estructurado para motores de búsqueda
│
└── README.md                    # Guía rápida de despliegue y uso
```

---

## 4. Tecnologías y Estándares Utilizados

| Categoría | Tecnología / Estándar | Justificación |
|---|---|---|
| **Estructura** | HTML5 Semántico + Microdatos Schema.org | Máxima accesibilidad (WCAG 2.1 AA) e indexabilidad en buscadores. |
| **Estilos** | CSS3 Vanilla + Flexbox + CSS Grid | Control total del diseño, sin sobrecarga ni conflictos de versiones. |
| **Interactividad** | JavaScript Moderno (ES6+) | Código nativo ligero sin dependencias externas pesadas. |
| **Iconografía** | Font Awesome 6.5.1 (CDN async) | Cobertura integral de iconografía cívica, institucional y social. |
| **Fuentes Web** | Google Fonts (`Outfit` y `Plus Jakarta Sans`) | Equivalentes web de alta legibilidad para `Tobi Greek` y `Leelawadee`. |
| **Formatos de Imagen** | WebP + Fallback JPEG | Reducción de hasta un 75% en peso de imágenes manteniendo alta resolución. |

---

## 5. Componentes Principales de la Plataforma

### 5.1. Barra de Anuncio Cívico (`.top-announcement`)
Barra fija superior con gradiente institucional azul que destaca el hito de la ley promulgada por el Congreso, orientando al usuario inmediatamente hacia la evidencia histórica.

### 5.2. Header Fijo Inteligente (`.site-header`)
- **Navegación Desktop**: Menú con indicador de enlace activo dinámico según el desplazamiento de la página.
- **Navegación Móvil**: Menú lateral tipo "drawer" accesible, con botón hamburguesa animado, fondo oscurecido (`overlay`), soporte para tecla `Escape` y bloqueo de scroll al abrirse.

### 5.3. Hero Section de Alto Impacto (`.hero-section`)
- Badge animado con lema del movimiento.
- Título principal oficial: *"En una sociedad libre, las ideas se desafían con ideas, no con censura."*
- Contadores de impacto cívico (Fundación 2024, 100% Defensa Ganada, Ley 8457).
- Tarjeta fotográfica institucional de Olga Izquierdo con badges flotantes animados.

### 5.4. Quiénes Somos y Liderazgo (`#nosotros`)
- Sección narrativa con foto de Olga Izquierdo en medios de comunicación.
- 3 pilares clave: Participación Ciudadana Real, Respaldo Jurídico y Protección de Vulnerables.

### 5.5. Misión y Visión (`#mision-vision`)
- Tarjetas con bordes en gradiente, citas textuales de los documentos oficiales y píldoras de pilares estratégicos.

### 5.6. Valores Institucionales (`#valores`)
- Rejilla responsiva con los 5 valores innegociables de QNNC, numeración tipográfica y micro-hover con cambio de color.

### 5.7. Línea de Tiempo e Hito Histórico (`#historia`)
- Timeline interactivo en fondo oscuro (`#090e1f`) con nodos iluminados (cyan, azul, rojo) detallando el caso del Aeropuerto Jorge Chávez, la defensa con ADF International y Dr. Juan José Uchuya, y la aprobación de la ley en el Congreso.
- Mosaico de evidencia fotográfica con carteles reales `#Ley8457SíVa`.

### 5.8. Qué Hacemos (`#que-hacemos`)
- 4 tarjetas de actividades con etiquetas flotantes e imágenes reales de cumbres, conferencias en el Congreso y actividades sociales comunitarias.

### 5.9. Galería Multimedia con Filtros y Lightbox (`#galeria`)
- Pestañas de filtrado dinámico en tiempo real (`Todas`, `Congreso y Ley`, `Cumbres y Foros`, `Medios y Difusión`, `Acción Social`).
- Modal Lightbox para visualización a pantalla completa con navegación intuitiva y foco accesible.

### 5.10. Identidad y Rebranding (`#rebranding`)
- Desglose del Brand Book: Explicación del isotipo (megáfono cívico y bocadillo de diálogo), muestras cromáticas con códigos HEX oficiales y especificación tipográfica.

### 5.11. Formulario de Contacto Funcional y Canales Oficiales (`#contacto`)
- Tarjeta de canales oficiales con enlaces directos a WhatsApp (+51 913 227 935) y redes sociales (@quenonoscallenperu).
- Formulario accesible con validación estricta en el cliente, campo trampa anti-spam (`honeypot`), indicador de envío (`spinner`) y generación de código de ticket de registro.

### 5.12. Botones de Acción Flotantes
- Botón directo de WhatsApp con tooltip informativo.
- Botón de retorno al inicio ("Back to Top") con aparición progresiva al superar los 400px de scroll.

---

## 6. Sistema de Identidad Visual y Tokens

El sistema se derivó con absoluta precisión del Brand Book oficial de QNNC:

| Nombre del Token | Valor HEX / CSS | Significado y Aplicación |
|---|---|---|
| `--color-brand-red` | `#f42217` | Rojo Libertad: Botones primarios, llamados de atención, acentos y exclamaciones. |
| `--color-brand-navy` | `#052c92` | Azul Institucional: Títulos principales, tarjetas clave, footer y seriedad institucional. |
| `--color-brand-blue` | `#003ff9` | Azul Firmeza: Enlaces activos, gradientes dinámicos y detalles tecnológicos. |
| `--color-brand-cyan` | `#00d2f2` | Cyan Esperanza: Kickers en fondos oscuros, badges y acentos sutiles. |
| `--color-bg-dark` | `#090e1f` | Fondo oscuro de alto contraste para la sección de historia y precedentes. |
| `--font-heading` | `'Outfit', sans-serif` | Tipografía geométrica robusta equivalente a `Tobi Greek Cyrillic`. |
| `--font-body` | `'Plus Jakarta Sans', sans-serif` | Tipografía limpia y humanista equivalente a `Leelawadee`. |

---

## 7. Accesibilidad (a11y) y SEO

- **Contraste de Color**: Ratios de contraste superiores a 4.5:1 en todos los textos sobre fondos claros y oscuros.
- **Navegación por Teclado**: Enlace "Saltar al contenido principal", foco visible en todos los elementos interactivos (`:focus-visible`).
- **Soporte para Movimiento Reducido**: `@media (prefers-reduced-motion: reduce)` desactiva animaciones y transiciones para usuarios sensibles.
- **Etiquetas Semánticas y ARIA**: `role="tab"`, `aria-selected`, `aria-expanded`, `aria-controls` en controles dinámicos.
- **SEO On-Page**: Título optimizado, meta descripción de 155 caracteres, Open Graph con imagen de 1200x630, Twitter Cards, `robots.txt`, `sitemap.xml` y microdatos `schema.org/Organization`.

---

## 8. Guía de Instalación y Mantenimiento

### 8.1. Despliegue en Servidores Web
1. Copie el directorio `WEB V1` en la raíz de su servidor web (`public_html` en Apache/Nginx).
2. Asegúrese de que el certificado SSL (HTTPS) esté activo.

### 8.2. Actualización de Textos e Información
- Los textos del sitio se encuentran en `index.html`. Están organizados mediante etiquetas semánticas y comentarios descriptivos (`<!-- 1. HERO SECTION -->`, etc.).
- Nunca modifique la información histórica o legal sin aprobación de la dirección institucional.

### 8.3. Incorporación de Nuevas Fotografías
1. Guarde la nueva fotografía en `WEB V1/assets/images/`.
2. Para rendimiento óptimo, conviértala a formato `.webp` con ancho máximo de 1280px.
3. Agréguela en la sección correspondiente de `index.html` siguiendo la estructura de `.gallery-item` o `.activity-card`.

---

## 9. Recomendaciones Futuras

1. **Integración con Base de Datos**: Conectar el formulario con Supabase usando la función cliente ya estructurada en `app.js`.
2. **Boletín Ciudadano**: Añadir una casilla de suscripción a newsletter para el envío de comunicados y alertas legislativas.
3. **Sección de Descargables**: Publicar en PDF el texto íntegro de la ley promulgada y materiales de formación cívica en alta resolución.
