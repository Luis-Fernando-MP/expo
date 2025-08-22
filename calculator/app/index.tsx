import { Button } from '@/components/Button'
import { Text } from '@/components/Text'
import { APP } from '@/constants/theme'
import useCalculator, { operators } from '@/hooks/useCalculator'
import type { FC } from 'react'
import { StyleSheet, View } from 'react-native'

const Home: FC = () => {
	const { prev, push, formatted, toggleSign, cleanCalc, deleteLast, calcOperator, calculate } = useCalculator()
	return (
		<View>
			<View style={styles.displayContainer}>
				<Text variant="h2" color="fn2" style={styles.operationText}>
					{prev}
				</Text>
				<Text variant="xl" numberOfLines={1} adjustsFontSizeToFit>
					{formatted}
				</Text>
			</View>

			<View style={styles.keyboardContainer}>
				<View style={styles.row}>
					<Button variant="secondary" onPress={cleanCalc} style={styles.button}>
						C
					</Button>
					<Button variant="secondary" onPress={toggleSign} style={styles.button}>
						+/-
					</Button>
					<Button variant="secondary" onPress={deleteLast} style={styles.button}>
						⌫
					</Button>
					<Button variant="primary" onPress={() => calcOperator('divide')} style={styles.button}>
						{operators.divide}
					</Button>
				</View>

				<View style={styles.row}>
					<Button variant="tertiary" onPress={() => push('7')} style={styles.button}>
						7
					</Button>
					<Button variant="tertiary" onPress={() => push('8')} style={styles.button}>
						8
					</Button>
					<Button variant="tertiary" onPress={() => push('9')} style={styles.button}>
						9
					</Button>
					<Button variant="primary" onPress={() => calcOperator('multiple')} style={styles.button}>
						{operators.multiple}
					</Button>
				</View>

				<View style={styles.row}>
					<Button variant="tertiary" onPress={() => push('4')} style={styles.button}>
						4
					</Button>
					<Button variant="tertiary" onPress={() => push('5')} style={styles.button}>
						5
					</Button>
					<Button variant="tertiary" onPress={() => push('6')} style={styles.button}>
						6
					</Button>
					<Button variant="primary" onPress={() => calcOperator('minus')} style={styles.button}>
						{operators.minus}
					</Button>
				</View>

				<View style={styles.row}>
					<Button variant="tertiary" onPress={() => push('1')} style={styles.button}>
						1
					</Button>
					<Button variant="tertiary" onPress={() => push('2')} style={styles.button}>
						2
					</Button>
					<Button variant="tertiary" onPress={() => push('3')} style={styles.button}>
						3
					</Button>
					<Button variant="primary" onPress={() => calcOperator('add')} style={styles.button}>
						+
					</Button>
				</View>

				<View style={styles.row}>
					<Button variant="tertiary" onPress={() => push('0')} style={[styles.button, styles.zeroButton]}>
						0
					</Button>
					<Button variant="tertiary" onPress={() => push('.')} style={styles.button}>
						.
					</Button>
					<Button variant="primary" onPress={calculate} style={styles.button}>
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
