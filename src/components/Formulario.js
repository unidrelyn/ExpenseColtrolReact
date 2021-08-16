import React, { useState } from "react";
import PropTypes from "prop-types";
import Error from "./Error";

const Formulario = ({ setGasto, setCrearGasto }) => {
	const [nombre, setNombre] = useState("");
	const [cantidad, setCantidad] = useState("");
	const [error, setError] = useState(false);

	const agregarGasto = (e) => {
		e.preventDefault();

		if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === "") {
			setError(true);
			return;
		}
		setError(false);

		const gasto = {
			nombre,
			cantidad,
			id: Date.now(),
		};

		setGasto(gasto);
		setCrearGasto(true);
		setNombre("");
		setCantidad("");
	};

	return (
		<form onSubmit={agregarGasto}>
			<h2>Agrega tus gastos</h2>
			{error ? <Error mensaje="Ambos campos son obligatorios" /> : null}
			<div className="campo">
				<label>Nombre Gasto</label>
				<input
					type="text"
					className="u-full-width"
					placeholder="Ej. Transporte"
					value={nombre}
					onChange={(e) => setNombre(e.target.value)}
				/>
			</div>
			<div className="campo">
				<label>Gasto</label>
				<input
					type="number"
					className="u-full-width"
					placeholder="Ej. 300"
					value={cantidad}
					onChange={(e) => setCantidad(parseInt(e.target.value))}
				/>
			</div>
			<input
				type="submit"
				className="button-primary u-full-width"
				value="Agregar Gastos"
			/>
		</form>
	);
};

Formulario.propTypes = {
	setGasto: PropTypes.func.isRequired,
	setCrearGasto: PropTypes.func.isRequired,
};

export default Formulario;
