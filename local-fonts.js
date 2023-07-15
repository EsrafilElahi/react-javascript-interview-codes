// localFonts.js
import localFont from '@next/font/local';

// local fonts
export const dana = localFont({
  src: [
    {
      path: '../public/fonts/dana/Dana.ttf',
      weight: 'normal'
    }
  ],
  preload: true,
  variable: '--font-dana',
})

export const danaBold = localFont({
  src: [
    {
      path: '../public/fonts/dana/Dana-Bold.ttf',
      weight: 'bold'
    }
  ],
  preload: true,
  variable: '--font-danaBold',
})

// _app.js
import { dana, danaBold } from './localFonts'

<div className={`${dana.className} ${dana.variables} font-dana`}>
  {getLayout(<Component {...pageProps} />, pageProps)}
</div>
