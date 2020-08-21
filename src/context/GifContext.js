import React ,{useState} from 'react'

export const Context = React.createContext({});

export function GetGifContext ({children}){
	const [gifs, setGifs] = useState([])
	return <Context.Provider value={{gifs, setGifs}}> {children} </Context.Provider>
}
