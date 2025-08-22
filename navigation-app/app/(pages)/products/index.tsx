import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'

import type { FC } from 'react'

const TopProductsScreen: FC = () => {
	const router = useRouter()

	// Datos de ejemplo para los productos top
	const topProducts = [
		{
			id: 1,
			name: 'Pizza de pepperoni',
			price: '12.99',
			image: 'https://images.unsplash.com/photo-1604382354930-cfef030616b2?q=80&w=1770&auto=format&fit=crop',
			rating: '4.8'
		},
		{
			id: 2,
			name: 'Hamburguesa clásica',
			price: '9.50',
			image: 'https://images.unsplash.com/photo-1550547660-d9d1c7f55f65?q=80&w=1770&auto=format&fit=crop',
			rating: '4.5'
		},
		{
			id: 3,
			name: 'Tacos al pastor',
			price: '7.00',
			image: 'https://images.unsplash.com/photo-1604382354930-cfef030616b2?q=80&w=1770&auto=format&fit=crop',
			rating: '4.9'
		},
		{
			id: 4,
			name: 'Enchiladas de mole',
			price: '10.50',
			image: 'https://images.unsplash.com/photo-1542841641-a1e4a2e55d7f?q=80&w=1770&auto=format&fit=crop',
			rating: '4.7'
		},
		{
			id: 5,
			name: 'Papas fritas',
			price: '3.00',
			image: 'https://images.unsplash.com/photo-1548866164-928d11d13f0a?q=80&w=1770&auto=format&fit=crop',
			rating: '4.2'
		}
	]

	return (
		<View className="flex-1 bg-bg1">
			{/* Encabezado de la página */}
			<View className="flex-row items-center justify-between p-4 bg-bg2">
				<TouchableOpacity onPress={() => router.back()}>
					<Ionicons name="arrow-back" size={24} color="#EFEFEF" />
				</TouchableOpacity>
				<Text className="text-xl font-bold color-fn1 flex-1 text-center">Productos Top</Text>
			</View>

			{/* Lista de productos */}
			<ScrollView contentContainerStyle={{ padding: 16 }}>
				{topProducts.map((dish) => (
					<View key={dish.id} className="flex-row items-center mb-4 p-3 bg-bg2 rounded-xl">
						<Image source={{ uri: dish.image }} className="w-20 h-20 rounded-lg" resizeMode="cover" />
						<View className="flex-1 ml-4">
							<Text className="text-lg font-semibold color-fn1">{dish.name}</Text>
							<Text className="text-sm color-fn2 mt-1">$ {dish.price}</Text>
							<View className="flex-row items-center mt-1">
								<Text className="text-yellow-400">⭐</Text>
								<Text className="text-sm ml-1 color-fn2">{dish.rating}</Text>
							</View>
						</View>
						<TouchableOpacity className="p-2 rounded-lg bg-fnA">
							<Text className="font-bold color-bg1">Pedir</Text>
						</TouchableOpacity>
					</View>
				))}
			</ScrollView>
		</View>
	)
}

export default TopProductsScreen
