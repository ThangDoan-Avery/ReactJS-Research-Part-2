import React, { Component } from 'react'

export default class RenderWithMap extends Component {

    arrProduct = [
        { id: 1, name: 'iphone x', price: 1000, img: 'https://picsum.photos/id/1/200' },
        { id: 2, name: 'iphone xs', price: 2000, img: 'https://picsum.photos/id/2/200' },
        { id: 3, name: 'iphone xs max', price: 3000, img: 'https://picsum.photos/id/3/200' },
    ]

    renderProduct = () => {
        /*[<tr></tr>,<tr></tr>,<tr></tr>] */
        // let arrTagProduct = [];
        // for(let prod of this.arrProduct) {
        //     let obTrJSX = <tr>
        //         <td>{prod.id}</td>
        //         <td>{prod.name}</td>
        //         <td>{prod.price}</td>
        //         <td><img src={prod.img}  width={50} alt="..." /></td>
        //     </tr>;

        //     arrTagProduct.push(obTrJSX);
        // }
        // return arrTagProduct;
        let arrTagJSX = this.arrProduct.map((product, index) => {
            return <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td><img src={product.img} width={50} alt="..." /></td>
            </tr>
        });
        return arrTagJSX;
    }

    render() {
        console.log(<div>RenderWithMap</div>)
        return (
            <div className='container'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>price</th>
                            <th>img</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* [<tr></tr>] */}
                        {this.renderProduct()}
                    </tbody>
                </table>
            </div>
        )
    }
}

