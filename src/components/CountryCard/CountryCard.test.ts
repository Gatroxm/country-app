import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import CountryCard from './CountryCard.vue'
import type { Country } from '@/types/country'

const mockCountry: Country = {
    name: { common: 'Colombia', official: 'Republic of Colombia' },
    cca2: 'CO',
    cca3: 'COL',
    flags: { svg: 'https://example.com/flag.svg', png: 'https://example.com/flag.png' },
    population: 50000000,
    region: 'Americas',
    capital: ['Bogotá']
}

describe('CountryCard', () => {
    it('should render country information correctly', () => {
        const router = createRouter({
            history: createMemoryHistory(),
            routes: [{ path: '/detail/:id', name: 'detail', component: { template: '<div></div>' } }]
        })

        const wrapper = mount(CountryCard, {
            props: { country: mockCountry },
            global: {
                plugins: [router]
            }
        })

        expect(wrapper.text()).toContain('Colombia')
        expect(wrapper.text()).toContain('50.000.000')
        expect(wrapper.text()).toContain('Americas')
        expect(wrapper.text()).toContain('Bogotá')
    })

    it('should navigate to detail page on click', async () => {
        const router = createRouter({
            history: createMemoryHistory(),
            routes: [{ path: '/detail/:id', name: 'detail', component: { template: '<div></div>' } }]
        })

        const wrapper = mount(CountryCard, {
            props: { country: mockCountry },
            global: {
                plugins: [router]
            }
        })

        await wrapper.trigger('click')

        expect(router.currentRoute.value.path).toBe('/')
    })

    it('should display flag image with correct src', () => {
        const router = createRouter({
            history: createMemoryHistory(),
            routes: [{ path: '/detail/:id', name: 'detail', component: { template: '<div></div>' } }]
        })

        const wrapper = mount(CountryCard, {
            props: { country: mockCountry },
            global: {
                plugins: [router]
            }
        })

        const img = wrapper.find('img')
        expect(img.attributes('src')).toBe(mockCountry.flags.svg)
        expect(img.attributes('alt')).toContain('Colombia')
    })
})
