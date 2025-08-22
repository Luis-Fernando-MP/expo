export const categories = [
	{ id: 1, name: 'Pizzas', icon: '🍕' },
	{ id: 2, name: 'Sushi', icon: '🍣' },
	{ id: 3, name: 'Burgers', icon: '🍔' },
	{ id: 4, name: 'Tacos', icon: '🌮' },
	{ id: 5, name: 'Postres', icon: '🍰' },
	{ id: 6, name: 'Bebidas', icon: '🥤' },
	{ id: 7, name: 'Asiática', icon: '🍜' },
	{ id: 8, name: 'Mexicana', icon: '🌶️' },
	{ id: 9, name: 'Saludable', icon: '🥗' },
	{ id: 10, name: 'Café', icon: '☕' }
]

export const quickPrompts = [
	'Quiero una pizza de pepperoni',
	'Necesito sushi para 2 personas',
	'Busco restaurantes de tacos',
	'Añade un postre a mi pedido',
	'Combo de hamburguesa',
	'Quiero un café y un postre',
	'Buscar opciones saludables cerca',
	'Platos mexicanos picantes'
]

export const productOffers = [
	{
		id: 1,
		name: '2x1 en Pizzas',
		description: 'Disfruta de nuestra irresistible oferta. Válido en pizzas grandes de 3 a 5pm.',
		restaurant: 'La Pizza Nostra',
		price: '35.00',
		image: 'https://picsum.photos/400/300?random=3',
		fullDescription: `# ¡2x1 en Pizzas!
Disfruta de nuestra irresistible oferta **válida en pizzas grandes**.

* Solo de 3:00 PM a 5:00 PM.
* No acumulable con otras promociones.
* ¡Pide la tuya ya!`
	},
	{
		id: 2,
		name: 'Combo Burger + Papas',
		description: 'Un clásico que nunca falla. Una deliciosa hamburguesa con queso, papas crujientes y una bebida a elección.',
		restaurant: 'Burger Joint',
		price: '28.50',
		image: 'https://picsum.photos/400/300?random=4',
		fullDescription: `# Nuestro famoso Combo Burger 🍔
Un clásico que nunca falla. El combo incluye:

* Una deliciosa **hamburguesa con queso**.
* Papas crujientes y doradas.
* Una bebida a elección.

¡Perfecto para un almuerzo rápido y delicioso!`
	},
	{
		id: 3,
		name: 'Rolls de Sushi al 30%',
		description: 'Selección de nuestros rolls más populares. Promoción válida para pedidos a domicilio y recojo en tienda.',
		restaurant: 'Sushi Art',
		price: '45.00',
		image: 'https://picsum.photos/400/300?random=9',
		fullDescription: `# Rolls de Sushi con 30% de descuento 🍣
Disfruta de la selección de nuestros **rolls más populares**:

* California Roll.
* Dragon Roll.
* Spicy Tuna Roll.

**Promoción válida** para pedidos a domicilio y recojo en tienda. ¡No te lo pierdas!`
	},
	{
		id: 4,
		name: 'Envío Gratis',
		description: 'Pide lo que quieras y te lo llevamos a casa sin costo adicional.',
		restaurant: 'Varios Restaurantes',
		price: '0.00',
		image: 'https://picsum.photos/400/300?random=10',
		fullDescription: `# ¡Envío Gratis a domicilio!
Pide lo que quieras y te lo llevamos a casa sin costo adicional.

* Válido en pedidos **superiores a S/50.00**.
* Aplica para todos los restaurantes participantes.
* Solo por tiempo limitado.`
	},
	{
		id: 5,
		name: 'Menú Ejecutivo',
		description: 'Plato del día, bebida y postre. Elige entre pollo a la parrilla o pescado frito.',
		restaurant: 'El Rincón del Sabor',
		price: '25.00',
		image: 'https://picsum.photos/400/300?random=11',
		fullDescription: `# Menú Ejecutivo del Día 🍽️
Elige tu opción para el almuerzo:

* **Opción 1:** Pollo a la parrilla con ensalada.
* **Opción 2:** Pescado frito con puré de papas.
* Incluye bebida y postre del día.

¡Un almuerzo completo y delicioso!`
	},
	{
		id: 6,
		name: 'Tacos 3x2',
		description: 'Pide 3 tacos de cualquier tipo y paga solo 2. Válido en carne, pollo o pastor.',
		restaurant: 'La Taquería Feliz',
		price: '22.00',
		image: 'https://picsum.photos/400/300?random=12',
		fullDescription: `# ¡Tacos 3x2! 🌮
Pide 3 tacos de cualquier tipo y paga solo por 2.

* **Válido en**: carne, pollo, pastor o vegetales.
* Aplica para todos los tacos de la carta.
* ¡Disfruta de un sabor auténtico y explosivo!`
	},
	{
		id: 7,
		name: 'Pizza Familiar + Gaseosa',
		description: 'Una pizza familiar con una gaseosa de 1.5L de regalo.',
		restaurant: 'Pizza Planet',
		price: '49.90',
		image: 'https://picsum.photos/400/300?random=13',
		fullDescription: `# Pizza Familiar + Gaseosa 🍕🥤
Perfecto para compartir en familia. El combo incluye:

* Una pizza familiar de **pepperoni, jamón o hawaiana**.
* Una gaseosa de 1.5L de regalo.

¡El plan perfecto para una noche de películas!`
	},
	{
		id: 8,
		name: 'Combo alitas BBQ',
		description: '10 alitas BBQ con papas fritas y salsa de la casa.',
		restaurant: 'Wing Station',
		price: '38.00',
		image: 'https://picsum.photos/400/300?random=14',
		fullDescription: `# El mejor Combo de Alitas BBQ 🔥
Pide nuestro combo estrella y disfruta de:

* **10 jugosas alitas** bañadas en salsa BBQ.
* Papas fritas crujientes.
* Salsa de la casa.

¡Ideal para compartir con amigos!`
	},
	{
		id: 9,
		name: 'Postre de regalo',
		description: 'Recibe un delicioso cheesecake de fresa en la compra de cualquier plato principal.',
		restaurant: 'Sweet Moments',
		price: '15.00',
		image: 'https://picsum.photos/400/300?random=15',
		fullDescription: `# Postre de Regalo 🍰
Porque te lo mereces, en la compra de cualquier plato principal, **recibe gratis**:

* Un delicioso **cheesecake de fresa**.

¡El final perfecto para una gran comida!`
	},
	{
		id: 10,
		name: 'Bowl de Pollo Teriyaki',
		description: 'Arroz blanco con pollo en salsa teriyaki, brócoli, zanahoria y semillas de sésamo.',
		restaurant: 'Wok Box',
		price: '29.90',
		image: 'https://picsum.photos/400/300?random=16',
		fullDescription: `# Bowl de Pollo Teriyaki 🍜
Una opción deliciosa y balanceada. El bowl contiene:

* **Arroz blanco** perfectamente cocido.
* Jugosos trozos de pollo en **salsa teriyaki**.
* Vegetales frescos como brócoli y zanahoria.
* Decorado con semillas de sésamo.`
	},
	{
		id: 11,
		name: 'Lomo Saltado Clásico',
		description:
			'El auténtico sabor peruano. Lomo de res salteado con cebolla, tomate y ají amarillo, acompañado de arroz y papas.',
		restaurant: 'Sabores del Perú',
		price: '39.00',
		image: 'https://picsum.photos/400/300?random=17',
		fullDescription: `# Lomo Saltado Clásico 🇵🇪
El auténtico sabor peruano que te hará sentir en casa:

* **Lomo de res** jugoso y salteado.
* Mezclado con cebolla, tomate y ají amarillo.
* Acompañado de arroz y **papas fritas**.

¡Una explosión de sabor en cada bocado!`
	},
	{
		id: 12,
		name: 'Ceviche Mixto + Chicha Morada',
		description: 'Ceviche de pescado y mariscos, con camote, choclo y su clásica chicha morada.',
		restaurant: 'La Cevichería',
		price: '42.50',
		image: 'https://picsum.photos/400/300?random=18',
		fullDescription: `# Ceviche Mixto y Chicha Morada 🍹
Una dupla refrescante e inigualable. El plato incluye:

* **Ceviche de pescado y mariscos** frescos.
* Acompañado de camote y choclo.
* Una refrescante **chicha morada**.

¡El sabor del mar en un solo combo!`
	},
	{
		id: 13,
		name: 'Ensalada Griega',
		description: 'Una opción fresca y saludable. Mezcla de lechugas, tomate, pepino, aceitunas y queso feta.',
		restaurant: 'Green & Co.',
		price: '26.00',
		image: 'https://picsum.photos/400/300?random=19',
		fullDescription: `# Ensalada Griega 🥗
La opción perfecta para un almuerzo ligero y saludable.

* **Mezcla de lechugas** frescas.
* Tomate, pepino, aceitunas.
* Queso feta cremoso.

¡Una explosión de frescura y sabor!`
	},
	{
		id: 14,
		name: 'S/. 15 de descuento',
		description: 'Aplica en tu primer pedido de más de S/60.00 a través de la app.',
		restaurant: 'Nuevos Clientes',
		price: '0.00',
		image: 'https://picsum.photos/400/300?random=20',
		fullDescription: `# S/. 15 de descuento para nuevos clientes 🎉
Disfruta de un descuento de S/. 15 en tu primer pedido.

* Válido en pedidos **superiores a S/60.00**.
* Uso único por cliente.
* El descuento se aplicará automáticamente en el checkout.`
	},
	{
		id: 15,
		name: 'Rollos de primavera 4x3',
		description: 'Pide cuatro rollos de primavera de carne o vegetales y paga solo por tres.',
		restaurant: 'El Dragón de Oro',
		price: '18.00',
		image: 'https://picsum.photos/400/300?random=21',
		fullDescription: `# Rollos de Primavera 4x3 🐉
Pide cuatro de nuestros deliciosos rollos de primavera y paga solo por tres.

* Puedes elegir entre carne, pollo o vegetales.
* ¡Ideales como entrada o para compartir!`
	}
]

