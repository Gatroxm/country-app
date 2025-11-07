import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SearchInput from './SearchInput.vue'

describe('SearchInput', () => {
    it('should render with placeholder text', () => {
        const wrapper = mount(SearchInput)

        const input = wrapper.find('input')
        expect(input.attributes('placeholder')).toBe('Buscar países por nombre...')
    })

    it('should display the modelValue', () => {
        const wrapper = mount(SearchInput, {
            props: {
                modelValue: 'Colombia'
            }
        })

        const input = wrapper.find('input')
        expect(input.element.value).toBe('Colombia')
    })

    it('should emit update:modelValue on input', async () => {
        const wrapper = mount(SearchInput)

        const input = wrapper.find('input')
        await input.setValue('Argentina')

        expect(wrapper.emitted('update:modelValue')).toBeTruthy()
        expect(wrapper.emitted('update:modelValue')![0]).toEqual(['Argentina'])
    })

    it('should have search icon', () => {
        const wrapper = mount(SearchInput)

        expect(wrapper.text()).toContain('🔍')
    })
})
