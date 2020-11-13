import { GlobalStyleCommon } from './common'
import { GlobalStyleFonts } from './fonts'
import { normalize } from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    ${normalize}
    ${GlobalStyleFonts}
    ${GlobalStyleCommon}
`
