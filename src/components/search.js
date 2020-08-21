import React,{useState,Fragment, useReducer} from 'react'
import {useLocation} from 'wouter'
import {Link} from 'wouter'
import {reducer, initialState} from './state'

const RATING = ['g', 'pg', 'r']

export default function Search({}) {
	const [inputValue, setInputValue] = useState('')
  const [ratings, setRating]= useState('')
  const [_, push ]= useLocation()

 const [state, dispatch] = useReducer(reducer,initialState)


  const handleSubmit = (e)=>{
  	e.preventDefault()
    push(`/search/${inputValue}/${ratings}`)
    dispatch({type:'GET_NAME',payload:'leonardo'})

}

const inputChange =(e)=>{
	setInputValue(e.target.value)
  dispatch({type:'GET_COUNT'})

}

const handleChange = (e)=> setRating(e.target.value)

	return (
		<div>
		 <h3>
        <Link to="/">GIFFY</Link>
     </h3>
        <form onSubmit={handleSubmit}>
          <button >Buscar</button>
          <input onChange={inputChange}  type="text" placeholder="seach gif" />
          <select value={ratings} onChange={handleChange}>

          	  {RATING.map((rating)=>(
                   <option key={rating}>{rating}</option>
          	  ))}
          </select>
          {state.count}
       </form>
		</div>
	)
}