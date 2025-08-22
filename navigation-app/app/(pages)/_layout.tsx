import { MaterialIcons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'

const fullConfig = resolveConfig(tailwindConfig)
const colors = fullConfig.theme.colors as any

export default function StackLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: colors.tn1.DEFAULT,
				tabBarInactiveTintColor: colors.fn2,
				headerShown: false,
				tabBarStyle: {
					backgroundColor: colors.bg1,
					borderTopWidth: 0,
					elevation: 0
				}
			}}
		>
			<Tabs.Screen
				name="home/index"
				options={{
					title: 'Home',
					tabBarIcon: ({ color }) => <MaterialIcons size={24} name="home" color={color} />
				}}
			/>
			<Tabs.Screen
				name="products/index"
				options={{
					title: 'Productos',
					tabBarIcon: ({ color }) => <MaterialIcons size={24} name="shopping-cart" color={color} />
				}}
			/>
			<Tabs.Screen
				name="products/[id]"
				options={{
					href: null
				}}
			/>
		</Tabs>
	)
}
