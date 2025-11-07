<script setup lang="ts">
import { useCountryCard, type CountryCardProps } from './CountryCard'

const props = defineProps<CountryCardProps>()

const { viewDetails, formatNumber } = useCountryCard(props)
</script>

<template>
    <div @click="viewDetails"
        class="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer overflow-hidden">
        <!-- Flag -->
        <div class="h-48 overflow-hidden">
            <img :src="country.flags.svg" :alt="`Bandera de ${country.name.common}`"
                class="w-full h-full object-cover" />
        </div>

        <!-- Content -->
        <div class="p-4">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 truncate">
                {{ country.name.common }}
            </h3>

            <div class="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <p><strong class="dark:text-gray-200">Población:</strong> {{ formatNumber(country.population) }}</p>
                <p><strong class="dark:text-gray-200">Región:</strong> {{ country.region }}</p>
                <p v-if="country.capital"><strong class="dark:text-gray-200">Capital:</strong> {{ country.capital[0] }}
                </p>
            </div>
        </div>
    </div>
</template>
