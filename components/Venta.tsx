import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';

import { registrarVenta } from '../api/ventas';


export const Venta = (): JSX.Element =>{

    const Router = useRouter();

    const [productos,setProductos] = useState(new Array);

    //elemento que se elimina de la vista de la venta
    const [productoEliminado, setProductoEliminado] = useState({});
    

    //para re-renderizar los productos crear su nuevo componente que es cada fila
    //const [productoCantidad,setProductoCantidad] = useState({});

    
    function getProductosCarro(){

        const array = new Array;

        if(sessionStorage.length != 0){
            
            for(var i = 0; i<sessionStorage.length; i++){
                const clave = sessionStorage.key(i)!;
                //obtiene el Json, lo transforma y lo mete en productos
                array.push(JSON.parse(sessionStorage.getItem(clave)!)); 
            }

            setProductos(array);
            
        }
    };

    function putProductosCarro(producto: any){
        sessionStorage.setItem(`Producto ${producto.codigo_interno}`,JSON.stringify(producto));
    }

    /*
    function deleteProductoCarro(producto: any){
        sessionStorage.removeItem(`Producto ${producto.codigo_interno}`);
    }
    */

    function aumentarProducto(i:number){

        const productosAux = productos;

        if(productosAux[i].cantidad<productosAux[i].cantidad_actual){
            productosAux[i].cantidad = productosAux[i].cantidad+1;
            putProductosCarro(productosAux[i]);
            getProductosCarro();
            console.log(productos);
        }

    }

    function disminuirProducto(i:number){

        const productosAux = productos;

        if(productos[i].cantidad>1){
            productosAux[i].cantidad = productos[i].cantidad-1;
            putProductosCarro(productosAux[i]);
            getProductosCarro();
            console.log(productos);
        }

    }

    function eliminarProducto(i:number,id:number){

        Swal.fire({
            title: '¿Seguro?',
            text: `¿Esta seguro que quiere eliminar el producto ${productos[i].nombre}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '¡Si, eliminalo!',
            cancelButtonText: 'No',
          }).then((result) => {
            if (result.isConfirmed) {
                const productosSinEliminar = productos.filter(producto => producto.codigo_interno != id);
                sessionStorage.removeItem(`Producto ${id}`);
                setProductos(productosSinEliminar);
                setProductoEliminado(productos[i]);
                Swal.fire(
                    'Eliminacion exitosa',
                    'El producto ha sido eliminado de la seleccion.',
                    'success'
                )
            }
        })
        
    }

    async function realizarVenta(){

        const resp = await registrarVenta(productos);

        console.log(resp);
        sessionStorage.clear();

        Swal.fire({
            icon: 'success',
            title: 'Venta Exitosa',
            text: 'La venta se ha realizadp con exito.'
        }).then(() => {
            Router.push("/Tienda/Perfil");
        });

    }

    //si se elimina un producto se simula el efecto para re-renderizarlo
    
    useEffect(() => {
        //saltara una alerta, implementar despues
        console.log("hola");
    }, [productos]); 
    

    //si se elimina un producto se simula el efecto para re-renderizarlo
    useEffect(() => {
        //saltara una alerta, implementar despues
        console.log(productos);
    }, [productoEliminado]); 
    

    useEffect(() => {
        getProductosCarro();
    }, []);       


    return (
        <>
            <div className="container d-flex">
                <div className="container-fluid" id="contenedor_lista" style={{height:'50px', marginTop:'50px', width:'1080px'}}>
                    <div className="row" style={{width:'1080px', height:'50px', display:'flex', marginLeft:'15px', marginRight:'15px', backgroundColor:'#425563', borderTopLeftRadius:'15px', borderTopRightRadius:'15px'}}>
                        <div id="header_lista" style={{width:'180px', height:'50px'}}>
                            <h2 id="text_lista">
                                Nombre
                            </h2>
                        </div>
                        <div id="header_lista" style={{width:'180px'}}>
                            
                            <h2 id="text_lista">
                                Cantidad Producto
                            </h2>
                        </div>
                        <div id="header_lista" style={{width:'180px'}}>
                            
                            <h2 id="text_lista">
                                Stock Actual
                            </h2>

                        </div>

                        <div id="header_lista" style={{width:'180px'}}>
                            
                            <h2 id="text_lista">
                                Disminuir Cantidad
                            </h2>
                            
                        </div>

                        <div id="header_lista" style={{width:'180px'}}>
                            
                            <h2 id="text_lista">
                                Aumentar Cantidad
                            </h2>
                            
                        </div>

                        <div id="header_lista" style={{width:'180px'}}>
                            
                            <h2 id="text_lista">
                                Remover
                            </h2>
                            
                        </div>

                        {
                            productos.map((producto)=>{
                                return(
                                    <div className="row" key={producto.codigo_interno} id="fila_lista">
                                        <div style={{width:'180px'}}>
                                            <h2 id="text_lista" style={{width:'180px', height:'100px', paddingLeft:'20px', display:'flex', alignItems:'center'}}>
                                                {producto.nombre}
                                            </h2>
                                        </div>
                                        <div style={{width:'180px'}}>
                                            <h2 id="text_lista" style={{width:'180px', height:'100px', paddingLeft:'80px', display:'flex', alignItems:'center'}}>
                                                {producto.cantidad}
                                            </h2>
                                        </div>
                                        <div style={{width:'180px'}}>
                                            <h2 id="text_lista" style={{width:'180px', height:'100px', paddingLeft:'80px', display:'flex', alignItems:'center'}}>
                                                {producto.cantidad_actual}
                                            </h2>
                                        </div>
                                        <div id="elementos_lista" style={{width:'180px'}}>
                                            <button type="submit" value={productos.indexOf(producto)} onClick={(e) => {disminuirProducto(parseInt((e.target as HTMLButtonElement).value));}} className="btn btn-primary btn-block btn-lg" id="boton_lista" style={{height:'40px', width:'130px', display:'flex', alignItems:'center', justifyContent:'center'}}>                      
                                                -      
                                            </button>
                                        </div>
                                        <div id="elementos_lista" style={{width:'178px'}}>
                                            <button type="submit" value={productos.indexOf(producto)} onClick={(e) => {aumentarProducto(parseInt((e.target as HTMLButtonElement).value));}} className="btn btn-primary btn-block btn-lg" id="boton_lista" style={{height:'40px', width:'130px', display:'flex', alignItems:'center', justifyContent:'center'}}>     
                                                +
                                            </button>
                                        </div>
                                        <div id="elementos_lista" style={{width:'178px'}}>
                                            <button type="submit" value={productos.indexOf(producto)} onClick={(e) => {eliminarProducto(parseInt((e.target as HTMLButtonElement).value),producto.codigo_interno);}} className="btn btn-primary btn-block btn-lg" id="boton_lista" style={{height:'40px', width:'130px', display:'flex', alignItems:'center', justifyContent:'center'}}>     
                                                X
                                            </button>
                                        </div>
                                    </div>
                                )
                            })
                        }

                        <div className="p-5 col-8">
                            <button type="submit" onClick={() => Router.push("/Tienda/ListaProductos")} className="btn btn-primary btn-block btn-lg" id="boton_lista" style={{height:'40px', width:'260px', display:'flex', alignItems:'center', justifyContent:'center'}}>     
                                A&ntilde;adir m&aacute;s productos
                            </button>
                        </div>

                        <div className="p-5 col-4">
                            <button type="submit" onClick={() => realizarVenta()} className="btn btn-primary btn-block btn-lg" id="boton_venta" style={{height:'40px', width:'180px', display:'flex', alignItems:'center', justifyContent:'center'}}>     
                                Realizar Venta
                            </button>
                        </div>

 

                    </div>

                </div>

            </div>
        </>
    );
}
