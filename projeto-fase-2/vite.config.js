import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from "vite-plugin-pwa";
const manifestForPlugIn = {
  registerType:'prompt',
  includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'maskable_icon_x512.png'],
  manifest:{
    name:"App Fodastico",
    short_name:"App Foda",
    description:"Um app muito muito foda",
    icons:[{
      src: '/android-chrome-192x192.png',
      sizes:'192x192',
      type:'image/png',
      purpose:'favicon'
    },
    {
      src:'/android-chrome-512x512.png',
      sizes:'512x512',
      type:'image/png',
      purpose:'favicon'
    },
    {
      src: '/apple-touch-icon.png',
      sizes:'180x180',
      type:'image/png',
      purpose:'apple touch icon',
    },
    {
      src: '/maskable_icon_x512.png',
      sizes:'512x512',
      type:'image/png',
      purpose:'any maskable',
    }
  ],
  theme_color:'#171717',
  background_color:'#000000ff',
  display:"standalone",
  scope:'/',
  start_url:"/",
  orientation:'portrait'
  }
}
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), 
  VitePWA(manifestForPlugIn)],
})