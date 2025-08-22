import { Button } from '@/components/Button'
import { Text } from '@/components/Text'
import { APP } from '@/constants/theme'
import type { FC } from 'react'
import { StyleSheet, View } from 'react-native'

const Home: FC = () => {
	return (
		<View>
			<View style={styles.displayContainer}>
				<Text variant="h2" color="fn2" style={styles.operationText}>
					50 x 500
				</Text>
				<Text variant="xl">25,000</Text>
			</View>

			<View style={styles.keyboardContainer}>
				<View style={styles.row}>
					<Button variant="secondary" style={styles.button}>
						C
					</Button>
					<Button variant="secondary" style={styles.button}>
						+/-
					</Button>
					<Button variant="secondary" style={styles.button}>
						%
					</Button>
					<Button variant="primary" style={styles.button}>
						÷
					</Button>
				</View>

				<View style={styles.row}>
					<Button variant="tertiary" style={styles.button}>
						7
					</Button>
					<Button variant="tertiary" style={styles.button}>
						8
					</Button>
					<Button variant="tertiary" style={styles.button}>
						9
					</Button>
					<Button variant="primary" style={styles.button}>
						×
					</Button>
				</View>

				<View style={styles.row}>
					<Button variant="tertiary" style={styles.button}>
						4
					</Button>
					<Button variant="tertiary" style={styles.button}>
						5
					</Button>
					<Button variant="tertiary" style={styles.button}>
						6
					</Button>
					<Button variant="primary" style={styles.button}>
						-
					</Button>
				</View>

				<View style={styles.row}>
					<Button variant="tertiary" style={styles.button}>
						1
					</Button>
					<Button variant="tertiary" style={styles.button}>
						2
					</Button>
					<Button variant="tertiary" style={styles.button}>
						3
					</Button>
					<Button variant="primary" style={styles.button}>
						+
					</Button>
				</View>

				<View style={styles.row}>
					<Button variant="tertiary" style={[styles.button, styles.zeroButton]}>
						0
					</Button>
					<Button variant="tertiary" style={styles.button}>
						.
					</Button>
					<Button variant="primary" style={styles.button}>
						=
					</Button>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	displayContainer: {
		alignItems: 'flex-end',
		marginBottom: 20,
		paddingHorizontal: 10
	},
	operationText: {
		marginBottom: 5
	},
	keyboardContainer: {
		backgroundColor: APP.colors.bg2,
		borderRadius: APP.radius.max,
		padding: 10
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 10
	},
	button: {
		flex: 1,
		minHeight: 80,
		marginHorizontal: 5
	},
	zeroButton: {
		flex: 3,
		marginRight: 5
	}
})

export default Home
