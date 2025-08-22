import { Drawer } from 'expo-router/drawer'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { COLORS } from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import type { FC } from 'react'
import type { GestureHandlerRootViewProps } from 'react-native-gesture-handler/lib/typescript/components/GestureHandlerRootView'
import CustomDrawerContent from './Custom'

type Props = GestureHandlerRootViewProps

const CustomDrawer: FC<Props> = ({ style, ...props }) => {
	return (
		<GestureHandlerRootView style={[{ flex: 1 }, style]} {...props}>
			<Drawer
				drawerContent={(props) => <CustomDrawerContent {...props} />}
				screenOptions={{
					drawerActiveBackgroundColor: COLORS.tn1.DEFAULT,
					drawerActiveTintColor: COLORS.fnA,
					drawerInactiveTintColor: COLORS.fn2,
					headerShadowVisible: false,
					drawerStyle: {
						backgroundColor: COLORS.bg1
					},
					headerStyle: {
						backgroundColor: COLORS.bg1
					},
					headerTintColor: COLORS.fn1,
					headerTitleStyle: {
						color: COLORS.fn1,
						fontWeight: 'bold'
					},
					// estilo de cada item
					drawerItemStyle: {
						borderRadius: 12
					},
					drawerLabelStyle: {
						fontSize: 16
					}
				}}
			>
				<Drawer.Screen
					name="(pages)"
					options={{
						drawerLabel: 'Inicio',
						title: '🏠 Inicio',
						drawerIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />
					}}
				/>
				<Drawer.Screen
					name="auth/index"
					options={{
						drawerLabel: 'Autenticación',
						title: '🔐 Autenticación',
						drawerIcon: ({ color, size }) => <Ionicons name="log-in-outline" size={size} color={color} />
					}}
				/>
			</Drawer>
		</GestureHandlerRootView>
	)
}

export default CustomDrawer
