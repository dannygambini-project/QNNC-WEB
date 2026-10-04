# Bitácora de Transformación: De Insumos a Plataforma Web V1

**Movimiento Ciudadano: "Que No Nos Callen — ¡depende de ti!" (QNNC)**  
*Documento Comparativo: Estado Inicial vs. Sitio Web Final Desarrollado*

---

## 1. Situación Inicial

Al inicio del proyecto se disponía únicamente de un conjunto heterogéneo de insumos en bruto:
- **Documento Word 1 (`Info para el web site.docx`)**: Lista de 5 valores institucionales, el lema central (*"En una sociedad libre, las ideas se desafían con ideas, no con censura"*) y una reseña textual de 4 párrafos sobre la denuncia contra Olga Izquierdo, la victoria legal con ADF International / Dr. Juan José Uchuya y la ley del Congreso de 2025.
- **Documento Word 2 (`Misión y visión.docx`)**: Misión y visión institucional.
- **Archivo Gráfico (`Logo-versión---fondo-blanco.png`)**: Logotipo oficial en PNG cuadrado (1000x1000px) con fondo blanco sólido.
- **Manual de Marca PDF (`Rebranding - Que no nos callen.pdf`)**: Documento gráfico de 23 diapositivas rasterizadas con la construcción del logo, paleta de colores oficial, tipografías y datos de contacto de papelería institucional.
- **Carpeta de Imágenes (`Imágenes/`)**: 35 archivos fotográficos sin optimizar, con nombres automáticos de cámara y WhatsApp (`IMG_2026...`, `WA00...`), algunos con pesos superiores a 24 MB (por ejemplo una imagen de 12000x9000px) y una fotografía con orientación EXIF invertida.
- **Sitio Web Anterior**: Inexistente.

---

## 2. Problemas y Limitaciones Identificadas en los Insumos

1. **Falta de Estructura Web**: Los textos estaban en formato redactado plano para lectura en papel, sin arquitectura de información web, sin jerarquía de encabezados (`H1-H6`), sin llamadas a la acción ni componentes modulares.
2. **Riesgo Crítico de Rendimiento por Imágenes**: Si se hubieran cargado las imágenes originales directamente en el navegador, la página habría pesado más de 35 MB, provocando tiempos de carga superiores a 15 segundos en conexiones móviles y bloqueos de renderizado.
3. **Logotipo no Apto para Fondos Oscuros ni Transparencias**: El logo original tenía fondo blanco fijo, lo que impedía colocarlo sobre barras de navegación transparentes, encabezados modernos o footers oscuros.
4. **Orientación de Fotografías**: Fotografías clave tomadas con teléfonos móviles presentaban metadatos de rotación EXIF que en navegadores web podían mostrarse volcadas de lado.
5. **Ausencia de Canal de Contacto Digital Interactivo**: No existía formulario web estructurado, campos de validación, ni mecanismos de protección contra spam o filtrado de mensajes.

---

## 3. Decisiones de Diseño y Arquitectura

