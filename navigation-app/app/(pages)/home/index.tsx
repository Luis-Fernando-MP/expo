import { Button } from '@/components/Button'
import { Text } from '@/components/Text'
import UserButton from '@/components/UserButton'
import { categories, productOffers, quickPrompts, restaurants } from '@/store/data.store'
import { Link, router } from 'expo-router'
import { FlatList, Image, ScrollView, TextInput, View } from 'react-native'

export default function HomeScreen() {
	return (
		<View className="flex-1">
			<ScrollView className="flex-1 bg-bg1 px-6 pt-12" showsVerticalScrollIndicator={false}>
				{/* Header */}
				<View className="flex-row justify-between items-center mb-6">
					<View>
						<Text variant="p" className="text-sm color-fn2">
							📍 Ubicación actual
						</Text>
						<Text variant="h2" className="color-fn1 font-extrabold mt-1">
							Lima, Perú
						</Text>
					</View>
					<UserButton />
				</View>

				{/* Input de pedido central */}
				<View className="mb-8 p-4 bg-bg2 rounded-3xl shadow-lg shadow-black/30">
					<Text variant="h3" className="color-fn1 font-extrabold mb-3">
						¿Qué se te antoja hoy?
					</Text>
					<View className="flex-row items-center border border-bg3 rounded-2xl p-4 mb-4">
						<TextInput
							placeholder="Ej: una hamburguesa de pollo con papas"
							placeholderTextColor="#888"
							className="flex-1 text-fn1"
							style={{ fontSize: 16 }}
						/>
						<Button className="ml-2 px-5 py-3 rounded-full bg-tn1">
							<Text className="color-fn1 font-bold">Pedir</Text>
						</Button>
					</View>
					<View>
						<Text variant="p" className="color-fn2 font-bold mb-2">
							Búsquedas comunes:
						</Text>

						<FlatList
							horizontal
							data={quickPrompts}
							renderItem={({ item }) => {
								return (
									<Button className="bg-bg3 rounded-full px-3 py-2 mr-2 mb-2">
										<Text variant="p" className="text-sm color-fn1">
											{item}
										</Text>
									</Button>
								)
							}}
						/>
					</View>
				</View>

				{/* Categorías */}
				<View className="mb-8">
					<Text variant="h3" className="color-fn1 font-extrabold mb-4">
						Categorías
					</Text>
					<ScrollView horizontal showsHorizontalScrollIndicator={false} className="-mr-6">
						{categories.map((category, index) => (
							<Button
								key={category.id}
								className={`flex-row items-center justify-center py-3 px-5 rounded-full mr-3 ${index === 0 ? 'bg-tn1' : 'bg-bg2'}`}
							>
								<Text variant="h4" className="mr-2">
									{category.icon}
								</Text>
								<Text variant="p" className={`font-bold ${index === 0 ? 'color-fn1' : 'color-fn2'}`}>
									{category.name}
								</Text>
							</Button>
						))}
					</ScrollView>
				</View>

				{/* Ofertas */}
				<View className="mb-8">
					<Text variant="h3" className="color-fn1 font-extrabold mb-4">
						Ofertas especiales
					</Text>

					<View className="flex-row gap-4">
						<Button className="mb-4 rounded-lg" onPress={() => router.push('/products')}>
							<Text className="color-fn1">Ver más productos</Text>
						</Button>

						<Link href={'/products'} asChild>
							<Button className="mb-4 rounded-lg">
								<Text className="color-fn1">Otras ofertas</Text>
							</Button>
						</Link>
					</View>

					<FlatList
						horizontal
						data={productOffers}
						keyExtractor={(off) => String(off.id)}
						showsHorizontalScrollIndicator={false}
						renderItem={({ item: offer }) => (
							<View key={offer.id} className="bg-bg2 rounded-3xl overflow-hidden shadow-lg shadow-black/30 w-64 mr-4">
								<Image source={{ uri: offer.image }} className="h-32 w-full" />
								<View className="p-4">
									<Text variant="h5" className="color-fn1 font-bold">
										{offer.name}
									</Text>
									<Text variant="p" className="color-fn2 text-xs mb-2">
										{offer.description}
									</Text>
									<Link href={`/products/${offer.id}`} asChild>
										<Button variant="primary" className="mt-2 rounded-md ">
											<Text variant="h6" className="font-bold color-fnA">
												Más detalle
											</Text>
										</Button>
									</Link>
								</View>
							</View>
						)}
					/>
				</View>

				{/* Restaurantes destacados */}
				<View className="mb-12">
					<Text variant="h3" className="color-fn1 font-extrabold mb-4">
						Restaurantes destacados
					</Text>
					<ScrollView horizontal showsHorizontalScrollIndicator={false} className="-mr-6">
						{restaurants.map((restaurant) => (
							<View key={restaurant.id} className="bg-bg2 rounded-3xl overflow-hidden shadow-lg shadow-black/30 w-64 mr-4">
								<Image source={{ uri: restaurant.image }} className="h-32 w-full" />
								<View className="p-4">
									<Text variant="h5" className="color-fn1 font-bold">
										{restaurant.name}
									</Text>
									<View className="flex-row items-center mt-1 mb-2">
										<Image source={{ uri: restaurant.logo }} className="w-4 h-4 mr-2 rounded-full" />
										<Text variant="p" className="color-fn2 text-xs">
											⭐ {restaurant.rating} ({restaurant.reviews})
										</Text>
									</View>
									<Button variant="primary" className="mt-2">
										<Text variant="h6" className="font-bold color-fnA">
											Ver menú
										</Text>
									</Button>
								</View>
							</View>
						))}
					</ScrollView>
				</View>
			</ScrollView>
		</View>
	)
}
