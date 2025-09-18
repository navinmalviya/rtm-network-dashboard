// ❌ DO NOT use "use client" here
import StyledComponentsRegistry from './styled-registry';
import { StyledThemeProvider, StoreProvider } from '@/providers';
import { theme } from './theme';
import { store } from '@/store';

export const metadata = {
    title: 'MPLS Topology Dashboard',
    description: 'Live MPLS network visualization using Cytoscape.js',
};

export default function RootLayout({ children }) {
    console.log('store==>', store.getState());
    return (
        <html lang='en'>
            <body style={{ background: 'black' }}>
                <div id='rtm-dashboard-root'>
                    <StyledComponentsRegistry>
                        <StoreProvider>
                            <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
                        </StoreProvider>
                    </StyledComponentsRegistry>
                </div>
            </body>
        </html>
    );
}
