//  Palette
import palette from './palette'

//  Types
import type { theme, themeMode } from 'src/types'

const themes: Record<themeMode, theme> = {
    light: {
        primary: palette['--terra-cotta'],
        background: palette['--cream'],
        text: palette['--raisin-black'],
    },
    dark: {
        primary: palette['--terra-cotta'],
        background: palette['--raisin-black'],
        text: palette['--cream'],
    }
}

//  -----------------
export default themes
//  -----------------