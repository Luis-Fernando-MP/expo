import '../global.css'

import { StatusBar } from 'expo-status-bar'

import { Stack } from 'expo-router'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const Bootstrap = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<StatusBar style="auto" />
			<Stack screenOptions={{ headerShown: false }}></Stack>
		</QueryClientProvider>
	)
}

export default Bootstrap
