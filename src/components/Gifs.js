import React from  'react'
import {Link} from 'wouter'
import styled from 'styled-components'

const GetGIfStyle = styled.div`
   img{
   	width:100%;
   	height:300px;
   }

`
export default function Gifs({gif}) {
	return (
		<GetGIfStyle>
         <Link to ={`/details/${gif.id}`}>
           <img loading="lazy" src={gif.images.downsized_medium.url} alt={gif.title} />
         </Link>
		</GetGIfStyle>
	)
}