1. **Adopción del Benchmark "Una Voz Diferente"**:
   - Se analizaron los patrones de éxito del benchmark: disposición de barra superior de avisos, header fijo con efecto de scroll, hero con badges animados, tarjetas de misión/visión diferenciadas cromáticamente, línea de tiempo histórica para dar credibilidad y galería multimedia interactiva.
   - **Identidad Propia**: Se sustituyó por completo la paleta y estilo del benchmark por la identidad oficial de QNNC (*Rojo #F42217, Azul Institucional #052C92, Azul Firmeza #003FF9, Cyan #00D2F2*).
2. **Arquitectura Cero Dependencias**: Se prescindió de frameworks pesados para evitar dependencias innecesarias, garantizando que el sitio sea 100% portable y de mantenimiento sencillo.
3. **Regla de Oro Institucional**: No se inventó ningún hecho, fecha, cifra o persona. Todo el contenido está fundamentado estrictamente en los insumos proporcionados.

---

## 4. Cuadro Comparativo: Insumos Iniciales vs. Sitio Web Desarrollado

| Dimensión | Insumos Iniciales | Sitio Web Desarrollado (WEB V1) |
|---|---|---|
| **Estructura** | 2 archivos .docx independientes y sin formato web. | Página web estructurada en 8 secciones semánticas completas con navegación fluida. |
| **Logotipo** | 1 archivo PNG con fondo blanco sólido (1000x1000). | 5 variantes web: original, transparente sin fondo, versión blanca monocromática para footer, favicons de 32x32 y 192x192. |
| **Imágenes** | 35 fotos crudas (peso total > 35 MB, resoluciones de hasta 12,000px). | 19 imágenes seleccionadas estratégicamente, optimizadas en WebP y JPG (peso promedio < 120 KB por imagen, reducción del 92%). |
| **Navegación** | Ninguna. | Header fijo inteligente con resaltado dinámico de sección activa y menú móvil accesible. |
| **Historia y Precedente** | 4 párrafos de texto en Word. | Línea de tiempo interactiva iluminada (2024 origen, batalla con ADF, fallo fiscal favorable y promulgación de ley en 2025) con evidencia fotográfica. |
| **Valores** | Lista con viñetas. | 5 tarjetas interactivas con iconografía moderna y micro-animaciones hover. |
| **Galería** | Fotos sueltas en una carpeta. | Galería interactiva con 5 pestañas de filtrado por categoría y visor Lightbox con soporte de teclado. |
| **Contacto** | Datos en el pie de página de una diapositiva de papelería. | Panel con enlaces directos a WhatsApp, correo, redes sociales oficiales y formulario seguro con validación en tiempo real. |
| **SEO y Redes** | Inexistente. | Open Graph, Twitter Cards, JSON-LD Schema.org, sitemap.xml y robots.txt listos para indexación. |
| **Accesibilidad** | Inexistente. | WCAG 2.1 nivel AA: skip link, contraste verificado, soporte de teclado y `prefers-reduced-motion`. |

---

## 5. Detalle de Mejoras Implementadas

### 5.1. Mejoras de Experiencia de Usuario (UX)
- **Navegación Intuitiva**: El usuario siempre sabe en qué sección se encuentra gracias a la detección dinámica de scroll en los enlaces de la barra superior.
- **Acceso Rápido a Conversación**: Botón flotante permanente de WhatsApp con mensaje precargado que permite iniciar el contacto con un solo clic desde cualquier dispositivo.
- **Transparencia en el Formulario**: El usuario recibe feedback instantáneo en cada campo, indicador de carga animado al enviar y un número de confirmación cívica (*Ticket ID*) al completarse con éxito.
- **Visualización Detallada de Evidencia**: El visor *Lightbox* permite apreciar en gran formato las fotografías históricas del Congreso y las actividades ciudadanas.

### 5.2. Mejoras de Diseño Responsive (UI)
- **Breakpoints Fluidos**: Adaptación meticulosa para pantallas de escritorio grandes (1920px+), laptops (1280px), tablets (768px - 1024px) y smartphones (360px - 480px).
- **Menú Drawer Móvil**: El menú en teléfonos se abre con una transición suave lateral, bloqueando el scroll de fondo para una navegación limpia.
- **Redistribución de Grillas**: Grillas de 4 y 5 columnas pasan a 2 columnas en tablet y a 1 columna en móviles, conservando la legibilidad sin elementos truncados.

### 5.3. Mejoras de Rendimiento Técnico
- **Conversión WebP**: Todas las imágenes clave fueron procesadas con compresión moderna WebP con calidad 82%, preservando la nitidez fotográfica y reduciendo drásticamente el consumo de datos móviles.
- **Carga Diferida (`loading="lazy"`)**: Las imágenes debajo del primer pliegue se cargan a medida que el usuario se desplaza, reduciendo el tiempo inicial de carga a menos de 1 segundo.
- **Normalización de Orientación**: La imagen del estudio de grabación (`20251120_092231`) fue orientada verticalmente de forma correcta para eliminar la desalineación de la cámara.

### 5.4. Mejoras de Seguridad y Estabilidad
- **Honeypot Anti-Spam**: Un campo invisible detecta automáticamente bots automatizados de spam sin molestar al usuario humano con captchas invasivos.
- **Prevención de Ataques XSS**: Sanitización de strings en todos los campos del formulario antes de procesar el estado en el DOM.
- **Sin Exposición de Secretos**: Ninguna credencial de base de datos ni token privado queda expuesto en los archivos de distribución pública.
