import { ref, computed } from 'vue'

export type Theme = 'light' | 'dark'

// Estado global compartido
const isDark = ref<boolean>(false)

export function useTheme() {
    const currentTheme = computed<Theme>(() => isDark.value ? 'dark' : 'light')

    const setTheme = (theme: Theme) => {
        isDark.value = theme === 'dark'
        
        if (isDark.value) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        
        localStorage.setItem('theme', theme)
    }

    const toggleTheme = () => {
        const newTheme: Theme = isDark.value ? 'light' : 'dark'
        setTheme(newTheme)
    }

    const initTheme = () => {
        const savedTheme = localStorage.getItem('theme') as Theme | null
        
        if (savedTheme) {
            setTheme(savedTheme)
        } else {
            // Por defecto usar modo light
            setTheme('light')
        }
    }

    return {
        isDark,
        currentTheme,
        setTheme,
        toggleTheme,
        initTheme
    }
}
