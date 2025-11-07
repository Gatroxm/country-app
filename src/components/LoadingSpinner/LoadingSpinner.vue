<script setup lang="ts">
</script>

<template>
    <div class="flex justify-center items-center py-12">
        <div class="relative">
            <div
                class="w-16 h-16 border-4 border-blue-200 dark:border-blue-900 border-t-blue-600 dark:border-t-blue-400 rounded-full animate-spin">
            </div>
            <p class="mt-4 text-gray-600 dark:text-gray-300 text-center">Cargando...</p>
        </div>
    </div>
</template>

<style scoped>
@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

.animate-spin {
    animation: spin 1s linear infinite;
}
</style>
