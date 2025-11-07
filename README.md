# 🌍 Countries App - Prueba Técnica DOUBLE_V_PARTNERS# 🌍 Countries App - Prueba Técnica DOUBLE_V_PARTNERS# country-app



Aplicación web desarrollada con Vue 3 + TypeScript que consume la API de REST Countries para mostrar información sobre países del mundo.



## 📋 Tabla de ContenidosAplicación web desarrollada con Vue 3 + TypeScript que consume la API de REST Countries para mostrar información sobre países del mundo.This template should help get you started developing with Vue 3 in Vite.



- [Características](#características)

- [Tecnologías Utilizadas](#tecnologías-utilizadas)

- [Estructura del Proyecto](#estructura-del-proyecto)## 📋 Tabla de Contenidos## Recommended IDE Setup

- [Instalación](#instalación)

- [Ejecución](#ejecución)

- [Tests](#tests)

- [Decisiones Técnicas](#decisiones-técnicas)- [Características](#características)[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

- [Funcionalidades Implementadas](#funcionalidades-implementadas)

- [Tecnologías Utilizadas](#tecnologías-utilizadas)

## ✨ Características

- [Estructura del Proyecto](#estructura-del-proyecto)## Recommended Browser Setup

- ✅ **Listado de países** con paginación (botón "Ver Más")

- ✅ **Búsqueda/Filtrado** por nombre de país- [Instalación](#instalación)

- ✅ **Vista detallada** de cada país

- ✅ **Diseño responsive** con Tailwind CSS- [Ejecución](#ejecución)- Chromium-based browsers (Chrome, Edge, Brave, etc.):

- ✅ **Dark Mode** con persistencia en localStorage y detección automática

- ✅ **TypeScript** para type safety completo- [Tests](#tests)  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 

- ✅ **Tests unitarios** con Vitest (13/13 tests pasando ✅)

- ✅ **Manejo de estado** con Pinia- [Decisiones Técnicas](#decisiones-técnicas)  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)

- ✅ **Routing** con Vue Router

- [Funcionalidades Implementadas](#funcionalidades-implementadas)- Firefox:

## 🛠️ Tecnologías Utilizadas

  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)

### Core

- **Vue 3.5.22** - Framework progresivo de JavaScript con Composition API## ✨ Características  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

- **TypeScript 5.9.3** - Superset de JavaScript con tipado estático

- **Vite 7.2.2** - Build tool y dev server ultrarrápido



### Estado y Routing- ✅ **Listado de países** con paginación (botón "Ver Más")## Customize configuration

- **Pinia 3.0.4** - Store oficial de Vue para manejo de estado

- **Vue Router 4.6.3** - Routing oficial de Vue- ✅ **Búsqueda/Filtrado** por nombre de país



### HTTP y API- ✅ **Vista detallada** de cada paísSee [Vite Configuration Reference](https://vite.dev/config/).

- **Axios 1.13.2** - Cliente HTTP para peticiones

- **REST Countries API v3.1** - API pública de información de países- ✅ **Diseño responsive** con Tailwind CSS



### Estilos- ✅ **TypeScript** para type safety## Project Setup

- **Tailwind CSS 3.4.0** - Framework CSS utility-first

- **PostCSS 8.5.6** - Transformación de CSS- ✅ **Tests unitarios** con Vitest

- **Autoprefixer 10.4.21** - Autoprefixing de CSS

- ✅ **Manejo de estado** con Pinia```sh

### Testing

- **Vitest 4.0.8** - Framework de testing ultrarrápido- ✅ **Routing** con Vue Routernpm install

- **@vue/test-utils 2.4.6** - Utilidades oficiales para testing de Vue

- **Happy-DOM 20.0.10** - Implementación ligera del DOM para tests```



### Desarrollo## 🛠️ Tecnologías Utilizadas

- **vue-tsc 3.1.3** - TypeScript checker para archivos Vue

- **@vitejs/plugin-vue 6.0.1** - Plugin de Vite para Vue 3### Compile and Hot-Reload for Development

- **vite-plugin-vue-devtools 8.0.3** - DevTools integrado

### Core

## 📁 Estructura del Proyecto

- **Vue 3.5.22** - Framework progresivo de JavaScript con Composition API```sh

```

country-app/- **TypeScript** - Superset de JavaScript con tipado estáticonpm run dev

├── src/

│   ├── components/              # Componentes reutilizables- **Vite 7.2.2** - Build tool y dev server ultrarrápido```

│   │   ├── CountryCard/

│   │   │   ├── CountryCard.vue    # Template del componente

│   │   │   ├── CountryCard.ts     # Lógica TypeScript

│   │   │   ├── CountryCard.test.ts # Tests unitarios### Estado y Routing### Compile and Minify for Production

│   │   │   └── index.ts            # Barrel export

│   │   ├── SearchInput/- **Pinia 3.0.4** - Store oficial de Vue para manejo de estado

│   │   │   ├── SearchInput.vue

│   │   │   ├── SearchInput.ts- **Vue Router 4.6.3** - Routing oficial de Vue```sh

│   │   │   ├── SearchInput.test.ts

│   │   │   └── index.tsnpm run build

│   │   ├── LoadingSpinner/

│   │   │   ├── LoadingSpinner.vue### HTTP y API```

│   │   │   ├── LoadingSpinner.ts

│   │   │   └── index.ts- **Axios 1.13.2** - Cliente HTTP para peticiones

│   │   └── ThemeToggle/- **REST Countries API** - API pública de información de países

│   │       ├── ThemeToggle.vue

│   │       ├── ThemeToggle.ts### Estilos

│   │       └── index.ts- **Tailwind CSS 4.1.17** - Framework CSS utility-first

│   ├── views/                   # Vistas/Páginas- **PostCSS 8.5.6** - Transformación de CSS

│   │   ├── CountryList/- **Autoprefixer 10.4.21** - Autoprefixing de CSS

│   │   │   ├── CountryList.vue

│   │   │   ├── CountryList.ts### Testing

│   │   │   └── index.ts- **Vitest 4.0.8** - Framework de testing ultrarrápido

│   │   └── CountryDetail/- **@vue/test-utils 2.4.6** - Utilidades oficiales para testing de Vue

│   │       ├── CountryDetail.vue- **Happy-DOM 20.0.10** - Implementación ligera del DOM para tests

│   │       ├── CountryDetail.ts

│   │       └── index.ts### Desarrollo

│   ├── composables/             # Composables reutilizables- **vue-tsc** - TypeScript checker para archivos Vue

│   │   └── useTheme.ts         # Manejo de tema dark/light- **@vitejs/plugin-vue** - Plugin de Vite para Vue 3

│   ├── stores/                  # Pinia stores- **vite-plugin-vue-devtools** - DevTools integrado

│   │   ├── countryStore.ts

│   │   └── countryStore.test.ts## 📁 Estructura del Proyecto

│   ├── router/                  # Vue Router

│   │   └── index.ts```

│   ├── types/                   # TypeScript typescountry-app/

│   │   └── country.ts├── src/

│   ├── assets/                  # Assets estáticos│   ├── components/              # Componentes reutilizables

│   │   └── main.css│   │   ├── CountryCard/

│   ├── App.vue                  # Componente raíz│   │   │   ├── CountryCard.vue    # Template del componente

│   └── main.ts                  # Punto de entrada│   │   │   ├── CountryCard.ts     # Lógica TypeScript

├── public/                      # Archivos públicos│   │   │   ├── CountryCard.test.ts # Tests unitarios

├── env.d.ts                     # Declaraciones TypeScript│   │   │   └── index.ts            # Barrel export

├── tsconfig.json                # Configuración TypeScript│   │   ├── SearchInput/

├── vite.config.ts               # Configuración Vite│   │   │   ├── SearchInput.vue

├── tailwind.config.js           # Configuración Tailwind│   │   │   ├── SearchInput.ts

├── postcss.config.js            # Configuración PostCSS│   │   │   ├── SearchInput.test.ts

└── package.json                 # Dependencias y scripts│   │   │   └── index.ts

```│   │   └── LoadingSpinner/

│   │       ├── LoadingSpinner.vue

## 🚀 Instalación│   │       ├── LoadingSpinner.ts

│   │       └── index.ts

### Prerrequisitos│   ├── views/                   # Vistas/Páginas

- Node.js 20.19.0+ o 22.12.0+│   │   ├── CountryList/

- npm o yarn│   │   │   ├── CountryList.vue

│   │   │   ├── CountryList.ts

### Pasos│   │   │   └── index.ts

│   │   └── CountryDetail/

1. **Clonar el repositorio**│   │       ├── CountryDetail.vue

```bash│   │       ├── CountryDetail.ts

git clone https://github.com/Gatroxm/country-app.git│   │       └── index.ts

cd country-app│   ├── stores/                  # Pinia stores

```│   │   ├── countryStore.ts

│   │   └── countryStore.test.ts

2. **Instalar dependencias**│   ├── router/                  # Vue Router

```bash│   │   └── index.ts

npm install│   ├── types/                   # TypeScript types

```│   │   └── country.ts

│   ├── assets/                  # Assets estáticos

## ▶️ Ejecución│   │   └── main.css

│   ├── App.vue                  # Componente raíz

### Modo Desarrollo│   └── main.ts                  # Punto de entrada

```bash├── public/                      # Archivos públicos

npm run dev├── env.d.ts                     # Declaraciones TypeScript

```├── tsconfig.json                # Configuración TypeScript

La aplicación estará disponible en `http://localhost:5173/`├── vite.config.ts               # Configuración Vite

├── tailwind.config.js           # Configuración Tailwind

### Modo Producción├── postcss.config.js            # Configuración PostCSS

```bash└── package.json                 # Dependencias y scripts

# Build```

npm run build

## 🚀 Instalación

# Preview del build

npm run preview### Prerrequisitos

```- Node.js 20.19.0+ o 22.12.0+

- npm o yarn

### Type Checking

```bash### Pasos

npm run type-check

```1. **Clonar el repositorio** (o descomprimir el archivo)

```bash

## 🧪 Testscd country-app

```

### Ejecutar todos los tests

```bash2. **Instalar dependencias**

npm test```bash

```npm install

```

### Ejecutar tests con interfaz UI

```bash## ▶️ Ejecución

npm run test:ui

```### Modo Desarrollo

```bash

### Tests Implementados (13/13 ✅)npm run dev

```

#### **CountryStore Tests** (`stores/countryStore.test.ts`) - 6 testsLa aplicación estará disponible en `http://localhost:5173/`

- ✅ Inicialización con valores por defecto

- ✅ Fetch de países exitoso### Modo Producción

- ✅ Manejo de errores en fetch con fallback a datos de ejemplo```bash

- ✅ Filtrado de países por búsqueda# Build

- ✅ Paginación correcta (20 países por página)npm run build

- ✅ Reset de paginación al buscar

# Preview del build

#### **CountryCard Tests** (`components/CountryCard/CountryCard.test.ts`) - 3 testsnpm run preview

- ✅ Renderizado correcto de información del país```

- ✅ Navegación a página de detalle al hacer clic

- ✅ Imagen de bandera con src correcto### Type Checking

```bash

#### **SearchInput Tests** (`components/SearchInput/SearchInput.test.ts`) - 4 testsnpm run type-check

- ✅ Renderizado con placeholder correcto```

- ✅ Mostrar valor del modelValue

- ✅ Emitir evento update:modelValue al escribir## 🧪 Tests

- ✅ Icono de búsqueda presente

### Ejecutar todos los tests

## 🎯 Decisiones Técnicas```bash

npm test

### 1. **Separación de Lógica y Template**```

   - **Decisión**: Separar cada componente en archivos `.vue` (template) y `.ts` (lógica)

   - **Razón**: Mejor organización, testing más fácil, y reutilización de lógica### Ejecutar tests en modo watch

   - **Implementación**: Cada carpeta de componente contiene:```bash

     - `*.vue` - Template HTMLnpm test -- --watch

     - `*.ts` - Lógica TypeScript exportada como composable```

     - `*.test.ts` - Tests unitarios

     - `index.ts` - Barrel export### Ejecutar tests con interfaz UI

```bash

### 2. **TypeScript Estricto**npm run test:ui

   - **Decisión**: Usar TypeScript con modo estricto activado```

   - **Razón**: Type safety, mejor autocompletado, detección temprana de errores

   - **Implementación**: ### Tests Implementados

     - Interfaces para props de componentes

     - Tipos para respuestas de API#### **CountryStore Tests** (`stores/countryStore.test.ts`)

     - Tipado explícito en funciones y stores- ✅ Inicialización con valores por defecto

- ✅ Fetch de países exitoso

### 3. **Composition API con `<script setup>`**- ✅ Manejo de errores en fetch

   - **Decisión**: Usar Composition API con sintaxis `<script setup lang="ts">`- ✅ Filtrado de países por búsqueda

   - **Razón**: Código más conciso, mejor inferencia de tipos, mejor tree-shaking- ✅ Paginación correcta

   - **Ventajas**: Menos boilerplate, mejor performance- ✅ Reset de paginación al buscar



### 4. **Pinia para Manejo de Estado**#### **CountryCard Tests** (`components/CountryCard/CountryCard.test.ts`)

   - **Decisión**: Pinia en lugar de Vuex- ✅ Renderizado correcto de información del país

   - **Razón**: - ✅ Navegación a página de detalle al hacer clic

     - API más simple e intuitiva- ✅ Imagen de bandera con src correcto

     - Mejor soporte para TypeScript

     - Recomendado oficialmente por Vue 3#### **SearchInput Tests** (`components/SearchInput/SearchInput.test.ts`)

   - **Implementación**: Store con setup syntax usando composables- ✅ Renderizado con placeholder correcto

- ✅ Mostrar valor del modelValue

### 5. **Tailwind CSS con Dark Mode**- ✅ Emitir evento update:modelValue al escribir

   - **Decisión**: Tailwind en lugar de CSS modules o styled-components- ✅ Icono de búsqueda presente

   - **Razón**:

     - Desarrollo más rápido## 🎯 Decisiones Técnicas

     - Diseño consistente

     - Purge automático de CSS no usado### 1. **Separación de Lógica y Template**

     - Soporte nativo para dark mode con `class` strategy   - **Decisión**: Separar cada componente en archivos `.vue` (template) y `.ts` (lógica)

   - **Implementación**: `darkMode: 'class'` en configuración   - **Razón**: Mejor organización, testing más fácil, y reutilización de lógica

   - **Implementación**: Cada carpeta de componente contiene:

### 6. **Dark Mode Persistente**     - `*.vue` - Template HTML

   - **Decisión**: Implementar dark mode con localStorage y composable reutilizable     - `*.ts` - Lógica TypeScript exportada como composable

   - **Razón**:     - `*.test.ts` - Tests unitarios

     - Mejora la experiencia del usuario     - `index.ts` - Barrel export

     - Persistencia entre sesiones

     - Detección automática de preferencia del sistema (modo light por defecto)### 2. **TypeScript Estricto**

   - **Implementación**:   - **Decisión**: Usar TypeScript con modo estricto activado

     - Composable `useTheme()` con estado global   - **Razón**: Type safety, mejor autocompletado, detección temprana de errores

     - Toggle visual en header con iconos sol/luna   - **Implementación**: 

     - Clase `dark` en `document.documentElement`     - Interfaces para props de componentes

     - Transiciones suaves con `transition-colors duration-200`     - Tipos para respuestas de API

     - Tipado explícito en funciones

### 7. **Paginación con "Ver Más"**

   - **Decisión**: Carga incremental en lugar de paginación tradicional### 3. **Composition API con `<script setup>`**

   - **Razón**: Mejor UX en dispositivos móviles, menos clics   - **Decisión**: Usar Composition API con sintaxis `<script setup lang="ts">`

   - **Implementación**: 20 países por página, botón "Ver Más" cuando hay más resultados   - **Razón**: Código más conciso, mejor inferencia de tipos, mejor tree-shaking

   - **Ventajas**: Menos boilerplate, mejor performance

### 8. **Búsqueda en Cliente**

   - **Decisión**: Filtrado en el cliente en lugar de búsqueda en API### 4. **Pinia para Manejo de Estado**

   - **Razón**:    - **Decisión**: Pinia en lugar de Vuex

     - Respuesta instantánea   - **Razón**: 

     - Menos llamadas a la API     - API más simple e intuitiva

     - Datos ya cargados     - Mejor soporte para TypeScript

   - **Implementación**: Computed property que filtra el array     - Recomendado oficialmente por Vue 3

   - **Implementación**: Store con setup syntax usando composables

### 9. **Testing con Vitest**

   - **Decisión**: Vitest en lugar de Jest### 5. **Tailwind CSS**

   - **Razón**:   - **Decisión**: Tailwind en lugar de CSS modules o styled-components

     - Integración nativa con Vite   - **Razón**:

     - Más rápido que Jest     - Desarrollo más rápido

     - Misma API que Jest (fácil migración)     - Diseño consistente

     - Mejor soporte para ESM     - Purge automático de CSS no usado

     - Utility-first approach

### 10. **Axios sobre Fetch con Fallback**

   - **Decisión**: Usar Axios para peticiones HTTP con datos de fallback### 6. **Paginación con "Ver Más"**

   - **Razón**:   - **Decisión**: Carga incremental en lugar de paginación tradicional

     - Interceptors para manejo de errores global   - **Razón**: Mejor UX en dispositivos móviles, menos clics

     - Transformación automática de JSON   - **Implementación**: 20 países por página, botón "Ver Más" cuando hay más resultados

     - Mejor UX mostrando datos de ejemplo si API falla

   - **Implementación**: Try-catch con 5 países de ejemplo como fallback### 7. **Búsqueda en Cliente**

   - **Decisión**: Filtrado en el cliente en lugar de búsqueda en API

## 📦 Funcionalidades Implementadas   - **Razón**: 

     - Respuesta instantánea

### Pantalla Principal (Listado)     - Menos llamadas a la API

- ✅ Listado de todos los países ordenados alfabéticamente     - Datos ya cargados

- ✅ Barra de búsqueda con filtrado en tiempo real   - **Implementación**: Computed property que filtra el array

- ✅ Tarjetas con información básica (nombre, población, región, capital)

- ✅ Paginación con "Ver Más" (20 países por página)### 8. **Testing con Vitest**

- ✅ Loading spinner durante carga   - **Decisión**: Vitest en lugar de Jest

- ✅ Manejo de errores con fallback a datos de ejemplo   - **Razón**:

- ✅ Diseño responsive (grid adaptativo 1/2/3/4 columnas)     - Integración nativa con Vite

- ✅ Contador de resultados     - Más rápido que Jest

     - Misma API que Jest (fácil migración)

### Pantalla de Detalle     - Mejor soporte para ESM

- ✅ Información completa del país seleccionado

- ✅ Bandera y escudo de armas### 9. **Estructura de Carpetas**

- ✅ Datos: nombre oficial, capital, región, subregión, población, área   - **Decisión**: Carpetas por funcionalidad/componente

- ✅ Idiomas y monedas con símbolos   - **Razón**: 

- ✅ Zonas horarias     - Escalabilidad

- ✅ Botón "Volver" para regresar al listado     - Fácil localización de archivos relacionados

- ✅ Enlace a Google Maps     - Facilita el trabajo en equipo

- ✅ Loading y error states

- ✅ Layout responsive de 2 columnas### 10. **Axios sobre Fetch**

   - **Decisión**: Usar Axios para peticiones HTTP

### Dark Mode 🌙   - **Razón**:

- ✅ Toggle dark/light mode en header     - Interceptors para manejo de errores global

- ✅ Persistencia en localStorage     - Transformación automática de JSON

- ✅ Modo light por defecto     - Mejor compatibilidad con navegadores antiguos

- ✅ Iconos de sol ☀️ y luna 🌙     - API más simple

- ✅ Transiciones suaves entre temas

- ✅ Todos los componentes adaptados con clases `dark:`## 📦 Funcionalidades Implementadas



### Diseño y UX### Pantalla Principal (Listado)

- ✅ Interfaz limpia y moderna- ✅ Listado de todos los países ordenados alfabéticamente

- ✅ Responsive design (mobile-first)- ✅ Barra de búsqueda con filtrado en tiempo real

- ✅ Animaciones y transiciones suaves- ✅ Tarjetas con información básica (nombre, población, región, capital)

- ✅ Estados de carga y error claros- ✅ Paginación con "Ver Más" (20 países por página)

- ✅ Feedback visual en interacciones- ✅ Loading spinner durante carga

- ✅ Hover effects en tarjetas y botones- ✅ Manejo de errores con opción de reintentar

- ✅ Diseño responsive (grid adaptativo)

## 👨‍💻 Autor

### Pantalla de Detalle

Desarrollado como prueba técnica para **DOUBLE_V_PARTNERS**- ✅ Información completa del país seleccionado

- ✅ Bandera y escudo de armas

**GitHub**: [Gatroxm/country-app](https://github.com/Gatroxm/country-app)- ✅ Datos: nombre oficial, capital, región, subregión, población, área

- ✅ Idiomas y monedas

---- ✅ Zonas horarias

- ✅ Botón "Volver" para regresar al listado

## 📝 Notas Adicionales- ✅ Enlace a Google Maps

- ✅ Loading y error states

- La aplicación consume la API pública de [REST Countries](https://restcountries.com/)

- No requiere autenticación ni API keys### Diseño y UX

- Los datos se almacenan en el store de Pinia- ✅ Interfaz limpia y moderna

- Si la API no está disponible, muestra 5 países de ejemplo- ✅ Responsive design (mobile-first)

- La aplicación es completamente client-side (SPA)- ✅ Animaciones y transiciones suaves

- El tema (dark/light) se guarda en localStorage- ✅ Estados de carga y error claros

- ✅ Feedback visual en interacciones

## 🎨 Bonus Implementados

## 👨‍💻 Autor

- ✅ **TypeScript** - 100% del código tipado

- ✅ **Dark Mode** - Completamente funcional con persistenciaDesarrollado como prueba técnica para **DOUBLE_V_PARTNERS**

- ✅ **Responsive Design** - Mobile-first con Tailwind Grid

---

## 🏆 Cumplimiento de Requerimientos

## 📝 Notas Adicionales

### Requerimientos Obligatorios

- ✅ Vue 3 con Composition API- La aplicación consume la API pública de [REST Countries](https://restcountries.com/)

- ✅ Vue Router con 2 rutas (/, /detail/:id)- No requiere autenticación ni API keys

- ✅ Axios para peticiones HTTP- Los datos se cachean en el store de Pinia para evitar llamadas redundantes

- ✅ Pinia para manejo de estado- La aplicación es completamente client-side (SPA)

- ✅ Tests unitarios con Vitest (13 tests)

- ✅ Tailwind CSS para estilos## 🔮 Mejoras Futuras

- ✅ Listado con búsqueda/filtrado

- ✅ Paginación/carga incremental- [ ] Agregar dark mode

- ✅ Vista de detalle- [ ] Implementar favoritos/bookmarks

- ✅ Componentización- [ ] Añadir más filtros (por región, por idioma, etc.)

- ✅ Buenas prácticas- [ ] Comparación entre países

- ✅ README completo- [ ] Gráficos de población y área

- [ ] Internacionalización (i18n)

### Requerimientos Bonus- [ ] PWA support

- ✅ TypeScript- [ ] E2E tests con Playwright/Cypress

- ✅ Dark Mode
- ✅ Responsive Design
