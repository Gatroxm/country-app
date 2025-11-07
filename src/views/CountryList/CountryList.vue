<script setup lang="ts">
import { useCountryList } from './CountryList'
import CountryCard from '@/components/CountryCard'
import SearchInput from '@/components/SearchInput'
import LoadingSpinner from '@/components/LoadingSpinner'

const { countryStore } = useCountryList()
</script>

<template>
    <div>
        <!-- Search Input -->
        <SearchInput :model-value="countryStore.searchQuery" @update:model-value="countryStore.setSearchQuery" />

        <!-- Loading State -->
        <LoadingSpinner v-if="countryStore.isLoading && countryStore.countries.length === 0" />

        <!-- Error State (solo si no hay países cargados) -->
        <div v-else-if="countryStore.error && countryStore.countries.length === 0" class="text-center py-12">
            <p class="text-red-600 dark:text-red-400 text-lg">{{ countryStore.error }}</p>
            <button @click="countryStore.fetchCountries"
                class="mt-4 px-6 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition">
                Reintentar
            </button>
        </div>

        <!-- Countries Grid -->
        <div v-else>
            <!-- Warning Message (si hay error pero también hay datos) -->
            <div v-if="countryStore.error && countryStore.countries.length > 0" class="text-center py-6 mb-6">
                <p class="text-red-600 dark:text-red-400 text-lg">{{ countryStore.error }}</p>
                <button @click="countryStore.fetchCountries"
                    class="mt-4 px-6 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition">
                    Reintentar
                </button>
            </div>

            <div v-if="countryStore.paginatedCountries.length === 0" class="text-center py-12">
                <p class="text-gray-500 dark:text-gray-400 text-lg">No se encontraron países</p>
            </div>

            <div v-else>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <CountryCard v-for="country in countryStore.paginatedCountries" :key="country.cca3"
                        :country="country" />
                </div>

                <!-- Load More Button -->
                <div v-if="countryStore.hasMore" class="text-center mt-8">
                    <button @click="countryStore.loadMore"
                        class="px-8 py-3 bg-blue-600 dark:bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition shadow-md">
                        Ver Más
                    </button>
                </div>

                <!-- Results Info -->
                <div class="text-center mt-4 text-gray-600 dark:text-gray-400">
                    Mostrando {{ countryStore.paginatedCountries.length }} de {{ countryStore.filteredCountries.length
                    }} países
                </div>
            </div>
        </div>
    </div>
</template>
