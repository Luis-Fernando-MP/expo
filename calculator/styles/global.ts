import { APP } from '@/constants/theme'
import { StyleSheet } from 'react-native'

const globalStyles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		justifyContent: 'flex-end',
		backgroundColor: APP.colors.bg1,
		paddingHorizontal: 20,
		paddingBottom: 20
	}
})

export default globalStyles
