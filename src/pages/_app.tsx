import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { BoardProvider } from '../core/react/board/board-context-provider'
import { DraftProvider } from '../core/react/draft/drafted-player-provider'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DraftProvider>
      <BoardProvider>
        <Component {...pageProps} />
      </BoardProvider>
    </DraftProvider>
  )
}