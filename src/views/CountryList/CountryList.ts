import { onMounted } from 'vue'
import { useCountryStore } from '@/stores/countryStore'

export function useCountryList() {
    const countryStore = useCountryStore()

    onMounted(() => {
        if (countryStore.countries.length === 0) {
            countryStore.fetchCountries()
        }
    })

    return {
        countryStore
    }
}
