import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCountryStore } from '@/stores/countryStore'
import type { Country } from '@/types/country'

export function useCountryDetail() {
    const route = useRoute()
    const router = useRouter()
    const countryStore = useCountryStore()
    const country = ref<Country | null>(null)

    onMounted(async () => {
        const code = route.params.id as string
        country.value = await countryStore.fetchCountryByCode(code)
    })

    function goBack(): void {
        router.push('/')
    }

    function formatNumber(num: number): string {
        return new Intl.NumberFormat('es-ES').format(num)
    }

    return {
        country,
        countryStore,
        goBack,
        formatNumber
    }
}
