# Un Corazón Internship - Sitio Web

Sitio web oficial para el programa de Internship de Un Corazón Iglesia, diseñado con la identidad de marca de la organización.

## 🎨 Características

- **Diseño Responsivo**: Optimizado para móviles, tablets y desktop
- **Animaciones Suaves**: Efectos de scroll y transiciones fluidas
- **Accesibilidad**: Navegación por teclado y soporte para lectores de pantalla
- **Performance**: Carga optimizada y animaciones eficientes
- **Identidad de Marca**: Colores y tipografías oficiales de Un Corazón

## 🚀 Instalación

1. **Clonar el repositorio**:
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd UnCorazon-web
   ```

2. **Instalar dependencias** (si usas un servidor local):
   ```bash
   # Opcional: usar un servidor local como Live Server
   npm install -g live-server
   ```

3. **Ejecutar el proyecto**:
   ```bash
   # Método 1: Abrir index.html directamente en el navegador
   open index.html
   
   # Método 2: Usar un servidor local
   live-server
   ```

## 📁 Estructura del Proyecto

```
UnCorazon-web/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript y animaciones
├── README.md           # Este archivo
└── assets/
    ├── fonts/          # Fuentes tipográficas
    │   ├── NeueMontreal-Regular.otf
    │   ├── NeueMontreal-Bold.otf
    │   ├── QueensCompressedTrial-Regular.ttf
    │   └── QueensCompressedTrial-Italic.ttf
    └── images/         # Imágenes del sitio
        └── (futuras imágenes)
```

## 🎯 Secciones del Sitio

### 1. Hero Section
- Logo principal con tipografía mixta
- Subtítulo descriptivo
- Indicador de scroll animado

### 2. Sección de Impacto
- Estadísticas animadas
- Testimonios de participantes
- Fondo en color cream

### 3. Mensaje Principal
- Propuesta de valor del programa
- Ícono de corazón minimalista
- Fondo en rose red

### 4. Propuesta de Valor
- Descripción detallada del programa
- Tipografía mixta para palabras clave
- Fondo en cream

### 5. Nuestro Programa
- Cuatro áreas principales del internship
- Efectos hover interactivos
- Fondo en burnt orange

### 6. Información Detallada
- Preguntas frecuentes
- Requisitos y beneficios
- Fondo en cream

### 7. Call to Action
- Botón de aplicación
- Información de contacto
- Fondo en rose red

### 8. Footer
- Logo y visión de la organización
- Información de ubicación

## 🎨 Paleta de Colores

- **Burnt Orange**: `#cc5500` (Color principal)
- **Rose Red**: `#3b0918` (Color secundario)
- **Cream**: `#fff3d9` (Color de fondo claro)
- **Negro**: `#000000` (Texto principal)
- **Blanco**: `#ffffff` (Texto sobre fondos oscuros)

## 🔤 Tipografías

### Neue Montreal (Texto principal)
- `NeueMontreal-Regular.otf`
- `NeueMontreal-Bold.otf`

### Queens (Elementos decorativos)
- `QueensCompressedTrial-Regular.ttf`
- `QueensCompressedTrial-Italic.ttf`

## 📱 Responsive Design

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## ⚡ Performance

- Animaciones optimizadas con `requestAnimationFrame`
- Intersection Observer para animaciones al scroll
- Carga progresiva de imágenes (preparado para futuras implementaciones)
- Soporte para `prefers-reduced-motion`

## ♿ Accesibilidad

- Navegación por teclado (flechas arriba/abajo)
- Focus styles visibles
- Soporte para lectores de pantalla
- Contraste adecuado en todos los elementos
- Textos alternativos para imágenes

## 🔧 Personalización

### Cambiar Colores
Edita las variables CSS en `styles.css`:
```css
:root {
    --burnt-orange: #cc5500;
    --rose-red: #3b0918;
    --cream: #fff3d9;
    /* ... */
}
```

### Agregar Contenido
1. Modifica el HTML en `index.html`
2. Actualiza los estilos en `styles.css` si es necesario
3. Agrega funcionalidad en `script.js` si requiere JavaScript

### Cambiar Fuentes
1. Coloca los archivos de fuentes en `assets/fonts/`
2. Actualiza las declaraciones `@font-face` en `styles.css`
3. Ajusta las variables CSS de tipografía

## 📝 Próximos Pasos

### Contenido Pendiente
- [ ] Agregar imágenes reales del programa
- [ ] Implementar formulario de aplicación
- [ ] Agregar más testimonios
- [ ] Incluir galería de fotos
- [ ] Agregar sección de preguntas frecuentes expandible

### Mejoras Técnicas
- [ ] Implementar lazy loading para imágenes
- [ ] Agregar service worker para cache
- [ ] Optimizar para Core Web Vitals
- [ ] Implementar analytics
- [ ] Agregar meta tags para SEO

### Funcionalidades Adicionales
- [ ] Modal de aplicación
- [ ] Chat de contacto
- [ ] Integración con redes sociales
- [ ] Blog del programa
- [ ] Área de miembros

## 🐛 Solución de Problemas

### Las fuentes no cargan
1. Verifica que los archivos estén en `assets/fonts/`
2. Revisa la consola del navegador para errores
3. Las fuentes del sistema se usarán como fallback

### Las animaciones no funcionan
1. Verifica que JavaScript esté habilitado
2. Comprueba que no haya errores en la consola
3. Las animaciones se desactivan si el usuario prefiere movimiento reducido

### Problemas de responsive
1. Verifica los breakpoints en `styles.css`
2. Usa las herramientas de desarrollador del navegador
3. Prueba en diferentes dispositivos

## 📞 Contacto

Para preguntas sobre el desarrollo del sitio:
- Email: [tu-email@ejemplo.com]
- GitHub: [tu-usuario]

Para información sobre el programa de Internship:
- Email: internship@uncorazon.org
- Sitio web: [URL_DE_LA_IGLESIA]

## 📄 Licencia

Este proyecto está bajo la licencia [LICENCIA]. Todos los derechos reservados a Un Corazón Iglesia.

---

**Desarrollado con ❤️ para Un Corazón Iglesia** # corazon
