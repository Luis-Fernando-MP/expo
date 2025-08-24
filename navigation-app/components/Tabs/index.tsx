import { COLORS } from '@/constants/Colors'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import { Tabs } from 'expo-router'
import { ComponentProps, FC } from 'react'

type TabsProps = ComponentProps<typeof Tabs>

const CustomTabs: FC<TabsProps> = (props) => {
	const cusNavigation = useNavigation()

	const toggleDrawer = () => {
		cusNavigation.dispatch(DrawerActions.toggleDrawer())
	}

	return (
		<Tabs
			screenOptions={{
				// Colores de las pestañas activas/inactivas
				tabBarActiveTintColor: COLORS.tn1.DEFAULT,
				tabBarInactiveTintColor: COLORS.fn2,

				// Estilo del header
				headerStyle: {
					backgroundColor: COLORS.bg1
				},
				headerTintColor: COLORS.fn1,
				headerTitleStyle: {
					color: COLORS.fn1,
					fontWeight: 'bold'
				},

				// Estilo de la barra de tabs
				tabBarStyle: {
					backgroundColor: COLORS.bg1,
					borderTopWidth: 0,
					elevation: 0
				},

				// Header left: flecha de back o menú según historial
				headerLeft({ canGoBack }) {
					return (
						<Ionicons
							size={24}
							// Flecha si se puede regresar, menú si no
							name={canGoBack ? 'arrow-back' : 'menu-outline'}
							color={COLORS.fn1}
							className="ml-5 mr-2"
							onPress={() => {
								if (canGoBack) {
									cusNavigation.goBack() // Navega hacia atrás si hay historial
								} else {
									toggleDrawer() // Abre/cierra drawer si no hay historial
								}
							}}
						/>
					)
				}
			}}
			{...props}
		>
			{/* Pantalla principal de Home */}
			<Tabs.Screen
				name="home/index"
				options={{
					headerShown: false, // Ocultamos header en Home
					title: 'Home',
					tabBarIcon: ({ color }) => <MaterialIcons size={24} name="home" color={color} />
				}}
			/>

			{/* Pantalla principal de Productos */}
			<Tabs.Screen
				name="products/index"
				options={{
					title: '🍽️ Productos',
					tabBarIcon: ({ color }) => <MaterialIcons size={24} name="shopping-cart" color={color} />
				}}
			/>

			<Tabs.Screen
				name="products/[id]"
				options={{
					title: 'Detalle Producto'
				}}
			/>
		</Tabs>
	)
}

export default CustomTabs
