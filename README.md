# 🌍 Countries App - Prueba Técnica DOUBLE_V_PARTNERS# country-app



Aplicación web desarrollada con Vue 3 + TypeScript que consume la API de REST Countries para mostrar información sobre países del mundo.This template should help get you started developing with Vue 3 in Vite.



## 📋 Tabla de Contenidos## Recommended IDE Setup



- [Características](#características)[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

- [Tecnologías Utilizadas](#tecnologías-utilizadas)

- [Estructura del Proyecto](#estructura-del-proyecto)## Recommended Browser Setup

- [Instalación](#instalación)

- [Ejecución](#ejecución)- Chromium-based browsers (Chrome, Edge, Brave, etc.):

- [Tests](#tests)  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 

- [Decisiones Técnicas](#decisiones-técnicas)  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)

- [Funcionalidades Implementadas](#funcionalidades-implementadas)- Firefox:

  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)

## ✨ Características  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)



- ✅ **Listado de países** con paginación (botón "Ver Más")## Customize configuration

- ✅ **Búsqueda/Filtrado** por nombre de país

- ✅ **Vista detallada** de cada paísSee [Vite Configuration Reference](https://vite.dev/config/).

- ✅ **Diseño responsive** con Tailwind CSS

- ✅ **TypeScript** para type safety## Project Setup

- ✅ **Tests unitarios** con Vitest

- ✅ **Manejo de estado** con Pinia```sh

- ✅ **Routing** con Vue Routernpm install

```

## 🛠️ Tecnologías Utilizadas

### Compile and Hot-Reload for Development

### Core

- **Vue 3.5.22** - Framework progresivo de JavaScript con Composition API```sh

- **TypeScript** - Superset de JavaScript con tipado estáticonpm run dev

- **Vite 7.2.2** - Build tool y dev server ultrarrápido```



### Estado y Routing### Compile and Minify for Production

- **Pinia 3.0.4** - Store oficial de Vue para manejo de estado

- **Vue Router 4.6.3** - Routing oficial de Vue```sh

npm run build

### HTTP y API```

- **Axios 1.13.2** - Cliente HTTP para peticiones
- **REST Countries API** - API pública de información de países

### Estilos
- **Tailwind CSS 4.1.17** - Framework CSS utility-first
- **PostCSS 8.5.6** - Transformación de CSS
- **Autoprefixer 10.4.21** - Autoprefixing de CSS

### Testing
- **Vitest 4.0.8** - Framework de testing ultrarrápido
- **@vue/test-utils 2.4.6** - Utilidades oficiales para testing de Vue
- **Happy-DOM 20.0.10** - Implementación ligera del DOM para tests

### Desarrollo
- **vue-tsc** - TypeScript checker para archivos Vue
- **@vitejs/plugin-vue** - Plugin de Vite para Vue 3
- **vite-plugin-vue-devtools** - DevTools integrado

## 📁 Estructura del Proyecto

```
country-app/
├── src/
│   ├── components/              # Componentes reutilizables
│   │   ├── CountryCard/
│   │   │   ├── CountryCard.vue    # Template del componente
│   │   │   ├── CountryCard.ts     # Lógica TypeScript
│   │   │   ├── CountryCard.test.ts # Tests unitarios
│   │   │   └── index.ts            # Barrel export
│   │   ├── SearchInput/
│   │   │   ├── SearchInput.vue
│   │   │   ├── SearchInput.ts
│   │   │   ├── SearchInput.test.ts
│   │   │   └── index.ts
│   │   └── LoadingSpinner/
│   │       ├── LoadingSpinner.vue
│   │       ├── LoadingSpinner.ts
│   │       └── index.ts
│   ├── views/                   # Vistas/Páginas
│   │   ├── CountryList/
│   │   │   ├── CountryList.vue
│   │   │   ├── CountryList.ts
│   │   │   └── index.ts
│   │   └── CountryDetail/
│   │       ├── CountryDetail.vue
│   │       ├── CountryDetail.ts
│   │       └── index.ts
│   ├── stores/                  # Pinia stores
│   │   ├── countryStore.ts
│   │   └── countryStore.test.ts
│   ├── router/                  # Vue Router
│   │   └── index.ts
│   ├── types/                   # TypeScript types
│   │   └── country.ts
│   ├── assets/                  # Assets estáticos
│   │   └── main.css
│   ├── App.vue                  # Componente raíz
│   └── main.ts                  # Punto de entrada
├── public/                      # Archivos públicos
├── env.d.ts                     # Declaraciones TypeScript
├── tsconfig.json                # Configuración TypeScript
├── vite.config.ts               # Configuración Vite
├── tailwind.config.js           # Configuración Tailwind
├── postcss.config.js            # Configuración PostCSS
└── package.json                 # Dependencias y scripts
```

## 🚀 Instalación

### Prerrequisitos
- Node.js 20.19.0+ o 22.12.0+
- npm o yarn

### Pasos

1. **Clonar el repositorio** (o descomprimir el archivo)
```bash
cd country-app
```

2. **Instalar dependencias**
```bash
npm install
```

## ▶️ Ejecución

### Modo Desarrollo
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:5173/`

### Modo Producción
```bash
# Build
npm run build

# Preview del build
npm run preview
```

### Type Checking
```bash
npm run type-check
```

## 🧪 Tests

### Ejecutar todos los tests
```bash
npm test
```

### Ejecutar tests en modo watch
```bash
npm test -- --watch
```

### Ejecutar tests con interfaz UI
```bash
npm run test:ui
```

### Tests Implementados

#### **CountryStore Tests** (`stores/countryStore.test.ts`)
- ✅ Inicialización con valores por defecto
- ✅ Fetch de países exitoso
- ✅ Manejo de errores en fetch
- ✅ Filtrado de países por búsqueda
- ✅ Paginación correcta
- ✅ Reset de paginación al buscar

#### **CountryCard Tests** (`components/CountryCard/CountryCard.test.ts`)
- ✅ Renderizado correcto de información del país
- ✅ Navegación a página de detalle al hacer clic
- ✅ Imagen de bandera con src correcto

#### **SearchInput Tests** (`components/SearchInput/SearchInput.test.ts`)
- ✅ Renderizado con placeholder correcto
- ✅ Mostrar valor del modelValue
- ✅ Emitir evento update:modelValue al escribir
- ✅ Icono de búsqueda presente

## 🎯 Decisiones Técnicas

### 1. **Separación de Lógica y Template**
   - **Decisión**: Separar cada componente en archivos `.vue` (template) y `.ts` (lógica)
   - **Razón**: Mejor organización, testing más fácil, y reutilización de lógica
   - **Implementación**: Cada carpeta de componente contiene:
     - `*.vue` - Template HTML
     - `*.ts` - Lógica TypeScript exportada como composable
     - `*.test.ts` - Tests unitarios
     - `index.ts` - Barrel export

### 2. **TypeScript Estricto**
   - **Decisión**: Usar TypeScript con modo estricto activado
   - **Razón**: Type safety, mejor autocompletado, detección temprana de errores
   - **Implementación**: 
     - Interfaces para props de componentes
     - Tipos para respuestas de API
     - Tipado explícito en funciones

### 3. **Composition API con `<script setup>`**
   - **Decisión**: Usar Composition API con sintaxis `<script setup lang="ts">`
   - **Razón**: Código más conciso, mejor inferencia de tipos, mejor tree-shaking
   - **Ventajas**: Menos boilerplate, mejor performance

### 4. **Pinia para Manejo de Estado**
   - **Decisión**: Pinia en lugar de Vuex
   - **Razón**: 
     - API más simple e intuitiva
     - Mejor soporte para TypeScript
     - Recomendado oficialmente por Vue 3
   - **Implementación**: Store con setup syntax usando composables

### 5. **Tailwind CSS**
   - **Decisión**: Tailwind en lugar de CSS modules o styled-components
   - **Razón**:
     - Desarrollo más rápido
     - Diseño consistente
     - Purge automático de CSS no usado
     - Utility-first approach

### 6. **Paginación con "Ver Más"**
   - **Decisión**: Carga incremental en lugar de paginación tradicional
   - **Razón**: Mejor UX en dispositivos móviles, menos clics
   - **Implementación**: 20 países por página, botón "Ver Más" cuando hay más resultados

### 7. **Búsqueda en Cliente**
   - **Decisión**: Filtrado en el cliente en lugar de búsqueda en API
   - **Razón**: 
     - Respuesta instantánea
     - Menos llamadas a la API
     - Datos ya cargados
   - **Implementación**: Computed property que filtra el array

### 8. **Testing con Vitest**
   - **Decisión**: Vitest en lugar de Jest
   - **Razón**:
     - Integración nativa con Vite
     - Más rápido que Jest
     - Misma API que Jest (fácil migración)
     - Mejor soporte para ESM

### 9. **Estructura de Carpetas**
   - **Decisión**: Carpetas por funcionalidad/componente
   - **Razón**: 
     - Escalabilidad
     - Fácil localización de archivos relacionados
     - Facilita el trabajo en equipo

### 10. **Axios sobre Fetch**
   - **Decisión**: Usar Axios para peticiones HTTP
   - **Razón**:
     - Interceptors para manejo de errores global
     - Transformación automática de JSON
     - Mejor compatibilidad con navegadores antiguos
     - API más simple

## 📦 Funcionalidades Implementadas

### Pantalla Principal (Listado)
- ✅ Listado de todos los países ordenados alfabéticamente
- ✅ Barra de búsqueda con filtrado en tiempo real
- ✅ Tarjetas con información básica (nombre, población, región, capital)
- ✅ Paginación con "Ver Más" (20 países por página)
- ✅ Loading spinner durante carga
- ✅ Manejo de errores con opción de reintentar
- ✅ Diseño responsive (grid adaptativo)

### Pantalla de Detalle
- ✅ Información completa del país seleccionado
- ✅ Bandera y escudo de armas
- ✅ Datos: nombre oficial, capital, región, subregión, población, área
- ✅ Idiomas y monedas
- ✅ Zonas horarias
- ✅ Botón "Volver" para regresar al listado
- ✅ Enlace a Google Maps
- ✅ Loading y error states

### Diseño y UX
- ✅ Interfaz limpia y moderna
- ✅ Responsive design (mobile-first)
- ✅ Animaciones y transiciones suaves
- ✅ Estados de carga y error claros
- ✅ Feedback visual en interacciones

## 👨‍💻 Autor

Desarrollado como prueba técnica para **DOUBLE_V_PARTNERS**

---

## 📝 Notas Adicionales

- La aplicación consume la API pública de [REST Countries](https://restcountries.com/)
- No requiere autenticación ni API keys
- Los datos se cachean en el store de Pinia para evitar llamadas redundantes
- La aplicación es completamente client-side (SPA)

## 🔮 Mejoras Futuras

- [ ] Agregar dark mode
- [ ] Implementar favoritos/bookmarks
- [ ] Añadir más filtros (por región, por idioma, etc.)
- [ ] Comparación entre países
- [ ] Gráficos de población y área
- [ ] Internacionalización (i18n)
- [ ] PWA support
- [ ] E2E tests con Playwright/Cypress
