import { Redirect } from 'expo-router'
import type { FC } from 'react'

const Index: FC = () => {
	return <Redirect href={'/home'} />
}

export default Index
