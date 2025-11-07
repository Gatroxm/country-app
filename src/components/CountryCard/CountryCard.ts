import { useRouter } from 'vue-router'
import type { Country } from '@/types/country'

export interface CountryCardProps {
    country: Country
}

export function useCountryCard(props: CountryCardProps) {
    const router = useRouter()

    function viewDetails(): void {
        router.push(`/detail/${props.country.cca3}`)
    }

    function formatNumber(num: number): string {
        return new Intl.NumberFormat('es-ES').format(num)
    }

    return {
        viewDetails,
        formatNumber
    }
}
