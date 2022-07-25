const generatedOrder = (nombre, direccion, cart, total) => {
	return {
		buyer: {
			nombre: nombre,
			direccion: direccion
		},



		createdAt: new Date().toLocaleString()
	}
}

export default generatedOrder;