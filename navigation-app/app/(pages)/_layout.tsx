import { COLORS } from '@/constants/Colors'
import { MaterialIcons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'

export default function StackLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: COLORS.tn1.DEFAULT,
				tabBarInactiveTintColor: COLORS.fn2,
				headerShown: false,
				tabBarStyle: {
					backgroundColor: COLORS.bg1,
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
