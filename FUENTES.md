# Instrucciones para Fuentes Tipográficas

## 📁 Ubicación de Archivos

Coloca los archivos de fuentes en la siguiente estructura:

```
assets/fonts/
├── NeueMontreal-Regular.otf
├── NeueMontreal-Bold.otf
├── QueensCompressedTrial-Regular.ttf
└── QueensCompressedTrial-Italic.ttf
```

## 🔤 Fuentes Requeridas

### Neue Montreal (Texto Principal)
- **NeueMontreal-Regular.otf** - Para texto normal
- **NeueMontreal-Bold.otf** - Para títulos y texto destacado

### Queens (Elementos Decorativos)
- **QueensCompressedTrial-Regular.ttf** - Para elementos decorativos
- **QueensCompressedTrial-Italic.ttf** - Para palabras clave en script

## 📋 Pasos para Agregar las Fuentes

1. **Obtener los archivos de fuentes**:
   - Contacta al equipo de diseño de Un Corazón
   - O descarga desde el servidor de assets de la organización

2. **Colocar los archivos**:
   ```bash
   # Copia los archivos a la carpeta fonts
   cp /ruta/a/las/fuentes/* assets/fonts/
   ```

3. **Verificar que los archivos estén en su lugar**:
   ```bash
   ls -la assets/fonts/
   ```

4. **Probar la carga**:
   - Abre el sitio web en el navegador
   - Verifica en las herramientas de desarrollador que las fuentes carguen correctamente
   - Revisa la consola para errores de carga de fuentes

## 🔍 Verificación

### En el Navegador
1. Abre las herramientas de desarrollador (F12)
2. Ve a la pestaña "Network"
3. Recarga la página
4. Busca los archivos de fuentes en la lista de recursos cargados

### En la Consola
Si hay errores de carga, aparecerán mensajes como:
```
Failed to load resource: net::ERR_FILE_NOT_FOUND
```

## 🎨 Uso en el CSS

Las fuentes ya están configuradas en `styles.css`:

```css
/* Variables de tipografía */
:root {
    --font-primary: 'Neue Montreal', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    --font-script: 'Queens', Georgia, serif;
}

/* Declaraciones @font-face */
@font-face {
    font-family: 'Neue Montreal';
    src: url('assets/fonts/NeueMontreal-Regular.otf') format('opentype');
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'Neue Montreal';
    src: url('assets/fonts/NeueMontreal-Bold.otf') format('opentype');
    font-weight: 700;
    font-style: normal;
}

@font-face {
    font-family: 'Queens';
    src: url('assets/fonts/QueensCompressedTrial-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'Queens';
    src: url('assets/fonts/QueensCompressedTrial-Italic.ttf') format('truetype');
    font-weight: 400;
    font-style: italic;
}
```

## 🚨 Solución de Problemas

### Las fuentes no cargan
1. **Verifica la ruta**: Asegúrate de que los archivos estén en `assets/fonts/`
2. **Verifica el nombre**: Los nombres deben coincidir exactamente
3. **Verifica permisos**: Los archivos deben ser legibles
4. **Verifica formato**: Los archivos deben ser .otf o .ttf válidos

### Fallback de fuentes
Si las fuentes no cargan, el sitio usará:
- **Neue Montreal**: Arial, Helvetica, sans-serif
- **Queens**: Georgia, serif

### Errores comunes
- **404 Not Found**: El archivo no existe en la ruta especificada
- **CORS Error**: Problema con el servidor (solo en desarrollo local)
- **Font Loading Error**: El archivo está corrupto o en formato incorrecto

## 📞 Contacto

Si tienes problemas con las fuentes:
- Verifica que tengas los archivos correctos
- Contacta al equipo de diseño de Un Corazón
- Revisa la documentación de las fuentes

## 🔄 Actualización de Fuentes

Si necesitas actualizar las fuentes:
1. Reemplaza los archivos en `assets/fonts/`
2. Verifica que los nombres coincidan
3. Prueba el sitio web
4. Limpia la caché del navegador si es necesario

---

**Nota**: Las fuentes son propiedad de Un Corazón Iglesia y deben usarse solo para este proyecto. 