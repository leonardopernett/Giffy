import React,{lazy} from 'react'
import styled from 'styled-components'
import getGifsHooks from '../hooks/getGifsHooks'

const  Search = lazy(()=>import('../components/search'))
const Gifs = lazy(()=>import('../components/Gifs'))


const HomeStyle = styled.div`
   margin:auto;
   text-align:center;
   width:100%;
   margin-top:2em;
   h3{
   	color:#fff;
   	padding:1em;
   }

`

export default function Home() {
  const {gifs} = getGifsHooks();

	return (
		<HomeStyle>

			 <Search />
        <p>ultimos resultado</p>
       {gifs.map((gif)=><Gifs gif={gif} key={gif.id}   />) }
		</HomeStyle>
	)
}