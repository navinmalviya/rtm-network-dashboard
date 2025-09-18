'use client';

import { ThemeProvider } from 'styled-components';
import { theme } from '@/app/theme';

export default function StyledThemeProvider({ children }) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
