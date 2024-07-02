export default function manifest() {
    return {
      name: 'Next.js App',
      short_name: 'Next.js App',
      description: 'Next.js App',
      start_url: '/',
      display: 'standalone',
    //   background_color: '#fff',
    //   theme_color: '#fff',
      icons: [
        {
          src: '/favicon.png',
          sizes: '32x32',
          type: 'image/png',
        },
          {
          src: '/favicon.png',
          sizes: '16x16',
          type: 'image/png',
        },
            {
          src: '/android-chrome.png',
          sizes: '192x192',
          type: 'image/png',
        },
            {
          src: '/android-chrome-',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    }
  }