import React,{lazy, Fragment} from 'react'
import getGifsHooks from '../hooks/getGifsHooks'
import styled from 'styled-components'

const GetListStyle = styled.div`

   width:100%;
   .wrapper{
   	 paddimg:2em;
   	 p{
   	 	padding:1em;
   	 }

   	 .gif-grid{
   	 	display:grid;
        grid-template-columns: 1fr 1fr 1fr;
   	 }
   }
`

const  Gifs   = lazy(()=>import('./Gifs'))
const  Search = lazy(()=>import('./search'))

function GetListGiffy({params}) {
 const {keyword, rating='g'}= params;
 const {gifs}= getGifsHooks({keyword, rating})

	return (
		<Fragment>
			 <Search />
				<GetListStyle>
				  <div className="wrapper">
				     <p>{keyword}</p>
		             <div className="gif-grid">
		               { gifs.map( (gif)=> <Gifs gif={gif} key={gif.id} /> ) }
					 </div>
				  </div>
				</GetListStyle>
		</Fragment>

	)
}

export default GetListGiffy