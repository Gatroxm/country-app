<script setup lang="ts">
import { useCountryDetail } from './CountryDetail'
import LoadingSpinner from '@/components/LoadingSpinner'

const { country, countryStore, goBack, formatNumber } = useCountryDetail()
</script>

<template>
    <div>
        <!-- Back Button -->
        <button @click="goBack"
            class="mb-6 flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-md rounded-lg hover:shadow-lg transition">
            <span class="text-xl">←</span>
            <span>Volver</span>
        </button>

        <!-- Loading State -->
        <LoadingSpinner v-if="countryStore.isLoading" />

        <!-- Error State -->
        <div v-else-if="countryStore.error" class="text-center py-12">
            <p class="text-red-600 dark:text-red-400 text-lg">{{ countryStore.error }}</p>
            <button @click="goBack"
                class="mt-4 px-6 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition">
                Volver al listado
            </button>
        </div>

        <!-- Country Details -->
        <div v-else-if="country" class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                <!-- Flag -->
                <div class="flex items-center justify-center">
                    <img :src="country.flags.svg" :alt="`Bandera de ${country.name.common}`"
                        class="w-full max-w-md shadow-lg rounded-lg" />
                </div>

                <!-- Information -->
                <div>
                    <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">{{ country.name.common }}</h2>

                    <div class="space-y-4">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 class="font-semibold text-gray-700 dark:text-gray-300 mb-2">Información General</h3>
                                <ul class="space-y-2 text-gray-600 dark:text-gray-400">
                                    <li><strong class="dark:text-gray-300">Nombre oficial:</strong> {{
                                        country.name.official }}</li>
                                    <li v-if="country.capital"><strong class="dark:text-gray-300">Capital:</strong> {{
                                        country.capital.join(', ')
                                        }}</li>
                                    <li><strong class="dark:text-gray-300">Región:</strong> {{ country.region }}</li>
                                    <li v-if="country.subregion"><strong class="dark:text-gray-300">Subregión:</strong>
                                        {{ country.subregion }}
                                    </li>
                                    <li><strong class="dark:text-gray-300">Población:</strong> {{
                                        formatNumber(country.population) }}</li>
                                </ul>
                            </div>

                            <div>
                                <h3 class="font-semibold text-gray-700 dark:text-gray-300 mb-2">Detalles Adicionales
                                </h3>
                                <ul class="space-y-2 text-gray-600 dark:text-gray-400">
                                    <li v-if="country.area"><strong class="dark:text-gray-300">Área:</strong> {{
                                        formatNumber(country.area) }} km²
                                    </li>
                                    <li v-if="country.languages">
                                        <strong class="dark:text-gray-300">Idiomas:</strong> {{
                                            Object.values(country.languages).join(', ') }}
                                    </li>
                                    <li v-if="country.currencies">
                                        <strong class="dark:text-gray-300">Monedas:</strong>
                                        {{
                                            Object.values(country.currencies).map(c => `${c.name} (${c.symbol})`).join(', ')
                                        }}
                                    </li>
                                    <li v-if="country.timezones">
                                        <strong class="dark:text-gray-300">Zonas horarias:</strong> {{
                                        country.timezones.join(', ') }}
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <!-- Coat of Arms -->
                        <div v-if="country.coatOfArms?.svg" class="mt-6">
                            <h3 class="font-semibold text-gray-700 dark:text-gray-300 mb-2">Escudo de Armas</h3>
                            <img :src="country.coatOfArms.svg" :alt="`Escudo de ${country.name.common}`"
                                class="w-32 h-32 object-contain" />
                        </div>

                        <!-- Maps Link -->
                        <div v-if="country.maps?.googleMaps" class="mt-6">
                            <a :href="country.maps.googleMaps" target="_blank" rel="noopener noreferrer"
                                class="inline-block px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition">
                                Ver en Google Maps 🗺️
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
