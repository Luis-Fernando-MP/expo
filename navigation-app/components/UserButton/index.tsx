import { DrawerActions } from '@react-navigation/native'
import { useNavigation } from 'expo-router'
import type { FC } from 'react'
import { Image } from 'react-native'
import { Button } from '../Button'

const UserButton: FC = () => {
	const navigation = useNavigation()

	const toggleDrawer = () => {
		navigation.dispatch(DrawerActions.toggleDrawer)
	}

	return (
		// <Link href={'/auth'} asChild>
		<Button onPress={toggleDrawer} noPadding className="py-2 px-2 rounded-full border-2 border-tn1">
			<Image source={{ uri: 'https://picsum.photos/400/200?random=1' }} className="w-10 h-10 rounded-full" />
		</Button>
		// </Link>
	)
}

export default UserButton
