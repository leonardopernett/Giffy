import React,{useEffect, lazy, Suspense} from 'react'
import {hot} from 'react-hot-loader'
import {Route} from 'wouter'
import {GetGifContext} from './context/GifContext'

const GetListGiffy =  lazy(()=>import('./components/getListGiffy'))
const Home         =  lazy(()=>import('./pages/Home'))
const Details      =  lazy(()=>import('./pages/Details'))

function App() {
	return (
		<Suspense fallback={null}>
      <GetGifContext>
        <Route path='' component={Home} />
		  	<Route path='/search/:keyword/:rating?' component={GetListGiffy} />
		  	<Route path='/details/:id' component={Details} />
		 </GetGifContext>
		</Suspense>
	  )
}

export default hot(module)(App)