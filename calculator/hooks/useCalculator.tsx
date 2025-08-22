import { useEffect, useState } from 'react'

export const operators = {
	add: '+',
	divide: '÷',
	multiple: '×',
	minus: '-'
} as const

type Operator = keyof typeof operators | null

const useCalculator = () => {
	const [formatted, setFormatted] = useState('0')
	const [result, setResult] = useState('0')
	const [prev, setPrev] = useState('0')
	const [operator, setOperator] = useState<Operator>(null)

	useEffect(() => {
		if (operator) {
			setFormatted(`${prev} ${operators[operator]} ${result}`)
		} else {
			setFormatted(result)
		}
	}, [result, prev, operator])

	const toggleSign = () => {
		setResult((p) => (p.startsWith('-') ? p.slice(1) : `-${p}`))
	}

	const cleanCalc = () => {
		setResult('0')
		setPrev('0')
		setFormatted('0')
		setOperator(null)
	}

	const push = (number: string) => {
		if (number === '.' && result.includes('.')) return

		if (result === '0' || result === '-0') {
			if (number === '.') {
				return setResult(result + number)
			} else if (result === '-0') {
				return setResult(`-${number}`)
			} else {
				return setResult(number)
			}
		}

		setResult(result + number)
	}

	const deleteLast = () => {
		const tmpResult = result.slice(0, -1)
		setResult(tmpResult === '' || tmpResult === '-' ? '0' : tmpResult)
	}

	const compute = () => {
		const n1 = Number(prev)
		const n2 = Number(result)

		if (isNaN(n1) || isNaN(n2)) return 'Error'

		let computedValue: number | string = 0

		switch (operator) {
			case 'add':
				computedValue = n1 + n2
				break
			case 'minus':
				computedValue = n1 - n2
				break
			case 'multiple':
				computedValue = n1 * n2
				break
			case 'divide':
				if (n2 === 0) computedValue = 'Error'
				else computedValue = n1 / n2
				break
			default:
				return result
		}

		return `${computedValue}`
	}

	const calculate = () => {
		if (!operator) return

		const computed = compute()
		setResult(computed)
		setPrev('0')
		setOperator(null)
	}

	const calcOperator = (op: Operator) => {
		if (!op) return

		// Si ya hay una operación en curso, la resolvemos primero.
		if (operator && result !== '0') {
			const computed = compute()
			setPrev(computed)
			setResult('0')
			setOperator(op)
		}

		// Si el result es '0' pero ya tenemos un `prev`, significa que estamos
		// cambiando el operador (ej. '5 + ' a '5 - ').
		else if (prev !== '0' && result === '0') setOperator(op)
		// Si el usuario acaba de ingresar el primer número, este se convierte en el `prev`.
		else {
			setPrev(result)
			setResult('0')
			setOperator(op)
		}
	}

	return {
		formatted,
		result,
		prev,
		operator,
		toggleSign,
		cleanCalc,
		deleteLast,
		push,
		calcOperator,
		calculate
	}
}

export default useCalculator
