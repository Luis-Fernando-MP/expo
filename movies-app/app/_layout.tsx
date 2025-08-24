import { View } from 'react-native'
import '../global.css'

import { StatusBar } from 'expo-status-bar'

import { Slot } from 'expo-router'

const Bootstrap = () => {
	return (
		<View>
			<StatusBar style="auto" />
			<Slot />{' '}
			{/*Usamos este Slot para obligar a todas las paginas a pasar por
			el layout*/}
		</View>
	)
}

export default Bootstrap
