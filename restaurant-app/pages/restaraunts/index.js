import Head from 'next/head'
import Image from 'next/image'
import Link from "next/Link"
import styles from '../../styles/Home.module.css'

export default function Home() {
  const restaurants = [
    {name:"WoodsHill"},
    {name:"Fiorellas"},
    {name:"Karma"}

  ]


  return (
    <div> 
 <h1>Restraunt List</h1>
{restaurants.map( item =>{
  return <div> 

<Link as={"/restaraunts/"+item.name} href="restaraunts/[restaraunt]">
<a> {item.name} </a>
  </Link> 
 </div>
})}
</div>
 ) 
}
