import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
// import { sanityClient } from '../../sanity'
import { pageInfo } from '../pages/api/getPageInfo'

import { sanityClient } from '../../utils/client'


const inter = Inter({ subsets: ['latin'] })

export default function Home({pageInfo}) {
  console.log('first')
  
  return (
    <main className={styles.main}>
      <h2>hellos</h2>
    </main>
  )
}


