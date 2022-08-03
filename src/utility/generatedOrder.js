

const generatedOrder = (firstName, lastName, email, phone, address, message, cart, total) => {
    return {
        buyer: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            address: address,
            message: message,
        },

        cart: cart,
        total: total,
        createdAt: new Date().toLocaleString(),

    }
}

export default generatedOrder;

