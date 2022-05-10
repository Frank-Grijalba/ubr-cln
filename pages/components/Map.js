//rafce + shift
import { useEffect } from 'react'
import React from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken = 
  'pk.eyJ1IjoiZnJhbmstZ3JpamFsYmEiLCJhIjoiY2t5a3lsZnB2MXIzZzJ2bjhsZ2VsbXU5YyJ9.aGAqx1VxLGR7MVBGIRZjKA';

  const Map = () => {

    useEffect(() => {
        const map = new mapboxgl.Map({
          container: "map",
          style: 'mapbox://styles/mapbox/streets-v11',
          //'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph'
          center: [-76.5205, 3.42158],
          zoom: 13,
        })
      })

  return (
    <Wrapper id='map'></Wrapper>
  )
}

export default Map
const Wrapper = tw.div`
flex-1
`