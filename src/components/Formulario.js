import React, { useState } from "react";
import Error from "./Error";

const Formulario = () => {
	const [nombre, setNombre] = useState("");
	const [cantidad, setCantidad] = useState(0);
	const [error, setError] = useState(false);

	const agregarGasto = (e) => {
		e.preventDefault();

		if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === "") {
			setError(true);
			return;
		}
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
				<label>setCantidad Gasto</label>
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

export default Formulario;
