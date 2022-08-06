//?Importaciones de librerías necesarias
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { AnimatePresence } from "framer-motion";
import Swal from "sweetalert2";
//?Importaciones de componentes necesarios
import generatedOrder from "../../../utility/generatedOrder";
import saveOrder from "../../../utility/saveOrder";
import { validate } from "./validation";
//?Importaciones de estilos necesarios
import "./Styles.css";
import Overlay from "../../modals/Overlay/Index";
import { CgClose } from "react-icons/cg";

const Checkout = ({ open, onClose, total, cart, RemoveAll }) => {
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

    //? envía los valores al constructor generatedOrder y activa el método onsubmit de Formik enviando la order,cart y total borra los productos del carrito y cierra el modal
    const handleSubmit = async (values) => {
        const order = generatedOrder(
            values.firstName,
            values.lastName,
            values.email,
            values.phone,
            values.address,
            values.message,
            cart,
            total
        );
        Swal.fire({
            title: "¿Are you sure to proceed with the purchase?",
            text: "¡are you sure!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, proceed with the purchase!",
            cancelButtonText: "No, cancel it!",
        }).then((result) => {
            if (result.value) {
                //? si el usuario acepta se guarda el pedido en la base de datos
                saveOrder(cart, order);
                RemoveAll();
                cambiarFormularioEnviado(true);
            } else {
                Swal.fire("Cancelled", "Your order has not been sent", "error");
            }
        });
    };

    if (!open) return null;

    return (
        <>
            <AnimatePresence>
                {open && (
                    <Overlay close={onClose}>
                        <div
                            className="contenedor_modal"
                            onClick={(e) => {
                                e.stopPropagation();
                            }}
                        >
                            <Formik
                                initialValues={{
                                    firstName: "",
                                    lastName: "",
                                    email: "",
                                    phone: "",
                                    address: "",
                                    message: "",
                                }}
                                //? validaciones del formulario usando validate.jsx para reducir el código en este componente
                                validate={validate}
                                //? onSubmit es el callback que se ejecuta cuando el formulario es enviado y se valida correctamente
                                onSubmit={(values, { resetForm }) => {
                                    handleSubmit(values);
                                    resetForm();
                                    cambiarFormularioEnviado(true);
                                    setTimeout(
                                        () => cambiarFormularioEnviado(false),
                                        5000
                                    );
                                    onClose();
                                }}
                            >
                                {({ errors }) => (
                                    <Form className="formulario">
                                        <button
                                            className="btn-cerrar"
                                            type="button"
                                            onClick={onClose}
                                        >
                                            <CgClose />
                                        </button>
                                        <h1 className="titleForm">Checkout</h1>
                                        <div>
                                            <label htmlFor="firstName">
                                                first name
                                            </label>
                                            <Field
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                placeholder="John"
                                            />
                                            <ErrorMessage
                                                name="firstName"
                                                component={() => (
                                                    <div className="error">
                                                        {errors.firstName}
                                                    </div>
                                                )}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName">
                                                Last name
                                            </label>
                                            <Field
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                placeholder="Doe"
                                            />
                                            <ErrorMessage
                                                name="lastName"
                                                component={() => (
                                                    <div className="error">
                                                        {errors.lastName}
                                                    </div>
                                                )}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email">Email</label>
                                            <Field
                                                type="text"
                                                id="email"
                                                name="email"
                                                placeholder="example@example.com"
                                            />
                                            <ErrorMessage
                                                name="email"
                                                component={() => (
                                                    <div className="error">
                                                        {errors.email}
                                                    </div>
                                                )}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="phone">Pone</label>
                                            <Field
                                                type="text"
                                                id="phone"
                                                name="phone"
                                                placeholder="2231234567"
                                            />
                                            <ErrorMessage
                                                name="phone"
                                                component={() => (
                                                    <div className="error">
                                                        {errors.phone}
                                                    </div>
                                                )}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="address">
                                                Address
                                            </label>
                                            <Field
                                                type="text"
                                                id="address"
                                                name="address"
                                                placeholder=" street, number, city, country"
                                            />
                                            <ErrorMessage
                                                name="address"
                                                component={() => (
                                                    <div className="error">
                                                        {errors.address}
                                                    </div>
                                                )}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="message">
                                                <Field
                                                    component="textarea"
                                                    as="textarea"
                                                    id="message"
                                                    name="message"
                                                    placeholder="message"
                                                    style={{ resize: "none" }}
                                                />
                                            </label>
                                            <button type="submit">
                                                Enviar
                                            </button>
                                            {formularioEnviado && (
                                                <p className="exito">
                                                    Your order has been sent
                                                    successfully.
                                                </p>
                                            )}
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </Overlay>
                )}
            </AnimatePresence>
        </>
    );
};
export default Checkout;
