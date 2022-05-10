import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'
import Map from './components/Map'

mapboxgl.accessToken = 
  'pk.eyJ1IjoiZnJhbmstZ3JpamFsYmEiLCJhIjoiY2t5a3lsZnB2MXIzZzJ2bjhsZ2VsbXU5YyJ9.aGAqx1VxLGR7MVBGIRZjKA';

export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItems>Start</ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex flex-col bg-blue-900 h-screen
`
const ActionItems = tw.div`
  flex-1 color-white
`
