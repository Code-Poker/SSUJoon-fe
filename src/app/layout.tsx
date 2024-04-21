import type { Metadata } from 'next'
import { Providers } from '@/app/providers'
import { ColorModeScript, Box, Container } from '@chakra-ui/react'
import theme from '@/utils/theme'
import { Navbar } from '@/app/components/layout/Navbar';
import { Footer } from '@/app/components/layout/Footer';

export const metadata: Metadata = {
  title: 'SSUJoon',
  description: 'Generated by create next app',
};

// TODO: Add colorModeManager to fix flashing (reference: https://v2.chakra-ui.com/docs/styled-system/color-mode#add-colormodemanager-optional-for-ssr)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode}></ColorModeScript>
        <Providers>
          <Box minH='100dvh'>
          <Navbar />
            <Container maxW='container.xl'>
              {children}
            </Container>
          </Box>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
