import React,{useEffect,useState}from 'react';
import { Redirect } from 'react-router-dom';
import {getProducts} from '../Services/Login-services';

export default function Details(props){

   const [products,setProducts] = useState([]);
    
    useEffect(()=>{
        // const header = getToken();
        // console.log(header);
        // getProducts(header)
        document.getElementById("bckgrnd").style.backgroundColor="white";
        getProducts()
        .then(res => res.json())
        .then(data =>{
            setProducts(data.data.products);
        })
        .catch(e=>{
          console.error(e)
        })
    },[])

    // function getToken(){
    //     const token = localStorage.getItem('token');
    //     console.log(token);
    //     return "Bearer "+token;
    // }

    return(
        <article>
            <h2 style={{color:"black"}}>Clients Products List</h2>
             <table className="client">
                <thead>
                    <tr>
                        <th rowSpan="2">Name</th>
                        <th rowSpan="2">Description</th>
                        <th colSpan="3">Services</th>
                    </tr>
                    <tr>
                        
                        <th>Name</th>
                        <th>Price</th> 
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                {
                products && products.map((item,index )=>{
                    console.log(item)
                    console.log(index)
                    let ser=[];
                    // item.services.map(e =>{
                        return(
                            <React.Fragment>
                            <tr>
                                <td rowSpan={item.services.length}>{item.name ? item.name : "--"}</td>
                                <td rowSpan={item.services.length}>{item.desc ? item.desc : "--"}</td>
                                <td>{item.services[0].name ? item.services[0].name : "--"}</td>
                                                        <td>&#8377;{item.services[0].price ? item.services[0].price : "--"}</td>
                                                        <td>{item.services[0].quantity ? item.services[0].quantity : "--"}</td>
                                </tr>
                                {
                                        (function (){
                                            if(item.services.length>1){
                                            for( let i=1; i<item.services.length; i++){
                                               let row=(
                                                    <tr>
                                                        <td>{item.services[i].name ? item.services[i].name : "--"}</td>
                                                        <td>&#8377;{item.services[i].price ? item.services[i].price : "--"}</td>
                                                        <td>{item.services[i].quantity ? item.services[i].quantity : "--"}</td>
                                                    </tr>
                                                )
                                                ser.push(row)
                                            }       
                                        }})()
                                    } 
                                    { item.services && item.services.length && item.services.length>1 &&
                                       <React.Fragment>{ser}</React.Fragment>
                                    }  
                                {/* <td>{e.name}</td>
                                <td>{e.price}</td>
                                <td>{e.quantity}</td> */}
                           
                            </React.Fragment>
                        )
                    // })
                   
                })
            }
                </tbody>
           </table>
        </article>
    )
}