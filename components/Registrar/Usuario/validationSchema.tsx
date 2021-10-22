import * as yup from "yup";

export default yup.object().shape({
  nombre: yup.string().required("El nombre es obligatorio")
  .matches(/^[A-Za-záéíóúñÁÉÍÓÚ]+$/, "Deben ser caracteres alfabéticos"),
  apellido: yup.string().required("El apellido es obligatorio")
  .matches(/^[A-Za-záéíóúñÁÉÍÓÚ]+$/, "Deben ser caracteres alfabéticos"),
  email: yup.string().required("El correo electrónico es obligatorio").email("Debe ser un correo válido"),
  contrasenia: yup.string().required("La contraseña es obligatoria").min(8, "La contraseña debe tener mínimo 8 caracteres"),
  confirmContrasenia: yup.string().required("La contraseña es obligatoria")
  .oneOf([yup.ref("contrasenia"), null], "Las contraseñas deben coincidir"),
  rol: yup.string().required("El rol es obligatorio")
  .matches(/^[vendedor|administrador]+$/, "El rol es obligatorio"),
});