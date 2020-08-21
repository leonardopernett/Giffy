import React,{useContext, useReducer} from 'react'
import {Context}  from '../context/GifContext'
import styled from 'styled-components'

const DetailsStyle = styled.div`
   display:flex;
   justify-content:center;
   align-items:center;
   height:100vh;

`
export default function Details({params}) {
	 const {gifs}= useContext(Context)
   const gif = gifs.find(gif=>gif.id===params.id)

	return (
		<DetailsStyle>

          <img src={gif.images.downsized_medium.url} alt="" />
		</DetailsStyle>
	)
}