export const restaurants = [
	{
		id: 1,
		name: 'Sushi Master',
		rating: '4.8',
		reviews: '200+',
		image: 'https://picsum.photos/400/200?random=5',
		logo: 'https://picsum.photos/400/200?random=6',
		tags: ['Sushi', 'Japonés', 'Fusión'],
		deliveryTime: '25 min'
	},
	{
		id: 2,
		name: 'Taquería El Buen Sabor',
		rating: '4.9',
		reviews: '300+',
		image: 'https://picsum.photos/400/200?random=7',
		logo: 'https://picsum.photos/400/200?random=8',
		tags: ['Tacos', 'Mexicano', 'Burritos'],
		deliveryTime: '30 min'
	},
	{
		id: 3,
		name: 'La Pizza Nostra',
		rating: '4.5',
		reviews: '150+',
		image: 'https://picsum.photos/400/200?random=11',
		logo: 'https://picsum.photos/400/200?random=12',
		tags: ['Pizza', 'Italiano', 'Pastas'],
		deliveryTime: '40 min'
	},
	{
		id: 4,
		name: 'Burger Joint',
		rating: '4.7',
		reviews: '500+',
		image: 'https://picsum.photos/400/200?random=13',
		logo: 'https://picsum.photos/400/200?random=14',
		tags: ['Hamburguesas', 'Americana'],
		deliveryTime: '20 min'
	},
	{
		id: 5,
		name: 'El Rincón Asiático',
		rating: '4.6',
		reviews: '120+',
		image: 'https://picsum.photos/400/200?random=26',
		logo: 'https://picsum.photos/400/200?random=27',
		tags: ['China', 'Tailandesa', 'Wok'],
		deliveryTime: '35 min'
	},
	{
		id: 6,
		name: 'Dulce Tentación',
		rating: '4.9',
		reviews: '450+',
		image: 'https://picsum.photos/400/200?random=28',
		logo: 'https://picsum.photos/400/200?random=29',
		tags: ['Postres', 'Cafetería', 'Tortas'],
		deliveryTime: '25 min'
	},
	{
		id: 7,
		name: 'Healthy Corner',
		rating: '4.4',
		reviews: '80+',
		image: 'https://picsum.photos/400/200?random=30',
		logo: 'https://picsum.photos/400/200?random=31',
		tags: ['Saludable', 'Ensaladas', 'Jugos'],
		deliveryTime: '20 min'
	},
	{
		id: 8,
		name: 'Café Aroma',
		rating: '4.8',
		reviews: '600+',
		image: 'https://picsum.photos/400/200?random=32',
		logo: 'https://picsum.photos/400/200?random=33',
		tags: ['Café', 'Pastelería', 'Desayuno'],
		deliveryTime: '15 min'
	},
	{
		id: 9,
		name: 'Pollería El Gallo de Oro',
		rating: '4.7',
		reviews: '700+',
		image: 'https://picsum.photos/400/200?random=34',
		logo: 'https://picsum.photos/400/200?random=35',
		tags: ['Pollo a la Brasa', 'Comida peruana'],
		deliveryTime: '45 min'
	},
	{
		id: 10,
		name: 'Cevichería El Tiburón',
		rating: '4.6',
		reviews: '250+',
		image: 'https://picsum.photos/400/200?random=36',
		logo: 'https://picsum.photos/400/200?random=37',
		tags: ['Ceviche', 'Mariscos', 'Comida peruana'],
		deliveryTime: '40 min'
	},
	{
		id: 11,
		name: 'Parrilla Gaucha',
		rating: '4.9',
		reviews: '400+',
		image: 'https://picsum.photos/400/200?random=38',
		logo: 'https://picsum.photos/400/200?random=39',
		tags: ['Carnes', 'Parrillada', 'Argentina'],
		deliveryTime: '50 min'
	},
	{
		id: 12,
		name: 'Wok King',
		rating: '4.5',
		reviews: '180+',
		image: 'https://picsum.photos/400/200?random=40',
		logo: 'https://picsum.photos/400/200?random=41',
		tags: ['Wok', 'Arroz', 'Salteados'],
		deliveryTime: '30 min'
	},
	{
		id: 13,
		name: 'Pancho Villa',
		rating: '4.7',
		reviews: '290+',
		image: 'https://picsum.photos/400/200?random=42',
		logo: 'https://picsum.photos/400/200?random=43',
		tags: ['Mexicano', 'Burritos', 'Quesadillas'],
		deliveryTime: '25 min'
	},
	{
		id: 14,
		name: 'Green Bowls',
		rating: '4.8',
		reviews: '110+',
		image: 'https://picsum.photos/400/200?random=44',
		logo: 'https://picsum.photos/400/200?random=45',
		tags: ['Saludable', 'Bowls', 'Vegano'],
		deliveryTime: '20 min'
	},
	{
		id: 15,
		name: 'La Postrería',
		rating: '4.9',
		reviews: '350+',
		image: 'https://picsum.photos/400/200?random=46',
		logo: 'https://picsum.photos/400/200?random=47',
		tags: ['Postres', 'Pastelería', 'Helados'],
		deliveryTime: '30 min'
	}
]
