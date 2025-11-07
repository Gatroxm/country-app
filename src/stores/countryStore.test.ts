import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useCountryStore } from './countryStore'
import axios from 'axios'
import type { Country } from '@/types/country'

// Mock axios
vi.mock('axios', () => ({
    default: {
        get: vi.fn(),
    },
}))

describe('Country Store', () => {
    let store: ReturnType<typeof useCountryStore>

    beforeEach(() => {
        setActivePinia(createPinia())
        store = useCountryStore()
        vi.clearAllMocks()
    })

    it('should initialize with default values', () => {
        expect(store.countries).toEqual([])
        expect(store.isLoading).toBe(false)
        expect(store.error).toBeNull()
        expect(store.searchQuery).toBe('')
        expect(store.currentPage).toBe(1)
    })

    it('should fetch countries successfully', async () => {
        const mockCountries: Partial<Country>[] = [
            { name: { common: 'Colombia', official: 'Republic of Colombia' }, cca3: 'COL' },
            { name: { common: 'Argentina', official: 'Argentine Republic' }, cca3: 'ARG' }
        ]

        vi.mocked(axios.get).mockResolvedValueOnce({ data: mockCountries })

        await store.fetchCountries()

        expect(store.countries.length).toBe(2)
        expect(store.isLoading).toBe(false)
        expect(store.error).toBeNull()
    })

    it('should handle fetch error', async () => {
        vi.mocked(axios.get).mockRejectedValueOnce(new Error('Network error'))

        await store.fetchCountries()

        expect(store.error).toBe('Network error')
        expect(store.isLoading).toBe(false)
    })

    it('should filter countries by search query', () => {
        store.countries = [
            { name: { common: 'Colombia', official: 'Republic of Colombia' }, cca3: 'COL' } as Country,
            { name: { common: 'Argentina', official: 'Argentine Republic' }, cca3: 'ARG' } as Country,
            { name: { common: 'Brazil', official: 'Federative Republic of Brazil' }, cca3: 'BRA' } as Country
        ]

        store.setSearchQuery('col')

        expect(store.filteredCountries.length).toBe(1)
        expect(store.filteredCountries[0].name.common).toBe('Colombia')
    })

    it('should paginate countries correctly', () => {
        store.countries = Array.from({ length: 50 }, (_, i) => ({
            name: { common: `Country ${i}`, official: `Official Country ${i}` },
            cca3: `C${i.toString().padStart(2, '0')}`,
            cca2: `C${i}`,
            region: 'Test',
            population: 1000,
            flags: { png: '', svg: '' }
        })) as Country[]

        expect(store.paginatedCountries.length).toBe(20)
        expect(store.hasMore).toBe(true)

        store.loadMore()
        expect(store.paginatedCountries.length).toBe(40)

        store.loadMore()
        expect(store.paginatedCountries.length).toBe(50)
        expect(store.hasMore).toBe(false)
    })

    it('should reset pagination when searching', () => {
        store.currentPage = 3
        store.setSearchQuery('test')

        expect(store.currentPage).toBe(1)
    })
})
