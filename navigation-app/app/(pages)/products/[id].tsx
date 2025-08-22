import { Image, ScrollView, StyleSheet, View } from 'react-native'
import Markdown from 'react-native-markdown-display'

import { Button } from '@/components/Button'
import { Text } from '@/components/Text'
import { productOffers } from '@/store/data.store'
import { Redirect, router, useLocalSearchParams } from 'expo-router'
import type { FC } from 'react'

const markdownStyles: StyleSheet.NamedStyles<any> = {
	body: {
		color: '#B3B3B3',
		fontSize: 16,
		lineHeight: 24
	},
	heading1: {
		color: '#F5F5F5',
		fontSize: 24,
		marginTop: 20,
		marginBottom: 10
	},
	heading2: {
		color: '#F5F5F5',
		fontSize: 22,
		marginTop: 18,
		marginBottom: 8
	},
	strong: {
		color: '#F5F5F5'
	},
	listItem: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		marginVertical: 4
	},
	listUnorderedItemIcon: {
		color: '#FF4D4D',
		fontSize: 18
	},
	listUnorderedItemText: {
		flex: 1,
		color: '#B3B3B3'
	}
}

const ProductScreen: FC = () => {
	const { id } = useLocalSearchParams()
	const product = productOffers.find((p) => String(p.id) === id)

	if (!product) return <Redirect href={'/home'} />

	return (
		<View className="flex-1 bg-bg1">
			{/* Botón de retroceso fijo */}
			<Button className="absolute top-12 left-6 z-10 p-2 rounded-full bg-bg3 border border-bg2" onPress={() => router.back()}>
				<Text variant="h5" className="color-fn1">
					{'<'}
				</Text>
			</Button>

			<ScrollView showsVerticalScrollIndicator={false}>
				{/* Imagen del producto */}
				<Image source={{ uri: product.image }} className="w-full h-96" resizeMode="cover" />

				{/* Contenido de la sección de detalles */}
				<View className="flex-1 -mt-10 bg-bg1 rounded-t-3xl p-6">
					<View className="flex justify-between items-start mb-4">
						<View className="flex-1 pr-4">
							<Text variant="h1" className="color-fn1 font-instrument">
								{product.name}
							</Text>
						</View>
						<Text variant="h2" className="color-tn1 ">
							S/. {product.price}
						</Text>
					</View>

					<Text variant="h6" className="color-fn2 mb-2">
						Ofrecido por: <Text className="color-fn1 font-bold">{product.restaurant}</Text>
					</Text>

					{/* Renderiza el Markdown aquí */}
					<Markdown style={markdownStyles}>{product.fullDescription}</Markdown>

					<View className="h-0.5 bg-bg2 my-4" />

					{/* Sección de detalles adicionales */}
					<Text variant="h4" className="color-fn1 font-bold mb-3">
						Detalles de la oferta
					</Text>
					<View className="flex-row items-center mb-2">
						<Text variant="h6" className="color-fn2 mr-2">
							🚀 Envío Estimado:
						</Text>
						<Text variant="h6" className="color-fn1 font-bold">
							20-30 min
						</Text>
					</View>
					<View className="flex-row items-center mb-2">
						<Text variant="h6" className="color-fn2 mr-2">
							⭐ Calificación:
						</Text>
						<Text variant="h6" className="color-fn1 font-bold">
							4.8 (1.2k opiniones)
						</Text>
					</View>
				</View>
			</ScrollView>

			{/* Botón de "Agregar al carrito" fijo en la parte inferior */}
			<View className="p-6 bg-bg1 border-t border-bg3">
				<Button variant="primary">
					<Text variant="h5" className="color-fnA font-bold">
						Agregar al Carrito
					</Text>
				</Button>
			</View>
		</View>
	)
}

export default ProductScreen
