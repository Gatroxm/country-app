import { useTheme } from '@/composables/useTheme'

export function useThemeToggle() {
    const { isDark, toggleTheme } = useTheme()

    return {
        isDark,
        toggleTheme
    }
}
