export interface SearchInputProps {
    modelValue?: string
}

export interface SearchInputEmits {
    (e: 'update:modelValue', value: string): void
}

export function useSearchInput(emit: SearchInputEmits) {
    function handleInput(event: Event): void {
        const target = event.target as HTMLInputElement
        emit('update:modelValue', target.value)
    }

    return {
        handleInput
    }
}
