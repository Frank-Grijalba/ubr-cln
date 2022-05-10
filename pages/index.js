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
      <ActionItems>
        <Header>
          <Ubrlogo src= "data:image/jpeg;base64,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"></Ubrlogo>
          <Profile>
            <Name>Frank Grijalba</Name>
            <UserImage 
            src="https://avatars.githubusercontent.com/u/77861241?v=4"
            />
          </Profile>
        </Header>
      </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex flex-col h-screen
`
const ActionItems = tw.div`
  flex-1 color-white
`
const Header = tw.div`
  flex justify-between items-center
`
const Profile = tw.div`
  flex items-center
`
const Name = tw.div`
  mr-4 w-20
`
const Ubrlogo = tw.img`
  h-28
`
const UserImage = tw.img`
  h-12 w-12 rounded-full border border-gray-400 p-px
`