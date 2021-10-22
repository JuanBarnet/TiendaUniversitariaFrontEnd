import * as yup from "yup";

export default yup.object().shape({
  nombre: yup.string().required("El nombre es obligatorio"),
  precio: yup.string().required("El precio es obligatorio")
  .matches(/^[1234567890]+$/, "Debe ser un valor numérico"),
  stockActual: yup.string().required("EL stock actual es obligatorio")
  .matches(/^[1234567890]+$/, "Debe ser un valor numérico"),
  stockCritico: yup.string().required("EL stock crítico es obligatorio")
  .matches(/^[1234567890]+$/, "Debe ser un valor numérico"),
  categoria: yup.string().required("La categoría es obligatoria")
  .matches(/^[1234567890]+$/, "La categoría es obligatoria"),
  descripcion: yup.string().optional().max(255, "No debe superar los 255 caracteres"),
});