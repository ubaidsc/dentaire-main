import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Hero from '@/components/index/Hero'

import Services from '@/components/index/Services'
import Features from '@/components/index/Features'
import Reviews from '@/components/index/Reviews'
import Location from '@/components/index/Location'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Cabinet Dentaire Ennasr</title>
        <meta name="description" content="Cabinet Dentaire Ennasr de Tanger. Prenez un rendez-vous avec l'un des meilleurs médecins dès maintenant." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link key="icon" rel="icon" href="/logo.jpg" />
      </Head>
      <Header />
      <main className='max-w-screen-2xl md:px-4 mx-auto'>
        {/************ Hero section ************/}
        <section id="hero">
          <Hero />
        </section>
        <section id="services" className='bg-slate-100/40'>
          <Services />
        </section>
        <section id="features" className='bg-mauve md:bg-transparent'>
          <Features />
        </section>
        <section id="reviews" className='bg-blue md:bg-transparent'>
          <Reviews />
        </section>
        <section id="location">
          <Location />
        </section>
      </main>
      <Footer />
    </>
  )
}
