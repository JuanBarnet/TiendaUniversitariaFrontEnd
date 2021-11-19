export function stringToDateToString(fechaString:string) {
    const mesesNombre= ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    const fechaDate = new Date(fechaString);   
    const stringFecha = `${fechaDate.getDate()} de ${mesesNombre[fechaDate.getMonth()]} del ${fechaDate.getFullYear()}`;
    return stringFecha;
}