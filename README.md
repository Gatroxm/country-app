# 🌍 Countries App - Prueba Técnica DOUBLE_V_PARTNERS# 🌍 Countries App - Prueba Técnica DOUBLE_V_PARTNERS# 🌍 Countries App - Prueba Técnica DOUBLE_V_PARTNERS# country-app



Aplicación web desarrollada con Vue 3 + TypeScript que consume la API de REST Countries para mostrar información sobre países del mundo.



## 📋 Tabla de ContenidosAplicación web desarrollada con Vue 3 + TypeScript que consume la API de REST Countries para mostrar información sobre países del mundo.



- [Características](#características)

- [Tecnologías Utilizadas](#tecnologías-utilizadas)

- [Estructura del Proyecto](#estructura-del-proyecto)## 📋 Tabla de ContenidosAplicación web desarrollada con Vue 3 + TypeScript que consume la API de REST Countries para mostrar información sobre países del mundo.This template should help get you started developing with Vue 3 in Vite.

- [Instalación](#instalación)

- [Ejecución](#ejecución)

- [Tests](#tests)

- [Decisiones Técnicas](#decisiones-técnicas)- [Características](#características)

- [Funcionalidades Implementadas](#funcionalidades-implementadas)

- [Tecnologías Utilizadas](#tecnologías-utilizadas)

## ✨ Características

- [Estructura del Proyecto](#estructura-del-proyecto)## 📋 Tabla de Contenidos## Recommended IDE Setup

- ✅ **Listado de países** con paginación (botón "Ver Más")

- ✅ **Búsqueda/Filtrado** por nombre de país- [Instalación](#instalación)

- ✅ **Vista detallada** de cada país

- ✅ **Diseño responsive** con Tailwind CSS- [Ejecución](#ejecución)

- ✅ **Dark Mode** con persistencia en localStorage

- ✅ **TypeScript** para type safety completo- [Tests](#tests)

- ✅ **Tests unitarios** con Vitest (13/13 tests ✅)

- ✅ **Manejo de estado** con Pinia- [Decisiones Técnicas](#decisiones-técnicas)- [Características](#características)[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

- ✅ **Routing** con Vue Router

- [Funcionalidades Implementadas](#funcionalidades-implementadas)

## 🛠️ Tecnologías Utilizadas

- [Tecnologías Utilizadas](#tecnologías-utilizadas)

### Core

- **Vue 3.5.22** - Framework progresivo de JavaScript con Composition API## ✨ Características

- **TypeScript 5.9.3** - Superset de JavaScript con tipado estático

- **Vite 7.2.2** - Build tool y dev server ultrarrápido- [Estructura del Proyecto](#estructura-del-proyecto)## Recommended Browser Setup



### Estado y Routing- ✅ **Listado de países** con paginación (botón "Ver Más")

- **Pinia 3.0.4** - Store oficial de Vue para manejo de estado

- **Vue Router 4.6.3** - Routing oficial de Vue- ✅ **Búsqueda/Filtrado** por nombre de país- [Instalación](#instalación)



### HTTP y API- ✅ **Vista detallada** de cada país

- **Axios 1.13.2** - Cliente HTTP para peticiones

- **REST Countries API v3.1** - API pública de información de países- ✅ **Diseño responsive** con Tailwind CSS- [Ejecución](#ejecución)- Chromium-based browsers (Chrome, Edge, Brave, etc.):



### Estilos- ✅ **Dark Mode** con persistencia en localStorage y detección automática

- **Tailwind CSS 3.4.0** - Framework CSS utility-first

- **PostCSS 8.5.6** - Transformación de CSS- ✅ **TypeScript** para type safety completo- [Tests](#tests)  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 

- **Autoprefixer 10.4.21** - Autoprefixing de CSS

- ✅ **Tests unitarios** con Vitest (13/13 tests pasando ✅)

### Testing

- **Vitest 4.0.8** - Framework de testing ultrarrápido- ✅ **Manejo de estado** con Pinia- [Decisiones Técnicas](#decisiones-técnicas)  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)

- **@vue/test-utils 2.4.6** - Utilidades oficiales para testing de Vue

- **Happy-DOM 20.0.10** - Implementación ligera del DOM para tests- ✅ **Routing** con Vue Router



### Desarrollo- [Funcionalidades Implementadas](#funcionalidades-implementadas)- Firefox:

- **vue-tsc 3.1.3** - TypeScript checker para archivos Vue

- **@vitejs/plugin-vue 6.0.1** - Plugin de Vite para Vue 3## 🛠️ Tecnologías Utilizadas

- **vite-plugin-vue-devtools 8.0.3** - DevTools integrado

  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)

## 📁 Estructura del Proyecto

### Core

```

country-app/- **Vue 3.5.22** - Framework progresivo de JavaScript con Composition API## ✨ Características  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

├── src/

│   ├── components/              # Componentes reutilizables- **TypeScript 5.9.3** - Superset de JavaScript con tipado estático

│   │   ├── CountryCard/

│   │   │   ├── CountryCard.vue    # Template del componente- **Vite 7.2.2** - Build tool y dev server ultrarrápido

│   │   │   ├── CountryCard.ts     # Lógica TypeScript

│   │   │   ├── CountryCard.test.ts # Tests unitarios

│   │   │   └── index.ts            # Barrel export

│   │   ├── SearchInput/### Estado y Routing- ✅ **Listado de países** con paginación (botón "Ver Más")## Customize configuration

│   │   │   ├── SearchInput.vue

│   │   │   ├── SearchInput.ts- **Pinia 3.0.4** - Store oficial de Vue para manejo de estado

│   │   │   ├── SearchInput.test.ts

│   │   │   └── index.ts- **Vue Router 4.6.3** - Routing oficial de Vue- ✅ **Búsqueda/Filtrado** por nombre de país

│   │   ├── LoadingSpinner/

│   │   │   ├── LoadingSpinner.vue

│   │   │   ├── LoadingSpinner.ts

│   │   │   └── index.ts### HTTP y API- ✅ **Vista detallada** de cada paísSee [Vite Configuration Reference](https://vite.dev/config/).

│   │   └── ThemeToggle/

│   │       ├── ThemeToggle.vue- **Axios 1.13.2** - Cliente HTTP para peticiones

│   │       ├── ThemeToggle.ts

│   │       └── index.ts- **REST Countries API v3.1** - API pública de información de países- ✅ **Diseño responsive** con Tailwind CSS

│   ├── views/                   # Vistas/Páginas

│   │   ├── CountryList/

│   │   │   ├── CountryList.vue

│   │   │   ├── CountryList.ts### Estilos- ✅ **TypeScript** para type safety## Project Setup

│   │   │   └── index.ts

│   │   └── CountryDetail/- **Tailwind CSS 3.4.0** - Framework CSS utility-first

│   │       ├── CountryDetail.vue

│   │       ├── CountryDetail.ts- **PostCSS 8.5.6** - Transformación de CSS- ✅ **Tests unitarios** con Vitest

│   │       └── index.ts

│   ├── composables/             # Composables reutilizables- **Autoprefixer 10.4.21** - Autoprefixing de CSS

│   │   └── useTheme.ts         # Manejo de tema dark/light

│   ├── stores/                  # Pinia stores- ✅ **Manejo de estado** con Pinia```sh

│   │   ├── countryStore.ts

│   │   └── countryStore.test.ts### Testing

│   ├── router/                  # Vue Router

│   │   └── index.ts- **Vitest 4.0.8** - Framework de testing ultrarrápido- ✅ **Routing** con Vue Routernpm install

│   ├── types/                   # TypeScript types

│   │   └── country.ts- **@vue/test-utils 2.4.6** - Utilidades oficiales para testing de Vue

│   ├── assets/                  # Assets estáticos

│   │   └── main.css- **Happy-DOM 20.0.10** - Implementación ligera del DOM para tests```

│   ├── App.vue                  # Componente raíz

│   └── main.ts                  # Punto de entrada

├── public/                      # Archivos públicos

├── env.d.ts                     # Declaraciones TypeScript### Desarrollo## 🛠️ Tecnologías Utilizadas

├── tsconfig.json                # Configuración TypeScript

├── vite.config.ts               # Configuración Vite- **vue-tsc 3.1.3** - TypeScript checker para archivos Vue

├── tailwind.config.js           # Configuración Tailwind

├── postcss.config.js            # Configuración PostCSS- **@vitejs/plugin-vue 6.0.1** - Plugin de Vite para Vue 3### Compile and Hot-Reload for Development

└── package.json                 # Dependencias y scripts

```- **vite-plugin-vue-devtools 8.0.3** - DevTools integrado



## 🚀 Instalación### Core



### Prerrequisitos## 📁 Estructura del Proyecto

- Node.js 20.19.0+ o 22.12.0+

- npm o yarn- **Vue 3.5.22** - Framework progresivo de JavaScript con Composition API```sh



### Pasos```



1. **Clonar el repositorio**country-app/- **TypeScript** - Superset de JavaScript con tipado estáticonpm run dev



```bash├── src/

git clone https://github.com/Gatroxm/country-app.git

cd country-app│   ├── components/              # Componentes reutilizables- **Vite 7.2.2** - Build tool y dev server ultrarrápido```

```

│   │   ├── CountryCard/

2. **Instalar dependencias**

│   │   │   ├── CountryCard.vue    # Template del componente

```bash

npm install│   │   │   ├── CountryCard.ts     # Lógica TypeScript

```

│   │   │   ├── CountryCard.test.ts # Tests unitarios### Estado y Routing### Compile and Minify for Production

## ▶️ Ejecución

│   │   │   └── index.ts            # Barrel export

### Modo Desarrollo

│   │   ├── SearchInput/- **Pinia 3.0.4** - Store oficial de Vue para manejo de estado

```bash

npm run dev│   │   │   ├── SearchInput.vue

```

│   │   │   ├── SearchInput.ts- **Vue Router 4.6.3** - Routing oficial de Vue```sh

La aplicación estará disponible en `http://localhost:5173/`

│   │   │   ├── SearchInput.test.ts

### Modo Producción

│   │   │   └── index.tsnpm run build

```bash

# Build│   │   ├── LoadingSpinner/

npm run build

│   │   │   ├── LoadingSpinner.vue### HTTP y API```

# Preview del build

npm run preview│   │   │   ├── LoadingSpinner.ts

```

│   │   │   └── index.ts- **Axios 1.13.2** - Cliente HTTP para peticiones

### Type Checking

│   │   └── ThemeToggle/- **REST Countries API** - API pública de información de países

```bash

npm run type-check│   │       ├── ThemeToggle.vue

```

│   │       ├── ThemeToggle.ts### Estilos

## 🧪 Tests

│   │       └── index.ts- **Tailwind CSS 4.1.17** - Framework CSS utility-first

### Ejecutar todos los tests

│   ├── views/                   # Vistas/Páginas- **PostCSS 8.5.6** - Transformación de CSS

```bash

npm test│   │   ├── CountryList/- **Autoprefixer 10.4.21** - Autoprefixing de CSS

```

│   │   │   ├── CountryList.vue

### Ejecutar tests con interfaz UI

│   │   │   ├── CountryList.ts### Testing

```bash

npm run test:ui│   │   │   └── index.ts- **Vitest 4.0.8** - Framework de testing ultrarrápido

```

│   │   └── CountryDetail/- **@vue/test-utils 2.4.6** - Utilidades oficiales para testing de Vue

### Tests Implementados (13/13 ✅)

│   │       ├── CountryDetail.vue- **Happy-DOM 20.0.10** - Implementación ligera del DOM para tests

#### **CountryStore Tests** (`stores/countryStore.test.ts`) - 6 tests

- ✅ Inicialización con valores por defecto│   │       ├── CountryDetail.ts

- ✅ Fetch de países exitoso

- ✅ Manejo de errores en fetch con fallback a datos de ejemplo│   │       └── index.ts### Desarrollo

- ✅ Filtrado de países por búsqueda

- ✅ Paginación correcta (20 países por página)│   ├── composables/             # Composables reutilizables- **vue-tsc** - TypeScript checker para archivos Vue

- ✅ Reset de paginación al buscar

│   │   └── useTheme.ts         # Manejo de tema dark/light- **@vitejs/plugin-vue** - Plugin de Vite para Vue 3

#### **CountryCard Tests** (`components/CountryCard/CountryCard.test.ts`) - 3 tests

- ✅ Renderizado correcto de información del país│   ├── stores/                  # Pinia stores- **vite-plugin-vue-devtools** - DevTools integrado

- ✅ Navegación a página de detalle al hacer clic

- ✅ Imagen de bandera con src correcto│   │   ├── countryStore.ts



#### **SearchInput Tests** (`components/SearchInput/SearchInput.test.ts`) - 4 tests│   │   └── countryStore.test.ts## 📁 Estructura del Proyecto

- ✅ Renderizado con placeholder correcto

- ✅ Mostrar valor del modelValue│   ├── router/                  # Vue Router

- ✅ Emitir evento update:modelValue al escribir

- ✅ Icono de búsqueda presente│   │   └── index.ts```



## 🎯 Decisiones Técnicas│   ├── types/                   # TypeScript typescountry-app/



### 1. **Separación de Lógica y Template**│   │   └── country.ts├── src/

- **Decisión**: Separar cada componente en archivos `.vue` (template) y `.ts` (lógica)

- **Razón**: Mejor organización, testing más fácil, y reutilización de lógica│   ├── assets/                  # Assets estáticos│   ├── components/              # Componentes reutilizables

- **Implementación**: Cada carpeta de componente contiene:

  - `*.vue` - Template HTML│   │   └── main.css│   │   ├── CountryCard/

  - `*.ts` - Lógica TypeScript exportada como composable

  - `*.test.ts` - Tests unitarios│   ├── App.vue                  # Componente raíz│   │   │   ├── CountryCard.vue    # Template del componente

  - `index.ts` - Barrel export

│   └── main.ts                  # Punto de entrada│   │   │   ├── CountryCard.ts     # Lógica TypeScript

### 2. **TypeScript Estricto**

- **Decisión**: Usar TypeScript con modo estricto activado├── public/                      # Archivos públicos│   │   │   ├── CountryCard.test.ts # Tests unitarios

- **Razón**: Type safety, mejor autocompletado, detección temprana de errores

- **Implementación**: ├── env.d.ts                     # Declaraciones TypeScript│   │   │   └── index.ts            # Barrel export

  - Interfaces para props de componentes

  - Tipos para respuestas de API├── tsconfig.json                # Configuración TypeScript│   │   ├── SearchInput/

  - Tipado explícito en funciones y stores

├── vite.config.ts               # Configuración Vite│   │   │   ├── SearchInput.vue

### 3. **Composition API con `<script setup>`**

- **Decisión**: Usar Composition API con sintaxis `<script setup lang="ts">`├── tailwind.config.js           # Configuración Tailwind│   │   │   ├── SearchInput.ts

- **Razón**: Código más conciso, mejor inferencia de tipos, mejor tree-shaking

- **Ventajas**: Menos boilerplate, mejor performance├── postcss.config.js            # Configuración PostCSS│   │   │   ├── SearchInput.test.ts



### 4. **Pinia para Manejo de Estado**└── package.json                 # Dependencias y scripts│   │   │   └── index.ts

- **Decisión**: Pinia en lugar de Vuex

- **Razón**: ```│   │   └── LoadingSpinner/

  - API más simple e intuitiva

  - Mejor soporte para TypeScript│   │       ├── LoadingSpinner.vue

  - Recomendado oficialmente por Vue 3

- **Implementación**: Store con setup syntax usando composables## 🚀 Instalación│   │       ├── LoadingSpinner.ts



### 5. **Tailwind CSS con Dark Mode**│   │       └── index.ts

- **Decisión**: Tailwind en lugar de CSS modules o styled-components

- **Razón**:### Prerrequisitos│   ├── views/                   # Vistas/Páginas

  - Desarrollo más rápido

  - Diseño consistente- Node.js 20.19.0+ o 22.12.0+│   │   ├── CountryList/

  - Purge automático de CSS no usado

  - Soporte nativo para dark mode con `class` strategy- npm o yarn│   │   │   ├── CountryList.vue

- **Implementación**: `darkMode: 'class'` en configuración

│   │   │   ├── CountryList.ts

### 6. **Dark Mode Persistente**

- **Decisión**: Implementar dark mode con localStorage y composable reutilizable### Pasos│   │   │   └── index.ts

- **Razón**:

  - Mejora la experiencia del usuario│   │   └── CountryDetail/

  - Persistencia entre sesiones

  - Modo light por defecto1. **Clonar el repositorio**│   │       ├── CountryDetail.vue

- **Implementación**:

  - Composable `useTheme()` con estado global```bash│   │       ├── CountryDetail.ts

  - Toggle visual en header con iconos sol/luna

  - Clase `dark` en `document.documentElement`git clone https://github.com/Gatroxm/country-app.git│   │       └── index.ts

  - Transiciones suaves con `transition-colors duration-200`

cd country-app│   ├── stores/                  # Pinia stores

### 7. **Paginación con "Ver Más"**

- **Decisión**: Carga incremental en lugar de paginación tradicional```│   │   ├── countryStore.ts

- **Razón**: Mejor UX en dispositivos móviles, menos clics

- **Implementación**: 20 países por página, botón "Ver Más" cuando hay más resultados│   │   └── countryStore.test.ts



### 8. **Búsqueda en Cliente**2. **Instalar dependencias**│   ├── router/                  # Vue Router

- **Decisión**: Filtrado en el cliente en lugar de búsqueda en API

- **Razón**: ```bash│   │   └── index.ts

  - Respuesta instantánea

  - Menos llamadas a la APInpm install│   ├── types/                   # TypeScript types

  - Datos ya cargados

- **Implementación**: Computed property que filtra el array```│   │   └── country.ts



### 9. **Testing con Vitest**│   ├── assets/                  # Assets estáticos

- **Decisión**: Vitest en lugar de Jest

- **Razón**:## ▶️ Ejecución│   │   └── main.css

  - Integración nativa con Vite

  - Más rápido que Jest│   ├── App.vue                  # Componente raíz

  - Misma API que Jest (fácil migración)

  - Mejor soporte para ESM### Modo Desarrollo│   └── main.ts                  # Punto de entrada



### 10. **Axios sobre Fetch con Fallback**```bash├── public/                      # Archivos públicos

- **Decisión**: Usar Axios para peticiones HTTP con datos de fallback

- **Razón**:npm run dev├── env.d.ts                     # Declaraciones TypeScript

  - Interceptors para manejo de errores global

  - Transformación automática de JSON```├── tsconfig.json                # Configuración TypeScript

  - Mejor UX mostrando datos de ejemplo si API falla

- **Implementación**: Try-catch con 5 países de ejemplo como fallbackLa aplicación estará disponible en `http://localhost:5173/`├── vite.config.ts               # Configuración Vite



## 📦 Funcionalidades Implementadas├── tailwind.config.js           # Configuración Tailwind



### Pantalla Principal (Listado)### Modo Producción├── postcss.config.js            # Configuración PostCSS

- ✅ Listado de todos los países ordenados alfabéticamente

- ✅ Barra de búsqueda con filtrado en tiempo real```bash└── package.json                 # Dependencias y scripts

- ✅ Tarjetas con información básica (nombre, población, región, capital)

- ✅ Paginación con "Ver Más" (20 países por página)# Build```

- ✅ Loading spinner durante carga

- ✅ Manejo de errores con fallback a datos de ejemplonpm run build

- ✅ Diseño responsive (grid adaptativo 1/2/3/4 columnas)

- ✅ Contador de resultados## 🚀 Instalación



### Pantalla de Detalle# Preview del build

- ✅ Información completa del país seleccionado

- ✅ Bandera y escudo de armasnpm run preview### Prerrequisitos

- ✅ Datos: nombre oficial, capital, región, subregión, población, área

- ✅ Idiomas y monedas con símbolos```- Node.js 20.19.0+ o 22.12.0+

- ✅ Zonas horarias

- ✅ Botón "Volver" para regresar al listado- npm o yarn

- ✅ Enlace a Google Maps

- ✅ Loading y error states### Type Checking

- ✅ Layout responsive de 2 columnas

```bash### Pasos

### Dark Mode 🌙

- ✅ Toggle dark/light mode en headernpm run type-check

- ✅ Persistencia en localStorage

- ✅ Modo light por defecto```1. **Clonar el repositorio** (o descomprimir el archivo)

- ✅ Iconos de sol ☀️ y luna 🌙

- ✅ Transiciones suaves entre temas```bash

- ✅ Todos los componentes adaptados con clases `dark:`

## 🧪 Testscd country-app

### Diseño y UX

- ✅ Interfaz limpia y moderna```

- ✅ Responsive design (mobile-first)

- ✅ Animaciones y transiciones suaves### Ejecutar todos los tests

- ✅ Estados de carga y error claros

- ✅ Feedback visual en interacciones```bash2. **Instalar dependencias**

- ✅ Hover effects en tarjetas y botones

npm test```bash

## 👨‍💻 Autor

```npm install

Desarrollado como prueba técnica para **DOUBLE_V_PARTNERS**

```

**GitHub**: [Gatroxm/country-app](https://github.com/Gatroxm/country-app)

### Ejecutar tests con interfaz UI

---

```bash## ▶️ Ejecución

## 📝 Notas Adicionales

npm run test:ui

- La aplicación consume la API pública de [REST Countries](https://restcountries.com/)

- No requiere autenticación ni API keys```### Modo Desarrollo

- Los datos se almacenan en el store de Pinia

- Si la API no está disponible, muestra 5 países de ejemplo```bash

- La aplicación es completamente client-side (SPA)

- El tema (dark/light) se guarda en localStorage### Tests Implementados (13/13 ✅)npm run dev



## 🎨 Bonus Implementados```



- ✅ **TypeScript** - 100% del código tipado#### **CountryStore Tests** (`stores/countryStore.test.ts`) - 6 testsLa aplicación estará disponible en `http://localhost:5173/`

- ✅ **Dark Mode** - Completamente funcional con persistencia

- ✅ **Responsive Design** - Mobile-first con Tailwind Grid- ✅ Inicialización con valores por defecto



## 🏆 Cumplimiento de Requerimientos- ✅ Fetch de países exitoso### Modo Producción



### Requerimientos Obligatorios- ✅ Manejo de errores en fetch con fallback a datos de ejemplo```bash

- ✅ Vue 3 con Composition API

- ✅ Vue Router con 2 rutas (/, /detail/:id)- ✅ Filtrado de países por búsqueda# Build

- ✅ Axios para peticiones HTTP

- ✅ Pinia para manejo de estado- ✅ Paginación correcta (20 países por página)npm run build

- ✅ Tests unitarios con Vitest (13 tests)

- ✅ Tailwind CSS para estilos- ✅ Reset de paginación al buscar

- ✅ Listado con búsqueda/filtrado

- ✅ Paginación/carga incremental# Preview del build

- ✅ Vista de detalle

- ✅ Componentización#### **CountryCard Tests** (`components/CountryCard/CountryCard.test.ts`) - 3 testsnpm run preview

- ✅ Buenas prácticas

- ✅ README completo- ✅ Renderizado correcto de información del país```



### Requerimientos Bonus- ✅ Navegación a página de detalle al hacer clic

- ✅ TypeScript

- ✅ Dark Mode- ✅ Imagen de bandera con src correcto### Type Checking

- ✅ Responsive Design

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

   - **Decisión**: Filtrado en el cliente en lugar de búsqueda en API
   ### 4. **Pinia para Manejo de Estado**

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
