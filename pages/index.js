import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken = 
  'pk.eyJ1IjoiZnJhbmstZ3JpamFsYmEiLCJhIjoiY2t5a3lsZnB2MXIzZzJ2bjhsZ2VsbXU5YyJ9.aGAqx1VxLGR7MVBGIRZjKA';

export default function Home() {

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-76.5205, 3.42158],
      zoom: 12,
    })
  })

  return (
    <Wrapper>
      <Map id="map"></Map>
      <ActionItems>Start</ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex flex-col bg-red-300 h-screen
`
const Map = tw.div`
  bg-red-500 flex-1
`

const ActionItems = tw.div`
  flex-1
`