import React, {useState, useEffect} from 'react';
import { Bar} from 'react-chartjs-2';
import { getProducto } from '../../api/producto';
import { getVentas } from '../../api/producto';
import { getUserId } from '../../api/user';
import {stringToDateToString} from '../../helpers/helper'

const VentaUsuario = ({width, height, scrollPosition, limite }: any) => {

    const molde = [{fecha:"", cantidad:"", producto_codigo_interno:"", valor:0, nombre:""}];
    const nombreUsuario:string[]=[];
    const [algo, setAlgo] = useState(molde);
    const [nombres,setNombres] = useState(nombreUsuario);
    const fetchProducts = async () => {
        const data = await getVentas();
        const resp: any[] = Array.of(data.json);
        //console.log(data.productos[1].fecha)
        var newProduct = [{fecha:"", cantidad:"", producto_codigo_interno:"", valor:0, nombre:""}];
        for (var i = 0; i < data.ventas.length; i++){
            const {usuario}= await getUserId(data.ventas[i].user_id);
            const {producto}= await getProducto(data.ventas[i].producto_codigo_interno);
            newProduct.push({fecha: stringToDateToString(data.ventas[i].fecha), 
                cantidad: data.ventas[i].cantidad, 
                producto_codigo_interno: data.ventas[i].producto_codigo_interno, 
                valor: producto.precio*data.ventas[i].cantidad, 
                nombre: usuario.name});
            if(!nombres.includes(usuario.name)){
                setNombres([...nombres,usuario.name]);
            };
        }

        //console.log(newProduct);
        setAlgo(newProduct);
        setMainRecipesShown(newProduct);
    }

    console.log(nombreUsuario);
    useEffect(() => {
        fetchProducts()
    }, []);

    const items = [];
    const [mainProductShown, setMainRecipesShown] = useState([{fecha:"", cantidad:"", producto_codigo_interno:"", valor:0, nombre:""}]);

    for (var i = 1; i < mainProductShown.length; i++){
        items.push(
        <div className="container-fluid" key={i} id="contenedor_lista" style={{height:'100px', width:'900px'}}>
            <div className="row" id="fila_lista" style={i === (mainProductShown.length - 1)? {borderBottomLeftRadius:'15px', borderBottomRightRadius:'15px', borderBottom:'2px solid #425563'}: {}}>
                <div style={{width:'178px'}}>
                    <h2 id="text_lista" style={{width:'180px', height:'100px', paddingLeft:'20px', display:'flex', alignItems:'center'}}>
                        {mainProductShown[i]["fecha"]}
                    </h2>
                </div>
                <div id="elementos_lista" style={{width:'180px'}}>
                    <h2 id="text_lista">
                        {mainProductShown[i]["cantidad"]}
                    </h2>
                </div>
                <div id="elementos_lista" style={{width:'180px'}}>
                    <h2 id="text_lista">
                        {mainProductShown[i]["producto_codigo_interno"]}
                    </h2>
                </div>
                <div id="elementos_lista" style={{width:'180px'}}>
                    <h2 id="text_lista">
                        {mainProductShown[i]["valor"]}
                    </h2>
                </div>
                <div id="elementos_lista" style={{width:'178px'}}>
                    <h2 id="text_lista">
                        {mainProductShown[i]["nombre"]}
                    </h2>
                </div>
            </div>
        </div>)
    }
    // console.log(items);
    //const { width, height } = useWindowDimensions()
    //const limite = 900;

    return (
        <>
            <div>
                <Bar
                    //type= "bar"
                    data={{
                        //labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                        labels: nombres,//auxLabel,
                        datasets:[
                            {
                                label: 'Cantidad de productos vendidos',
                                data: [12,19],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(255, 159, 64, 0.2)',
                                    'rgba(255, 205, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(201, 203, 207, 0.2)'
                                ],
                                borderColor: [
                                    'rgb(255, 99, 132)',
                                    'rgb(255, 159, 64)',
                                    'rgb(255, 205, 86)',
                                    'rgb(75, 192, 192)',
                                    'rgb(54, 162, 235)',
                                    'rgb(153, 102, 255)',
                                    'rgb(201, 203, 207)'
                                ],
                                borderWidth: 1,
                            },
                            // {
                            //     label: 'Quantity',
                            //     data: [47,52,67,58,9,50],
                            //     backgroundColor: 'orange',
                            //     borderColor: 'red',
                            // },
                        ],
                    }}
                    height={400}
                    width={600}
                    options={{
                        maintainAspectRatio: false,
                        // scales: {
                        //     yAxes: [
                        //         {
                        //             ticks: {
                        //                 beginAtZero: true,
                        //             },
                        //         },
                        //     ],
                        // },
                    }}
                />
            </div>
            <div className="container-fluid" id="contenedor_lista" style={{height:'50px', marginTop:'50px', width:'930px', paddingLeft:'15px'}}>
                <div className="row" style={{width:'900px', height:'50px', display:'flex', marginLeft:'0px', marginRight:'0px', backgroundColor:'#425563', borderTopLeftRadius:'15px', borderTopRightRadius:'15px'}}>
                    <div id="header_lista" style={{width:'180px', height:'50px'}}>
                        <h2 id="text_lista">
                            Fecha
                        </h2>
                    </div>
                    <div id="header_lista" style={{width:'180px'}}>
                        <h2 id="text_lista">
                            Cantidad
                        </h2>
                    </div>
                    <div id="header_lista" style={{width:'180px'}}>
                        <h2 id="text_lista">
                            Código producto
                        </h2>
                    </div>
                    <div id="header_lista" style={{width:'180px'}}>
                        <h2 id="text_lista">
                            Valor
                        </h2>
                    </div>
                    <div id="header_lista" style={{width:'180px'}}>
                        <h2 id="text_lista">
                            Usuario
                        </h2>
                    </div>
                </div>
            </div>
            <div style={{marginLeft:'15px', marginRight:'15px'}}>{items}</div>
            <div style={{height:'50px'}}></div>
        </>
    
    )
}

export default VentaUsuario