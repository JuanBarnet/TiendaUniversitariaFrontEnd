import React from 'react';

export const Notificaciones = () =>{
    return(
        <div className="container p-5">

            <div className="row justify-content-center" style={{backgroundColor: '#425563'}}>
                <h1>Notificaciones</h1>
            </div>

            <div className="row">

                <div className="col-9 p-5" style={{backgroundColor: '#e8ebee'}}>
                    <h4>Se ha detectado el stock cr&iacute;tico (stock critico) para el siguiente producto: (producto)</h4>
                </div>
                <div className="col-3 p-5" style={{backgroundColor: '#e8ebee'}}>
                    <button type="submit" className="btn btn-primary btn-block btn-lg" id="boton_lista" style={{height:'40px', width:'160px', display:'flex', alignItems:'center', justifyContent:'center'}}>     
                        Realizar Venta
                    </button>
                </div>

            </div>
            
        </div>
    );
}