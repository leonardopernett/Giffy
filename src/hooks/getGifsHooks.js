import {useState, useEffect, useContext} from 'react'
import getGiffy from '../services/getGiffy'
import {Context} from '../context/GifContext'

export default function getGifsHooks({ keyword, rating } = { keyword: 'null' }) {
const {gifs, setGifs} = useContext(Context)
const keywordItem = keyword || localStorage.getItem('keyword');

useEffect(() => {
	getGiffy({keyword:keywordItem,rating}).then(res=>setGifs(res))
	localStorage.setItem('keyword', keyword)
}, [gifs,rating])

   return {gifs}
}