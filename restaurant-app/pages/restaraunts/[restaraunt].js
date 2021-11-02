import Head from 'next/head'
import Image from 'next/image'
import {useRouter} from "next/router"
import styles from '../../styles/Home.module.css'

export default function Restaraunt() {
  const router = useRouter()
  
    return (
 <h1>Dynamic Restaraunt {router.query.restaraunt}</h1>
  )
}
