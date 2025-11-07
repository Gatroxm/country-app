import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from 'axios'
import type { Country } from '@/types/country'

export const useCountryStore = defineStore('country', () => {
    // State
    const countries = ref<Country[]>([])
    const isLoading = ref<boolean>(false)
    const error = ref<string | null>(null)
    const searchQuery = ref<string>('')
    const itemsPerPage = 20
    const currentPage = ref<number>(1)

    // Getters
    const filteredCountries = computed<Country[]>(() => {
        if (!searchQuery.value) return countries.value

        return countries.value.filter(country =>
            country.name.common.toLowerCase().includes(searchQuery.value.toLowerCase())
        )
    })

    const paginatedCountries = computed<Country[]>(() => {
        const start = 0
        const end = currentPage.value * itemsPerPage
        return filteredCountries.value.slice(start, end)
    })

    const hasMore = computed<boolean>(() => {
        return paginatedCountries.value.length < filteredCountries.value.length
    })

    // Actions
    async function fetchCountries(): Promise<void> {
        isLoading.value = true
        error.value = null

        try {
            const response = await axios.get<Country[]>('https://restcountries.com/v3.1/all')
            countries.value = response.data.sort((a, b) =>
                a.name.common.localeCompare(b.name.common)
            )
            // Países cargados exitosamente desde la API
        } catch (err: any) {
            // Error al cargar desde API, usando datos de ejemplo como fallback
            
            // Datos mock de ejemplo para desarrollo/demostración
            countries.value = [
                {
                    name: { common: 'Colombia', official: 'Republic of Colombia' },
                    cca2: 'CO',
                    cca3: 'COL',
                    capital: ['Bogotá'],
                    region: 'Americas',
                    subregion: 'South America',
                    population: 50882884,
                    area: 1141748,
                    flags: { 
                        svg: 'https://flagcdn.com/co.svg',
                        png: 'https://flagcdn.com/w320/co.png'
                    },
                    languages: { spa: 'Spanish' },
                    currencies: { COP: { name: 'Colombian peso', symbol: '$' } },
                    timezones: ['UTC-05:00'],
                    maps: { 
                        googleMaps: 'https://goo.gl/maps/RdwTG8e7gPZS9vfmA',
                        openStreetMaps: 'https://www.openstreetmap.org/relation/120027'
                    }
                },
                {
                    name: { common: 'Argentina', official: 'Argentine Republic' },
                    cca2: 'AR',
                    cca3: 'ARG',
                    capital: ['Buenos Aires'],
                    region: 'Americas',
                    subregion: 'South America',
                    population: 45376763,
                    area: 2780400,
                    flags: { 
                        svg: 'https://flagcdn.com/ar.svg',
                        png: 'https://flagcdn.com/w320/ar.png'
                    },
                    languages: { spa: 'Spanish' },
                    currencies: { ARS: { name: 'Argentine peso', symbol: '$' } },
                    timezones: ['UTC-03:00'],
                    maps: { 
                        googleMaps: 'https://goo.gl/maps/Z9DXNxhf2o93kvyc6',
                        openStreetMaps: 'https://www.openstreetmap.org/relation/286393'
                    }
                },
                {
                    name: { common: 'United States', official: 'United States of America' },
                    cca2: 'US',
                    cca3: 'USA',
                    capital: ['Washington, D.C.'],
                    region: 'Americas',
                    subregion: 'North America',
                    population: 329484123,
                    area: 9372610,
                    flags: { 
                        svg: 'https://flagcdn.com/us.svg',
                        png: 'https://flagcdn.com/w320/us.png'
                    },
                    languages: { eng: 'English' },
                    currencies: { USD: { name: 'United States dollar', symbol: '$' } },
                    timezones: ['UTC-12:00', 'UTC-11:00', 'UTC-10:00', 'UTC-09:00', 'UTC-08:00', 'UTC-07:00', 'UTC-06:00', 'UTC-05:00', 'UTC-04:00'],
                    maps: { 
                        googleMaps: 'https://goo.gl/maps/e8M246zY4BSjkjAv6',
                        openStreetMaps: 'https://www.openstreetmap.org/relation/148838'
                    }
                },
                {
                    name: { common: 'Spain', official: 'Kingdom of Spain' },
                    cca2: 'ES',
                    cca3: 'ESP',
                    capital: ['Madrid'],
                    region: 'Europe',
                    subregion: 'Southern Europe',
                    population: 47351567,
                    area: 505992,
                    flags: { 
                        svg: 'https://flagcdn.com/es.svg',
                        png: 'https://flagcdn.com/w320/es.png'
                    },
                    languages: { spa: 'Spanish' },
                    currencies: { EUR: { name: 'Euro', symbol: '€' } },
                    timezones: ['UTC', 'UTC+01:00'],
                    maps: { 
                        googleMaps: 'https://goo.gl/maps/138JaXW8EZzRVitY9',
                        openStreetMaps: 'https://www.openstreetmap.org/relation/1311341'
                    }
                },
                {
                    name: { common: 'France', official: 'French Republic' },
                    cca2: 'FR',
                    cca3: 'FRA',
                    capital: ['Paris'],
                    region: 'Europe',
                    subregion: 'Western Europe',
                    population: 67391582,
                    area: 551695,
                    flags: { 
                        svg: 'https://flagcdn.com/fr.svg',
                        png: 'https://flagcdn.com/w320/fr.png'
                    },
                    languages: { fra: 'French' },
                    currencies: { EUR: { name: 'Euro', symbol: '€' } },
                    timezones: ['UTC-10:00', 'UTC-09:30', 'UTC-09:00', 'UTC-08:00', 'UTC-04:00', 'UTC-03:00', 'UTC+01:00', 'UTC+02:00', 'UTC+03:00', 'UTC+04:00', 'UTC+05:00', 'UTC+10:00', 'UTC+11:00', 'UTC+12:00'],
                    maps: { 
                        googleMaps: 'https://goo.gl/maps/g7QxxSFsWyTPKuzd7',
                        openStreetMaps: 'https://www.openstreetmap.org/relation/2202162'
                    }
                }
            ] as Country[]
            
            error.value = 'Mostrando datos de ejemplo. La API de REST Countries no está disponible en este momento.'
        } finally {
            isLoading.value = false
        }
    }

    async function fetchCountryByCode(code: string): Promise<Country | null> {
        isLoading.value = true
        error.value = null

        try {
            const response = await axios.get<Country[]>(`https://restcountries.com/v3.1/alpha/${code}`)
            return response.data[0]
        } catch (err) {
            error.value = (err as Error).message || 'Error al cargar el país'
            // Error al cargar detalles del país
            return null
        } finally {
            isLoading.value = false
        }
    }

    function setSearchQuery(query: string): void {
        searchQuery.value = query
        currentPage.value = 1 // Reset pagination cuando se busca
    }

    function loadMore(): void {
        if (hasMore.value) {
            currentPage.value++
        }
    }

    function resetPagination(): void {
        currentPage.value = 1
    }

    return {
        // State
        countries,
        isLoading,
        error,
        searchQuery,
        currentPage,
        // Getters
        filteredCountries,
        paginatedCountries,
        hasMore,
        // Actions
        fetchCountries,
        fetchCountryByCode,
        setSearchQuery,
        loadMore,
        resetPagination
    }
})
