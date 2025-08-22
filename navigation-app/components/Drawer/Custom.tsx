import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import type { FC } from 'react'
import { Image, View } from 'react-native'
import { Text } from '../Text'

const CustomDrawerContent: FC<DrawerContentComponentProps> = (props) => {
	return (
		<DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
			<View className="items-center p-6 bg-bg2 rounded-b-3xl">
				<Image source={{ uri: 'https://picsum.photos/400/200?random=1' }} className="w-24 h-24 rounded-full mb-3" />
				<Text variant="h2" className="text-fn1 font-instrument mb-1">
					Ñami Ñami
				</Text>
				<Text variant="h5" className="text-fn2 font-roboto">
					✨ Sabor que conquista ✨
				</Text>
			</View>

			<View className="flex-1 bg-bg1 flex gap-5 mt-10">
				<DrawerItemList {...props} />
			</View>

			<View className="p-5 border-t border-bg3 bg-bg2 rounded-md">
				<Text className="text-fn2 mb-2 font-roboto">📍 Estamos cerca de ti</Text>
				<Text className="text-fn2 mb-2 font-roboto">📞 Soporte: +51 958-978-370</Text>
				<Text className="text-fn1" variant="h5">
					💖 By{' '}
					<Text className="font-instrument" variant="h5">
						HAUI
					</Text>
				</Text>
			</View>
		</DrawerContentScrollView>
	)
}

export default CustomDrawerContent
