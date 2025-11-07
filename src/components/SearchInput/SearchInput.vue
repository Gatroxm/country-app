<script setup lang="ts">
import { useSearchInput, type SearchInputProps, type SearchInputEmits } from './SearchInput'

withDefaults(defineProps<SearchInputProps>(), {
    modelValue: ''
})

const emit = defineEmits<SearchInputEmits>()

const { handleInput } = useSearchInput(emit)
</script>

<template>
    <div class="mb-8">
        <div class="relative max-w-xl">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span class="text-gray-400 dark:text-gray-500 text-xl">🔍</span>
            </div>
            <input type="text" :value="modelValue" @input="handleInput" placeholder="Buscar países por nombre..."
                class="block w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" />
        </div>
    </div>
</template>
