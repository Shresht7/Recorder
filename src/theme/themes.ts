//  Palette
import palette from './palette'

//  Types
import type { theme, themeMode } from 'src/types'

const themes: Record<themeMode, theme> = {
    light: {
        primary: palette['--terra-cotta'],
        background: palette['--cream'],
        text: palette['--raisin-black'],
        highlight: palette['--maximum-blue-purple'],
        danger: palette['--red-ryb'],
        success: palette['--green']
    },
    dark: {
        primary: palette['--terra-cotta'],
        background: palette['--raisin-black'],
        text: palette['--cream'],
        highlight: palette['--maximum-blue-purple'],
        danger: palette['--red-ryb'],
        success: palette['--green']
    }
}

//  -----------------
export default themes
//  -----------------