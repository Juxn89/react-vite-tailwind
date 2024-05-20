import { useState, useEffect } from 'react'

export const useFetch = (url) => {	
	const [ data, setData ] = useState([])

	useEffect( () => {
		try {
			fetch(url)
				.then(response => response.json())
				.then(data => setData(data))
		} catch (error) {
			console.error(error)
			setData([])
		}

		console.log(data)
	}, [])

	return data;
}