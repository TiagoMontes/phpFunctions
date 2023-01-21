import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Header } from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Tiago Montes</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>
      </Head>
      
      <>
        <Header />
      </>

      <div className='Body'>
        <p className='paragrafo'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id scelerisque massa, a mollis lectus. Ut maximus sodales ex porta posuere. Curabitur ut lorem at odio pellentesque aliquet. Duis magna odio, lacinia nec feugiat vel, ultricies interdum sapien. Vivamus mi tortor, posuere sodales tempus quis, volutpat eget dui. Suspendisse massa felis, rutrum quis hendrerit ac, auctor a urna. Morbi nec bibendum sem, a vestibulum erat. Vestibulum a molestie orci. Morbi nec magna tincidunt ante interdum laoreet. Vestibulum in facilisis eros, quis aliquet justo. Nulla fermentum ultrices placerat. Vestibulum arcu ipsum, efficitur sed turpis maximus, facilisis pellentesque felis. Donec non lectus eget dolor luctus ultrices. Sed vitae elementum tellus. Cras dictum est erat, at vehicula tortor dapibus ut.
        </p>
        <p className='paragrafo'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id scelerisque massa, a mollis lectus. Ut maximus sodales ex porta posuere. Curabitur ut lorem at odio pellentesque aliquet. Duis magna odio, lacinia nec feugiat vel, ultricies interdum sapien. Vivamus mi tortor, posuere sodales tempus quis, volutpat eget dui. Suspendisse massa felis, rutrum quis hendrerit ac, auctor a urna. Morbi nec bibendum sem, a vestibulum erat. Vestibulum a molestie orci. Morbi nec magna tincidunt ante interdum laoreet. Vestibulum in facilisis eros, quis aliquet justo. Nulla fermentum ultrices placerat. Vestibulum arcu ipsum, efficitur sed turpis maximus, facilisis pellentesque felis. Donec non lectus eget dolor luctus ultrices. Sed vitae elementum tellus. Cras dictum est erat, at vehicula tortor dapibus ut.
        </p>
        <p className='paragrafo'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id scelerisque massa, a mollis lectus. Ut maximus sodales ex porta posuere. Curabitur ut lorem at odio pellentesque aliquet. Duis magna odio, lacinia nec feugiat vel, ultricies interdum sapien. Vivamus mi tortor, posuere sodales tempus quis, volutpat eget dui. Suspendisse massa felis, rutrum quis hendrerit ac, auctor a urna. Morbi nec bibendum sem, a vestibulum erat. Vestibulum a molestie orci. Morbi nec magna tincidunt ante interdum laoreet. Vestibulum in facilisis eros, quis aliquet justo. Nulla fermentum ultrices placerat. Vestibulum arcu ipsum, efficitur sed turpis maximus, facilisis pellentesque felis. Donec non lectus eget dolor luctus ultrices. Sed vitae elementum tellus. Cras dictum est erat, at vehicula tortor dapibus ut.
        </p>
        <p className='paragrafo'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id scelerisque massa, a mollis lectus. Ut maximus sodales ex porta posuere. Curabitur ut lorem at odio pellentesque aliquet. Duis magna odio, lacinia nec feugiat vel, ultricies interdum sapien. Vivamus mi tortor, posuere sodales tempus quis, volutpat eget dui. Suspendisse massa felis, rutrum quis hendrerit ac, auctor a urna. Morbi nec bibendum sem, a vestibulum erat. Vestibulum a molestie orci. Morbi nec magna tincidunt ante interdum laoreet. Vestibulum in facilisis eros, quis aliquet justo. Nulla fermentum ultrices placerat. Vestibulum arcu ipsum, efficitur sed turpis maximus, facilisis pellentesque felis. Donec non lectus eget dolor luctus ultrices. Sed vitae elementum tellus. Cras dictum est erat, at vehicula tortor dapibus ut.
        </p>
        <p className='paragrafo'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id scelerisque massa, a mollis lectus. Ut maximus sodales ex porta posuere. Curabitur ut lorem at odio pellentesque aliquet. Duis magna odio, lacinia nec feugiat vel, ultricies interdum sapien. Vivamus mi tortor, posuere sodales tempus quis, volutpat eget dui. Suspendisse massa felis, rutrum quis hendrerit ac, auctor a urna. Morbi nec bibendum sem, a vestibulum erat. Vestibulum a molestie orci. Morbi nec magna tincidunt ante interdum laoreet. Vestibulum in facilisis eros, quis aliquet justo. Nulla fermentum ultrices placerat. Vestibulum arcu ipsum, efficitur sed turpis maximus, facilisis pellentesque felis. Donec non lectus eget dolor luctus ultrices. Sed vitae elementum tellus. Cras dictum est erat, at vehicula tortor dapibus ut.
        </p>
        <p className='paragrafo'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id scelerisque massa, a mollis lectus. Ut maximus sodales ex porta posuere. Curabitur ut lorem at odio pellentesque aliquet. Duis magna odio, lacinia nec feugiat vel, ultricies interdum sapien. Vivamus mi tortor, posuere sodales tempus quis, volutpat eget dui. Suspendisse massa felis, rutrum quis hendrerit ac, auctor a urna. Morbi nec bibendum sem, a vestibulum erat. Vestibulum a molestie orci. Morbi nec magna tincidunt ante interdum laoreet. Vestibulum in facilisis eros, quis aliquet justo. Nulla fermentum ultrices placerat. Vestibulum arcu ipsum, efficitur sed turpis maximus, facilisis pellentesque felis. Donec non lectus eget dolor luctus ultrices. Sed vitae elementum tellus. Cras dictum est erat, at vehicula tortor dapibus ut.
        </p>
      </div>
    </>
  )
}
